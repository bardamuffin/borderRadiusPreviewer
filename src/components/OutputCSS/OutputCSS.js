//Big text component with border
//button copy
// https://aboutreact.com/react-native-copy-to-clipboard/

import React from 'React';
import { StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements'

const OutputCSS = (props) => {
    return <View style={styles.container}>
        <Input
            placeholder='your css'
            containerStyle={styles.input}
        />
        <Button 
            title="Copy CSS to clipboard"
            //containerStyle={styles.button}
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
        //paddingLeft: 24,
        //paddingRight: 24,
        height: "35%",
        //backgroundColor: 'pink'
    },
    button: {
        marginTop: 0,
        width: "30%",
        height: "50%"
    }
})

export default OutputCSS;