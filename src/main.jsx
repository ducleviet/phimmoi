import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';
import GlobalStyles from './components/GlobalStyles/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </Provider>,
);
