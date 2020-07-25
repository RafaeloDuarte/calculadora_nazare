import React from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header'
import Panel from './components/Panel'

export default function App() {
  return (
    <Provider store={store}>
      <View style={{height:'100%'}}>
        <Header />
        <Panel/>
      </View>
    </Provider>
  );
}