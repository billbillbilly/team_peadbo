import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BoardMembers = ({ members }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Board Member</Text>
            <FlatList
                data={[...members, { addButton: true }]} // Last item is the add button
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    item.addButton ? (
                        <TouchableOpacity style={styles.addMemberButton} onPress={()=>{}}>
                            <Text style={styles.addText}>+</Text>
                        </TouchableOpacity>
                    ) : (
                        <Image source={{ uri: item }} style={styles.memberAvatar} />
                    )
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    memberAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    addMemberButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderStyle: 'dashed',
    },
    addText: {
        fontSize: 24,
        color: '#999',
    },
});

export default BoardMembers;