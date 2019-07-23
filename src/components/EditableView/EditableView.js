import React from 'react';
import { StyleSheet, View } from 'react-native';

const EditableView = (props) => {
    //Get the borderradius value as props
    //Use default css + dynamicly modified css
    return <View style={[styles.editableView,props.style]}>
    </View> 
}

const styles = StyleSheet.create({
    editableView: {
        flex: 1,
        margin: 50,
        height: 100,
    }
});

export default EditableView;
    
        