import { Link } from "react-router";

export const Info = () => {
  return (
    <div className="aboutus-info-wrapper">
      <div className="aboutus-info">
        <h3>About us info</h3>
        <p>
          It is a long-established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using ‘Content here.
        </p>
        <button>
          <Link to={`/contact-us`}>CLICK HERE TO CONTACT US</Link>
        </button>
      </div>
    </div>
  );
};
