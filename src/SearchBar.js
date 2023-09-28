function SearchBar() {
    return (
        <div class="level-item">
            <div class="field has-addons">
                <p class="control">
                    <input class="input" type="text" placeholder="Type an ingredient here" />
                </p>
                <p class="control">
                    <button class="button">
                        Find recipes
                    </button>
                </p>
            </div>
        </div>
    );
}

export default SearchBar;