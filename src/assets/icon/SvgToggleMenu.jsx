export const SvgToggleMenu = ({ className, onClick }) => {
  return (
    <>
      <svg
        onClick={onClick}
        className={`${className} base-svg-icon base-menu-svg`}
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        fill="currentColor"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>Toggle Menu</title>
        <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
      </svg>
    </>
  );
};
