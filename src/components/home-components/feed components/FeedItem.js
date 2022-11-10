import React from 'react';
import { Link } from 'react-router-dom';
// THIS WILL REPRESENT EACH 'APP CARD'

function FeedItem({title, subject}) {
  return (
		<div id='feed-item-div'>
			<Link to='application/:id'>
				<h4>
					# of days since applied here | Title: {title} | Subject: {subject}
				</h4>
			</Link>
		</div>
	);
}

export default FeedItem;
