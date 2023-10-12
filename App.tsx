import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import MainScreen from './components/MainScreen';
import { ScrollView } from 'react-native';
export default function App() {
  return (
    <ReduxProvider store={store}>
      <ScrollView>
        <MainScreen />
      </ScrollView>
    </ReduxProvider>
  );
}
