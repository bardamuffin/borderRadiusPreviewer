import React from 'React';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

//extract css properties https://facebook.github.io/react-native/docs/stylesheet.html#flatten

const InputButtons = (props) => {
    return <View style={styles.container}>
        <Input label='val' containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='topLeft'></Input>
        <Input label='val' containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='topRight'></Input>
        <Input label='val' containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='bottLeft'></Input>
        <Input label='val' containerStyle={styles.input} inputContainerStyle={styles.text} placeholder ='bottRight'></Input>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderColor: "purple",
        borderWidth: 1,
        flexDirection: "row",
        flex: 1,
        //alignItems: "center",
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
        //marginTop: 50
    }

})

export default InputButtons;

        
        
        
