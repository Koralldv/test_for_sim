import React from 'react'
import './App.css';
import Routing from './Routing'
import {Provider} from 'react-redux';
import { store, persistor } from './Store/';
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { NotificationContainer } from 'react-notifications'

function App() {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Routing/>
                    <NotificationContainer/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
}

export default App;