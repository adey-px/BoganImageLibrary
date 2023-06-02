import React, { useState } from 'react';
import Header from './components/features/Header';
import Search from './components/features/SearchBar';
import ImageCard from './components/elements/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './assets/css/image.module.css';

// Unsplash api key from env vars
/* console.log(process.env); */
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

// Search image logic
/* https://unsplash.com/documentation */
function App() {
	const [newInput, setNewInput] = useState('');
	const [images, setImages] = useState([]);

	/* handle search bar */
	const searchHandler = (e) => {
		e.preventDefault();
		console.log(newInput);
		fetch(
			`https://api.unsplash.com/photos/random/?query=${newInput}&client_id=${UNSPLASH_KEY}`
		)
			.then((response) => response.json())
			.then((data) => {
				setImages([{ ...data, title: newInput }, ...images]);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});

		/* clear search bar */
		setNewInput('');

		/* user input with state, no api */
		// console.log(newInput);

		/* user input without state */
		// console.log(e.target[0].value);
	};

	/* remove-image handler */
	const removeHandler = (id) => {
		setImages(images.filter((image) => image.id !== id));
	};

	return (
		<div>
			<Header />

			<Search
				newInput={newInput}
				setNewInput={setNewInput}
				formSubmit={searchHandler}
			/>

			{/* to avoid show 0 for no images, !! converts to bool */}
			{/* {!!images.length && <ImageCard image={images[0]} />} */}

			<Container className='mt-4'>
				{images.length === 0 ? (
					<>
						<h5 className='text-center mt-5'>
							No images found, search again!
						</h5>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Search_icon.svg/1024px-Search_icon.svg.png'
							width={200}
							height={200}
							alt='search'
							className={style.center}
						/>
					</>
				) : (
					<Row
						xs={1}
						md={2}
						lg={3}
					>
						{images.map((image, i) => (
							<Col
								key={i}
								className='pb-3'
							>
								<ImageCard
									image={image}
									del={removeHandler}
								/>
							</Col>
						))}
					</Row>
				)}
			</Container>
		</div>
	);
}

export default App;
