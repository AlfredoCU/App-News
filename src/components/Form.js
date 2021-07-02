import { func } from "prop-types";
import { categories, countries } from "../helpers/index";
import { useForm } from "../hooks/useForm";
import Select from "./Select";
import Button from "./Button";

const Form = ({ handleFilter }) => {
  const [values, handleValueChange, reset] = useForm({
    category: "",
    country: ""
  });

  const { category, country } = values;

  const submit = e => {
    e.preventDefault();

    if (category.trim() !== "" && country !== "") {
      handleFilter(values);
      reset();
    }
  };

  return (
    <form onSubmit={submit} className="container m-auto">
      <h2 className="text-2xl font-bold py-5 text-center">
        Buscar noticias por categoría y país
      </h2>
      <div className="flex justify-center flex-wrap">
        <Select
          name="category"
          value={category}
          options={categories}
          onChange={handleValueChange}
        />
        <Select
          name="country"
          value={country}
          options={countries}
          onChange={handleValueChange}
        />
        <Button type="submit">
          <span>Buscar</span>
        </Button>
      </div>
      <div className="flex justify-center"></div>
    </form>
  );
};

Form.propTypes = {
  handleFilter: func.isRequired
};

export default Form;
