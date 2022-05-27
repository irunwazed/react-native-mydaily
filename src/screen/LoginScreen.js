import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import BackgroundAwal from '../components/BackgroundAwal';
import SvgEye from '../../assets/icon/eye-slash-solid.svg';
import CheckBox from '@react-native-community/checkbox';

// import LinearGradient from 'react-native-linear-gradient';

class LoginScreen extends React.Component {
  state = {
    isRemember: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <BackgroundAwal />
        {/* <SvgEye width={100} height={100} fill="#ffd768" /> */}
        <ImageBackground
          style={styles.logo}
          source={require('../../assets/img/logo.png')}
        />
        <Text
          style={{
            fontSize: 22,
            color: '#f07743',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {'\n'}Hello !
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#ffc956',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Catatan Keseharian Mu {'\n\n'}
        </Text>
        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.formInput} />
          <Text style={styles.label}>{'\n'}Password</Text>
          <TextInput style={styles.formInput} />
          <SvgEye
            style={{
              position: 'relative',
              top: -27,
              left: 290,
            }}
            width={17}
            height={17}
            fill="#f07743"
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <CheckBox
                style={{
                  flex: 1,
                }}
                onFillColor="#CCC"
                disabled={false}
                value={this.state.isRemember}
                onChange={() =>
                  this.setState({isRemember: !this.state.isRemember})
                }
              />
              <Text style={[styles.label, {fontSize: 13, left: -25}]}>
                Remember Me
              </Text>
            </View>

            <Text style={[styles.label, {fontSize: 13}]}>Forget Password?</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 230,
    height: 135,
    marginLeft: '20%',
    marginTop: 90,
  },
  card: {
    backgroundColor: 'rgba(255,215,104,0.26)',
    padding: 30,
    paddingTop: 40,
    borderRadius: 40,
    // width: '100%',
    // height: '100%',
    flex: 1,
  },
  label: {
    color: '#f07743',
    fontSize: 14,
    paddingLeft: 15,
  },
  formInput: {
    marginTop: 5,
    backgroundColor: 'white',
    color: '#333',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: '#ffd768',
    borderWidth: 1,
  },
});

export default LoginScreen;
