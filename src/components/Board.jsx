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
    marginBottom: 30
  },
  buttonsWrapper: {
    width: '25%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  }
})

const playerValue = {
  people: 'mass',
  starships: 'crew',
}

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
    const comparePlayers = () => {
      const value = playerValue[resourceName];
      const playerOneValue = parseInt(playerOne[value]);
      const playerTwoValue = parseInt(playerTwo[value]);
  
      if (playerOneValue > playerTwoValue) {
        setPlayerOneScore(playerOneScore => playerOneScore + 1);
        setWinner('player one wins');
      } else if (playerOneValue < playerTwoValue) {
        setPlayerTwoScore(playerTwoScore => playerTwoScore + 1);
        setWinner('player two wins');
      }
    }

    comparePlayers();
  }, [playerOne, playerTwo, resourceName]);

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

  const closeModal = () => {
    setIsOpened(false);
  }

  const resetGame = () => {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setIsPlayerDetailsHidden(true);
    closeModal();
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
          <CardType isHidden = { isPlayerDetailsHidden } cardDetail = { playerTwo } cardType = { resourceName } />
        </div>
      </div>
      <div className={classes.buttonsWrapper}>
        <Button variant="contained" color="secondary" onClick={startFight}>Start Fight</Button>
        <Button variant="contained" color="secondary" onClick={resetGame}>Restart</Button>
      </div>
      <InfoModal isOpened={isOpened} resetGame={resetGame} closeModal={closeModal} winner={winner}/>
    </section>
  )
}
