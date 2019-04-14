import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '045-123456' },
  ]);
  const [newName, setNewName] = useState('Syötä uusi nimi');
  const [newNumber, setNewNumber] = useState('');

  const rows = () =>
    persons.map(person => (
      <p key={person.name}>
        {person.name} {person.number}
      </p>
    ));

  const addPerson = event => {
    event.preventDefault();
    console.log('Executing addPerson...');
    console.log(newName);
    console.log(persons.indexOf(newName));

    let personFoundInList = false;

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        personFoundInList = true;
        break;
      }
    }

    if (personFoundInList) {
      window.alert(`${newName} on jo luettelossa`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      console.log(personObject);
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
      console.log(persons.indexOf(personObject));
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
  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>
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
