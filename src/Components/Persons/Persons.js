const Persons = (props) => {
  return (
    <div>
      {props.searched.map((person) => {
        return (
          <ul key={person.name}>
            <li>
              {" "}
              {person.name} {person.number}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Persons;
