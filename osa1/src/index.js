import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log('klicked');
  };

  const increaseByOne = () => setCounter(counter + 1);

  const setToZero = () => setCounter(0);

  // const setToValue = value => setCounter(value);

  const setToValue = value => setCounter(value);

  const Display = ({ counter }) => <div>{counter}</div>;
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={() => setToValue(counter + 1)} text="plus" />
      <Button handleClick={() => setToValue(counter - 1)} text="minus" />
      <Button handleClick={() => setToValue(0)} text="zero" />{' '}
    </div>
  );
};

// const App = () => {
//   const [counter, setCounter] = useState(10);
//
//   setTimeout(() => setCounter(counter + 10), 1000);
//   return <div>{counter}</div>;
// };
//
// let counter = 1;

// ReactDOM.render(<App counter={counter} />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />, document.getElementById('root'));
// };
//
// refresh();
// counter += 1;
// refresh();
// counter += 1;
// refresh();
//
// setInterval(() => {
//   refresh();
//   counter += 1;
// }, 1000);

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;
//
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old.
//       </p>
//       <p>So you were probably born {bornYear()}</p>
//     </div>
//   );
// };
//
// const App = () => {
//   const now = new Date();
//   const name = 'Fredrik';
//   const age = 45;
//   console.log('Hello from komponentti');
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Liisa" age={44} />
//       <Hello name="Linda" age={16} />
//       <Hello name="Iris" age={15} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };
//
// ReactDOM.render(<App />, document.getElementById('root'));
