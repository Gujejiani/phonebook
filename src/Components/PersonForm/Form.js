import "./Form.css";
const personForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div className="FormInput">
        <label htmlFor="Name">name:</label>
        <input
          id="Name"
          value={props.nameInputVal}
          onChange={props.nameChange}
        />
      </div>
      <div className="FormInput">
        <label htmlFor="Phone"> number:</label>
        <input
          id="Phone"
          value={props.numInputVal}
          onChange={props.phoneChange}
          type="tel"
        />
      </div>

      <div>
        <button
          disabled={props.disabled}
          className={props.disabled ? "Btn disabled" : `Btn`}
          type="submit"
        >
          add Contact
        </button>
      </div>
    </form>
  );
};

export default personForm;
