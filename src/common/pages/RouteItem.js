/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoadingView from '../components/LoadingView'

var MOCKED_MOVIES_DATA = [
  { title: '标题', year: '2015', posters: { thumbnail: 'https://i.imgur.com/UePbdph.jpg' } },
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loaded: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    //this.fetchData();
  }


  fetchData() {
    fetch('http://192.168.1.145:3000/api/area')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: this.state.data.concat(responseData),
          loaded: true,
        });
      })
      .catch((err) => {
        this.setState({
          data: [],
          loaded: false,
        });
      });
  }

  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    if (!this.state.loaded) {
      console.log(this.props.navigation.state.params.area)
      return LoadingView();
    }

    return (
      <View style={styles.container}>
        <Text>{this.state.data}</Text>
        <Text>{movie.title}</Text>
        <Image
          source={{ uri: movie.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <Text style={styles.welcome}>
          hi huhu, i am vvn  
        </Text>
      </View>
    )
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});


AppRegistry.registerComponent('App', () => App);
