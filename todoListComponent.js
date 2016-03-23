'use strict';
import React,
{
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    ListView,
} from 'react-native';

import Todo from './todoListItemComponent';

export default class TodoListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 != r2 
            })
        };
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
           dataSource : this.state.dataSource.cloneWithRows(nextProps.dataItem) 
        });
    }
    
    componentDidMount(){
        this.setState({
            dataSource : this.state.dataSource.cloneWithRows(this.props.dataItem)
        })
    }

    render() {
        return (
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderTodo}
                style = {styles.listView}
                />                
        );
    }
    
    renderTodo(item){
        return(
            <Todo dataItem={item}/>
        );
    }
}

const styles = StyleSheet.create({   
    listView:{
      alignSelf: 'stretch',
      margin:5
    } 
});

