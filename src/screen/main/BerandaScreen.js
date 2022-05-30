import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

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

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAktif: true,
    };
    //
    // console.log(arr);
  }

  arr = this.props.tanggal.split('-');
  bulanNama = [
    '',
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  render() {

    return (
      <View
        style={{
          paddingRight: 15,
        }}>
					<View
					style={{
						width: 60,
						height: 60,
            backgroundColor: '#ffd768',
            borderRadius: 30,
            textAlignVertical: 'center',
						justifyContent: 'center',
						// backgroundColor: 'red',
					}}
					>

					<Text
          style={{
            textAlign: 'center',
            color: '#000000',
            fontSize: 13,
            // fontFamily: 'Roboto-Black',
          }}>
          {this.arr[0]}
          {'\n'}
          {this.bulanNama[parseInt(this.arr[1])]}
          {'\n'}
          {this.arr[2]}
        </Text>
					</View>
          {this.props.active ? (
            <View
            style={{
              alignItems: 'center',
            }}>
              <View
                style={{
                  width: 0,
                  height: 0,
                  backgroundColor: 'transparent',
                  borderTopWidth: 0,
                  borderRightWidth: 8,
                  borderBottomWidth: 15,
                  borderLeftWidth: 8,
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent',
                  borderBottomColor: '#ffd768',
                  borderLeftColor: 'transparent',
                }}
              />
              <View
                style={{
                  width: 0,
                  height: 0,
                  backgroundColor: 'transparent',
                  borderTopWidth: 0,
                  borderRightWidth: 6,
                  borderBottomWidth: 14,
                  borderLeftWidth: 6,
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent',
                  borderBottomColor: '#fdffdc',
                  borderLeftColor: 'transparent',
                  bottom: 14,
                  position: 'relative',
                }}
              />
            </View>
          ) : (
            <View />
          )}
      </View>
    );
  }
}

const TodoArr = [
  {
    id: 1,
    tanggal: '26-02-2022',
    active: false,
  },
  {
    id: 2,
    tanggal: '27-10-2022',
    active: true,
  },
  {
    id: 3,
    tanggal: '28-10-2022',
    active: false,
  },
  {
    id: 4,
    tanggal: '28-10-2022',
    active: false,
  },
  {
    id: 5,
    tanggal: '28-10-2022',
    active: false,
  },
  {
    id: 6,
    tanggal: '28-10-2022',
    active: false,
  },
  {
    id: 7,
    tanggal: '28-11-2022',
    active: false,
  },
  {
    id: 8,
    tanggal: '28-12-2022',
    active: false,
  },
];

class BerandaScreen extends React.Component {

  constructor(props){
    super(props);
  }
  
  render(){
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
        <View
          style={{
            flexDirection: 'row',
            zIndex: 3,
          }}>
          <FlatList
            horizontal
            data={TodoArr}
            renderItem={({item}) => <Todo tanggal={item.tanggal} active={item.active} />}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.todoContainer}>
          <Text>Makan Gado Gado</Text>
          <Text>Harus makan gado gado, kalo tidak kita jadi zombie</Text>
        </View>
        {/* . Section Todo */}
      </View>
    );
  }

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
    // fontFamily: 'Audrey-Bold',
  },
  barProgress: {
    paddingBottom: 15,
    width: '100%',
  },
  todoContainer: {
    backgroundColor: '#fdffdc',
    padding: 10,
    borderColor: '#ffd768',
    borderWidth: 1,
    top: -17,
    zIndex: 1,
  },
  todoJudul: {},
});

export default BerandaScreen;
