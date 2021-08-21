/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20,
        alignItems:'center',
    },
    item:{
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:20,
        alignItems:'center',
    },
    name:{
        fontSize:17,
    },
    phoneNumber:{
        fontSize:14,
        paddingVertical:5,
        color:colors.grey,
    },
    floatingActionButton:{
        backgroundColor:colors.danger,
        width:55,
        height:55,
        position:'absolute',
        bottom:40,
        right:15,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
    },
});
