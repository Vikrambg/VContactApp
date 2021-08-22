/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react';
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

    const sheetRef = useRef(null);

    const [form, setForm] = useState({});
    const [localFile, setLocalFile] = useState('');

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    };

    const onSubmit = () => {
        //console.log('form to ', form);
        createContact(form)(contactsDispatch)(() => {
            navigate(CONTACT_LIST);
        });
        //console.log('create new contact', form);
    };

    const closeSheet = () => {

        if (sheetRef.current) {
            sheetRef.current.close();
        }
    };

    const openSheet = () => {

        if (sheetRef.current) {
            sheetRef.current.open(); 
        }
    };

    const toggleValueChange = () => {
        setForm({...form, "isFavorite":!form.isFavorite });
    };

    const onFileSelected = (images) => {
        closeSheet();
        setLocalFile(images);
        console.log(images);
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
            sheetRef={sheetRef}
            closeSheet={closeSheet}
            openSheet={openSheet}
            onFileSelected={onFileSelected}
            localFile={localFile}
        />
        </>
    );
};

export default CreateContact;


