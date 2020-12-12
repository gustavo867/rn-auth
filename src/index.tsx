import 'react-native-gesture-handler';
import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<ActivityIndicator size="small" color="#FFF" />}
      >
        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor="#312e38"
        />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
