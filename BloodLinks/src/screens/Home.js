import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ColorPropType,
} from 'react-native';

import StatusTopBar from '../Components/StatusTopBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconn from 'react-native-vector-icons/MaterialIcons';
// import {SearchBar} from 'react-native-elements';
import {Avatar} from 'react-native-elements';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {COLOR} from '../constants/colorConstants';
const {width, height} = Dimensions.get('window');
const DATA = [
  {
    id: '1',
    title: 'Data Structures',
  },
  {
    id: '2',
    title: 'STL',
  },
  {
    id: '3',
    title: 'C++',
  },
  {
    id: '4',
    title: 'Java',
  },
  {
    id: '5',
    title: 'Python',
  },
  {
    id: '6',
    title: 'CP',
  },
  {
    id: '7',
    title: 'ReactJs',
  },
  {
    id: '8',
    title: 'NodeJs',
  },
  {
    id: '9',
    title: 'MongoDb',
  },
  {
    id: '10',
    title: 'ExpressJs',
  },
  {
    id: '11',
    title: 'PHP',
  },
  {
    id: '12',
    title: 'MySql',
  },
  {
    id: '13',
    title: 'MySql',
  },
  {
    id: '14',
    title: 'MySql',
  },
  {
    id: '15',
    title: 'MySql',
  },
];

