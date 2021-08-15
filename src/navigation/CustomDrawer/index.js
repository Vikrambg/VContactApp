/* eslint-disable prettier/prettier */
import React from 'react';
import SideMenu from '../SideMenu';


const CustomDrawer = ({ navigation, authDispatch }) => {
    return (
        <SideMenu navigation={navigation} authDispatch={authDispatch} />
    );
};

export default CustomDrawer;

