import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadProfileSettings, updateProfileSetting } from '../Reducer';

function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const profileSettings = useSelector((state) => state.user.profileSettings);
  const currentUser = useSelector((state) => state.user.currentUser);
  
  useEffect(() => {
    dispatch(loadProfileSettings());
  }, [dispatch]);

  console.log('Current User:', currentUser);

// Logout Handler Function


  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>{currentUser?.name}</Text>
        <Text style={styles.profileEmail}>{currentUser?.email || "user@example.com"}</Text>
      </View>

      {/* Profile Menu List */}
      <View style={styles.menuList}>
        <MenuItem title="Upgrade the Plan" onPress={() => navigation.navigate('UpgradePlan')} />
        <MenuItem title="My Peadbo" />

        <MenuItem title="Settings" onPress={() => navigation.navigate('Settings')} />
        <MenuItem title="Billing" onPress={() => navigation.navigate('Billing')} />
        <MenuItem title="Notifications" onPress={() => navigation.navigate('Notifications')} />
        <MenuItem title="Contact Support" onPress={() => navigation.navigate('ContactSupport')} />

        {/* Logout Button */}
        <MenuItem title="Logout" isLogout onPress={handleLogout} />
      </View>
    </ScrollView>
  );
}

// Menu Item Component for reusability
const MenuItem = ({ title, onPress, isLogout }) => (
  <TouchableOpacity style={[styles.menuItem, isLogout && styles.logout]} onPress={onPress}>
    <Text style={[styles.menuText, isLogout && styles.logoutText]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D3D3D3',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  menuList: {
    padding: 10,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  logout: {
    marginTop: 10,
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;






