/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePickerCropper from 'react-native-image-crop-picker';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import styles from './styles';

const ImagePicker = React.forwardRef (({}, ref) => {

    const options = [
        {
            name: "Take from Camera", 
            icon: <Icon name="camera" color={colors.grey} size={21} />, 
            onPress:() => {
                ImagePickerCropper.openCamera({
                    width:300,
                    height:300,
                    cropping: false,
                }).then((images) => {
                    console.log(images)
                }).catch((error) => {
                    console.log(error);
                });
            },
        },
        {
            name: "Choose from Gallery", 
            icon: <Icon name="image" color={colors.grey} size={21} />, 
            onPress:() => {
                ImagePickerCropper.openCropper({
                    width:300,
                    height:300,
                    cropping: true,
                    multiple: true,
                }).then((images) => {
                    console.log(images);
                }).catch(error => {
                    console.log(error);
                });
                console.log('imgae cropper');
            },
        },
    ];

    return (
        <RBSheet
            ref={ref}
            height={150}
            openDuration={250}
            closeOnDragDown
            customStyles={{
                container: {
                    borderTopLeftRadius:20,
                    borderTopRightRadius:20,
                    justifyContent:'center',
                    alignItems: 'center',
                },
            }}
        >
            <View style={styles.optionsWrapper}>
                {options.map(({name, onPress, icon}) => (
                    <TouchableOpacity onPress={onPress} style={styles.pickerOption} key={name}>
                        {icon}
                        <Text style={styles.text}>{name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </RBSheet>
    );
});

export default ImagePicker;

