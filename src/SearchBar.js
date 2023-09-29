function SearchBar() {
    return (
        <div className="level-item">
            <div className="field has-addons">
                <p className="control">
                    <input class="input" type="text" placeholder="Type three ingredients" />
                </p>
                <p className="control">
                    <button className="button">
                        Find recipes
                    </button>
                </p>
            </div>
        </div>
    );
}

export default SearchBar;