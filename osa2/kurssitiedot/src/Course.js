import React from 'react';
const Courses = props => {
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

  const Total = props => {
    console.log('Rendering Total...');
    console.log(props);

    return (
      <div>
        <p>
          yhteensä{' '}
          {props.parts.reduce(
            (total, currentValue) => (total += currentValue.exercises),
            0
          )}{' '}
          tehtävää
        </p>
      </div>
    );
  };

  const Course = props => {
    console.log('Rendering Course...');
    console.log(props);
    return (
      <div>
        <Header name={props.course.name} />
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} />
      </div>
    );
  };

  console.log('Rendering Courses...');
  console.log(props);

  return (
    <div>
      <h1>Opetusohjelma</h1>
      {props.courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
