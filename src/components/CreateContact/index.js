/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image, Switch  } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import { DEFAULT_IMAGE_URI } from '../../constants/general';

const CreateContactComponent = ({ loading, error, toggleValueChange, onChangeText,onSubmit,setForm, form}) => {
    //console.log(error);
    return (
      <View style={styles.container}>
        <Container>
            <Image width={150} height={150} source={{uri:DEFAULT_IMAGE_URI}} style={styles.imageView } />
            <Text style={styles.chooseText}> Choose image</Text>
          <Input 
            label="First Name" 
            placeholder="Enter First Name" 
            onChangeText={(value) => {
              onChangeText({name:'firstName', value:value});
            }}
            error={error?.first_name?.[0]}
            />
          <Input 
            label="Last Name" 
            placeholder="Enter Last Name"
            onChangeText={(value) => {
              onChangeText({name:'lastName', value:value});
            }}
            error={error?.last_name?.[0]}
          />
          <Input
            icon={
              <CountryPicker
                  withFilter
                  withFlag
                  countryCode={form.countryCode || undefined }
                  withCountryNameButton={false}
                  withCallingCode
                  withCallingCodeButton
                  withEmoji
                  onSelect={(v) => {
                    const phoneCode = v.callingCode[0];
                    const countryCode = v.cca2;
                    setForm({...form, phoneCode, countryCode });
                  }}
              />
            }
            style={{paddingLeft: 10}}
            iconPosition="left"
            onChangeText={(value) => {
              onChangeText({name:'phoneNumber', value:value });
            }}
            value
            label="Phone Number"
            placeholder="Enter phone Number"
            error={error?.phone_number?.[0]}
          />
          <View 
            style={{ 
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between', 
              paddingVertical: 10
            }}
          >
              <Text style={{ fontSize:17 }}>Add to favorites</Text>
             <Switch
              trackColor={{false: '#767577', true: '#81b0'}}
              thumbColor={form.isFavorite ? "#f5db4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleValueChange}
              value={form.isFavorite }
             />
          </View>
          <CustomButton loading={loading} disabled={loading } onPress={onSubmit} primary title="Create New Contact" />
        </Container>
      </View>
    );
};

export default CreateContactComponent;

