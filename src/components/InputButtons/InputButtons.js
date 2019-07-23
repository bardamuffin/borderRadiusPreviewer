import React, { Component } from 'React';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

//extract css properties https://facebook.github.io/react-native/docs/stylesheet.html#flatten

export default class InputButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style : props.boxStyle
        }
    }
    objToString = obj => {
        let val = '';
        for (let property in obj ) {
            val += ('"' + property+ '"' + " " + " : " + obj[property] + ", ")
        }
        return val;
    }

    handleModifiedValue(val, id) {
        //TODO: input validation
        switch(id) {
            case 'btlr':
                console.log('btlr');
                this.setState({
                    borderTopLeftRadius: val
                })
                break;
            case 'btrr':
                console.log('btrr');
                break;
            case 'bblr':
                break;
            case 'bbrr':
                break;            
        }
    }
    componentDidUpdate() {
        console.log("Did update: " + this.props.boxStyle)
    }
    componentWillMount() {
        console.log("Will! : " + this.props.boxStyle.borderBottomLeftRadius)
    }
    render() {
        return(
            <View style={styles.container}>
                <Input value={this.state.style.borderTopLeftRadius.toString()} label={this.props.boxStyle.borderTopLeftRadius} onChangeText={(val) => this.handleModifiedValue(val, "btlr")} containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='topLeft'></Input>
                <Input value={this.props.boxStyle.borderTopRightRadius.toString()} label={this.props.boxStyle.borderTopRightRadius} onChangeText={(val) => this.handleModifiedValue(val, "btrr")} containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='topRight'></Input>
                <Input value={this.props.boxStyle.borderBottomLeftRadius.toString()} label={this.props.boxStyle.borderBottomLeftRadius} onChangeText={(val) => this.handleModifiedValue(val, "bblr")} containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='bottLeft'></Input>
                <Input value={this.props.boxStyle.borderBottomRightRadius.toString()} label={this.props.boxStyle.borderBottomRightRadius} onChangeText={(val) => this.handleModifiedValue(val, "bbrr")} containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='bottRight'></Input>
            </View>
        );    
    }
}
            


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
    },
    input: {
        flexDirection: "column",
        alignItems: "center",
        borderWidth: 1,
        width: "25%",
    },
    text: {
        flexDirection: "column",
        alignItems: "center",
    },
    inputContainerStyle: {
        justifyContent: "center"
    }
});
       
