import ReactLoading from 'react-loading'
import { useStyles } from './Styles';

const Loading = () => {
    const classes = useStyles();

  return (
    <div className={classes.loading}>
      <ReactLoading type='spin' color="#9B5AE1" />
    </div>
  );
}

export default Loading;