import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  return (
    <View
      style={styles.container}>
      <ImageBackground
        style={{
					position: 'absolute',
					top: 0,
					right: 0,
					width: 200,
					height: 225,
				}}
        source={require('../../assets/img/bg-right.png')}
      />
      <ImageBackground
        style={styles.logo}
        source={require('../../assets/img/logo.png')}
      />
			<Text
				style={{
					fontSize: 20,
					color: '#f07743',
					fontWeight: 'bold',
					textAlign: 'center',
				}}
			>{'\n'}Hello !</Text>
			<Text
				style={{
					fontSize: 14,
					color: '#ffc956',
					fontWeight: 'bold',
					textAlign: 'center',
				}}
				>Catatan Keseharian Mu</Text>
      <ImageBackground
        style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: 200,
					height: 225,
				}}
        source={require('../../assets/img/bg-left.png')}
      />
      {/* <Text style={styles.text} >My Diary</Text> */}
    </View>
  );
};

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

export default SplashScreen;
