import React, { Component } from 'react';
import  { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component {
  state ={
    loggedIn: null
  };

 componentWillMount () {
    firebase.initializeApp({
    apiKey: 'AIzaSyAaatE0B4AS5wyiSR4H158UZPi2RHm0tQw',
    authDomain: 'authenication-c6797.firebaseapp.com',
    databaseURL: 'https://authenication-c6797.firebaseio.com',
    projectId: 'authenication-c6797',
    storageBucket: 'authenication-c6797.appspot.com',
    messagingSenderId: '465929106636'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  });
 }

 renderContent() {
   switch (this.state.loggedIn) {
     case true:
       return (
         <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
       );
     case false:
       return <LoginForm />;
     default:
       return <Spinner size='large'/>;
   }
 }

  render () {
    return (
      <View>
        <Header headerText='Authenication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
``
