import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchPeople } from '../services/fetchPeople';
import { HeroCard } from "./HeroCard"
import { InfoModal } from './InfoModal';
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
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwo, setPlayerTwo] = useState({});
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [isPlayerDetailsHidden, setIsPlayerDetailsHidden] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const people = await fetchPeople();

      setPeople(people);
    };
    fetchData();
  }, []);

  useEffect(() => {
    compareMass();
  }, [playerOne, playerTwo]);

  const setPlayer = (people) => {
    const person = people[Math.floor(Math.random() * people.length)];

    return person ? person : {};
  };

  const compareMass = () => {
    const playerOneMass = parseInt(playerOne.mass);
    const playerTwoMass = parseInt(playerTwo.mass);

    if (playerOneMass > playerTwoMass) {
      setPlayerOneScore(playerOneScore + 1);
      setWinner('player one wins');
    } else if (playerOneMass < playerTwoMass) {
      setPlayerTwoScore(playerTwoScore + 1);
      setWinner('player two wins');
    }
  }

  const startFight = () => {
    if (isPlayerDetailsHidden) setIsPlayerDetailsHidden(false);

    setPlayerOne(setPlayer(people));
    setPlayerTwo(setPlayer(people));
    setIsOpened(true);
  }

  const resetGame = () => {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setIsPlayerDetailsHidden(true);
    setIsOpened(false);
  }

  return (
    <section>
      <div className={classes.personWrapper}>
        <div>
          <Score score={playerOneScore} />
          <HeroCard isHidden = { isPlayerDetailsHidden } person = { playerOne } />
        </div>
        <div>
          <Score score={playerTwoScore} />
          <HeroCard isHidden = { isPlayerDetailsHidden } person = { playerTwo } />
        </div>
      </div>
      <Button variant="contained" color="secondary" onClick={startFight}>Start Fight</Button>
      <InfoModal isOpened={isOpened} resetGame={resetGame} winner={winner}/>
    </section>
  )
}
