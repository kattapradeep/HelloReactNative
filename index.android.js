/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    Navigator,
} from 'react-native';

import FullName from './fullNameComponent';
import HelloWorld from './helloWorldComponent';
import CompListView from './listViewComponent';
import Counter from './counterComponent';
import TodosView from './todosViewComponent';
import NavigationService from './navigationService';

class ReactNativeTestDemo extends Component {
    constructor(props) {
        super(props);
    }
    navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case 'hw':
                return (<HelloWorld />);
            case 'fn':
                return (<FullName/>);
            case 'home':
                return (<CompListView navigator={navigator} />);
        }
    }
    
    render() {
        return (
            <TodosView />
            // <View>
            //     <View style={{ padding: 10 }}>
            //         <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Components</Text>
            //     </View>
            //     <CompListView />
            // </View>

            // <Navigator
            //     initialRoute={{ id: 'home' }}
            //     renderScene = {this.navigatorRenderScene}
            //     />
            // <Navigator
            //     initialRoute = {{ name: 'First Route', index: 0 }}
            //     renderScene = { (route, navigator) =>
            //         <FullNameComponent name = {route.name} />
            //     }
            //     onForward={() => {
            //         var nextIndex = route.index + 1;
            //         navigator.push({
            //             name: 'Scene ' + nextIndex,
            //             index: nextIndex,
            //         });
            //     } }
            //     onBack={() => {
            //         if (route.index > 0) {
            //             navigator.pop();
            //         }
            //     } }
            //     />
        );
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

AppRegistry.registerComponent('ReactNativeTestDemo', () => ReactNativeTestDemo);
