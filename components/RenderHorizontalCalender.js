import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RenderHorizontalCalender = ({ events, dateList, selectedDate, setSelectedDate, styles, m, d, y }) => {
    // Function to split array into 3 chunks
    const chunkArray = (array, chunkSize) => {
        return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
            array.slice(index * chunkSize, index * chunkSize + chunkSize)
        );
    };

    // Split the date list into three rows
    const chunkedDates = chunkArray(dateList, Math.ceil(dateList.length / 3));

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {chunkedDates.map((group, groupIndex) => (
                <View key={groupIndex} style={{flex:1, flexDirection: 'row'}}>
                    {group.map((date, index) => (
                        <TouchableOpacity 
                            key={index} 
                            onPress={() => {setSelectedDate(`${date.day}`) 
                        console.log(date.event)}}
                            style={{ alignItems: 'center', width:53}}
                        >
                            <Text style={[
                                styles.dateText, 
                                styles.dateItem, 
                                selectedDate === `${date.day}` || `${date.month}-${date.day}-${date.year}` === `${m}-${d}-${y}`&& styles.selectedDate
                            ]}>
                                {date.day}
                            </Text>
                            <Text style={date.event?styles.dateEventItem:{}}>{date.event?".":""}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};

export default RenderHorizontalCalender;
