/*Well, this doesn't work.
This is listed as not requiring CORS but my browser says otherwise.
I do have a question though:
Why are my functions running when defined? I thought they wouldn't run until called...
But they run at the spot in the script where they get defined.

So, this is all broken. But it's all I've got and I'm out of time so it's what gets turned in.
*/

let currentComic = 0;
let latestComic = 0;

fetch('https://xkcd.com/info.0.json')
		.then(res => res.json())
		.then(data => {
			console.log(data.num);
			latestComic = data.num; //This isn't a race condition because at this point no movement functions have been defined.
			currentComic = latestComic;
		})
		.catch(err => {
			console.error(`error: ${err}`);
		});

let loadXKCD = function(comicNumber = latestComic){
	fetch(`https://xkcd.com/${comicNumber}/info.0.json`)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			document.querySelector('img').src = data.img;
		})
		.catch(err => {
			console.error(`error: ${err}`);
		})
}

loadXKCD();

let goBack = function(){
	if(currentComic > 1){
		currentComic--;
		loadXKCD(currentComic);
	}
}
let goForward= function(){
	if(currentComic < latestComic){
		currentComic++;
		loadXKCD(currentComic);
	}
}
let goRandom=()=>{
	currentComic = Math.ceil(Math.random()*latestComic);
	loadXKCD(currentComic);
}
let goSpecific=function(){
	let userChoice = document.querySelector('input').value;
	if(userChoice > 0 && userChoice <= latestComic){
		currentComic = Math.floor(userChoice);
		loadXKCD(currentComic);
	}
	else{
		alert(`Invalid number, please choose a number between 1 and ${latestComic}`);
	}
}

document.querySelector("button").addEventListener('click', goBack());
document.querySelector("button").addEventListener('click', goForward());
document.querySelector("button").addEventListener('click', goRandom());
document.querySelector("button").addEventListener('click', goSpecific());