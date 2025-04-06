const Search = ({ onSearch, searchText, onInputChange }) => {
  return (
    <div className='searchRes'>
      <input
        type='text'
        className='searchBox'
        value={searchText}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default Search;
