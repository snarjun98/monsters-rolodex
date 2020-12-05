import './search-box.stylee.css';

export const Searchbox = ({placeholder,handleChange})=>(
<div>
<input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
</div>
);