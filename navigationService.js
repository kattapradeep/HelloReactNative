'use strict';
import React, {
    Component,
    Navigator,
} from 'react-native';

import CompListView from './listViewComponent';

export default class NavigationService{
    //_navigator = null;

    navigateTo(routeName) {
        _navigator.push({ id: routeName });
    }

    navigatorRenderScene(route, navigator) {

        //_navigator = navigator;

        switch (route.id) {
            case 'helloWorld':
                return (<View><Text>Hello World Navigator Item</Text> </View>);
            case 'listView':
                return (<View>List View Navigator Item</View>);
            case 'home':
                return (<CompListView />);
        }
    }
}