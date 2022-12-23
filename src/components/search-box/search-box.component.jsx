import './search-box-style.css';
const SearchBox = ({ className, placeholder, onChangeHandler }) => {

    return (
        <input
            className={`search- ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler} />

    )


}

export default SearchBox;