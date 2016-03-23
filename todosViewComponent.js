'use strict';
import React,
{
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    ToolbarAndroid
} from 'react-native';

//var update = require('react-addons-update');

import Todos from './todoListComponent';
import AddTodo from './addTodoComponent';

export default class TodosViewComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {          
          items : [
               {id : 1, text : 'Prepare for Demo'},
               {id : 2, text : 'Call Scott Lonheim'},
               {id : 3, text: "Review Ehsan's changeset"},
               {id : 3, text: "Submit timesheets"}, 
            ]
        };
        
        this.addNewTodo = this.addNewTodo.bind(this);
    }

    addNewTodo(newTodo){
        //var temp = this.state.items;
        this.state.items.push({id : -1, text: newTodo});
        this.setState({
             items : this.state.items
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    title='Todos Component' style={styles.toolbar} titleColor={'#48BBEC'} />
                    
                    <AddTodo style={styles.add} onAdd = {this.addNewTodo}/>
                    <Todos style={styles.list} dataItem = {this.state.items}/>
                    
                <View >                    
                                        
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',       
        
    },
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
        alignSelf:'stretch'
    },
    add:{
        flex: 1,
    },
    list:{
        flex : 9,
        margin : 5
    }
});