const HOME = props => {
  const [showFilter, setShowFilter] = useState();
  const navigation = props.navigation;
  const renderItem = ({item}) => (
    <View style={styles.body}>
      <View style={styles.bodyContent}>
        <View style={styles.bodyContentImage}>
          <Avatar
            rounded
            size="large"
            source={{
              uri: 'https://bebopbusiness.no/wp-content/uploads/2016/12/spearker_8-300x300.jpg',
            }}
          />
        </View>
        <View style={styles.bodyTextContainer}>
          <Text style={styles.bodyText}>Ramu fsdefds fgfdsg </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.location}
              source={require('../assets/icons/location.png')}
            />
            <Text style={{fontSize: 13, color: 'gray'}}>Singapore </Text>
          </View>
          {/* <View style={{flexDirection:'row',marginTop:15}}> */}
          <TouchableOpacity
            style={styles.askForHelpBody}
            onPress={() => navigation.navigate('BloodBankList')}>
            <Text style={styles.bodyBtnText}>Ask For Help </Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
        <View style={styles.circle}>
          <TouchableOpacity>
            <Text style={styles.selectBgTxt}>A+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: height * 0.05,
          backgroundColor: '#bb303a',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 17, color: 'white'}}>
          Last Date of Donation 21 Feb 2018
        </Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView>
      <StatusTopBar />
      <View style={styles.container}>
        <View style={styles.homeHeader}>
          <View style={styles.homeSearchHeader}>
            {/* <TouchableOpacity style={styles.heardingArrow}>
              <Image
                style={styles.heardingArrowImg}
                source={require('../assets/icons/notification.png')}
              />
            </TouchableOpacity> */}
            <View style={styles.headerContent}>
              <TouchableOpacity>
                <Image
                  style={styles.heardingSearch}
                  source={require('../assets/icons/search.png')}
                />
              </TouchableOpacity>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  style={styles.headerBtn}
                  onPress={() => navigation.navigate('SearchServices')}>
                  <Text style={{color: '#85060F'}}>Nearby Blood Bank</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView></ScrollView>
          <View>
            <View style={styles.seeDonor}>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: width * 0.038,
                    fontWeight: '600',
                  }}>
                  Request for Blood Donation
                </Text>
                {/* <Text style={{color: 'white'}}>Donor</Text> */}
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  style={styles.headerBtn}
                  onPress={() => navigation.navigate('BecomeDonor')}>
                  <Text style={{color: '#85060F'}}>DONOR</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.seeDonor}>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: width * 0.038,
                    fontWeight: '600',
                  }}>
                  Request for Blood Issue
                </Text>
                {/* <Text style={{color: 'white'}}>Request</Text> */}
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  style={styles.headerBtn}
                  onPress={() => navigation.navigate('RequestForBlood')}>
                  <Text style={{color: '#85060F'}}>REQUEST</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.hearding}>
          <View style={styles.explore}>
            <Text style={styles.heardingTxt}>Explore all donors</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
              <Image
                style={styles.headerFiltter}
                source={require('../assets/icons/filter.png')}
              />
            </TouchableOpacity>
            {showFilter ? (
              <View style={styles.filter}>
                <Text style={styles.filterTxt}>Blood Donor</Text>
                <Text style={styles.filterTxt}>Blood Request</Text>
                <Text style={styles.filterTxt}>View All</Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={{height: height * 0.9}}>
          {/* <ScrollView nestedScrollEnabled={true}> */}
          <FlatList
            data={DATA}
            key={'-'}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          {/* </ScrollView> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HOME;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: height * 1,
  },
  hearding: {
    alignItems: 'center',
    height: height * 0.09,
    paddingHorizontal: width * 0.09,
    flexDirection: 'row',
    // elevation: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 8,
    // },
    // shadowOpacity: 0.7,
    // shadowRadius: 8,
    justifyContent: 'space-between',
    backgroundColor: COLOR.WHITE,
    position: 'relative',
    zIndex: 1000,
  },

  homeHeader: {
    height: height * 0.36,
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.02,
    // margin:height * 0.3,
    // borderWidth: 0.3,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // margin: 10,
  },
  homeSearchHeader: {
    flexDirection: 'row',
    marginBottom: height * 0.03,
    alignItems: 'center',
  },
  headerBtn: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    borderRadius: 30,
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    height: height * 0.018,
    width: width * 0.037,
    alignSelf: 'center',
  },
  seeDonor: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.003,
    marginHorizontal: height * 0.008,
    paddingHorizontal: width * 0.08,
    paddingVertical: height * 0.03,
    borderRadius: 100 / 20,
  },
  heardingTxt: {
    fontSize: width * 0.05,
    fontWeight: '400',
  },
  heardingArrow: {
    height: height * 0.04,
    width: width * 0.12,
  },
  heardingArrowImg: {
    height: height * 0.05,
    width: width * 0.1,
    alignSelf: 'flex-end',
    // marginLeft: width * 0.05,
  },
  heardingSearch: {
    height: height * 0.025,
    width: width * 0.043,
  },
  headerContent: {
    flexDirection: 'row',
    width: width * 0.93,
    marginHorizontal: width * 0.015,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.013,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: width * 0.02,
    // elevation:2,
  },
  body: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    justifyContent: 'space-between',
    backgroundColor: COLOR.WHITE,
    marginVertical: height * 0.01,
  },
  bodyContent: {
    flexDirection: 'row',
    height: height * 0.2,
  },
  bodyContentImage: {
    width: width * 0.3,
    height: height * 0.2,
    justifyContent: 'center',
    paddingHorizontal: width * 0.03,
  },
  bodyTextContainer: {
    width: width * 0.4,
    height: height * 0.2,
    justifyContent: 'center',
  },
  bodyText: {
    fontSize: 16,
  },
  bodyBtnText: {
    fontSize: 16,
    color: COLOR.SPLASH,
  },
  askForHelpBody: {
    width: width * 0.4,
    height: height * 0.05,
    borderWidth: 0.5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  circle: {
    width: width * 0.35,
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gndrIcon: {height: height * 0.1, width: width * 0.18},
  headerFiltter: {
    height: height * 0.03,
    width: width * 0.06,
    // justifyContent: 'center',
    marginVertical: -10,
    alignSelf: 'center',
    position: 'absolute',
  },
  filter: {
    top: 15,
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.025,
    position: 'absolute',
    // justifyContent:'center',
    // alignSelf:'center',
    right: 0,
    backgroundColor: COLOR.WHITE,
    elevation: 5,
  },
  filterTxt: {
    borderBottomColor: COLOR.PRIMARY,
    borderBottomWidth: 1,
    paddingVertical: height * 0.003,
    paddingHorizontal: width * 0.035,
    color: COLOR.PRIMARY,
    fontWeight: '500',
  },
  SubHearding: {
    marginVertical: width * 0.03,
  },
  SubHeardingTxt: {
    fontSize: width * 0.05,
    fontWeight: '700',
  },
  accordianHead: {
    backgroundColor: COLOR.DROPDOWNBG,
    padding: width * 0.05,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.02,
  },
  accordianHeadTxt: {
    fontSize: width * 0.045,
  },
  selectBg: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  selectBgs: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectBgTxt: {
    fontSize: 19,
    borderWidth: 1.2,
    padding: width * 0.022,
    height: height * 0.065,
    width: width * 0.123,
    textAlign: 'center',
    borderRadius: 50,
    borderColor: COLOR.WHITE,
    color: COLOR.WHITE,
    margin: width * 0.015,
    backgroundColor: COLOR.BUTTON,
  },
  afteSelectBgTxt: {
    backgroundColor: COLOR.BUTTON,
    color: COLOR.WHITE,
    borderWidth: 0,
  },
  btns: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  butttons: {},
  loginbtn: {
    color: COLOR.WHITE,
    backgroundColor: '#85060F',
    paddingVertical: height * 0.02,
    // width: width * 0.75,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '500',
    fontSize: width * 0.055,
    // elevation:10,
    // borderWidth: 2,
    borderColor: '#9B333B',
    marginTop: height * 0.05,
  },
  dropdown: {
    backgroundColor: COLOR.DROPDOWNBG,
    // borderRadius:40,
    elevation: 5,
    marginLeft: width * 0.02,
    width: width * 0.88,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dropdownTxt: {
    fontSize: width * 0.06,
  },
});
