import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";


class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDw6dXw30TZUJ6zW-j-NPdeeM9Mci9G-4Y",
        authDomain: "rnappmgr.firebaseapp.com",
        databaseURL: "https://rnappmgr.firebaseio.com",
        projectId: "rnappmgr",
        storageBucket: "rnappmgr.appspot.com",
        messagingSenderId: "467208420239",
        appId: "1:467208420239:web:4e20ff34d9f9be36"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {},
    applyMiddleware(ReduxThunk));
    return (
    <Provider store={store}>
    <Router />
    {/* <LoginForm /> */}
    {/* <View>
    <Text>Bismillah Redux Manager
    Project</Text>
    </View> */}
    </Provider>
    );
  }
}