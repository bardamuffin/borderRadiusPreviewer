import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EditableView from './src/components/EditableView/EditableView'

export default function App() {
  return (
    <View style={styles.container}>
      <EditableView/>      
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    //padding: 20
    backgroundColor: "black"
  },
  bottom: {
    heigh: "100%",
    backgroundColor: "blue"
  }
});
