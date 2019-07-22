//Big text component with border
//button copy
// https://aboutreact.com/react-native-copy-to-clipboard/

import React from 'React';
import { StyleSheet, View, Text} from 'react-native';
import { Input, Button } from 'react-native-elements'

const OutputCSS = (props) => {
    return <View style={styles.container}>
        <Input
            placeholder='your css'
            containerStyle={styles.input}
        />
        <Button 
            title="Copy CSS to clipboard"
            buttonStyle={styles.button}
        />
           
    </View>
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

export default OutputCSS;