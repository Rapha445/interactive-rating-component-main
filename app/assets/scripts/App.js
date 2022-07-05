import 'lazysizes';
import '../styles/styles.css';
import OpenModal from './modules/OpenModal';
import NoTransitionOnLoad from './modules/NoTransitionOnLoad';

new OpenModal();
new NoTransitionOnLoad();

if (module.hot) {
    module.hot.accept()
};