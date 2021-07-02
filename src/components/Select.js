import { string, arrayOf, shape } from "prop-types";

const Select = ({ name, options, ...props }) => (
  <select
    required
    {...props}
    name={name}
    id={`select-${name}`}
    className="w-full sm:w-3/12 m-2 p-2 border rounded text-sm relative sm:text-base focus:ring-1 focus:outline-none placeholder-gray-500 focus:border-blue-300"
  >
    <option value="" disabled>
      Seleccione una opción
    </option>
    {options &&
      options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
  </select>
);

Select.propTypes = {
  name: string.isRequired,
  options: arrayOf(
    shape({
      value: string.isRequired,
      name: string.isRequired
    }).isRequired
  ).isRequired
};

export default Select;
