import React from 'react';
import FeedItem from './FeedItem';

// STATE FOR APPS
// 'GET ALL' FETCH REQUEST
   // SET STATE
// STATE.MAP -> WILL REPLACE FAKE DATA 'APPS'


function Feed() {

  // FAKE DATE
  const apps = [
		{
			position: 'test position 1',
			company: 'test company 1',
			link: 'test link 1',
			additionalInfo: 'test additional info 1',
			pocName: 'test poc name',
			pocNumber: 'test poc number',
			pocEmail: 'test poc email',
		},
		{
			position: 'test position 2',
			company: 'test company 2',
			link: 'test link 2',
			additionalInfo: 'test additional info 2',
			pocName: 'test poc name 2',
			pocNumber: 'test poc number 2',
			pocEmail: 'test poc email 2',
		},
		{
			position: 'test position 3',
			company: 'test company 3',
			link: 'test link 3',
			additionalInfo: 'test additional info 3',
			pocName: 'test poc name 3',
			pocNumber: 'test poc number 3',
			pocEmail: 'test poc email 3',
		},
	];
  return (
    <div id='feed-main-div'>
      <h3>Feed</h3>
        <hr/>
    {apps.map((app)=>{
      return (
				<FeedItem
					key={app.position}
					position={app.position}
					company={app.company}
					link={app.link}
					additionalInfo={app.additionalInfo}
					pocName={app.pocName}
					pocNumber={app.pocNumber}
					pocEmail={app.pocEmail}
				/>
			);
    })}
    </div>
  );
}

export default Feed;
