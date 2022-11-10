import React from 'react';
import {useState} from 'react';
import apps from '../seed'

function SearchApps() {
  // const [apps, updateApps] = useState([]);

  return (
    <div id='search-main-div'>
      <form>
        <label>Search By:</label>
        <select>
          <option>Placeholder</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <input id="search-by-select" type='text' placeholder='Leave Blank if you wish to search your specified field for ALL options'/>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default SearchApps;
