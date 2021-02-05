import { CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  heroDetails: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
    fontSize: 20,
  },
  heroData: {
    minWidth: 250,
    margin: '10px 0',
    textTransform: 'capitalize',
  }
})

export const HeroCard = (props) => {
  const classes = useStyles();
  const { name, birth_year, mass, height } = props.cardDetail;

  return (
    <CardContent>
      <ul className={classes.heroDetails}>
        <li className={classes.heroData}>name: {name}</li>
        <li className={classes.heroData}>birth year: {birth_year}</li>
        <li className={classes.heroData}>mass: {mass}</li>
        <li className={classes.heroData}>height: {height}</li>
      </ul>
    </CardContent>
  )
}
