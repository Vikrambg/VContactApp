/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';


const Input = ({ onChangeText, iconPosition, icon, style, value, label, error, ...props }) => {

    const [focused, setFocused] = useState(false);


    const getFlexDirection = () => {
        if (icon && iconPosition) {
            //console.log(icon);
            if (iconPosition === 'left') {
                return 'row';
            } else if (iconPosition === 'right') {
                return 'row-reverse';
            }
        }
    };

    const getBorderColor = () => {
        if (focused) {
            return colors.primary;
        }

        if (error) {
            return colors.danger;
        } else {
            return colors.grey;
        }
    };

    return (
        <View>
            {label && <Text> { label} </Text>}
            <View style={[styles.wrapper, {alignItems: icon ? 'center' : 'baseline'}, { borderColor: getBorderColor(), flexDirection: getFlexDirection() }] }>
                <View style>{icon && icon  }</View>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}

                    {...props}
                />
            </View>
            {error && <Text style={ styles.error }> { error } </Text>}
        </View>
    );
};

export default Input;
