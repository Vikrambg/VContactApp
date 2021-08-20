/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import styles from './styles';
import Icon from '../common/Icon';
import Message from '../common/Message';

const ContactComponent = ({ modalVisible,data, loading, setModalVisible }) => {

    console.log(data);

    const ListEmptyComponent = () => {
        return (
            <View style={{paddingHorizontal:100, paddingVertical:100}}>
                <Message info message="No contacts to show" />
            </View>
        );
    };

     const renderItem = ({item}) => {
         console.log('item', item);
         const { contact_picture, first_name, last_name, phone_number } = item;

         return (
             <TouchableOpacity style={styles.itemContainer }>
                 <View style={styles.item}>
                     {contact_picture ? (
                         <Image 
                            source={{ uri: contact_picture}}
                            style={{ width:45, height:45, borderRadius:100}}
                        />
                     ) : (
                         <View style={{ width:45, height:45, borderRadius:100, backgroundColor: colors.grey }}>
                         </View>
                     )}
                     <View>
                         <Text>{first_name}</Text>
                         <Text>{last_name}</Text>
                     </View>
                     <Text>{phone_number}</Text>
                 </View> 
                 <Icon name='right' type='antDesign' />
             </TouchableOpacity>
         );
     };

    return (
        <View>
            <AppModal
                title="My Profile"
                modalFooter={<></>}
                modalBody={
                    <View>
                        <Text>Hello</Text>
                    </View>
                }
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            {loading ? (
                <View style={{ paddingVertical:100, paddingHorizontal:100}}>
                    <ActivityIndicator color={colors.success} size="large" />
                </View>
            ) : (
                <FlatList
                    renderItem={renderItem}
                    data={data}
                    keyExtractor={(item) => String(item.id)}
                    ListEmptyComponent={ListEmptyComponent}
                />
            )}
        </View>
    );
};

export default ContactComponent;


