//Big text component with border
//button copy
// https://aboutreact.com/react-native-copy-to-clipboard/

import React, { Component } from 'React';
import { StyleSheet, View, Text} from 'react-native';
import { Input, Button } from 'react-native-elements'

export default class OutputCSS extends Component {
    constructor(props) {
        super(props)
        
    } 

    componentDidUpdate(prevProps, prevState) {
        console.log("update: " + this.styleToString(this.props.boxStyle))

    }
    componentDidMount() {
    }
    
    styleToString = obj => {
        let val = '';
        for (let property in obj ) {
            console.log(property)
            val += ('"' + property+ '"' + " " + " : " + obj[property] + ", ")
        }
        return val;
    }
    render() {
        return(
             <View style={styles.container}>
                <Input
                    placeholder={this.styleToString(this.props.boxStyle)}
                    containerStyle={styles.input}
                />
                <Button 
                    title="Copy CSS to clipboard"
                    buttonStyle={styles.button}
                />
                   
            </View>
        )    
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        borderColor: 'red',
        borderWidth : 1,
        alignItems: "center"
    },
    input: {
        marginTop: 4,
        height: "35%",
    },
    button: {
        marginTop: 0,
        width: "30%",
        height: "50%"
    }
});
