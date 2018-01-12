import React, { Component } from 'react';
import  { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component {
 componentWillMount () {
    firebase.initializeApp({
    apiKey: 'AIzaSyAaatE0B4AS5wyiSR4H158UZPi2RHm0tQw',
    authDomain: 'authenication-c6797.firebaseapp.com',
    databaseURL: 'https://authenication-c6797.firebaseio.com',
    projectId: 'authenication-c6797',
    storageBucket: 'authenication-c6797.appspot.com',
    messagingSenderId: '465929106636'
  });
 }

  render () {
    return (
      <View>
        <Header headerText='Authenication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
``
