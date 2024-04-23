import Logosvg from "../../svg/logo.svg";

function Header() {
  const descLogo = "Essa é a logo do blog";
  return (
    <>
      <header className="container flex-space-between">
        <div className="logo ">
          <img src={Logosvg} alt={descLogo} />
        </div>

        <div className="search">
          <input type="text" className="input-search" name="search" />
        </div>

        <div className="menu">
          <li>
            {" "}
            <a href="/" className="nav-link">
              Categories
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/" className="nav-link">
              About
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/" className="nav-link">
              Contact
            </a>{" "}
          </li>
        </div>
      </header>
    </>
  );
}

export default Header;
