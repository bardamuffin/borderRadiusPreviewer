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
        let nmb = val;
        if(isNaN(val)) { return}
        if ( val === "") { nmb = 0 }
        switch(id) {
            case 'btlr':
                console.log('btlr');
                this.setState(prevState => ({
                    style: {
                        ...prevState.style,
                        borderTopLeftRadius: parseInt(nmb, 10)
                    }    
                }))
                break;
            case 'btrr':
                console.log('btrr');
                this.setState(prevState => ({
                    style: {
                        ...prevState.style,
                        borderTopRightRadius: parseInt(nmb, 10)
                    }    
                }))
                break;
            case 'bblr':
                    this.setState(prevState => ({
                        style: {
                            ...prevState.style,
                            borderBottomLeftRadius: parseInt(nmb, 10)
                        }    
                    }))
                break;
            case 'bbrr':
                    this.setState(prevState => ({
                        style: {
                            ...prevState.style,
                            borderBottomRightRadius: parseInt(nmb, 10)
                        }    
                    }))
                break;            
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if( this.state.style != prevState.style) {
            this.props.changeVal(this.state.style)
        }
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
       
