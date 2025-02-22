import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const BoardDetailsScreen = ({ navigation, route }) => {
    const { board } = route.params;
    // Get today's date and weekday
    const weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let today = new Date();
    let currentDay = today.getDay();
    let currentWeekday = weekday[currentDay];
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const currentDate = today.getDate();

    const { screenWidth } = Dimensions.get('window');

    const mapDates = (cDay, cDate, cMonth) => {
        let dates = [];
        for (let i = 0; i < 7; i++) {
            if (i < cDay) {
                let temp = cDate - (cDay - i)+1;
                if (cMonth === '01' || cMonth === '03' || cMonth === '05' || cMonth === '07' || cMonth === '08' || cMonth === '10' || cMonth === '12') {
                    dates.push(temp > 0 ? temp: 31 + temp);
                } else if (cMonth === '02') {
                    dates.push(temp > 0 ? temp: 28 + temp);
                } else { 
                    dates.push(temp > 0 ? temp: 30 + temp);
                }
            } else {
                let temp = cDate + (i - cDay)+1;
                if (cMonth === '01' || cMonth === '03' || cMonth === '05' || cMonth === '07' || cMonth === '08' || cMonth === '10' || cMonth === '12') {
                    dates.push(temp < 32 ? temp: temp - 31);
                } else if (cMonth === '02') {
                    dates.push(temp < 29 ? temp: temp - 28);
                } else { 
                    dates.push(temp < 31 ? temp: temp - 30);
                }
            }
        }
        // Add 7 days before the first day in dates
        const firstDate = dates[0];
        for (let i = 1; i <= 7; i++) {
            let temp = firstDate - i;
            if (cMonth === '01' || cMonth === '03' || cMonth === '05' || cMonth === '07' || cMonth === '08' || cMonth === '10' || cMonth === '12') {
            dates.unshift(temp > 0 ? temp : 31 + temp);
            } else if (cMonth === '02') {
            dates.unshift(temp > 0 ? temp : 28 + temp);
            } else {
            dates.unshift(temp > 0 ? temp : 30 + temp);
            }
        }

        // Add 7 days after the last day in dates
        const lastDate = dates[dates.length - 1];
        for (let i = 1; i <= 7; i++) {
            let temp = lastDate + i;
            if (cMonth === '01' || cMonth === '03' || cMonth === '05' || cMonth === '07' || cMonth === '08' || cMonth === '10' || cMonth === '12') {
            dates.push(temp < 32 ? temp : temp - 31);
            } else if (cMonth === '02') {
            dates.push(temp < 29 ? temp : temp - 28);
            } else {
            dates.push(temp < 31 ? temp : temp - 30);
            }
        }
        return dates;
    };
    // will be replaced with API call
    const events = [
        { id: '1', time: '09:00', duration: '50 min', title: 'Meet with Sophia', description: 'Discuss my graduation plan', participants: ['Lucy', 'Sophia'] },
        { id: '2', time: '11:00', duration: '60 min', title: 'School Advisor', description: 'Internship visa', participants: ['Lucy', 'Kay'] },
        { id: '3', time: '11:00', duration: '40 min', title: 'School Advisor', description: 'Internship visa', participants: ['Lucy', 'Kay'] },
        { id: '4', time: '11:00', duration: '30 min', title: 'School Advisor', description: 'Internship visa', participants: ['Lucy', 'Kay'] }
    ];

    const [selectedDate, setSelectedDate] = useState('');
    const [dateList, setDateList] = useState(mapDates( currentDay, currentDate, currentMonth));

    return (
        <View style={styles.container}>
            {/* Fixed title and calendar */}
            <View style={styles.fixedHeader}>
                <Text style={styles.header}>{board.title}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center',}}>
                    {weekday.map((day, index) => (
                        <View key={index} style={{alignItems: 'center', textAlign:'center'}}>
                            <Text style={[styles.dayText, {paddingLeft:10, paddingRight:10}]}>{weekday[index]}</Text>         
                        </View>
                    ))}
                </View>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false} 
                    decelerationRate={"fast"}
                    pagingEnabled
                    snapToInterval={screenWidth/7}
                    contentInset={{top: 0, left: 100, bottom: 0, right: 100,}}
                >
                    {dateList.map((day, index) => (
                        <TouchableOpacity 
                            key={index} 
                            onPress={() => {setSelectedDate(`${day}`) 
                        console.log(today.getDate())}}
                            style={{alignItems: 'center'}}
                        >
                            <Text style={[styles.dateText, styles.dateItem, selectedDate === `${day}` && styles.selectedDate]}>{day}</Text>
                            <Text style={[styles.dateEventItem]}>.</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={{marginBottom: 10}}>
                    <Text style={styles.sectionTitle}>Event</Text>
                </View>
                
            </View>

            <View style={styles.events}>
                <FlatList
                    data={events}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.event} onPress={() => navigation.navigate('EventDetail', { event: item })}>
                            <Text style={styles.eventTime}>{item.time}</Text>
                            <View style={styles.eventInfo}>
                                <Text style={styles.eventTitle}>{item.title}</Text>
                                <Text style={styles.eventDescription}>{item.description}</Text>
                                <Text style={styles.eventParticipants}>{item.participants.join(', ')}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        padding: 20,
    },
    fixedHeader: {
        backgroundColor: '#F9F9F9',
        borderBottomColor: '#DDD',
        paddingBottom: 0,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
    },
    horizontalCalendar: {
        flexDirection: 'row',
        marginBottom: 15,
        alignContent: 'center',
        // justifyContent: 'space-between',
    },
    dateItem: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 100,
    },
    dateEventItem: {
        backgroundColor: '#1E9278',
        color: '#1E9278',
        marginTop: 5,
        padding: 1,
        borderRadius: 2,
        fontSize: 1,
    },
    selectedDate: {
        backgroundColor: '#1E9278',
        color: '#fff',
    },
    dayText: {
        fontSize: 14,
        color: '#999',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    scrollContent: {
        flex: 1,
        padding: 10,
        paddingTop: 0,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        marginBottom: 10,
    },
    status: {
        color: 'green',
        fontWeight: 'bold',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    eventCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    eventTime: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    eventDescription: {
        fontSize: 14,
        color: '#666',
    },
    collaboratorsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    collaborator: {
        alignItems: 'center',
        marginRight: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginBottom: 5,
    },
    toDoItem: {
        fontSize: 16,
        marginVertical: 4,
    },
    notesText: {
        fontSize: 14,
        color: '#555',
        marginTop: 10,
    }
});

export default BoardDetailsScreen;