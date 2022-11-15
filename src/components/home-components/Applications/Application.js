import React from 'react';

function Application(props) {
  return (
		<div>
			<div className='card' key={application.id}>
				<Link to={`/applications/${application.id}`}>
					<div>
						{application.job_title} @ {application.company_name}
					</div>
					<div>Current status: {application.status}</div>
					<div>Applied on: {application.date_applied}</div>

					<br />
				</Link>
			</div>
		</div>
	);
}

export default Application;
