import React from 'react';
import Modal from '../ui/Modal';
import AnyNotes from './AnyNotes';
import Wrapper from '../layout/Wrapper';
import Grid from '../layout/Grid';
import Col from '../layout/Col';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Select from '../ui/Select';
import TextArea from '../ui/TextArea';
import NotesGrid from './NotesGrid';
import ProgressBar from '../ui/ProgressBar';

function Notes() {
	const handleConfirm = () => {
		handleSubmit();
	};

	const handleSubmit = () => {
		console.log('enviando');
	};

	return (
		<main className="notes">
			<Wrapper>
				{/* <AnyNotes /> */}
				<h1 className="heading-1 heading-1--notes">
					You have 0/1 notes completed
				</h1>
				<ProgressBar progress={40} />
				<NotesGrid />
				<Modal
					open={false}
					confirmBtn={true}
					cancelBtn={true}
					confirmBtnText="Add"
					onConfirm={handleConfirm}
				>
					<h2 className="heading-2 mt-0">Add Note</h2>
					<Form onSubmit={handleSubmit}>
						<Grid>
							<Col xs={12} sm={6} lg={8}>
								<Form.Item
									name="title"
									type="text"
									placeholder="Add title..."
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={12} sm={6} lg={4}>
								<Form.Item>
									<Select
										selectHeader="Select Category"
										options={[
											{ text: 'Home', value: 'home' },
											{ text: 'Work', value: 'work' },
											{
												text: 'Personal',
												value: 'personal',
											},
										]}
									/>
								</Form.Item>
							</Col>
							<Col xs={12} lg={8}>
								<Form.Item
									placeholder="Add description..."
									name="description"
								>
									<TextArea />
								</Form.Item>
							</Col>
						</Grid>
					</Form>
				</Modal>
			</Wrapper>
		</main>
	);
}

export default Notes;
