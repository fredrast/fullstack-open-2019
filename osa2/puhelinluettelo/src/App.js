import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' },
  ]);
  const [newName, setNewName] = useState('Syötä uusi nimi');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const rows = () =>
    persons
      .filter(person => person.name.match(new RegExp(filter, 'i')) != null)
      .map(person => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ));

  const addPerson = event => {
    event.preventDefault();
    console.log('Executing addPerson...');
    console.log(newName);
    console.log(persons.indexOf(newName));

    console.log('Checking if ' + newName + ' exists in list: ');
    console.log(persons.find(person => (person.name = newName)));

    if (persons.find(person => (person.name = newName)) == undefined) {
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

  const handleNameInputChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberInputChange = event => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const handleFilterInputChange = event => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      rajaa näytettäviä{' '}
      <input value={filter} onChange={handleFilterInputChange} />
      <form onSubmit={addPerson}>
        <div>
          <h2>lisää uusi</h2>
          nimi: <input value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          numero: <input value={newNumber} onChange={handleNumberInputChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      {rows()}
    </div>
  );
};

export default App;
