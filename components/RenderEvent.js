import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';

const RenderEvent = (props) => {
  const { item, navigation } = props;
  return (
    <View style={styles.eventCard}>
        <View style={[styles.eventTimeContainer, item.finished? {}:{borderLeftColor:'#FF6B6B'}]}>
            <Text style={styles.eventTime}>{item.time}</Text>
            <Text style={styles.eventDuration}>{item.duration}</Text>
        </View>
        <View style={styles.eventDetails}>
            <TouchableOpacity onPress={() => {}}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDescription}>{item.description}</Text>
            <Text style={styles.eventParticipants}>{item.participants.join(', ')}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    eventCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        margintop: 5,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 0.1,
        shadowOffset: {
        width: 0,
        height: 2,
        },
    },
    eventTimeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#1E9278',
    },
    eventTime: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    eventDuration: {
        fontSize: 12,
        color: '#888',
    },
    eventDetails: {
        paddingLeft: 15,
        flex: 1,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    eventDescription: {
        fontSize: 14,
        color: '#666',
        marginVertical: 4,
    },
    eventParticipants: {
        fontSize: 12,
        color: '#888',
    }
});

export default RenderEvent;