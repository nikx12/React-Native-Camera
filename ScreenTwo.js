import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'; 


class ScreenTwo extends React.Component {
    // static navigationOptions = ({ navigation }) => {
    //   return {
    //     title: `Welcome ${navigation.state.params.screen}`,
    //   }
    // };
    render() {
      const { state, navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text style={styles.titleText}>Helloooo</Text>
  
          <View>
            <TouchableHighlight
              onPress={() => this.props.navigation.goBack()}
              style={{backgroundColor: '#C56EE0'}}>
              <Text>Go Back</Text>
            </TouchableHighlight>
  
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("Camera", { screen: "Screen Three" })}
              style={{backgroundColor: '#8E84FB'}}>
              <Text>Next</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
  };
  export default ScreenTwo;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});