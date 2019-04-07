import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const name = 'Fredrik';
  const age = 45;
  console.log('Hello from komponentti');
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Liisa" age={44} />
      <Hello name="Linda" age={16} />
      <Hello name="Iris" age={15} />
      <Hello name={name} age={age} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
