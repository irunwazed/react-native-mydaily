import BerandaScreen from "../screen/BerandaScreen";
import LoginScreen from "../screen/LoginScreen";
import SignupScreen from "../screen/SignupScreen";
import AwalScreen from "../screen/guess/AwalScreen";

const Routing = [
	{
		name: 'Beranda',
		screen: AwalScreen,
	},
	{
		name: 'Login',
		screen: LoginScreen,
	},
]

module.exports = Routing;
// export default Routing;