import React from 'react';
import Modal from '../ui/Modal';
import AnyNotes from './AnyNotes';
import Grid from '../layout/Grid';
import Col from '../layout/Col';
import Input from '../ui/Input';
import Select from '../ui/Select';
import TextArea from '../ui/TextArea';

function Notes() {
	return (
		<main className="notes">
			<AnyNotes />
			<Modal confirmBtn={true} cancelBtn={true} confirmBtnText="Add">
				<h2 className="heading-2 mt-0">Add Note</h2>
				<Grid>
					<Col span={8}>
						<Input
							placeholder="Add title..."
							type="text"
							name="title"
						/>
					</Col>
					<Col span={4}>
						<Select
							selectHeader="Select Category"
							options={[
								{ text: 'Home', value: 'home' },
								{ text: 'Work', value: 'work' },
								{ text: 'Personal', value: 'personal' },
							]}
						/>
					</Col>
					<Col span={8}>
						<TextArea
							placeholder="Add description..."
							name="description"
						/>
					</Col>
				</Grid>
			</Modal>
		</main>
	);
}

export default Notes;
