import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadProfileSettings, updateProfileSetting } from '../Reducer';

function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const profileSettings = useSelector((state) => state.user.profileSettings);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(loadProfileSettings());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual user image
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>{currentUser.displayName || "User Name"}</Text>
        <Text style={styles.profileEmail}>{currentUser.email || "user@example.com"}</Text>
      </View>

      {/* About Section with Tags */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About</Text>
        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>UI Design</Text>
          <Text style={styles.tag}>Projects</Text>
          <Text style={styles.tag}>Management</Text>
        </View>
        <Text style={styles.aboutText}>
          Balabala... xxx xxx xxx xxxx xxxxxx, xxxx xx xxxx xxx xxx, xxxxxxx xxxxx.
        </Text>
      </View>

      {/* Profile Menu List */}
      <View style={styles.menuList}>
        <MenuItem title="Upgrade the Plan" />
        <MenuItem title="My Peadbo" />
        <MenuItem title="Settings" onPress={() => navigation.navigate('Settings')} />
        <MenuItem title="Billing" />
        <MenuItem title="Notifications" onPress={() => navigation.navigate('Notifications')} />
        <MenuItem title="Help" />
        <MenuItem title="FAQ" />
        <MenuItem title="Contact Support" />
        <MenuItem title="Logout" isLogout />
      </View>

      {/* Profile Settings */}
      <View style={styles.settingsSection}>
        <View style={styles.settingRow}>
          <Text>Enable Notifications</Text>
          <Switch 
            value={profileSettings.notificationsEnabled} 
            onValueChange={(value) => dispatch(updateProfileSetting({ key: 'notificationsEnabled', value }))}
          />
        </View>

        <View style={styles.settingRow}>
          <Text>Dark Mode</Text>
          <Switch 
            value={profileSettings.darkMode} 
            onValueChange={(value) => dispatch(updateProfileSetting({ key: 'darkMode', value }))}
          />
        </View>
      </View>
    </View>
  );
}

// Menu Item Component for reusability
const MenuItem = ({ title, onPress, isLogout }) => (
  <TouchableOpacity style={[styles.menuItem, isLogout && styles.logout]} onPress={onPress}>
    <Text style={[styles.menuText, isLogout && styles.logoutText]}>{title}</Text>
  </TouchableOpacity>
);

// Styles
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
  aboutSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
    fontSize: 12,
    color: '#555',
  },
  aboutText: {
    fontSize: 14,
    color: '#777',
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
  settingsSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
});

export default ProfileScreen;
