import { Link } from "react-router";

export const SearchResults = ({ result, setShowSearchModal }) => {
  return (
    <div className="serach-modal-result-wrapper">
      <div className="serach-modal-result">
        {result.map((item) => (
          <div key={item.id} className="search-result-item">
            <div className="search-result-item-media">
              <img src={item.imageFront} alt={item.title} />
            </div>
            <div className="search-result-item-info">
              <span>
                <Link
                  to={`/product/${item.id}`}
                  onClick={() => setShowSearchModal(false)}
                >
                  {item.title}
                </Link>
              </span>
              <p>
                {item.discountPrice ? (
                  <>
                    <del>{item.price} $</del>
                    <ins>{item.discountPrice} $</ins>
                  </>
                ) : (
                  <ins>{item.price} $</ins>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
