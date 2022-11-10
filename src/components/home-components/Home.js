import Feed from './feed components/Feed';
import SearchApps from './SearchApps';

function Home({loggedIn}) {
  return (
    <div>
      <SearchApps />
      <hr></hr>

      <h3>Currently Viewing Your Home</h3>

      <Feed />
    </div>
  );
}

export default Home;
