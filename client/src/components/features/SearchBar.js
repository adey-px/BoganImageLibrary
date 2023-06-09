import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

//
const SearchBar = ({ newInput, setNewInput, formSubmit }) => {
	return (
		<Container className='mt-4'>
			<Row className='justify-content-center'>
				<Col
					xs={12}
					md={8}
				>
					<Form onSubmit={formSubmit}>
						<Form.Row>
							<Col xs={9}>
								<Form.Control
									type='text'
									value={newInput}
									placeholder='Type here to search'
									onChange={(e) => setNewInput(e.target.value)}
								/>
							</Col>
							<Col xs={3}>
								<Button
									type='submit'
									variant='secondary'
								>
									Search
								</Button>
							</Col>
						</Form.Row>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default SearchBar;
