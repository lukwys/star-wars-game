import { Card, CardContent, makeStyles } from "@material-ui/core";
import logo from '../assets/Star_Wars_Logo.png';

const useStyles = makeStyles({
  heroCard: {
    position: 'relative',
  },
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
  },
  logoWrapper : {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  hidden: {
    display: 'none',
  }
})

export const HeroCard = (props) => {
  const classes = useStyles();
  const { name, birth_year, mass, height } = props.person;
  const { isHidden } = props;

  return (
    <Card className={classes.heroCard}>
      <div className={`${classes.logoWrapper} ${!isHidden ? classes.hidden : ''}`}>
        <img className={classes.logo} src={logo} alt="start wars logo"/>
      </div>
      <CardContent>
        <ul className={classes.heroDetails}>
          <li className={classes.heroData}>name: {name}</li>
          <li className={classes.heroData}>birth year: {birth_year}</li>
          <li className={classes.heroData}>mass: {mass}</li>
          <li className={classes.heroData}>height: {height}</li>
        </ul>
      </CardContent>
    </Card>
  )
}
