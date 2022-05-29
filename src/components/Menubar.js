import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import SvgBel from '../../assets/icon/bell-solid.svg';
import SvgBook from '../../assets/icon/book-solid.svg';
import SvgHouse from '../../assets/icon/house-solid.svg';
import SvgDollar from '../../assets/icon/sack-dollar-solid.svg';
import SvgFile from '../../assets/icon/file-solid.svg';

const Menu = [
  {
    icon: <SvgBel width={20} height={20} fill="#000000" />,
    menu: 1,
  },
  {
    icon: <SvgBook width={20} height={20} fill="#000000" />,
    menu: 2,
  },
  {
    icon: <SvgHouse width={20} height={20} fill="#000000" />,
    menu: 3,
  },
  {
    icon: <SvgDollar width={20} height={20} fill="#000000" />,
    menu: 4,
  },
  {
    icon: <SvgFile width={20} height={20} fill="#000000" />,
    menu: 5,
  },
];

const MenuBar = props => {
  return (
    <View style={styles.container}>
      {Menu.map((item, i) => {
        return (
          <View key={i} style={styles.nav}>
            <TouchableOpacity 
              onPress={() => {
                return props.setMenu(item.menu);
              }}
              style={(props.active==i+1)?styles.active:{}}
            >{item.icon}</TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#dbdbdb',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  nav: {
    flex: 1,
    alignItems: 'center',
  },
  active: {
    position: 'absolute',
    padding: 15,
    backgroundColor: '#ffd768',
    borderRadius: 50,
    bottom: -10,
  },
});

export default MenuBar;
