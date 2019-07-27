import React, { Component } from 'React';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

//extract css properties https://facebook.github.io/react-native/docs/stylesheet.html#flatten

export default class InputButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style : {...props.boxStyle}
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
        //Value can't be empty
        //Value can't be a char
        switch(id) {
            case 'btlr':
                console.log('btlr');
                this.setState(prevState => ({
                    style: {
                        ...prevState.style,
                        borderTopLeftRadius: parseInt(val, 10)
                    }    
                }))
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
    componentDidUpdate(prevProps, prevState) {
        console.log("Did update: ")
        if( this.state.style != prevState.style) {
            console.log("different state")
            this.props.changeVal(this.state.style)
        }
    }
    componentWillMount() {
        console.log("Will! : " + this.state.borderBottomLeftRadius)
    }
    componentDidMount() {
        console.log("did: " + this.objToString(this.state.style))
    }
    render() {
        return(
            <View style={styles.container}>
                <Input value={this.state.style.borderTopLeftRadius.toString()} label={this.state.style.borderTopLeftRadius} onChangeText={(val) => this.handleModifiedValue(val, "btlr")} containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='topLeft'></Input>
                <Input value={this.state.style.borderTopRightRadius.toString()} label={this.state.style.borderTopRightRadius} onChangeText={(val) => this.handleModifiedValue(val, "btrr")} containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='topRight'></Input>
                <Input value={this.state.style.borderBottomLeftRadius.toString()} label={this.state.style.borderBottomLeftRadius} onChangeText={(val) => this.handleModifiedValue(val, "bblr")} containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='bottLeft'></Input>
                <Input value={this.state.style.borderBottomRightRadius.toString()} label={this.state.style.borderBottomRightRadius} onChangeText={(val) => this.handleModifiedValue(val, "bbrr")} containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='bottRight'></Input>
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
       
