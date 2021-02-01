import { Button, makeStyles, Modal } from "@material-ui/core";

const useStyles = makeStyles({
  modal: {
    width: 400,
    minHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 'calc(50% - 100px)',
    left: 'calc(50% - 200px)',
    backgroundColor: '#fff',
  },
  info: {
    fontSize: 20,
    textTransform: 'capitalize',
    marginBottom: 20
  }
})

export const InfoModal = (props) => {
  const classes = useStyles();
  const { isOpened, closeModal, winner } = props;

  return (
    <Modal
      open={isOpened}
      onClose={closeModal}
    >
      <div className={classes.modal}>
        <div className={classes.info}>
          <span>{`${winner? winner : 'draw'}`}</span>
        </div>
        <Button variant="contained" color="secondary" onClick={closeModal}>Play again</Button>
      </div>
    </Modal>
  )
}
