import { makeStyles } from '@material-ui/core/styles';

export const layoutStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    margin: '0',
  },  
  flex: {
    display: 'flex',
  },
  jss1: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#F7F7F7',
  },
  jss2: {
    color: 'rgba(0, 0, 0, 0.87)',
    width: '100%',
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
  },
  jss3: {
    flex: '1 1 auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'relative',
  },
  jss4: {
    flex: '1 1 auto',
    display: 'flex',
    zIndex: '3',
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'column',
  },
  jss5: {
    flex: '1 1 auto',
    width: '100%',
    display: 'flex',
    zIndex: '2',
    overflow: 'auto',
    position: 'relative',
    flexDirection: 'column',
  }, 
}));
