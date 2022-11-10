import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';


/* NEED TO
-ADD ALL APPLICATION FIELDS
-MAKE MODAL IMPORT INFORMATION FROM THE APP
-SAVE FUNCTIONALITY
*/

function FeedItem({title, subject}) {
	  const [isOpen, setIsOpen] = React.useState(false);

		const showModal = () => {
			setIsOpen(true);
		};

		const hideModal = () => {
			setIsOpen(false);
		};

  return (
		<div id='feed-item-div'>
				<button onClick={showModal}># of days since applied here | Title: {title} | Subject: {subject}
				</button>

				<Modal show={isOpen} onHide={hideModal}>
					<Modal.Header>
						<Modal.Title>Edit Application</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<input value={title}></input>
						<input value={subject}></input>
						</Modal.Body>
					<Modal.Footer>
						<button onClick={hideModal}>Cancel</button>
						<button>Save</button>
					</Modal.Footer>
				</Modal>

		</div>
	);
}

export default FeedItem;
