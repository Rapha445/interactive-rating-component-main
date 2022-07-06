import 'lazysizes';
import '../styles/styles.css';
import NoTransitionOnLoad from './modules/NoTransitionOnLoad';
import submitScore from './modules/SubmitScore';

new NoTransitionOnLoad();
new submitScore();

if (module.hot) {
    module.hot.accept()
};