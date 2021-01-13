import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
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
  useEffect(() => {
    const fetchData = async () => {
      const people = await fetchPeople();
      console.log(people);
    }

    fetchData();
  }, [])
  const luke = {
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    mass: '77',
    height: '172',
  }

  return (
    <section>
      <div className={classes.personWrapper}>
        <div>
          <Score score={0} />
          <HeroCard person = { luke } />
        </div>
        <div>
          <Score score={0} />
          <HeroCard person = { luke } />
        </div>
      </div>
      <Button variant="contained" color="secondary">Start Fight</Button>
    </section>
  )
}