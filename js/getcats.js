document.querySelector("button").addEventListener('click', fetchCats);

function fetchCats(){
	/*fetch('https://cataas.com/cat')//I think this is default, but may fix my CORS errors?
		//.then(res => res.json())
		.then(data => {
			console.log(`Cat picture: ${data}`);//I think this doesn't send Json, but rather, a whole dang photo?!
			//How do I work with that?			
		})
		.catch(err => {
			console.error(`error ${err}`);
		});*/
	fetch('https://meowfacts.herokuapp.com/')
		.then(res => res.json())
		.then(data => {
			console.log(data.data[0]);
			document.querySelector('h3').textContent = data.data[0];
			document.querySelector('button').textContent = 'Click this button to get another cat fact with which to harass Jared even more.';
		})
		.catch(err => {
			console.error(`error: ${err}`);
		})
}