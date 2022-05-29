import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import MenuBar from '../../components/Menubar';
import BackgroundMain from '../../components/BackgroundMain';
import BerandaScreen from './BerandaScreen';
import TodoScreen from './TodoScreen';
import DiaryScreen from './DiaryScreen';
import MoneyScreen from './MoneyScreen';
import BookScreen from './BookScreen';
import SvgWallet from '../../../assets/icon/wallet-solid.svg';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 3,
    };

    menuTap = [
      <TodoScreen />,
      <DiaryScreen />,
      <BerandaScreen />,
      <MoneyScreen />,
      <BookScreen />,
    ];
  }

  setMenu = async menu => {
    await this.setState({menu: menu});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <BackgroundMain />
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <ImageBackground
              style={styles.logo}
              source={require('../../../assets/img/logo.png')}
            />
          </View>
          <View style={styles.headerRight}>
            <SvgWallet style={{flex: 1}} width={20} height={20} fill='#ffd768' />
            <Text style={{color: '#a8a8a8', paddingLeft: 10,}}>Rp. 10.000.000</Text>
          </View>
        </View>
        {menuTap[this.state.menu - 1]}
        <MenuBar active={this.state.menu} setMenu={this.setMenu} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#363636',
    padding: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeft: {
    padding: 3,
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
  },
  logo: {
    width: 65,
    height: 35,
    left: -5,
  },
});

export default MainScreen;
