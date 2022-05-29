import LoginScreen from "../screen/guess/LoginScreen";
import SignupScreen from "../screen/guess/SignupScreen";
import AwalScreen from "../screen/guess/AwalScreen";
import MainScreen from "../screen/main/MainScreen";

const Routing = {
	guess: [
		{
			name: 'Beranda',
			screen: AwalScreen,
		},
		{
			name: 'Login',
			screen: LoginScreen,
		},
	],
	main: [
		{
			name: 'Home',
			screen: MainScreen,
		},
	],
}

// const RoutingMain = [
// 	{
// 		name: 'Beranda',
// 		screen: BerandaScreen,
// 	},
// 	{
// 		name: 'Login',
// 		screen: LoginScreen,
// 	},
// ]

module.exports = Routing;
// export default Routing;