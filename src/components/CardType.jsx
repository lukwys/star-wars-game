import { Card, makeStyles } from "@material-ui/core";
import { HeroCard, StarshipCard } from "./Cards";
import logo from '../assets/Star_Wars_Logo.png';

const useStyles = makeStyles({
  heroCard: {
    position: 'relative',
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

const cardRenderer = {
  people: HeroCard,
  starships: StarshipCard,
}

export const CardType = (props) => {
  const { isHidden, cardType, cardDetail } = props;
  const classes = useStyles();
  const Component = cardRenderer[cardType];

  return (
    <Card className={classes.heroCard}>
      <div className={`${classes.logoWrapper} ${!isHidden ? classes.hidden : ''}`}>
        <img className={classes.logo} src={logo} alt="start wars logo"/>
      </div>
      {Component ? 
        <Component cardDetail={cardDetail} /> 
        : null
      }
    </Card>
  )
}
