import React, { useState } from 'react';

const FilterForm = ({ filter, setFilter }) => {
  const isAlphanumeric = inputString => {
    const allowedChars = /^[0-9 a-öA-Ö]+$/;
    return inputString.match(allowedChars);
  };
  console.log('Rendering filter form...');

  const handleFilterInputChange = event => {
    const filterString = event.target.value;
    console.log(filterString);
    if (isAlphanumeric(filterString) || filterString === '') {
      setFilter(filterString);
    }
  };

  return (
    <div>
      rajaa näytettäviä{' '}
      <input value={filter} onChange={handleFilterInputChange} />
    </div>
  );
};

const AddPersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  setPersons,
}) => {
  const handleNameInputChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
    console.log(persons);
  };
  const handleNumberInputChange = event => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const addPerson = event => {
    event.preventDefault();
    console.log('Executing addPerson...');
    console.log(newName);
    console.log(persons.indexOf(newName));
    console.log(persons);

    if (persons.find(person => person.name === newName) === undefined) {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      console.log(personObject);
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
      console.log(persons.indexOf(personObject));
    } else {
      window.alert(`${newName} on jo luettelossa`);
    }
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          <h3>lisää uusi</h3>
          nimi: <input value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          numero: <input value={newNumber} onChange={handleNumberInputChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    </div>
  );
};

const PersonList = ({ persons, filter }) => {
  console.log('Rendering PersonList...');
  console.log(persons);
  return persons
    .filter(person => person.name.match(new RegExp(filter, 'i')) != null)
    .map(person => <PersonEntry key={person.name} person={person} />);
};

const PersonEntry = ({ person }) => {
  return (
    <p>
      {person.name} {person.number}
    </p>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-223456' },
    { name: 'Arto Järvinen', number: '040-323456' },
    { name: 'Lea Kutvonen', number: '040-423456' },
  ]);
  const [newName, setNewName] = useState('Syötä uusi nimi');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <FilterForm filter={filter} setFilter={setFilter} />
      <AddPersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <h3>Numerot</h3>
      <PersonList persons={persons} filter={filter} />
    </div>
  );
};

export default App;
