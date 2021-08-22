/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import styles from './styles';
import Icon from '../common/Icon';
import Message from '../common/Message';
import { useNavigation } from '@react-navigation/native';
import {CREATE_CONTACT} from '../../constants/routeNames';

const ContactComponent = ({ modalVisible,data, loading, setModalVisible }) => {

    //console.log(data);

    const { navigate } = useNavigation();

    const ListEmptyComponent = () => {
        return (
            <View style={{paddingHorizontal:100, paddingVertical:100}}>
                <Message info message="No contacts to show" />
            </View>
        );
    };

     const renderItem = ({item}) => {
         //console.log('item', item);
         const { 
             contact_picture, 
             first_name, 
             last_name, 
             phone_number,
             country_code,
        } = item;

         return (
             <TouchableOpacity style={styles.itemContainer }>
                 <View style={styles.item}>
                     {contact_picture ? (
                         <Image
                            source={{ uri: contact_picture}}
                            style={{ width:45, height:45, borderRadius:100}}
                        />
                     ) : (
                         <View
                            style={{
                                width:45,
                                height:45,
                                borderRadius:100,
                                backgroundColor: colors.grey,
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:"center",
                            }}
                         >
                            <Text style={[styles.name,{color:colors.white}]}>{first_name[0]}</Text>
                            <Text style={[styles.name,{color:colors.white}]}>{last_name[0]}</Text>
                         </View>
                     )}
                     <View style={{ paddingLeft: 20}}>
                        <View style={{ flexDirection:'row'}}>
                            <Text style={styles.name}>{first_name}</Text>
                            <Text> </Text>
                            <Text style={styles.name}>{last_name}</Text>
                        </View>
                        <Text style={styles.phoneNumber}>{`${country_code} ${phone_number}`}</Text>
                     </View>
                 </View>
                 <Icon name="right" type="antDesign" size={18} color={colors.grey} />
             </TouchableOpacity>
         );
     };

    return (
        <>
        <View style={{ backgroundColor: colors.white}}>
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
                <View style={{ paddingVertical:100, paddingHorizontal:100 }}>
                    <ActivityIndicator color={colors.success} size="large" />
                </View>
            ) : (
                <View style={{ paddingVertical:20 }}>
                    <FlatList
                        renderItem={renderItem}
                        data={data}
                        ItemSeparatorComponent={() => (<View style={{ height:1, backgroundColor:colors.grey}}></View>) }
                        keyExtractor={(item) => String(item.id)}
                        ListEmptyComponent={ListEmptyComponent}
                        ListFooterComponent={<View style={{ height:150 }} />}
                    />
                </View>
            )}
        </View>
        <TouchableOpacity 
            style={styles.floatingActionButton}
            onPress={() =>navigate(CREATE_CONTACT)}
        >
            <Icon name='plus' color={colors.white} size={21} /> 
        </TouchableOpacity>
        </>
    );
};

export default ContactComponent;


