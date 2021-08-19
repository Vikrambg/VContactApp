/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';

const ContactComponent = ({ modalVisible, setModalVisible }) => {
    return (
        <View>
            <AppModal title="My Profile" modalFooter={<><Text> Footer</Text></>} modalVisible={modalVisible} setModalVisible={setModalVisible}  />
            <CustomButton 
                primary 
                title="Open Modal" 
                onPress={() => {
                    setModalVisible(true);
                }}
            />
        </View>
    );
};

export default ContactComponent;


