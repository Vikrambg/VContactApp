/* eslint-disable prettier/prettier */
import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default ({
    email,
    password,
    username,
    firstname:first_name,
    lastname:last_name,
}) => (dispatch) =>{
    dispatch({
        type: REGISTER_LOADING,
    });
    axiosInstance.post('auth/register',{
         email,
         password,
         username,
         first_name,
         last_name,
    }).then((res) => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    }).catch((err) => {
        dispatch({
            type:REGISTER_FAIL,
            payload: err.response ? err.response.data : {error: 'Something went wrong, try again.'},
        });
    });
};
