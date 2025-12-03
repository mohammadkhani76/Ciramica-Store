import { useMemo, useState } from "react";
import { SvgClose } from "../../../../../../assets/icon/SvgClose";
import "./SearchModal.css";
import { useShops } from "../../../../../../customHook/useShops";
import { useDebounce } from "../../../../../../customHook/useDebounce";
import { SearchInput } from "./_component/SearchInput";
import { SearchResults } from "./_component/SearchResults";
//
export const SearchModal = ({ showSearchModal, setShowSearchModal }) => {
  const [result, setResult] = useState([]);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { shops } = useShops();

  const handleSearch = (query) => {
    if (!query.trim()) {
      setResult([]);
      setIsLoading(false);
      return;
    }

    let allResults = [];
    shops.forEach((shop) => {
      // console.log(shop.menu);
      shop.menu.forEach((menu) => {
        const filtered = menu.list.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        // console.log("filtered", filtered);
        if (filtered.length > 0) allResults.push(...filtered);
      });
    });

    setResult(allResults);
    setIsLoading(false);
  };

  const debouncedSearch = useDebounce(handleSearch, 400);

  return (
    <div className="search-modal" onClick={() => setShowSearchModal(false)}>
      <div
        className="search-modal-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-modal-close">
          <button onClick={() => setShowSearchModal(false)}>
            <SvgClose />
          </button>
        </div>

        <div className="search-wrapper">
          <SearchInput
            query={query}
            setQuery={setQuery}
            setIsResultOpen={setIsResultOpen}
            setIsLoading={setIsLoading}
            debouncedSearch={debouncedSearch}
          />

          {/* result */}
          {isResultOpen && isLoading && (
            <div className="serach-modal-result-wrapper">
              <p>Loading...</p>
            </div>
          )}
          {isResultOpen && !isLoading && result.length > 0 && (
            <SearchResults
              result={result}
              setShowSearchModal={setShowSearchModal}
            />
          )}

          {/* No result */}
          {isResultOpen && !isLoading && result.length === 0 && (
            <div className="serach-modal-result-wrapper">
              <p className="no-result">No Result...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
