/* eslint-disable prettier/prettier */
import { GET_CONTACTS_FAIL, GET_CONTACTS_LOADING, GET_CONTACTS_SUCCESS } from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';


export default () => (dispatch) => {
    dispatch({
        type: GET_CONTACTS_LOADING,
    });

    axiosInstance.get('/contacts').then((res) => {
        dispatch({
            type: GET_CONTACTS_SUCCESS,
            payload: res.data,
        });

    }).catch((err) => {
        dispatch({
            type: GET_CONTACTS_FAIL,
            payload: err.respone ? err.response.data : { error: "Something went wrong, try again!"},
        });
    });
};
