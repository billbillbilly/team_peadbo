import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@rneui/themed';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import RenderTask from '../../components/RenderTasks';
import RenderEvent from '../../components/RenderEvent';
import BoardMembers from '../../components/BoardMembers';
import RenderHorizontalCalender from '../../components/RenderHorizontalCalender';
import { deleteBoard, fetchTasks, deleteTask, fetchEvents, deleteEvent } from '../../Reducer';

const BoardDetailsScreen = ({ navigation, route }) => {
    const { board } = route.params;
    const dispatch = useDispatch();
    const calendar = useRef(null);

    const [tasks, setTasks] = useState([]);
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [dateList, setDateList] = useState([]);
    const [viewAll, setViewAll] = useState(false);

    const weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const today = new Date();
    const currentDay = today.getDay();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();

    useEffect(() => {
        setDateList(mapDates(currentDay, currentDate, currentMonth, currentYear, events));

        const fetchBoardTasks = async () => {
            try {
                const fetchedTasks = await fetchTasks(board.id);
                setTasks(fetchedTasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
                Alert.alert('Error', 'Failed to fetch tasks. Please try again.');
            }
        };

        const fetchBoardEvents = async () => {
            try {
                const fetchedEvents = await fetchEvents(board.id);
                const sortedEvents = fetchedEvents.sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime));
                setEvents(sortedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
                Alert.alert('Error', 'Failed to fetch events. Please try again.');
            }
        };

        fetchBoardEvents();
        fetchBoardTasks();
    }, [board.id]);

    const mapDates = (currentDay, currentDate, currentMonth, currentYear, events) => {
        let dates = [];
        const firstDayOfWeek = currentDate - (currentDay - 1); // Calculate the first day of the week (Monday)
    
        for (let i = 0; i < 7; i++) {
            const tempDate = new Date(currentYear, currentMonth - 1, firstDayOfWeek + i); // Adjust for month (0-indexed)
            const hasEvent = events.some(event => {
                const eventDate = new Date(event.startDateTime);
                return (
                    eventDate.getFullYear() === tempDate.getFullYear() &&
                    eventDate.getMonth() === tempDate.getMonth() &&
                    eventDate.getDate() === tempDate.getDate()
                );
            });
    
            dates.push({
                month: tempDate.getMonth() + 1, // Convert back to 1-indexed month
                day: tempDate.getDate(),
                year: tempDate.getFullYear(),
                event: hasEvent, // Set to true if an event matches this date
            });
        }
    
        return dates;
    };

    const checkEventDate = (events, m, d, y) => {
        return events.some(e => `${e.month}-${e.day}-${e.year}` === `${m}-${d}-${y}`);
    };

    const handleDeleteTask = async (taskId) => {
        Alert.alert(
            'Delete Task',
            'Are you sure you want to delete this task?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deleteTask(taskId);
                            setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
                        } catch (error) {
                            console.error('Error deleting task:', error);
                            Alert.alert('Error', 'Failed to delete the task. Please try again.');
                        }
                    },
                },
            ]
        );
    };

    const handleDeleteEvent = async (eventId) => {
        Alert.alert(
            'Delete Event',
            'Are you sure you want to delete this event?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deleteEvent(eventId);
                            setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
                        } catch (error) {
                            console.error('Error deleting event:', error);
                            Alert.alert('Error', 'Failed to delete the event. Please try again.');
                        }
                    },
                },
            ]
        );
    };

    const handleDeleteBoard = () => {
        Alert.alert(
            'Delete Board',
            'Are you sure you want to delete this board? This action cannot be undone.',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(deleteBoard(board.id));
                        navigation.navigate('HomeScreen');
                    },
                },
            ]
        );
    };

    const eventTemplate = {
        id: '-1',
        time: '',
        duration: '',
        title: 'Add Event Title',
        description: '',
        participants: [],
        month: 0,
        day: 0,
        year: 0,
        finished: false,
        todos: [],
    };

    const taskTemplate = {
        id: '-1',
        title: 'Add Task Title',
        description: '',
        dueDateTime: '',
        priority: 'Normal',
        status: 'Pending',
        boardID: board.id,
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" type="font-awesome" size={20} color="#1E9278" />
                </TouchableOpacity>
                <Text style={styles.header}>{board.title}</Text>
                <TouchableOpacity>
                    <Icon name="edit" type="font-awesome" size={20} />
                </TouchableOpacity>
            </View>

            <View>
                {/* Weekday Labels */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    {weekday.map((day, index) => (
                        <View key={index} style={{ alignItems: 'center', flex: 1 }}>
                            <Text style={styles.dayText}>{day}</Text>
                        </View>
                    ))}
                </View>

                {/* Dates */}
                <ScrollView
                    ref={calendar}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    decelerationRate="fast"
                    pagingEnabled
                    contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}
                >
                    {dateList.map((date, index) => (
                        <View key={index} style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => setSelectedDate(`${date.year}-${date.month}-${date.day}`)}
                                style={[
                                    styles.dateItem,
                                    selectedDate === `${date.year}-${date.month}-${date.day}` && styles.selectedDate,
                                    date.event && styles.eventDate, // Apply green background if an event exists
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.dateText,
                                        selectedDate === `${date.year}-${date.month}-${date.day}` && { color: '#fff' },
                                    ]}
                                >
                                    {date.day}
                                </Text>
                                {date.event && <View style={styles.dateEventIndicator} />}
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <ScrollView style={styles.events}>
                <FlatList
                    data={viewAll ? events : events.slice(0, 2)}
                    scrollEnabled={false}
                    renderItem={({ item }) => <RenderEvent item={item} navigation={navigation} onDelete={handleDeleteEvent} />}
                    keyExtractor={(item) => item.id}
                />
                <TouchableOpacity
                    style={styles.createEventButton}
                // Uncomment when you have the EventScreen ready
                // onPress={() => navigation.navigate('EventScreen', { event: eventTemplate })}
                >
                    <Text style={styles.createEventText}>+</Text>
                    <Text style={styles.createEventText}>Create a new event</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.tasksSection}>
                <View style={styles.tasksHeader}>
                    <Text style={styles.sectionTitle}>Tasks</Text>
                </View>
                <FlatList
                    data={viewAll ? tasks : tasks.slice(0, 3)}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <RenderTask item={item} onDelete={handleDeleteTask} />}
                    ListEmptyComponent={() => <Text style={styles.emptyText}>No tasks available for this board.</Text>}
                />
                <TouchableOpacity
                    style={styles.createTaskButton}
                    // Uncomment when you have the TaskScreen ready
                    // onPress={() => navigation.navigate('TaskScreen', { task: taskTemplate })}
                >
                    <Text style={styles.createTaskText}>+</Text>
                    <Text style={styles.createTaskText}>Create a new task</Text>
                </TouchableOpacity>
            </View>

            <BoardMembers members={board.members?.items || []} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        padding: 20,
    },
    headerSection: {
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
    },
    dayText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        marginBottom: 5,
    },
    eventDate: {
        backgroundColor: '#DDF2EF', // Green background for dates with events
    },
    dateItem: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 5,
        backgroundColor: '#F9F9F9',


    },
    selectedDate: {
        backgroundColor: '#1E9278',
        color: '#fff',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    dateEventIndicator: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#1E9278',
        marginTop: 5,
    },
    events: {
        marginTop: 20,
    },
    createEventButton: {
        alignItems: 'center',
        padding: 25,
        borderRadius: 15,
        marginBottom: 15,
        backgroundColor: '#F9F9F9',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'lightgrey',
    },
    createEventText: {
        color: 'lightgrey',
    },
    tasksSection: {
        marginTop: 20,
    },
    tasksHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    createTaskButton: {
        alignItems: 'center',
        padding: 25,
        borderRadius: 15,
        marginBottom: 15,
        backgroundColor: '#F9F9F9',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'lightgrey',
    },
    createTaskText: {
        color: 'lightgrey',
    },
    emptyText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 16,
        marginVertical: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'light',
    },
});

export default BoardDetailsScreen;