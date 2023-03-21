import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

//
function App() {
	const [newInput, setNewInput] = useState('')

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(newInput);
		// console.log(e.target[0].value);
	}

	return (
		<div>
      <Header title='Image Galleria' />
			<Search  
				newInput={newInput} 
				setNewInput={setNewInput} 
				formSubmit={submitHandler} 
			/>
		</div>
	);
}

export default App;
