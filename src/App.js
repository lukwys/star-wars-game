import { Container, makeStyles } from '@material-ui/core';
import { Board } from './components/Board';
import { fetchPeople } from './services/fetchPeople';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
  }
})

const App = () => {
  const classes = useStyles();
  fetchPeople();

  return (
    <Container className={classes.container}>
      <h1 className={classes.header}>STAR WARS GAME</h1>
      <Board />
    </Container>
  );
}

export default App;
