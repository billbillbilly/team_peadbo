import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import * as Contacts from 'expo-contacts';

const PRIMARY_COLOR = '#1EA896';

const AdvisorSelectionScreen = ({ navigation }) => {
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
            onPress={() => setSelectedAdvisor(item.id)}
        >
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
            onPress={() => setSelectedContact(item.id)}
        >
            <View style={styles.contactContent}>
                <View style={styles.contactAvatar} />
                <Text style={styles.contactName}>{item.name || "Unnamed Contact"}</Text>
            </View>
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
        <View style={styles.container}>
            {/* Progress Bar */}
            <View style={styles.progressBarContainer}>
                {['1', '2', '3', '4', '5'].map((step, index) => (
                    <View
                        key={index}
                        style={[
                            styles.step,
                            index === 2 ? styles.activeStep :
                            index < 2 ? styles.completedStep : styles.incompleteStep
                        ]}
                    >
                        <Text style={styles.stepText}>{step}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.title}>Invite Board Member</Text>
            <Text style={styles.subtitle}>
                Who would you like to invite to your board? You can invite from your contact, or AI can match for you.
            </Text>

            <View style={styles.tabsContainer}>
                <TouchableOpacity
                    style={activeTab === 'AI Match' ? styles.activeTab : styles.inactiveTab}
                    onPress={() => setActiveTab('AI Match')}
                >
                    <Text style={styles.tabText}>AI Match</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={activeTab === 'Invite from Contact' ? styles.activeTab : styles.inactiveTab}
                    onPress={() => setActiveTab('Invite from Contact')}
                >
                    <Text style={styles.tabText}>Invite from Contact</Text>
                </TouchableOpacity>
            </View>

            {activeTab === 'Invite from Contact' && (
                <FlatList
                    data={contacts}
                    renderItem={renderContacts}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            )}

            {activeTab === 'AI Match' && (
                <FlatList
                    data={advisors}
                    renderItem={renderAdvisors}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            )}

            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { fontSize: 14, color: 'gray', marginBottom: 20 },
    progressBarContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    step: { width: 30, height: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
    activeStep: { backgroundColor: PRIMARY_COLOR },
    completedStep: { backgroundColor: PRIMARY_COLOR },
    incompleteStep: { backgroundColor: '#E0E0E0' },
    stepText: { color: '#FFF', fontWeight: 'bold' },
    tabsContainer: { flexDirection: 'row', marginBottom: 20 },
    activeTab: { flex: 1, padding: 10, backgroundColor: PRIMARY_COLOR, borderRadius: 8, marginRight: 5 },
    inactiveTab: { flex: 1, padding: 10, backgroundColor: '#F0F0F0', borderRadius: 8, marginLeft: 5 },
    tabText: { textAlign: 'center', color: '#FFF' },
    card: { flexDirection: 'row', padding: 15, backgroundColor: '#FFF', borderRadius: 10, marginBottom: 15, alignItems: 'center' },
    avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
    cardInfo: { flex: 1 },
    name: { fontSize: 16, fontWeight: 'bold' },
    description: { fontSize: 12, color: 'gray' },
    tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
    tag: { backgroundColor: '#F0F0F0', padding: 5, borderRadius: 5, marginRight: 5, marginBottom: 5 },
    selectedCard: { borderColor: PRIMARY_COLOR, borderWidth: 2 },
    nextButton: { backgroundColor: PRIMARY_COLOR, padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
    nextButtonText: { color: '#FFF', fontSize: 16 },

    // Contact UI enhancements
    contactCard: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    contactContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E0E0E0',
        marginRight: 10
    },
    contactName: {
        fontSize: 16
    }
});

export default AdvisorSelectionScreen;









