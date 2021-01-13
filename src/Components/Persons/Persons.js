const Persons = (props) => {
  return (
    <div>
      <ul>
        {props.searched.map((person) => {
          return (
            <li key={person.name}>
              {" "}
              {person.name} {person.number}{" "}
              <button
                onClick={() => props.delete(person.name)}
                className="delete"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Persons;
