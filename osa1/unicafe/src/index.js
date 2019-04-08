import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log('Good');
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    console.log('Neutral');
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    console.log('Bad');
    setBad(bad + 1);
  };

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  const feedbackAverage = ({ good, neutral, bad }) => {
    const feedbackCount = good + neutral + bad;
    if (feedbackCount > 0) {
      return (good - bad) / feedbackCount;
    } else {
      return 0;
    }
  };

  const positiveShare = ({ good, neutral, bad }) => {
    const feedbackCount = good + neutral + bad;
    if (feedbackCount > 0) {
      return ((good / feedbackCount) * 100).toFixed(0) + ' %';
    } else {
      return 0 + ' %';
    }
  };

  const Statistic = ({ text, value }) => {
    return (
      <p>
        {' '}
        {text}': '{value}
      </p>
    );
  };

  const Statistics = ({ good, neutral, bad }) => {
    const feedbackCount = good + neutral + bad;
    if (feedbackCount > 0) {
      return (
        <div>
          <h1>statistiikka</h1>
          <Statistic text="hyvä" value={good} />
          <Statistic text="neutraali" value={neutral} />
          <Statistic text="huono" value={bad} />
          <Statistic text="yhteensä" value={good + neutral + bad} />
          <Statistic
            text="keskiarvo"
            value={feedbackAverage({ good, neutral, bad })}
          />
          <Statistic
            text="positiivisia"
            value={positiveShare({ good, neutral, bad })}
          />
        </div>
      );
    } else {
      return <p>Ei yhtään palautetta annettu</p>;
    }
  };

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={handleGoodClick} text="hyvä" />
      <Button handleClick={handleNeutralClick} text="neutraali" />
      <Button handleClick={handleBadClick} text="huono" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
