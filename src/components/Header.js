import { string } from "prop-types";

const Header = ({ title }) => (
  <header className="bg-blue-600 m-auto p-5">
    <h1 className="text-center text-white text-3xl font-medium">{title}</h1>
  </header>
);

Header.propTypes = {
  title: string.isRequired
};

export default Header;
