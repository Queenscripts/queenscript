//function for header blog post page 
//function for mobile togile hamburger menu
function myFunction(x) {
  x.classList.toggle("change");
}
	
	function toggleMenu(){
			var links = document.getElementsByClassName("links");
		 if (links.style.display === "block"){
			 links.className = 'mobileMenu';
		 } else{
			 links.className = 'hiddenMobile'
		 }
		;
	}


async function gitUser(){
		let urls =[`https://api.github.com/users/queenshabazz/repos`, `https://api.github.com/users/queenshabazz`] 
		async function getAllUrls(urls){
						try {
							let data = await Promise.all(
								urls.map(
									url =>
										fetch(url)
										.then(
											(response) => response.json()
										)
								)
							);
							return (data)
							} catch (error) {
								console.log(error)
								throw (error)
							}
					 }
					var responses = await getAllUrls (urls);
					//console.log(Object.keys(responses));
					//displayResults(responses);
			
					$('#results-list').html(`
							<li class = "git"> Out of ${responses[0].length} repos: </li>
							<li class = "git"><a href=${responses[1].html_url}><img id="prof-pic" src="${responses[1].avatar_url}"/></a></li>
					`)
					let repos = responses[0]
					let length = responses[0].length
					for (let i = 0; i < length; i++){
						$('#results-list').append(`<li class = "git"><a href="${repos[i].git_url}">${repos[i].name}</a><ul class="git"><li class = "git-descript">${repos[i].description}</li></ul></li>`)
					};
				}
				$(function(){
					gitUser();
				})