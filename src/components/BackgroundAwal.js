import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

class BackgroundAwal extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            position: 'absolute',
            top: -30,
            right: -30,
            width: 200,
            height: 225,
          }}
          source={require('../../assets/img/bg-right.png')}
        />

        <ImageBackground
          style={{
            position: 'absolute',
            bottom: -20,
            left: -20,
            width: 200,
            height: 225,
          }}
          source={require('../../assets/img/bg-left.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  logo: {
    width: 270,
    height: 155,
    marginLeft: '16%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BackgroundAwal;
