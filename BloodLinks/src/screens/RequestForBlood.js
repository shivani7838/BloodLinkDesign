// import React from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   TextInput,
//   ImageBackground,
//   Image,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import StatusTopBar from '../Components/StatusTopBar';
// import {
//   Collapse,
//   CollapseHeader,
//   CollapseBody,
//   AccordionList,
// } from 'accordion-collapse-react-native';
// import ModalDropdown from 'react-native-modal-dropdown';
// import {COLOR} from '../constants/colorConstants';
// const {width, height} = Dimensions.get('window');

// const RequestForBlood = (props) => {
//   const navigation = props.navigation;
//   return (
//     <SafeAreaView>
//       <StatusTopBar />
//       <ScrollView>
//         <View style={styles.container}>
//           <View style={styles.hearding}>
//             <TouchableOpacity style={styles.heardingArrow}>
//               <Image
//                 style={styles.heardingArrowImg}
//                 source={require('../assets/icons/left-arrow.png')}
//               />
//             </TouchableOpacity>
//             <Text style={styles.heardingTxt}>Request for Blood</Text>
//           </View>
//           <View style={styles.SubHearding}>
//             <Text style={styles.SubHeardingTxt}>Blood for</Text>
//             <View>
//               <ModalDropdown
//                 defaultValue={'Friend'}
//                 options={['option 1', 'option 2']}
//                 dropdownStyle={styles.dropdown}
//                 dropdownTextStyle={styles.dropdownTxt}
//               >
//                 <View style={styles.accordianHead}>
//                   <Text style={styles.accordianHeadTxt}>Friend</Text>
//                   <Image
//                     source={require('../assets/icons/arrow-down.png')}
//                     style={{height: 18, width: 18, alignSelf: 'center'}}
//                   />
//                 </View>
//               </ModalDropdown>
//             </View>
//           </View>
//           <View style={styles.SubHearding}>
//             <Text style={styles.SubHeardingTxt}>City Preference</Text>
//             <View>
//               <ModalDropdown
//                 defaultValue={'Mumbai'}
//                 options={['Mumbai', 'option 2']}
//                 source={require('../assets/icons/arrow-down.png')}
//                 dropdownStyle={styles.dropdown}
//                 dropdownTextStyle={styles.dropdownTxt}
//                   // style={styles.accordianHead}
//                   // textStyle={styles.accordianHeadTxt}
//               >
//                 <View style={styles.accordianHead}>
//                   <Text  defaultValue={'Mumbai'} style={styles.accordianHeadTxt}>Mumbai</Text>
//                   <Image
//                     source={require('../assets/icons/arrow-down.png')}
//                     style={{height: 18, width: 18, alignSelf: 'center'}}
//                   />
//                 </View>
//               </ModalDropdown>
//             </View>
//           </View>
//           <View style={styles.SubHearding}>
//             <Text style={styles.SubHeardingTxt}>Select Blood Group</Text>
//             <View>
//               <View style={styles.selectBg}>
//                 <View style={styles.selectBgs}>
//                   <TouchableOpacity>
//                     <Text style={styles.selectBgTxt}>A+</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity>
//                     <Text style={styles.selectBgTxt}>A-</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity>
//                     <Text style={styles.selectBgTxt}>B+</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity>
//                     <Text style={[styles.selectBgTxt, styles.afteSelectBgTxt]}>
//                       B-
//                     </Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity>
//                     <Text style={styles.selectBgTxt}>O+</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity>
//                     <Text style={styles.selectBgTxt}>O-</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity>
//                     <Text style={styles.selectBgTxt}>AB+</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity>
//                     <Text style={styles.selectBgTxt}>AB-</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>

//           <View style={styles.btns}>
//           <TouchableOpacity
//                       onPress={() => (navigation.navigate('BecomeDonor'))}>
//               <View style={styles.butttons}>
//                 <Text style={styles.loginbtn}>Submit</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default RequestForBlood;

