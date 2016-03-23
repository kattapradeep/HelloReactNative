'use strict';
import React,
{
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';


export default class TodoListItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.listItem}>
                <Text>{this.props.dataItem.text}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {        
        borderBottomWidth: 3,
        borderBottomColor: '#e9eaed',
        alignSelf: 'stretch',
        margin:5        
    }
});
