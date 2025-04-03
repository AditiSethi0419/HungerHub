import React , {useState} from 'react';

//import styles from "./style.module.css";

const Search = () => {
  const [searchText , setSearchText] = useState("");
  return (
    <div className='searchRes'>
        <input type='text' className='searchBox'  value={searchText} onChange={(event)=>{
        setSearchText(event.target.value);
        }
        }/>
        <button onClick={()=>{

        }}>Search</button>
    </div>
  )
}

// This filters the restaurant card and updates the UI.
//search text

export default Search