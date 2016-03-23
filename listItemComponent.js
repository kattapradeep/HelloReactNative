'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';

import NavigationService from './navigationService';

export default class ListItemComponent extends Component {
    constructor(props){
        super(props);
        
        this._onPressItem = this._onPressItem.bind(this);    
    }
    
    _onPressItem(){
        //.NavigationService.navigateTo('helloWorld');
        this.props.navigator.push({id : this.props.dataItem.id});
    }
    
    render() {
        return (
            <TouchableOpacity  onPress={this._onPressItem}>
                <View style={styles.listItem}>
                    <Text>{this.props.dataItem.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listView: {
        paddingTop: 5,
        backgroundColor: '#F5FCFF',
    },
    listItem: {
        borderBottomWidth: 2,
        borderBottomColor: 'aqua',
        alignSelf: 'stretch',
        padding: 5
    }
});