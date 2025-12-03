import { SvgSearch } from "../../../../../../../assets/icon/SvgSearch";

export const SearchInput = ({
  query,
  setQuery,
  setIsResultOpen,
  setIsLoading,
  debouncedSearch,
}) => {
  return (
    <form className="search-form">
      <label className="search-input-wrapper">
        <input
          type="text"
          value={query}
          placeholder="Search products..."
          onChange={(e) => {
            setQuery(e.target.value);
            setIsResultOpen(true);
            setIsLoading(true);
            debouncedSearch(e.target.value);
          }}
        />
        <button type="submit">
          <SvgSearch />
        </button>
      </label>
    </form>
  );
};
