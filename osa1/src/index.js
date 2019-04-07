import React from 'react';
import ReactDOM from 'react-dom';

const Hello = props => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const name = 'Fredrik';
  const age = 46;
  console.log('Hello from komponentti');
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Liisa" age={45 - 1} />
      <Hello name="Linda" age={17} />
      <Hello name="Iris" age={16} />
      <Hello name={name} age={age} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
