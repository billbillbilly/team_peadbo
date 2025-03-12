import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileSetting } from '../../Reducer'; // Updated import path

const SettingsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const profileSettings = useSelector((state) => state.user.profileSettings);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeModal, setActiveModal] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [oldValue, setOldValue] = useState('');
    const appVersion = "1.0.0"; // Update dynamically if needed

    const toggleModal = (modalName) => {
        setActiveModal(modalName);
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            {/* Account Settings */}
            <Text style={styles.sectionTitle}>Account Settings</Text>
            <TouchableOpacity style={styles.settingItem} onPress={() => toggleModal('ChangePassword')}>
                <Text style={styles.settingText}>🔒 Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem} onPress={() => toggleModal('UpdateEmail')}>
                <Text style={styles.settingText}>📧 Update Email Address</Text>
            </TouchableOpacity>

            {/* Help & Support */}
            <Text style={styles.sectionTitle}>Help & Support</Text>
            <View style={styles.settingItem}>
                <Text style={styles.settingText}>ℹ️ View App Version</Text>
                <Text style={styles.appVersion}>{appVersion}</Text>
            </View>
            <TouchableOpacity style={styles.settingItem} onPress={() => toggleModal('ContactSupport')}>
                <Text style={styles.settingText}>📞 Contact Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem} onPress={() => toggleModal('FAQs')}>
                <Text style={styles.settingText}>❓ FAQs</Text>
            </TouchableOpacity>

            {/* Modal Overlays */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        {activeModal === 'ChangePassword' && (
                            <View>
                                <Text style={styles.modalTitle}>🔒 Change Password</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter old password"
                                    placeholderTextColor="#999"  // Set placeholder color to gray
                                    value={oldValue}
                                    onChangeText={setOldValue}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter new password"
                                    placeholderTextColor="#999"  // Set placeholder color to gray
                                    value={inputValue}
                                    onChangeText={setInputValue}
                                />
                                <TouchableOpacity 
                                    style={styles.modalButton}
                                    onPress={() => { 
                                        Alert.alert('Password changed successfully');
                                        setIsModalVisible(false);
                                    }}>
                                    <Text style={styles.modalButtonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        {activeModal === 'UpdateEmail' && (
                            <View>
                                <Text style={styles.modalTitle}>📧 Update Email</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter old email"
                                    placeholderTextColor="#999"  // Set placeholder color to gray
                                    value={oldValue}
                                    onChangeText={setOldValue}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter new email"
                                    placeholderTextColor="#999"  // Set placeholder color to gray
                                    value={inputValue}
                                    onChangeText={setInputValue}
                                />
                                <TouchableOpacity 
                                    style={styles.modalButton}
                                    onPress={() => { 
                                        Alert.alert('Email updated successfully');
                                        setIsModalVisible(false);
                                    }}>
                                    <Text style={styles.modalButtonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        {activeModal === 'ContactSupport' && (
                            <View>
                                <Text style={styles.modalTitle}>📞 Contact Support</Text>
                                <Text style={styles.input}>For any assistance, please reach out to support@peadbo.com</Text>
                                <TouchableOpacity 
                                    style={styles.modalButton}
                                    onPress={() => setIsModalVisible(false)}>
                                    <Text style={styles.modalButtonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        {activeModal === 'FAQs' && (
                            <View>
                                <Text style={styles.modalTitle}>❓ FAQs</Text>
                                <Text style={styles.input}>Find answers to your questions on our website!</Text>
                                <TouchableOpacity 
                                    style={styles.modalButton}
                                    onPress={() => setIsModalVisible(false)}>
                                    <Text style={styles.modalButtonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20 },
    header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 10, color: '#555' },
    settingItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#E5E5E5' },
    settingText: { fontSize: 16, color: '#333' },
    settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 },
    appVersion: { fontSize: 14, color: '#777' },
    modalBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    modalContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%' },
    modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    input: { borderWidth: 1, padding: 10, marginBottom: 15, borderColor: '#ddd', borderRadius: 5 },
    modalButton: { backgroundColor: '#007BFF', padding: 10, alignItems: 'center', borderRadius: 5 },
    modalButtonText: { color: '#fff', fontSize: 16 },
});

export default SettingsScreen;


