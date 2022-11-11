import React from 'react';
import ModalComp from './ModalComp';

/* NEED TO
-ADD ALL APPLICATION FIELDS
-MAKE MODAL IMPORT INFORMATION FROM THE APP
-SAVE FUNCTIONALITY
*/

function ApplicationDetails({
	position,
	company,
	link,
	additionalInfo,
	pocName,
	pocNumber,
	pocEmail,
}) {
	return (
		<div id='feed-item-div'>
			<ModalComp
				position={position}
				company={company}
				link={link}
				additionalInfo={additionalInfo}
				pocName={pocName}
				pocNumber={pocNumber}
				pocEmail={pocEmail}
			/>
		</div>
	);
}

export default ApplicationDetails;