// const styles = StyleSheet.create({
//   container: {
//     margin: width * 0.04,
//   },
//   hearding: {
//     marginVertical: width * 0.01,
//     flexDirection: 'row',
//   },
//   heardingTxt: {
//     fontSize: width * 0.055,
//     fontWeight: 'bold',
//   },
//   heardingArrowImg: {
//     height: height * 0.04,
//     width: width * 0.080,
//     marginRight: width * 0.06,
//   },
//   SubHearding: {
//     marginVertical: width * 0.03,
//   },
//   SubHeardingTxt: {
//     fontSize: width * 0.05,
//     fontWeight: '700',
//   },
//   accordianHead: {
//     backgroundColor: COLOR.DROPDOWNBG,
//     padding: width * 0.05,
//     borderRadius: 50,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: height * 0.02,
//   },
//   accordianHeadTxt: {
//     fontSize: width * 0.045,
//   },
//   selectBg: {
//     // flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: height * 0.01,
//   },
//   selectBgs: {
//     // flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   selectBgTxt: {
//     fontSize: 19,
//     borderWidth: 1.2,
//     padding: width * 0.022,
//     height: height * 0.065,
//     width: width * 0.123,
//     textAlign: 'center',
//     borderRadius: 50,
//     borderColor: '#adadad',
//     color: '#ADA9A9',
//     margin: width * 0.015,
//   },
//   afteSelectBgTxt: {
//     backgroundColor: COLOR.BUTTON,
//     color: COLOR.WHITE,
//     borderWidth: 0,
//   },
//   btns: {
//     // flexDirection: 'row',
//     // justifyContent: 'space-evenly',
//   },
//   butttons: {},
//   loginbtn: {
//     color: COLOR.WHITE,
//     backgroundColor: '#85060F',
//     paddingVertical: height * 0.02,
//     // width: width * 0.75,
//     textAlign: 'center',
//     borderRadius: 50,
//     fontWeight: '500',
//     fontSize: width * 0.055,
//     // elevation:10,
//     // borderWidth: 2,
//     borderColor: '#9B333B',
//     marginTop: height * 0.05,
//   },
//   dropdown:{
//   backgroundColor:COLOR.DROPDOWNBG,
//   // borderRadius:40,
//   elevation:5,
//   marginLeft:width*0.02,
//   width:width*0.88,
//   justifyContent:'center',
//   alignSelf:'center',
//   },
//   dropdownTxt:{
//     fontSize:width*0.06,
//   },
// });
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
import {COLOR} from '../constants/colorConstants';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
var requestType = [
  {label: 'STAT', value: 0},
  {label: 'Urgent', value: 1},
  {label: 'Routine', value: 2},
  {label: 'Reserved', value: 3},
];
const BecomeDonor = props => {
  const navigation = props.navigation;
  return (
    <SafeAreaView style={styles.container}>
      <StatusTopBar />

      {/* <View style={styles.hearding}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.heardingArrowImg}
              source={require('../assets/icons/left-arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.heardingTxt}>Request for Blood Issue</Text>
        </View> */}
      {/* <ScrollView> */}

        <ProgressSteps
          completedProgressBarColor={COLOR.PRIMARY}
          completedStepIconColor={COLOR.PRIMARY}
          activeStepIconBorderColor={COLOR.PRIMARY}
          // borderStyle={{margin: 60}}
          marginBottom={20}>
          {/* Patient Details */}
          <ProgressStep
            nextBtnText={'Continue'}
            nextBtnTextStyle={{
              color: COLOR.WHITE,
              fontWeight: '500',
              fontSize: width * 0.045,
            }}
            nextBtnStyle={{
              marginBottom: -30,
              marginRight: width * -0.13,
              backgroundColor: COLOR.BUTTON,
              paddingVertical: height * 0.02,
              paddingHorizontal: width * 0.35,
              borderRadius: 50,
              fontWeight: '500',
              fontSize: width * 0.045,
              alignSelf: 'center',
            }}>
              <View style={styles.hearding}>
              <Text style={styles.heardingTxt}>1. Patient Details</Text>
            </View>
                    <View >
            <View style={styles.SubHearding}>
              <View>
              <View style={styles.searchSection}>
                <TextInput
                  source={require('../../src/assets/Images/HOMEICON.png')}
                  style={[styles.input,{ marginVertical: 0,}]}
                  placeholder="Name"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <Image
                      source={require('../assets/icons/name1.png')}
                      style={styles.inputIcon}
                    />
                  </View>
                  <View style={styles.searchSection}>
                <TextInput
                  style={[styles.input,{ marginVertical: 0,}]}
                  placeholder="Registration Number(IPO no)"
                  placeholderTextColor={COLOR.GRAY}
                  keyboardType="email-address"
                />
                 <Image
                      source={require('../assets/icons/email.png')}
                      style={styles.inputIcon}
                    />
                  </View>
                <View style={styles.searchSection}>
                <TextInput
                  style={[styles.input,{ marginVertical: 0,}]}
                  placeholder="Date Of Birth"
                  placeholderTextColor={COLOR.GRAY}
                />
                 <Image
                      source={require('../assets/icons/dob.png')}
                      style={styles.inputIcon}
                    />
                  </View>
                <View style={styles.searchSection}>
                <TextInput
                 style={[styles.input,{ marginVertical: 0,}]}
                  placeholder="Location"
                  placeholderTextColor={COLOR.GRAY}
                />
                 <Image
                      source={require('../assets/icons/location1.png')}
                      style={styles.inputIcon}
                    />
                  </View>
                <View style={styles.searchSection}>
                <TextInput
                 style={[styles.input,{ marginVertical: 0,}]}
                  placeholder="Date of Admission"
                  placeholderTextColor={COLOR.GRAY}
                />
                <Image
                      source={require('../assets/icons/dob.png')}
                      style={styles.inputIcon}
                    />
                  </View>
              </View>
            </View>
            <View style={styles.SubHearding}>
              <Text style={styles.SubHeardingTxt}>Gender</Text>
              <View style={styles.gndr}>
                <TouchableOpacity>
                  <Image
                    style={styles.gndrIcon}
                    source={require('../assets/icons/male.png')}
                  />
                  <Text style={styles.gndrtxt}>Male</Text>
                </TouchableOpacity>
                <View style={styles.gndrSpace}></View>
                <TouchableOpacity>
                  <Image
                    style={styles.gndrIcon}
                    source={require('../assets/icons/female.png')}
                  />
                  <Text style={[styles.gndrtxt, {color: '#ff3257'}]}>
                    Female
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.SubHearding}>
              <Text style={styles.SubHeardingTxt}>Select Blood Group</Text>
              <View>
                <View style={styles.selectBg}>
                  <View style={styles.selectBgs}>
                    <TouchableOpacity>
                      <Text style={styles.selectBgTxt}>A+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.selectBgTxt}>A-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.selectBgTxt}>B+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text
                        style={[styles.selectBgTxt, styles.afteSelectBgTxt]}>
                        B-
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.selectBgTxt}>O+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.selectBgTxt}>O-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.selectBgTxt}>AB+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.selectBgTxt}>AB-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
           
           
          
           
           
          </View>
          </ProgressStep>
          {/* Hospital Details */}
          <ProgressStep
            nextBtnText={'Continue'}
            nextBtnTextStyle={styles.loginbtn}
            nextBtnStyle={{
              marginBottom: -30,
              justifyContent: 'center',
              alignSelf: 'center',
              marginRight: width * -0.1,
            }}
            previousBtnText={'Cancel'}
            previousBtnTextStyle={styles.Cancelbtn}
            previousBtnStyle={{
              marginBottom: -30,
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: width * -0.1,
            }}>
              <View style={styles.hearding}>
              <Text style={styles.heardingTxt}>2. Hospital Details </Text>
            </View>
              <View style={styles.SubHearding}>
              <View>
                <TextInput
                  source={require('../../src/assets/Images/HOMEICON.png')}
                  style={styles.input}
                  placeholder="Hospital"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Hospital Phone No"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Ward"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Bed No."
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Hospital Unit Chief Name"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Hospital Unit Chief Phone Number"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Short Clinical Notes"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
              </View>
            </View>
            
            </ProgressStep>
          {/* Basic Helth Detals */}
          <ProgressStep
            nextBtnText={'Continue'}
            nextBtnTextStyle={styles.loginbtn}
            nextBtnStyle={{
              marginBottom: -30,
              justifyContent: 'center',
              alignSelf: 'center',
              marginRight: width * -0.1,
            }}
            previousBtnText={'Cancel'}
            previousBtnTextStyle={styles.Cancelbtn}
            previousBtnStyle={{
              marginBottom: -30,
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: width * -0.1,
            }}>
              <View style={styles.hearding}>
              <Text style={styles.heardingTxt}>3. Patient Clinical Details</Text>
            </View>
            <View style={styles.SubHearding}>
              <View>
                <TextInput
                  source={require('../../src/assets/Images/HOMEICON.png')}
                  style={styles.input}
                  placeholder="Hb gm%"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Platlet Count"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
              </View>
            </View>
          </ProgressStep>
          {/* Surgery and Illness */}
          <ProgressStep
            nextBtnText={'Continue'}
            nextBtnTextStyle={styles.loginbtn}
            nextBtnStyle={{
              marginBottom: -30,
              justifyContent: 'center',
              alignSelf: 'center',
              marginRight: width * -0.1,
            }}
            previousBtnText={'Cancel'}
            previousBtnTextStyle={styles.Cancelbtn}
            previousBtnStyle={{
              marginBottom: -30,
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: width * -0.1,
            }}>
              <View style={styles.hearding}>
              <Text style={styles.heardingTxt}>4. Blood Component Requested</Text>
            </View>
           <View style={styles.SubHearding}>
              <View>
                <TextInput
                  source={require('../../src/assets/Images/HOMEICON.png')}
                  style={styles.input}
                  placeholder="RBC Conc./Packed RBC Units"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Random Donor Platlet Conc. Units"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Fresh Frozen Plasma Units"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Cryo Precipitate Units"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Whole Blood Units"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Single Donor Platlet Units"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
               
              </View>
            </View>
          </ProgressStep>
          {/* Endorinology */}
          <ProgressStep
            nextBtnText={'Continue'}
            nextBtnTextStyle={styles.loginbtn}
            nextBtnStyle={{
              marginBottom: -30,
              justifyContent: 'center',
              alignSelf: 'center',
              marginRight: width * -0.1,
            }}
            previousBtnText={'Cancel'}
            previousBtnTextStyle={styles.Cancelbtn}
            previousBtnStyle={{
              marginBottom: -30,
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: width * -0.1,
            }}>
              <View style={styles.hearding}>
              <Text style={styles.heardingTxt}>5. Requirement Type and Schedule</Text>
            </View>
            <View style={styles.SubHearding}>
              <View>
                <TextInput
                  source={require('../../src/assets/Images/HOMEICON.png')}
                  style={styles.input}
                  placeholder="Required Date & Time"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <Text>Request Type</Text>
               <RadioForm
                radio_props={requestType}
                initial={0}
                formHorizontal={true}
                buttonColor={COLOR.GRAY}
                animation={true}
                buttonSize={10}
                buttonOuterSize={22}
                selectedButtonColor={COLOR.PRIMARY}
                labelStyle={styles.radioLabel}
                style={styles.radiostyle}
                //   onPress={(value) => {this.setState({value:value})}}
              />
              </View>
            </View>
          </ProgressStep>
          {/* Liver Diseases and hepatitis */}

          {/* Other Infectious Disease */}
          <ProgressStep 
           nextBtnText={'Continue'}
           nextBtnTextStyle={styles.loginbtn}
           nextBtnStyle={{
             marginBottom: -30,
             justifyContent: 'center',
             alignSelf: 'center',
             marginRight: width * -0.1,
           }}
           previousBtnText={'Cancel'}
           previousBtnTextStyle={styles.Cancelbtn}
           previousBtnStyle={{
             marginBottom: -30,
             justifyContent: 'center',
             alignSelf: 'center',
             marginLeft: width * -0.1,
           }}>
          <View style={styles.hearding}>
              <Text style={styles.heardingTxt}>6. Replacement Details</Text>
            </View>
          <View style={styles.SubHearding}>
              <View>
                <TextInput
                  source={require('../../src/assets/Images/HOMEICON.png')}
                  style={styles.input}
                  placeholder="Voluntary Card Id"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Without Replacement (Recommended By)"
                  placeholderTextColor={COLOR.GRAY}
                  // keyboardType="email-address"
                />
              </View>
            </View>
          </ProgressStep>
        </ProgressSteps>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default BecomeDonor;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: width * 0.04,
    // marginVertical: 50,
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
    width: width * 0.08,
    marginRight: width * 0.06,
  },
  SubHearding: {
    marginVertical: width * 0.01,
  },
  SubHeardingTxt: {
    fontSize: width * 0.05,
    fontWeight: '700',
  },searchSection: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: height * 0.01,
    backgroundColor: COLOR.FONT1,
    borderRadius: 50,
    paddingHorizontal: width * 0.038,
    alignItems: 'center',
  },
  inputIcon: {
    height: 30,
    width: 30,
    // marginRight:20,
  },
  input: {
    backgroundColor: COLOR.FONT1,
    borderRadius: 50,
    flex: 1,
    padding: width * 0.038,
    fontSize: width * 0.045,
    marginVertical: height * 0.01,
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
    borderColor: COLOR.FONT,
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
  continueBtn: {
    backgroundColor: COLOR.BUTTON,
    width: width * 0.3,
    height: height * 0.05,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  continueText: {
    color: COLOR.WHITE,
  },
  cancelBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbtn: {
    color: COLOR.WHITE,
    backgroundColor: COLOR.BUTTON,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.08,
    borderRadius: 50,
    fontWeight: '500',
    fontSize: width * 0.045,
    alignSelf: 'center',
  },
  Cancelbtn: {
    color: COLOR.WHITE,
    backgroundColor: '#CF3434',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.08,
    borderRadius: 50,
    fontWeight: '500',
    fontSize: width * 0.045,
    alignSelf: 'center',
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
  btmTxtStyl: {
    flexDirection: 'row',
    marginVertical: width * 0.02,
  },
  btmTxt: {
    fontSize: width * 0.04,
    fontWeight: '500',
    marginHorizontal: width * 0.02,
  },
  icon: {
    height: height * 0.026,
    width: width * 0.049,
    marginTop: 3,
    marginLeft: 8,
  },
  gndr: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  gndrSpace: {
    height: height * 0.06,
    width: width * 0.006,
    backgroundColor: COLOR.FONT1,
    marginHorizontal: width * 0.07,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  gndrIcon: {height: height * 0.08, width: width * 0.16},
  gndrtxt: {
    color: COLOR.GRAY,
    fontSize: width * 0.04,
    textAlign: 'center',
    marginVertical: height * 0.01,
  },

  radioLabel: {
    // width:width*0.2,
    fontSize: width * 0.04,
    fontWeight: '500',
    color: "#000",
    marginHorizontal: width * 0.04,
    // marginVertical: width * 0.02,
  },
  radiostyle: {
    // justifyContent: 'space-between',
    marginTop: 20,
    flexWrap: 'wrap',
    
  },
});
