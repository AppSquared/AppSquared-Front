import React, { useEffect } from 'react';
import Feed from './feed components/Feed';
import SearchApps from './SearchApps';

function Home({loggedIn}) {
  return (
    <div>
      <h1>Home</h1>
      <SearchApps />
      <hr></hr>

      <Feed />
    </div>
  );
}

export default Home;
