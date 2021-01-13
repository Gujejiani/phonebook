import classes from "./Filter.module.css";
const filter = (props) => {
  return (
    <div className="FlexColumn">
      <label>Filter shown with</label>{" "}
      <input
        placeholder="search..."
        type="text"
        onChange={props.filterHandler}
      />
    </div>
  );
};

export default filter;
