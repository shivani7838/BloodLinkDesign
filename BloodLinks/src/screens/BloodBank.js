import React from 'react';
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
} from 'react-native';
import StatusTopBar from '../Components/StatusTopBar';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {COLOR} from '../constants/colorConstants';
const {width, height} = Dimensions.get('window');

const BloodBank = (props) => {
  const navigation = props.navigation;
  return (
    <SafeAreaView>
      <StatusTopBar />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.hearding}>
            <TouchableOpacity style={styles.heardingArrow}>
              <Image
                style={styles.heardingArrowImg}
                source={require('../assets/icons/left-arrow.png')}
              />
            </TouchableOpacity>
            <Text style={styles.heardingTxt}>Blood Bank</Text>
          </View>
          <View style={styles.SubHearding}>
            <Text style={styles.SubHeardingTxt}>State</Text>
            <View>
              <ModalDropdown
                defaultValue={'--Select--'}
                options={['option 1', 'option 2']}
                dropdownStyle={styles.dropdown}
                dropdownTextStyle={styles.dropdownTxt}
              >
                <View style={styles.accordianHead}>
                  <Text style={styles.accordianHeadTxt}>Utter Pradesh</Text>
                  <Image
                    source={require('../assets/icons/arrow-down.png')}
                    style={{height: 18, width: 18, alignSelf: 'center'}}
                  />
                </View>
              </ModalDropdown>
            </View>
          </View>
          <View style={styles.SubHearding}>
            <Text style={styles.SubHeardingTxt}>City</Text>
            <View>
              <ModalDropdown
                defaultValue={'--Select--'}
                options={['Mumbai', 'option 2']}
                source={require('../assets/icons/arrow-down.png')}
                dropdownStyle={styles.dropdown}
                dropdownTextStyle={styles.dropdownTxt}
                  // style={styles.accordianHead}
                  // textStyle={styles.accordianHeadTxt}
              >
                <View style={styles.accordianHead}>
                  <Text  defaultValue={'Mumbai'} style={styles.accordianHeadTxt}>Mumbai</Text>
                  <Image
                    source={require('../assets/icons/arrow-down.png')}
                    style={{height: 18, width: 18, alignSelf: 'center'}}
                  />
                </View>
              </ModalDropdown>
            </View>
          </View>

          <View style={styles.btns}>
          <TouchableOpacity
                      onPress={() => (navigation.navigate('AllDonor'))}>
              <View style={styles.butttons}>
                <Text style={styles.loginbtn}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BloodBank;

const styles = StyleSheet.create({
  container: {
    margin: width * 0.04,
  },
  hearding: {
    marginVertical: width * 0.01,
    flexDirection: 'row',
  },
  heardingTxt: {
    fontSize: width * 0.055,
    fontWeight: 'bold',
  },
  heardingArrowImg: {
    height: height * 0.04,
    width: width * 0.080,
    marginRight: width * 0.06,
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
    borderColor: '#adadad',
    color: '#ADA9A9',
    margin: width * 0.015,
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
  dropdown:{
  backgroundColor:COLOR.DROPDOWNBG,
  // borderRadius:40,
  elevation:5,
  marginLeft:width*0.02,
  width:width*0.88,
  justifyContent:'center',
  alignSelf:'center',
  },
  dropdownTxt:{
    fontSize:width*0.06,
  },
});
