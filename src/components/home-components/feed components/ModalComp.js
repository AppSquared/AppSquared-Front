import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

function ModalComp({
	position,
	company,
	link,
	additionalInfo,
	pocName,
	pocNumber,
	pocEmail,
}) {

	//-- MODAL FUNCTIONS --
	const [isOpen, setIsOpen] = React.useState(false);

	// Modal Open
	const showModal = () => {
		setIsOpen(true);
	};
	// Modal Close
	const hideModal = () => {
		setIsOpen(false);
	};

	// FORM FUNCTIONS
	function handleChange(event) {
		setContent({ ...content, [event.target.name]: event.target.value });
	}
	function handleSubmit(event) {
		event.preventDefault();
		// postContent(); <- function that does put request
		setContent({
			position: '',
			company: '',
			link: '',
			additionalInf: '',
			pocName: '',
			pocNumber: '',
			pocEmail: '',
		});
	}

	const [content, setContent] = useState({
		position: '',
		company: '',
		link: '',
		additionalInfo: '',
		pocName: '',
		pocNumber: '',
		pocEmail: '',
	});

	return (
		<div>
			<button onClick={showModal}>
				# of days since applied here | Position: {position} | Company: {company} |
			</button>

			<Modal show={isOpen} onHide={hideModal}>
				<Modal.Header>
					<Modal.Title>Edit Application</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="application-form" onSubmit={handleSubmit}>
						<label>Position</label>
						<input
							placeholder='Position'
							className='form-title'
							type='text'
							name='position'
							value={content.position}
							onChange={handleChange}
						/>

						<label>Company</label>
						<input
							placeholder='Company'
							className='form-company'
							type='text'
							name='company'
							value={content.company}
							onChange={handleChange}
						/>

						<label>Link</label>
						<input
							placeholder='Application Link'
							className='form-link'
							type='text'
							name='link'
							value={content.link}
							onChange={handleChange}
						/>

						<label>Additional Info</label>
						<input
							placeholder='Additional Info'
							className='form-additionalInfo'
							type='text'
							name='additionalInfo'
							value={content.additionalInfo}
							onChange={handleChange}
						/>
						<br />

						<label>Point Of Contact:</label>
						<br />

						<label>Name</label>
						<input
							placeholder='Name'
							className='form-poc-nam'
							type='text'
							name='pocname'
							value={content.pocname}
							onChange={handleChange}
						/>

						<label>Number</label>
						<input
							placeholder='Number'
							className='form-poc-number'
							type='text'
							name='pocnumber'
							value={content.pocnumber}
							onChange={handleChange}
						/>

						<label>Email</label>
						<input
							placeholder='Email'
							className='form-poc-email'
							type='text'
							name='pocemail'
							value={content.pocemail}
							onChange={handleChange}
						/>
					</form>
				</Modal.Body>

				<Modal.Footer>
					<button onClick={hideModal}>Cancel</button>
					<button onClick={hideModal}>Save</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default ModalComp;
