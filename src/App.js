import React from 'react';
import Routes from  './routes';
import GlobalStyles from './global/GlobalStyles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store/index';

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes />
                    <GlobalStyles />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;