'use strict';
import React,
{
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
} from 'react-native';


export default class AddTodoComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newTodo : ''
        }
        
        this.addPress = this.addPress.bind(this);
        this.newTodoChange = this.newTodoChange.bind(this);
    }

    addPress(){
        this.props.onAdd(this.state.newTodo);
        
        this.setState({
          newTodo : ''
        });  
    }
    
    newTodoChange(text){
        this.setState({
            newTodo : text
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
               <TextInput style={styles.textInput} value={this.state.newTodo} onChangeText={this.newTodoChange}/>
                <TouchableHighlight style={styles.button} onPress={this.addPress}>
                    <Text>Add Todo Test</Text>
                </TouchableHighlight>                
            </View>
        );
    }
}

const styles = StyleSheet.create({      
    container:{
      flexDirection:'row',     
      height : 40, 
      margin:5     
    },
    textInput : {        
        flex : 2,        
    },
    button:{        
        backgroundColor: '#48BBEC', 
        flex:1,
        justifyContent: 'center',
        alignItems:'center'             
    }
});