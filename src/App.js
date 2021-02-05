import { Container, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import { Board } from './components/Board';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
  },
  select: {
    width: 100
  }
})

const App = () => {
  const classes = useStyles();
  const [resource, setResource] = useState('people');

  const onResourceChange = (event) => {
    setResource(event.target.value);
  }

  return (
    <Container className={classes.container}>
      <h1 className={classes.header}>STAR WARS GAME</h1>
      <FormControl>
        <InputLabel>Resource</InputLabel>
        <Select value={resource} className={classes.select} onChange={onResourceChange}>
          <MenuItem value="people">peolpe</MenuItem>
          <MenuItem value="starships">starships</MenuItem>
        </Select>
      </FormControl>
      <Board resourceName={resource}/>
    </Container>
  );
}

export default App;
