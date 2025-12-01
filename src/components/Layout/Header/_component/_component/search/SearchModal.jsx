import { SvgClose } from "../../../../../../assets/icon/SvgClose";
import { SvgSearch } from "../../../../../../assets/icon/SvgSearch";

export const SearchModal = ({ showSearchModal, setShowSearchModal }) => {
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

        <form className="search-modal-form">
          <label className="search-input-wrapper">
            <input type="search" placeholder="Search products..." />
            <button type="submit">
              <SvgSearch />
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};
