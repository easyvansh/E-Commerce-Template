import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/navigation/appNavigator';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />

    </Provider>

  );
}

export default App;