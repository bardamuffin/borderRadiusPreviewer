import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EditableView from './src/components/EditableView/EditableView';
import InputButtons from './src/components/InputButtons/InputButtons';

export default function App() {
    this.state = {
      style: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <EditableView style={this.state.style}/>
        </View>
        <View style={styles.middle}><InputButtons/></View>
        <View style={styles.bottom}></View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
   container: {
     backgroundColor: "grey",
     flexDirection: "column",
     height: "100%",
     flex: 1
   },
   top: {
     //flex: 1,
     marginTop: 30,
     height: "47%",
     backgroundColor: "green",
   },
   middle: {
    //flex: 1,
    height: "15%",
    //backgroundColor: "black" 
   },
   bottom: {
     flex: 1,
     height: "20%",
     backgroundColor: "yellow",
  
   }
  });

  


