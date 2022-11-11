import Feed from './feed components/Feed';
import SearchApps from './SearchApps';

function Home({loggedIn}) {

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
    <div>
      <SearchApps apps={apps}/>
      <hr></hr>

      <h3>Currently Viewing Your Home</h3>
      
      <Feed />
    </div>
  );
}

export default Home;
