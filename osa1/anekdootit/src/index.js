import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = props => {
  const [selected, setSelected] = useState(0);
  const initVotes = new Array(6).fill(0);
  const [votes, setVotes] = useState(initVotes);

  const voteOnAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const showNextAnecdote = () => {
    setSelected(Math.trunc(Math.random() * 6));
  };

  const ShowAnecdoteWithMostVotes = () => {
    var highestAmountOfVotes = votes[0];
    var anecdoteWithMostVotes = 0;

    for (var i = 1; i < votes.length; i++) {
      if (votes[i] > highestAmountOfVotes) {
        anecdoteWithMostVotes = i;
        highestAmountOfVotes = votes[i];
      }
    }

    if (highestAmountOfVotes > 0) {
      return (
        <div>
          <h1>Anecdote with most votes</h1>
          <p>{props.anecdotes[anecdoteWithMostVotes]}</p>
          <p>has {highestAmountOfVotes} votes</p>
        </div>
      );
    } else {
      return '';
    }
  };

  console.log('selected ', selected);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={voteOnAnecdote} text="vote" />
      <Button handleClick={showNextAnecdote} text="next anecdote" />
      <ShowAnecdoteWithMostVotes />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
