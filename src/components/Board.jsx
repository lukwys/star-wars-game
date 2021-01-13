import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchPeople } from '../services/fetchPeople';
import { HeroCard } from "./HeroCard"
import { Score } from './Score';

const useStyles = makeStyles({
  personWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
  }
})

export const Board = () => {
  const classes = useStyles();
  const [people, setPeople] = useState([]);
  const [playerOne, setPlayerOne] = useState({});
  let [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwo, setPlayerTwo] = useState({});
  let [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [isPlayerDetailsHidden, setIsPlayerDetailsHidden] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const people = await fetchPeople();

      setPeople(people);
    };
    fetchData();
  }, [])

  const setPlayer = (people) => {
    const person = people[Math.floor(Math.random() * people.length)];

    return person ? person : {};
  };

  const compareMass = () => {
    console.log(playerOne.mass)
    console.log(playerTwo.mass)
    if (playerOne.mass > playerTwo.mass) setPlayerOneScore(playerOneScore++);
    else if (playerOne.mass < playerTwo.mass) setPlayerTwoScore(playerTwoScore++);
    console.log('draw');
  }

  const startFight = () => {
    if (isPlayerDetailsHidden) setIsPlayerDetailsHidden(false);

    setPlayerOne(setPlayer(people));
    setPlayerTwo(setPlayer(people));
    compareMass();
  }

  return (
    <section>
      <div className={classes.personWrapper}>
        <div>
          <Score score={playerOneScore} />
          <HeroCard isHidden = { isPlayerDetailsHidden } person = { playerOne } />
        </div>
        <div>
          <Score score={0} />
          <HeroCard isHidden = { isPlayerDetailsHidden } person = { playerTwo } />
        </div>
      </div>
      <Button variant="contained" color="secondary" onClick={startFight}>Start Fight</Button>
    </section>
  )
}