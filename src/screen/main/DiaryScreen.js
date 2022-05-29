import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DiaryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Diary</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default DiaryScreen;
