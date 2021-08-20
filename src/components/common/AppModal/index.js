/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../Icon';
import styles from './styles';

const AppModal = ({ title, modalBody, modalFooter, modalVisible, setModalVisible  }) => {
    return (
      <Modal visible={modalVisible} transparent>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={styles.wrapper}>
          <View style={styles.modalView}>
            <ScrollView>
              <View style={styles.header}>
                <Icon size={24} type="evilIcon" name="close" />
                <Text style={styles.title}> {title || 'Hello from modal'}</Text>
                <View />
                <View />
              </View>
              <View style={styles.footerSeparator} />
              <View style={styles.body}>{modalBody}</View>
              {modalFooter ? (
                modalFooter
              ) : (
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of services</Text>
                    </View>
                  </View>
                </>
              )}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    );
};

export default AppModal;

