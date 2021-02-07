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

export const StarshipCard = (props) => {
  const classes = useStyles();
  const { name, crew, hyperdrive_rating, passengers } = props.cardDetail;

  return (
    <CardContent>
      <ul className={classes.heroDetails}>
        <li className={classes.heroData}>name: {name}</li>
        <li className={classes.heroData}>crew: {crew}</li>
        <li className={classes.heroData}>hyperdrive rating: {hyperdrive_rating}</li>
        <li className={classes.heroData}>passengers: {passengers}</li>
      </ul>
    </CardContent>
  )
}
