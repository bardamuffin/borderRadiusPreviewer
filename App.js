import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EditableView from './src/components/EditableView/EditableView';
import InputButtons from './src/components/InputButtons/InputButtons';
import OutputCSS  from './src/components/OutputCSS/OutputCSS';

//TODO: OutputCSS: show the css value + copy to clipboard css value
//TODO: InputButtons: update the state when the props change
//TODO: InputButtons: see the value we already have into the val label
//maybe the idea is to pass a style object around the app

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
        <View style={styles.bottom}><OutputCSS/></View>
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
     marginTop: 30,
     height: "47%",
     backgroundColor: "black",
   },
   middle: {
    height: "15%",
   },
   bottom: {
     flex: 1,
     height: "20%",
     backgroundColor: "yellow",
  }
});

  


