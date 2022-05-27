import React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routing from './route/Router';
import SplashScreen from './screen/SplashScreen';
import MenuBar from './components/Menubar';

const Stack = createNativeStackNavigator();

class App extends React.Component {

	state = {
    isMain: false,
  };

	componentDidMount() {
		// this.setState({isMain: true});
		setTimeout(() => {this.setState({isMain: true})}, 2000)
  }


	getMain = () => {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Beranda">
					{Routing.map((obj, i) => (
						<Stack.Screen  options={{ headerShown: false }} name={obj.name} component={obj.screen} />
					))}
				</Stack.Navigator>
			</NavigationContainer>
		);
	}

	render(){
		return(
			<View
			style={{
				flex: 1,
				marginTop: 35,
				marginBottom: 20,
			}}
			>
				{this.getMain()}
				{/* <MenuBar/> */}
				{/* {this.state.isMain?<View></View>:<SplashScreen/>} */}
				{/* <SplashScreen/> */}
			</View>
		);
	}
}

export default App;