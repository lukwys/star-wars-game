import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchResource } from '../services/fetchResource';
import { CardType } from './CardType';
import { InfoModal } from './InfoModal';
import { Score } from './Score';

const useStyles = makeStyles({
  personWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
  }
})

export const Board = (props) => {
  const { resourceName } = props;
  const classes = useStyles();
  const [resource, setResource] = useState([]);
  const [playerOne, setPlayerOne] = useState({});
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwo, setPlayerTwo] = useState({});
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [isPlayerDetailsHidden, setIsPlayerDetailsHidden] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resource = await fetchResource(resourceName);

      setResource(resource);
    };
    fetchData();
  }, [resourceName]);

  useEffect(() => {
    const compareMass = () => {
      const playerOneMass = parseInt(playerOne.mass);
      const playerTwoMass = parseInt(playerTwo.mass);
  
      if (playerOneMass > playerTwoMass) {
        setPlayerOneScore(playerOneScore => playerOneScore + 1);
        setWinner('player one wins');
      } else if (playerOneMass < playerTwoMass) {
        setPlayerTwoScore(playerTwoScore => playerTwoScore + 1);
        setWinner('player two wins');
      }
    }

    compareMass();
  }, [playerOne, playerTwo]);

  const setPlayer = (people) => {
    const person = people[Math.floor(Math.random() * people.length)];

    return person ? person : {};
  };

  const startFight = () => {
    if (isPlayerDetailsHidden) setIsPlayerDetailsHidden(false);

    setPlayerOne(setPlayer(resource));
    setPlayerTwo(setPlayer(resource));
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
          <CardType isHidden = { isPlayerDetailsHidden } cardDetail = { playerOne } cardType = { resourceName } />
        </div>
        <div>
          <Score score={playerTwoScore} />
          <CardType isHidden = { isPlayerDetailsHidden } cardDetail = { playerOne } cardType = { resourceName } />
        </div>
      </div>
      <Button variant="contained" color="secondary" onClick={startFight}>Start Fight</Button>
      <InfoModal isOpened={isOpened} resetGame={resetGame} winner={winner}/>
    </section>
  )
}
