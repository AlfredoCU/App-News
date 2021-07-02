import { element } from "prop-types";

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="w-full sm:w-auto flex px-5 py-2.5 m-2 text-sm font-bold text-white rounded-md focus:ring items-center duration-500 items-center justify-center transition ease-in focus:outline-none focus:ring-offset-1 focus:border-blue-300 bg-yellow-500 hover:bg-yellow-600"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: element.isRequired
};

export default Button;
