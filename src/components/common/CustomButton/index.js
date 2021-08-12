/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';


const CustomButton = ({ title, primary,  disabled, loading, ...props}) => {

    const getBgColor = () => {
        if (primary) {
            return colors.primary;
        }
    };

    return (
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: getBgColor()}]}>
             {title && <Text>{ title }</Text>}

        </TouchableOpacity>
    );
};


export default CustomButton;
