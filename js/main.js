let apiCollection = [
	["https://random.dog/woof.json", "url"],
	["https://randomfox.ca/floof/", "image"]/*,
	["https://axoltlapi.herokuapp.com/", "url"],
	["https://random-d.uk/api/v2/random", "url"]*/
	//I dunno how to make CORS work. The documentation assumes prior knowledge I lack.
	//And if IndifferentGhost's comments are anything to go by...
	//This is not a problem I'll be able to solve any time soon.
];

document.querySelector("button").addEventListener('click', fetchRandomCritter);

function fetchRandomCritter(){
	let randomChoice = Math.floor(Math.random()*apiCollection.length);

	fetch(apiCollection[randomChoice][0], {method: 'GET'})//I think this is default, but may fix my CORS errors?
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if(apiCollection[randomChoice][1] == "image"){
				document.querySelector("img").src = data.image;
				document.querySelector("img").style.display = "block";
				document.querySelector("video").style.display = "none";

			}
			else if(apiCollection[randomChoice][1] == "url"){
				if(data.url.substring(data.url.length - 4) == ".mp4"){
					document.querySelector("video").src = data.url;
					document.querySelector("img").style.display = "none";
					document.querySelector("video").style.display = "block";
				}
				else{
					document.querySelector("img").src = data.url;
					document.querySelector("img").style.display = "block";
					document.querySelector("video").style.display = "none";
				}
			}
			
		})
		.catch(err => {
			console.error(`error ${err}`)
		});
}