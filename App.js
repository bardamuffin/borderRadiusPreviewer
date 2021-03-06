import React , { Component } from 'react';
import { StyleSheet, Text, View, Clipboard } from 'react-native';
import EditableView from './src/components/EditableView/EditableView';
import InputButtons from './src/components/InputButtons/InputButtons';
import OutputCSS  from './src/components/OutputCSS/OutputCSS';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        borderTopLeftRadius: 90,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 90,
        backgroundColor: "blue",
      },
      other: {
        backgroundColor: "red"
      }
    };
  }

    //Convert the style object to string
    styleToString = obj => {
      let val = '';
      for (let property in obj ) {
          val += ('"' + property+ '"' + " " + " : " + obj[property] + ", ")
      }
      return val;
    }
    //Write the string css into the clipboard
    writeToClipboard = async () => {
      await Clipboard.setString(this.styleToString(this.state.style))
    }

    handleChangeCSS = (val) => {
      this.setState(prevState => ({
        style: {
          ...val
        }
      }))
    }
    objToString = obj => {
      let val = '';
      for (let property in obj ) {
          val += ('"' + property+ '"' + " " + " : " + obj[property] + ", ")
      }
      return val;
  }

    
    render() {
       
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <EditableView style={this.state.style}/>
        </View>
        <View style={styles.middle}>
          <InputButtons
            boxStyle={this.state.style}
            changeVal={this.handleChangeCSS}
          />
        </View>
        <View style={styles.bottom}>
          <OutputCSS
            boxStyle={this.styleToString(this.state.style)} 
            onPress={this.writeToClipboard}
          />
        </View>
      </View>
    );
  }
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



