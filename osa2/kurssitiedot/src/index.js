import React from 'react';
import ReactDOM from 'react-dom';

const Course = props => {
  //
  const Header = props => {
    console.log('Rendering Header...');
    console.log(props);
    return <h1>{props.name}</h1>;
  };

  const Part = props => {
    console.log('Rendering Part...');
    console.log(props);
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    );
  };

  const Content = props => {
    console.log('Rendering Content...');
    console.log(props);

    return props.parts.map(part => <Part key={part.id} part={part} />);
  };

  console.log(' Course...');
  const course = props.course;
  console.log(course);
  console.log(course.name);
  console.log(course.parts);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Total = props => {
  console.log('Rendering Total...');
  console.log(props);

  const countTotal = () => {
    let total = 0;
    for (let i = 0; i < props.parts.length; i++) {
      total += props.parts[i].exercises;
      console.log('Exercise value: ', props.parts.exercises);
    }
    return total;
  };

  return (
    <div>
      <p>yhteensä {countTotal()} tehtävää</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        id: 1,
        name: 'Reactin perusteet',
        exercises: 10,
      },
      {
        id: 2,
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
      },
      {
        id: 3,
        name: 'Komponenttien tila',
        exercises: 14,
      },
      {
        id: 4,
        name: 'Redux',
        exercises: 7,
      },
    ],
  };

  return <Course course={course} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
