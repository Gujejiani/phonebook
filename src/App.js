import React, { useState, useEffect } from "react";
import Filter from "./Components/Filter/Filter";
import PersonForm from "./Components/PersonForm/Form";
import Persons from "./Components/Persons/Persons";
import "./App.css";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searched, setSearched] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    const allContacts = [...persons];
    const search = allContacts.filter((p) => {
      return p.name.toLowerCase().includes(searched.toLowerCase());
    });
    setSearchedResults(search);
  }, [searched, persons]);

  const nameChangeHandler = (e) => {
    setNewName(e.target.value);
  };

  const phoneNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const filterHandler = (e) => {
    setSearched(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedPersons = [...persons];
    const alredyExcists = persons.find((p) => p.name === newName);

    //if contact is already exists we are pushing newName
    if (!alredyExcists) {
      updatedPersons.push({
        name: newName,
        number: newNumber,
      });
      setPersons(updatedPersons);
      setNewName("");
      setNewNumber("");
    } else {
      // else sending alert

      alert(`${newName} is already added to phonebook`);
    }
  };

  const deleteHandler = (name) => {
    // console.log(e.target.closest("li").value);
    const personsUpdated = persons.filter((p) => p.name !== name);

    setPersons(personsUpdated);
  };

  return (
    <div className="App">
      <h2>Phonebook</h2>

      <Filter filterHandler={filterHandler} />
      <h3>add a new contact</h3>
      <PersonForm
        disabled={newName && newNumber ? false : true}
        submit={submitHandler}
        nameInputVal={newName}
        numInputVal={newNumber}
        phoneChange={phoneNumberChange}
        nameChange={nameChangeHandler}
      />
      <h2>Numbers</h2>

      <Persons delete={deleteHandler} searched={searchedResults} />
    </div>
  );
};

export default App;
