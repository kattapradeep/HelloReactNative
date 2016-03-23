'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    ListView,
    ToolbarAndroid,
} from 'react-native';

import ListItem from './listItemComponent';

export default class ListViewComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 != r2
            })
        }

        this.renderListViewItem = this.renderListViewItem.bind(this);
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([
                { id: 'hw', text: 'Hello World 123' },
                { id: 'fn', text: 'Full Name' }
            ])
        })
    }

    renderListViewItem(item) {
        return (
            <ListItem dataItem={item} navigator={this.props.navigator}/>
        );
    }

    render() {
        return (
            <View>
                <ToolbarAndroid 
                    title='Full Name Component' style={{backgroundColor: '#e9eaed', height: 56 }} titleColor={'red'}/>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderListViewItem}
                    style={styles.listView}
                    />
            </View>
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