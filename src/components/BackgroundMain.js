import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const BackgroundMain = () => {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          position: 'absolute',
          top: 0,
          width: 200,
          height: 300,
          width: '100%',
        }}
        source={require('../../assets/img/bg-top.png')}
      />

      <ImageBackground
        style={{
          position: 'absolute',
          bottom: 0,
          width: 200,
          height: 300,
          width: '100%',
        }}
        source={require('../../assets/img/bg-bottom.png')}
      />
    </View>
  );
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

export default BackgroundMain;
