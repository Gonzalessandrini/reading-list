import SearchIcon from "../Icons/SearchIcon";
import "./SearchBar.css";

export function SearchBar({ onSubmit, onChange, placeholder }) {
 console.log(onChange)
 
  return (
    <form onSubmit={onSubmit} className="search-form">
      <label className="search-label">Buscar</label>
      <div className="search-input">
        <div className="search-icon">
          <SearchIcon/>
        </div>
        <input
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          className="search-field"
          required
        />
      </div>
    </form>
  );
}

