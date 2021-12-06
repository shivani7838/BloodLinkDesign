import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {COLOR} from '../constants/colorConstants';
import StatusTopBar from '../Components/StatusTopBar';
// import { ScrollView } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusTopBar />
      <View style={styles.profile}>
        <View>
          <Avatar
            rounded
            style={{height: height * 0.16, width: width * 0.3}}
            size="xlarge"
            source={{
              uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
            }}
          />
        </View>
        <View>
          <Text style={styles.profileName}>Ramu kumar</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.profileDeatils}>
          <View style={styles.profileCon}>
            <View style={styles.imgCon}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/bloodDrop.png')}
              />
              <Text style={styles.profileDeatilsTitle}>Blood Group</Text>
            </View>
            <Text style={styles.profileDeatil}>O Positive</Text>
          </View>

          <View style={styles.profileCon}>
            <View style={styles.imgCon}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/phone.png')}
              />
              <Text style={styles.profileDeatilsTitle}>Contact</Text>
            </View>
            <Text style={styles.profileDeatil}>+91 5674764351</Text>
          </View>
          <View style={styles.profileCon}>
            <View style={styles.imgCon}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/location1.png')}
              />
              <Text style={styles.profileDeatilsTitle}>Address</Text>
            </View>
            <View
              style={{
                width: width * 0.5,
              }}>
              <Text style={styles.profileDeatil}>
                Greater Noida, Uttar Praesh
              </Text>
            </View>
          </View>
          <View style={styles.profileCon}>
            <View style={styles.imgCon}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/handshake.png')}
              />
              <Text style={styles.profileDeatilsTitle}>Ready to Donate</Text>
            </View>
            <Text style={styles.profileDeatil}>O Positive</Text>
          </View>
          <View style={styles.profileCon}>
            <Text style={[styles.profileDeatilsTitle, {color: COLOR.PRIMARY}]}>
              Sign Out
            </Text>

            <Image
              style={styles.icon}
              source={require('../assets/icons/right-arrow.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '3%',
    // paddingVertical:'0%',
    backgroundColor: COLOR.WHITE,
  },
  profile: {
    backgroundColor: 'rgba(254,230,230,255)',
    alignItems: 'center',
    borderRadius: 100 / 10,
    marginHorizontal: width * 0.03,
    paddingVertical: height * 0.036,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  profileName: {
    color: COLOR.SPLASH,
    fontSize: width * 0.065,
    fontWeight: 'bold',
    paddingTop: height * 0.02,
    textTransform: 'capitalize',
  },
  profileDeatils: {
    backgroundColor: COLOR.WHITE,
    marginVertical: height * 0.036,
    // paddingVertical: height * 0.036,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  profileCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.025,
    borderBottomWidth: 2,
    borderColor: COLOR.DROPDOWNBG,
  },
  profileDeatilsTitle: {
    fontSize: width * 0.05,
    color: COLOR.GRAY,
    paddingRight: width * 0.13,
  },
  profileDeatil: {
    fontSize: width * 0.05,
  },
  imgCon: {
    flexDirection: 'row',
  },
  icon: {
    height: height * 0.04,
    width: width * 0.07,
    marginRight: width * 0.03,
  },
});
