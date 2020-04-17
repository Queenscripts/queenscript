import algoliasearch from 'algoliasearch'
import React, { createRef, useMemo, useState, useEffect, useRef  } from 'react'
import { connectStateResults, Index, InstantSearch } from 'react-instantsearch-dom'
import Hits from './Hits'
import Input from './Input'
import { HitsWrapper, PoweredBy, Root } from './styles'



export function useEventListener(eventNames, handler, element ) {
    // Create a ref that stores the handler.
    const savedHandler = useRef()
    if (!Array.isArray(eventNames)) eventNames = [eventNames]
  
    // Save handler to ref.current on initial call to useEventListener
    // and then update ref.current whenever the handler changes.
    // This allows the second useEffect below to always get the latest
    // handler without needing to have it in than hooks deps array which
    // could cause the effect to re-run every render.
    useEffect(() => (savedHandler.current = handler), [handler])
  
    useEffect(() => {
      if (!element) return // Element doesn't support a listener, abort.
  
      // Create event listener that calls handler function stored in ref
      const listener = event => savedHandler.current(event)
      for (const e of eventNames) element.addEventListener(e, listener)
      return () => {
        for (const e of eventNames) element.removeEventListener(e, listener)
      }
    }, [element, eventNames])
  }

function useOnClickOutside(ref, handler, events) {
    if (!events) events = [`mousedown`, `touchstart`]
    const detectClickOutside = event =>
      ref.current && event && !ref.current.contains(event.target) && handler(event)
    useEventListener(events, detectClickOutside)
  }

const Results = connectStateResults(
  ({ searching, searchState, searchResults: res }) =>
    (searching && <div>Searching...</div>) ||
    (res?.nbHits === 0 && <div>No results for &apos;{searchState.query}&apos;</div>)
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res?.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)



export default function Search({ indices, collapse = true, hitsAsGrid }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const appId = process.env.GATSBY_ALGOLIA_APP_ID
  const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY
  // useMemo prevents the searchClient from being recreated on every render.
  // Avoids unnecessary XHR requests (see https://tinyurl.com/yyj93r2s).
  const searchClient = useMemo(() => algoliasearch(appId, searchKey), [
    appId,
    searchKey,
  ])
  useOnClickOutside(ref, () => setFocus(false))
  return (
    <Root ref={ref}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
        <HitsWrapper show={query.length > 0 && focus} asGrid={hitsAsGrid}>
          {indices.map(({ name, title, type }) => (
            <Index key={name} indexName={name}>
              <>
                <h3>{title}</h3>
                <Stats />
              </>
              <Results />
              <Hits type={type} onClick={() => setFocus(false)} />
            </Index>
          ))}
          <PoweredBy />
        </HitsWrapper>
      </InstantSearch>
    </Root>
  )
 }