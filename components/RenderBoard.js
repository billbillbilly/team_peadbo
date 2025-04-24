import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RenderBoard = (props) => {
  const { item, navigation } = props;

  return (
    <TouchableOpacity
      style={styles.boardCard}
      onPress={() => navigation.navigate('BoardDetail', { board: item })}
    >
      {/* Board Header */}
      <View style={styles.boardHeader}>
        <Text style={styles.boardTitle}>{item.name || 'Untitled Board'}</Text>
        <Text
          style={[
            styles.boardType,
            item.type === 'Personal' ? {} : { backgroundColor: '#FF715B' },
          ]}
        >
          {item.type || 'General'}
        </Text>
      </View>

      {/* Board Description */}
      <Text style={styles.boardDescription}>
        {item.description || 'No description available.'}
      </Text>

      {/* User Images */}
      <View style={styles.userImages}>
        {item.users && item.users.length > 0 ? (
          item.users.map((user, index) => (
            <Image key={index} source={{ uri: user }} style={styles.userImage} />
          ))
        ) : (
          <Text style={styles.noUsersText}>No users available</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boardCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Adds shadow for Android
    borderWidth: 1,
    borderColor: '#1EA896',
  },
  boardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  boardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  boardType: {
    backgroundColor: '#f7ed92',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 12,
    color: 'black',
  },
  boardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  userImages: {
    flexDirection: 'row',
    marginTop: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  noUsersText: {
    fontSize: 12,
    color: '#999',
  },
});

export default RenderBoard;