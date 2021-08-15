/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeNames';

import SideMenu from './SideMenu';
import CustomDrawer from './CustomDrawer';
import { GlobalContext } from '../context/provider';

const DrawerStack = createDrawerNavigator();


/* const getDrawerContent = ({navigation, authDispatch}) => {
    return <SideMenu navigation={navigation} />;
}; */


const DrawerNavigator = () => {
    const { authDispatch } = useContext(GlobalContext);
    return (
        <DrawerStack.Navigator
            drawerContent={({navigation}) => /* getDrawerContent(navigation, authDispatch) */ <CustomDrawer navigation={navigation} authDispatch={authDispatch} />}
        >
            <DrawerStack.Screen
                name={HOME_NAVIGATOR}
                component={HomeNavigator} 
                options={{ headerShown:false}}
            />
        </DrawerStack.Navigator>
    );
};

export default DrawerNavigator;
