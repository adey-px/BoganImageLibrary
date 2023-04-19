import React, { useState } from 'react';
import Header from './components/features/Header';
import Search from './components/features/SearchBar';
import ImageCard from './components/images/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './assets/css/image.module.css'

/* unsplash api key from environment */
// console.log(process.env);
const KEY = process.env.REACT_APP_UNSPLASH_KEY;

//
function App() {
	const [newInput, setNewInput] = useState('');
	const [images, setImages] = useState([]);
	const logo = 'Gallery';

	/* handle search bar */
	const handleSearch = (e) => {
		e.preventDefault();
		console.log(newInput);
		fetch(
			`https://api.unsplash.com/photos/random/?query=${newInput}&client_id=${KEY}`
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

	const handleDelete = (id) => {
		setImages(images.filter((image) => image.id !== id));
	};

	return (
		<div>
			<Header logo={logo} />

			<Search
				newInput={newInput}
				setNewInput={setNewInput}
				formSubmit={handleSearch}
			/>

			{/* avoid show 0 for no images, !! converts to bool */}
			{/* {!!images.length && <ImageCard image={images[0]} />} */}

			<Container className='mt-4'>
				{images.length === 0 ? (
					<>
						<h4 className='text-center mt-5'>
							Sorry, no images found. <br />
							Try refine your search.
						</h4>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Search_icon.svg/1024px-Search_icon.svg.png'
							width={100}
							height={100}
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
									del={handleDelete}
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
