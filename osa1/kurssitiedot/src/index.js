import React from 'react';
import ReactDOM from 'react-dom';

const Header = args => {
  return <h1>{args.course}</h1>;
};

const Part = args => {
  console.log('executing Part...');
  console.log(args);
  return (
    <p>
      {args.part.name} {args.part.exercises}
    </p>
  );
};

const Content = args => {
  console.log('executing Content...');
  console.log(args);
  let p;
  return (
    <div>
      <Part part={args.parts[0]} />
      <Part part={args.parts[1]} />
      <Part part={args.parts[2]} />{' '}
    </div>
  );
};

const Total = args => {
  console.log('executing Total...');
  console.log(args);
  return (
    <div>
      <p>
        yhteensä{' '}
        {args.parts[0].exercises +
          args.parts[1].exercises +
          args.parts[2].exercises}{' '}
        tehtävää
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10,
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
      },
      {
        name: 'Komponenttien tila',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
