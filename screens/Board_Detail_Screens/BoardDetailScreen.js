import React, { useState, useEffect } from 'react';
import { Icon } from '@rneui/themed';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, TextInput } from 'react-native';
import RenderEvent from "../../components/RenderEvent";
import BoardMembers from '../../components/BoardMembers';
import { TextBase } from 'react-native';

const BoardDetailsScreen = ({ navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({ tabBarStyle: () => null }); // Hides back button
    }, []);
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
        { id: '1', time: '09:00', duration: '50 min', title: 'Meet with Sophia', description: 'Discuss my graduation plan', participants: ['Lucy', 'Sophia'], month:2, day:23,your:2025, finished: false},
        { id: '2', time: '11:00', duration: '60 min', title: 'School Advisor', description: 'Internship visa', participants: ['Lucy', 'Kay'], month:2, day:23,your:2025, finished: true},
        { id: '3', time: '11:00', duration: '40 min', title: 'School Advisor', description: 'Discuss my graduation plan', participants: ['Lucy', 'Kay'], month:2, day:23,your:2025, finished: false},
        { id: '4', time: '11:00', duration: '30 min', title: 'School Advisor', description: 'Internship visa', participants: ['Lucy', 'Kay'], month:2, day:23,your:2025, finished: false}
    ];

    const [selectedDate, setSelectedDate] = useState('');
    const [dateList, setDateList] = useState(mapDates( currentDay, currentDate, currentMonth));
    const [viewAll, setViewAll] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Text style={{fontSize:20}}>&lt;</Text>
                    {/* <Icon name="left" type="font-awesome" color={'gray'} size={20} /> */}
                </TouchableOpacity>
                <Text style={styles.header}>{board.title}</Text>
                <TouchableOpacity>
                    <Icon name="edit" type="font-awesome" size={20} />
                </TouchableOpacity>
            </View>
            {/* Fixed title and calendar */}
            <View>
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
                <View style={{marginBottom: 5, marginTop: 15, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.sectionTitle}>Event</Text>
                    <TouchableOpacity onPress={()=>{viewAll? setViewAll(false):setViewAll(true)}}>
                        <Text style={{fontSize:12, marginVertical: 10, color:'gray'}}>{viewAll? "View less":"View all"}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.events}>
                <FlatList
                    data={viewAll? events:events.slice(0,2)}
                    scrollEnabled={false}
                    renderItem={({ item }) => <RenderEvent item={item} navigation={navigation} />}
                    keyExtractor={(item) => item.id}
                />
                <TouchableOpacity 
                    style={styles.createEventButton}
                    onPress={async() => {}}
                >
                    <Text style={styles.createEventText}>+</Text>
                    <Text style={styles.createEventText}>Create a new board</Text>
                </TouchableOpacity>
            </ScrollView>
            <BoardMembers members={board.users}></BoardMembers>
            <TouchableOpacity style={styles.searchInput}>
                <Text style={{color:'lightgray'}}>Ask Peadbo AI...</Text>
            </TouchableOpacity>
            
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
        alignItems: 'center'
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
        fontSize: 20,
        fontWeight: 'light',
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
    searchInput: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
});

export default BoardDetailsScreen;