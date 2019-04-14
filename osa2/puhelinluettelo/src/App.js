import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('Syötä uusi nimi');

  const rows = () =>
    persons.map(person => <p key={person.name}> {person.name} </p>);

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
      };
      console.log(personObject);
      setPersons(persons.concat(personObject));
      setNewName('');
      console.log(persons.indexOf(personObject));
    }
  };

  const handleInputChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
          <div>debug: {newName}</div>
        </div>
      </form>
      <h2>Numerot</h2>
      {rows()}
    </div>
  );
};

export default App;
