import React from 'react';
import { StyleSheet, View } from 'react-native';

const EditableView = (props) => {
    return <View style={styles.editableView}>

    </View> 
    
}
const styles = StyleSheet.create({
    editableView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        
    }
});

export default EditableView;