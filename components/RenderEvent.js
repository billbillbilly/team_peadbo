import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

const RenderEvent = ({ item, navigation, onDelete }) => {
  const formatDateTime = (dateTime) => {
    if (!dateTime) return 'No Time';
    const date = new Date(dateTime);
    return date.toLocaleString(); // Format as "MM/DD/YYYY, HH:MM AM/PM"
  };

  // Check if the event has passed
  const isPastEvent = new Date(item.startDateTime) < new Date();

  return (
    <View
      style={[
        styles.eventCard,
        isPastEvent ? styles.pastEventCard : styles.upcomingEventCard,
      ]}
    >
      {/* Time Section */}
      <View style={styles.eventTimeContainer}>
        <Text
          style={[
            styles.eventTime,
            isPastEvent ? styles.pastEventText : null,
          ]}
        >
          {formatDateTime(item.startDateTime)}
        </Text>
        <Text
          style={[
            styles.eventDuration,
            isPastEvent ? styles.pastEventText : null,
          ]}
        >
          {item.allDay ? 'All Day' : `Ends: ${formatDateTime(item.endDateTime)}`}
        </Text>
      </View>

      {/* Event Details Section */}
      <View style={styles.eventDetails}>
        <TouchableOpacity
        // Uncomment this line to enable navigation to EventScreen
        //   onPress={() => navigation.navigate('EventScreen', { event: item })}
        >
          <Text
            style={[
              styles.eventTitle,
              isPastEvent ? styles.pastEventText : null,
            ]}
          >
            {item.title || 'Untitled Event'}
          </Text>
          <Text
            style={[
              styles.eventDescription,
              isPastEvent ? styles.pastEventText : null,
            ]}
          >
            {item.descriptionText || 'No Description'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Delete Button */}
        <TouchableOpacity
          onPress={() => onDelete(item.id)}
          style={styles.deleteButton}
        >
          <Icon name="trash" type="font-awesome" size={20} color="#FF715B" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  pastEventCard: {
    backgroundColor: '#F0F0F0', // Light gray for past events
  },
  pastEventText: {
    color: '#FF715B', // Red text for past events
  },
  upcomingEventCard: {
    backgroundColor: '#FFFFFF', // White for upcoming events
  },
  eventTimeContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 15,
    borderRightWidth: 2,
    borderRightColor: '#1E9278',
  },
  eventTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E9278',
    marginBottom: 5,
  },
  eventDuration: {
    fontSize: 12,
    color: '#888',
  },
  eventDetails: {
    flex: 1,
    paddingLeft: 15,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default RenderEvent;