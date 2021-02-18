import { Button, makeStyles } from "@material-ui/core"
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  wrapper: {
    marginTop: 50,
    border: '5px dotted #fff',
    color: '#fff',
    padding: '20px 0'
  },
  statisticList: {
    listStyle: 'none',
    padding: 0,
  }
})

export const Statistics = () => {
  const classes = useStyles();
  const [playerOneWins, setPlayerOneWins] = useState(0);

  useEffect(() => {
    const plyerOneWinsLocal = localStorage.getItem('playerOneWins');

    setPlayerOneWins(plyerOneWinsLocal? plyerOneWinsLocal: 0);
  }, []);

  const resetStats = () => {
    localStorage.setItem('playerOneWins', 0);
    setPlayerOneWins(0);
  }

  return (
    <section className={classes.wrapper}>
      <h2>Statistic</h2>
      <ul className={classes.statisticList}>
        <li>Player one wins: {playerOneWins}</li>
        <li>Player two wins: {0}</li>
        <li>Draws {0}</li>
      </ul>
      <Button variant="contained" color="secondary" onClick={resetStats}>Reset</Button>
    </section>
  )
}
