/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import CreateContactComponent from '../../components/CreateContact';
import { CONTACT_DETAIL, CONTACT_LIST } from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import { GlobalContext } from '../../context/provider';

const CreateContact = () => {

    const { navigate } = useNavigation();

    const {
        contactsDispatch,
        contactsState: {
            createContact: { loading, error },
        },
    } = useContext(GlobalContext);

    const [form, setForm] = useState({});

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    };

    const onSubmit = () => {
        createContact(form)(contactsDispatch)(() => {
            navigate(CONTACT_LIST);
        });
        console.log('create new contact', form);
    };

    const toggleValueChange = () => {
        setForm({...form, "isFavorite":!form.isFavorite });
    };

    return (
        <>
        <CreateContactComponent
            onChangeText={onChangeText}
            form={form}
            onSubmit={onSubmit}
            setForm={setForm}
            loading={loading}
            toggleValueChange={toggleValueChange}
            error={error}
        />
        </>
    );
};

export default CreateContact;


