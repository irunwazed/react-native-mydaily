import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Routing from './route/Router';
import SplashScreen from './screen/SplashScreen';
import MenuBar from './components/Menubar';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  state = {
    isMain: false,
    isLogin: true,
  };

  componentDidMount() {
    // this.setState({isMain: true});
    setTimeout(() => {
      this.setState({isMain: true});
    }, 2000);
  }

  getMain = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Beranda">
          {Routing.guess.map((obj, i) => (
            <Stack.Screen
              key={i}
              options={{headerShown: false}}
              name={obj.name}
              component={obj.screen}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  getMain2 = () => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {Routing.main.map((obj, i) => (
              <Stack.Screen
                key={i}
                options={{headerShown: false}}
                name={obj.name}
                component={obj.screen}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
				{/* <MenuBar/> */}
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {this.state.isLogin ? this.getMain2() : this.getMain()}
        {/* <MenuBar/> */}
        {/* {this.state.isMain?<View></View>:<SplashScreen/>} */}
        {/* <SplashScreen/> */}
      </View>
    );
  }
}

export default App;
