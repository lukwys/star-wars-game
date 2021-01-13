import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  score: {
    fontSize: 26
  }
})

export const Score = (props) => {
  const classes = useStyles();

  const { score } = props;

  return (
    <span className={classes.score}>{score}</span>
  )
}
