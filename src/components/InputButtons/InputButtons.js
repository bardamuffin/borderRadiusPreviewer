import React from 'React';
import { StyleSheet, View , TextInput} from 'react-native';

const InputButtons = (props) => {
    return <View style={styles.container}>
        <TextInput style={styles.input}>topleft</TextInput>
        <TextInput style={styles.input}>topright</TextInput>
        <TextInput style={styles.input}>bottomleft</TextInput>
        <TextInput style={styles.input}>bottomright</TextInput>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderColor: "purple",
        borderWidth: 1,
        flexDirection: "row",
        flex: 1
    },
    input: {
        borderWidth: 1,
        width: "25%"
    }
})

export default InputButtons;

        
        
        
