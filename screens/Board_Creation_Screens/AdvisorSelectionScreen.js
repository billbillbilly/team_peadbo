import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Contacts from 'expo-contacts';
import Icon from 'react-native-vector-icons/Ionicons';

const AdvisorSelectionScreen = ({ navigation }) => {
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedContact, setSelectedContact] = useState(null);
    const [selectedAdvisor, setSelectedAdvisor] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [advisors, setAdvisors] = useState([
        {
            id: '1',
            name: 'David Carter',
            description: 'David is good at B2B projects, and has over 10 years of experience.',
            tags: ['Design', 'Project', 'Leadership'],
            photo: 'https://via.placeholder.com/50'
        },
        {
            id: '2',
            name: 'Sophia Bennett',
            description: 'Sophia has 7 years of advisor work experience.',
            tags: ['Advisor', 'Networking'],
            photo: 'https://via.placeholder.com/50'
        },
        {
            id: '3',
            name: 'Emma Hayes',
            description: 'Emma has her own job-hunting company.',
            tags: ['Design', 'Project', 'Leadership'],
            photo: 'https://via.placeholder.com/50'
        }
    ]);
    const [activeTab, setActiveTab] = useState('AI Match');

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name]
                });
                if (data.length > 0) {
                    setContacts(data);
                }
            }
        })();
    }, []);

    const renderAdvisors = ({ item }) => (
        <TouchableOpacity 
            style={[styles.card, selectedAdvisor === item.id && styles.selectedCard]} 
            onPress={() => setSelectedAdvisor(item.id)}>
            <Image source={{ uri: item.photo }} style={styles.avatar} />
            <View style={styles.cardInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.tagsContainer}>
                    {item.tags.map((tag, index) => (
                        <Text key={index} style={styles.tag}>{tag}</Text>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderContacts = ({ item }) => (
        <TouchableOpacity 
            style={[styles.contactCard, selectedContact === item.id && styles.selectedCard]} 
            onPress={() => setSelectedContact(item.id)}>
            <Text style={styles.contactName}>{item.name || "Unnamed Contact"}</Text>
        </TouchableOpacity>
    );

    const handleNext = () => {
        if (selectedContact || selectedAdvisor) {
            navigation.navigate('CreateInvitationScreen');
        } else {
            alert('Please select an Advisor or Contact first.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Progress Bar */}
            <View style={styles.progressBarContainer}>
                {['1', '2', '3', '4', '5'].map((step, index) => (
                    <View key={index} style={[styles.step, index === 2 ? styles.activeStep : index < 2 ? styles.completedStep : styles.incompleteStep]}>
                        <Text style={styles.stepText}>{step}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.title}>Invite Board Member</Text>
            <Text style={styles.subtitle}>Who would you like to invite to your board? You can invite from your contact, or AI can match for you.</Text>
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={activeTab === 'AI Match' ? styles.activeTab : styles.inactiveTab} onPress={() => setActiveTab('AI Match')}>
                    <Text style={styles.tabText}>AI Match</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeTab === 'Invite from Contact' ? styles.activeTab : styles.inactiveTab} onPress={() => setActiveTab('Invite from Contact')}>
                    <Text style={styles.tabText}>Invite from Contact</Text>
                </TouchableOpacity>
            </View>

            {activeTab === 'Invite from Contact' && (
                <FlatList
                    data={contacts}
                    renderItem={renderContacts}
                    keyExtractor={item => item.id}
                    style={styles.list}
                />
            )}

            {activeTab === 'AI Match' && (
                <FlatList
                    data={advisors}
                    renderItem={renderAdvisors}
                    keyExtractor={item => item.id}
                    style={styles.list}
                />
            )}

            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { fontSize: 14, color: 'gray', marginBottom: 20 },
    progressBarContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    step: { width: 30, height: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
    activeStep: { backgroundColor: '#00A86B' },
    completedStep: { backgroundColor: '#00A86B' },
    incompleteStep: { backgroundColor: '#E0E0E0' },
    stepText: { color: '#FFF', fontWeight: 'bold' },
    tabsContainer: { flexDirection: 'row', marginBottom: 20 },
    activeTab: { flex: 1, padding: 10, backgroundColor: '#00A86B', borderRadius: 8, marginRight: 5 },
    inactiveTab: { flex: 1, padding: 10, backgroundColor: '#F0F0F0', borderRadius: 8, marginLeft: 5 },
    tabText: { textAlign: 'center', color: '#FFF' },
    card: { flexDirection: 'row', padding: 15, backgroundColor: '#FFF', borderRadius: 10, marginBottom: 15, alignItems: 'center' },
    avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
    cardInfo: { flex: 1 },
    name: { fontSize: 16, fontWeight: 'bold' },
    description: { fontSize: 12, color: 'gray' },
    tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
    tag: { backgroundColor: '#F0F0F0', padding: 5, borderRadius: 5, marginRight: 5, marginBottom: 5 },
    selectedCard: { borderColor: '#00A86B', borderWidth: 2 },
    nextButton: { backgroundColor: '#00A86B', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
    nextButtonText: { color: '#FFF', fontSize: 16 }
});

export default AdvisorSelectionScreen;







