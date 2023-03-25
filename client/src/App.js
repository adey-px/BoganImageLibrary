import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [newInput, setNewInput] = useState('');
	const title = 'Image Galleria';

	/* unsplash api key from environment */
	// console.log(process.env);
	const KEY = process.env.REACT_APP_UNSPLASH_KEY;

	/* --search handler-- */
	const searchHandler = (e) => {
		e.preventDefault();

		/* user input with state, api & promise */
		console.log(newInput);
		fetch(
			`https://api.unsplash.com/photos/random/?query=${newInput}&client_id=${KEY}`
		)
			.then((result) => result.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});

		/* empty search bar */
		setNewInput('');

		/* user input with state, no api */
		// console.log(newInput);

		/* user input without state */
		// console.log(e.target[0].value);
	};

	return (
		<div>
			<Header title={title} />

			<Search
				newInput={newInput}
				setNewInput={setNewInput}
				formSubmit={searchHandler}
			/>
		</div>
	);
}

export default App;
