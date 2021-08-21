/* eslint-disable prettier/prettier */
import { CREATE_CONTACT_FAIL, CREATE_CONTACT_LOADING, CREATE_CONTACT_SUCCESS } from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';


export default (form) => (dispatch) => (onSuccess) => {

    const requestPayload = {
         country_code:form.phoneCode || '',
         first_name:form.firstName || '',
         last_name:form.lastName || '',
         phone_number:form.phoneNumber || '',
         contact_picture:form.contactPicture || null,
         is_favorite:false,
    };

    dispatch({
        type:CREATE_CONTACT_LOADING,
    });

    axiosInstance
        .post('/contacts/', requestPayload)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type:CREATE_CONTACT_SUCCESS,
                payload:res.data,
            });
            onSuccess();
        })
        .catch((err) => {
            dispatch({
                type:CREATE_CONTACT_FAIL,
                payload: err.response ? err.response.data : { error: 'Something went wrong, try again.'},
            });
        });
};
