import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'; 

class ScreenOne extends React.Component {
    // static navigationOptions = {
    //     header: 'none'
    // }
    render() {
      const { navigate } = this.props.navigation
      return (
        <View style={styles.container}>
         <Text>Screen One </Text>
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('ScreenTwo')}
        />
        </View>
      );
    }
  }
export default ScreenOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});