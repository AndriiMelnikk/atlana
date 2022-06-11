import React from 'react';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from './pages/Root';
import { store } from './redux';

function App() {
    return (
        <Router basename={'/'}>
            <Provider store={store}>
                <Root />
            </Provider>
        </Router>
    );
}

export default App;
