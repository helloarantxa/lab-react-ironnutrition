
import { Divider, Input } from 'antd';

// Iteration 5
function Search({ handleSearch }) {
    return (
      <>
        <Divider>Search</Divider>
  
        <label>Search</label>
        <Input value={undefined} type="text" onChange={handleSearch} />
      </>
    );
  }
  
  export default Search;