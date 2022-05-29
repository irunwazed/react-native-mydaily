import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BarProgress = (name = 'Food', progress = 10, color = '#0ce10c') => {
  return (
    <View style={styles.barProgress}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{backgroundColor: color, padding: 3, flex: progress}}></View>
        <View style={{backgroundColor: '#646464', flex: 100 - progress}}></View>
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <Text style={{flex: 1, fontSize: 13}}>{name}</Text>
        <Text style={{flex: 1, fontSize: 13, textAlign: 'right'}}>
          Rp. xxxxxx
        </Text>
      </View>
    </View>
  );
};

const Todo = () => {
  return (
    <View style={{
      paddingRight: 15,
    }}>
      <Text
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#ffd768',
          borderRadius: 30,
          textAlignVertical: 'center',
          textAlign: 'center',
          color: '#000000',
          // fontWeight: '900',
          // fontSize: 30,
          fontFamily: 'Audrey-Bold',
        }}>
        24{'\n'}May{'\n'}22
      </Text>
    </View>
  );
};

const BerandaScreen = () => {
  return (
    <View style={styles.container}>
      {/* Section Bar */}
      <Text style={styles.heading}>Bulan Ini</Text>
      <View>
        {BarProgress('Food', 40, '#0ce10c')}
        {BarProgress('Shoping', 90, '#e10c0c')}
        {BarProgress('Food', 75, '#ffd768')}
      </View>
      {/* . Section Bar */}

      {/* Section Todo */}
      <Text style={styles.heading}>To Do List</Text>
      <View style={{
        flexDirection: 'row',
      }}>
      {Todo()}
        {Todo()}
        {Todo()}
        {Todo()}
        {Todo()}
      </View>
      {/* . Section Todo */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#000',
    paddingBottom: 5,
    fontFamily: 'Audrey-Bold',
  },
  barProgress: {
    paddingBottom: 15,
    width: '100%',
  },
});

export default BerandaScreen;
