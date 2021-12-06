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
import SelectableChips from 'react-native-chip/SelectableChips';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const {width, height} = Dimensions.get('window');
var maritalStatus = [
  {label: 'Married', value: 'Married'},
  {label: 'Unmarrid', value: 'Unmarried'},
];
var radio_props = [
  {label: 'Yes', value: 0},
  {label: 'No', value: 1},
];
var radio_props2 = [
  {label: 'Yes', value: 0},
  {label: 'No', value: 1},
  {label: 'Not Sure', value: 2},
];
var AnyThyroid = [
  {label: 'Thyrotoxicosis due to Graves Disease', value: 0},
  {label: 'Hyper/Hypo Thyroid', value: 1},
  {label: 'Malignant Thyroid Tumours', value: 2},
  {label: 'Notapplicable', value: 3},
  {label: 'Not Sure', value: 4},
  {label: 'Under Investigation', value: 5},
];
var Hepatitis = [
  {label: 'Known Hepatitis B, C', value: 0},
  {label: 'Unknown Hepatitis', value: 1},
  {label: 'Known hepatitis A or E', value: 2},
  {label: 'Notapplicable', value: 3},
  {label: 'Not Sure', value: 4},
];

const radioBtn = value => {
  if (value == 'Married') {
    console.log('Married', value);
  } else {
    console.log('Unmarried', value);
  }
};

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
        <Text style={styles.heardingTxt}>Become Donor</Text>
      </View> */}
      <ProgressSteps
        completedProgressBarColor={COLOR.PRIMARY}
        completedStepIconColor={COLOR.PRIMARY}
        activeStepIconBorderColor={COLOR.PRIMARY}
        // borderStyle={{margin: 60}}
        marginBottom={20}>
        {/* Personal Detals */}
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
          <ScrollView>
            <View>
              <Text style={styles.formHeading}>1. Personal Details</Text>
              <View style={styles.SubHearding}>
                <View>
                  <View style={styles.searchSection}>
                    <TextInput
                      style={[styles.input,{ marginVertical: 0,}]}
                      placeholder="Name"
                      placeholderTextColor={COLOR.GRAY}
                      underlineColorAndroid="transparent"
                    />
                    <Image
                      source={require('../assets/icons/name1.png')}
                      style={styles.inputIcon}
                    />
                  </View>
                  <View style={styles.searchSection}>
                    <TextInput
                      style={[styles.input,{ marginVertical: 0,}]}
                      placeholder="E- Mail"
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
                      placeholder="Phone Number"
                      placeholderTextColor={COLOR.GRAY}
                      keyboardType="phone-pad"
                    />
                    <Image
                      source={require('../assets/icons/phone.png')}
                      style={styles.inputIcon}
                    />
                  </View>
                  <View style={styles.searchSection}>
                    <TextInput
                     style={[styles.input,{ marginVertical: 0,}]}
                      placeholder="Aadhar Number"
                      placeholderTextColor={COLOR.GRAY}
                    />
                    <Image
                      source={require('../assets/icons/address.png')}
                      style={styles.inputIcon}
                    />
                  </View>
                  <View style={styles.searchSection}>
                    <TextInput
                    style={[styles.input,{ marginVertical: 0,}]}
                      placeholder="Date of Birth"
                      placeholderTextColor={COLOR.GRAY}
                      // autoComplete
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
                    // multiline={true}
                    // numberOfLines={4}
                    placeholder="Father Name"
                    placeholderTextColor={COLOR.GRAY}
                    keyboardType="email-address"
                  />
                  <Image
                      source={require('../assets/icons/name1.png')}
                      style={styles.inputIcon}
                    />
                  </View>
                  <View style={styles.searchSection}>
                  <TextInput
                    style={[styles.input,{ marginVertical: 0,}]}
                    placeholder="Occupation"
                    placeholderTextColor={COLOR.GRAY}
                  />
                  <Image
                      source={require('../assets/icons/occupation.png')}
                      style={styles.inputIcon}
                    />
                  </View>
                </View>
                <RadioForm
                  radio_props={maritalStatus}
                  initial={0}
                  initial={0}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={COLOR.GRAY}
                  animation={true}
                  buttonSize={10}
                  buttonOuterSize={22}
                  selectedButtonColor={COLOR.PRIMARY}
                  labelStyle={styles.radioLabel}
                  style={styles.radiostyle}
                  onPress={value => radioBtn(value)}
                />
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
              <View style={styles.btmTxtStyl}>
                <Image
                  source={require('../assets/icons/tick.png')}
                  style={styles.icon}
                />
                <Text style={styles.btmTxt}>
                  Do you want to make your contact number visible for other
                </Text>
              </View>
              {/* <View style={styles.btns}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PrimaryAddress')}>
              <View style={styles.butttons}>
                <Text style={styles.loginbtn}>DONE</Text>
              </View>
            </TouchableOpacity>
          </View> */}
            </View>
          </ScrollView>
        </ProgressStep>
        {/* Primary Address */}
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
          <View>
            <View style={styles.hearding}>
              {/* <TouchableOpacity>
                <Image
                  style={styles.heardingArrowImg}
                  source={require('../assets/icons/left-arrow.png')}
                />
              </TouchableOpacity> */}
              <Text style={styles.heardingTxt}>2. Primary Address</Text>
            </View>
            <View style={styles.SubHearding}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Address Line 1"
                  placeholderTextColor={COLOR.GRAY}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Address Line 2"
                  placeholderTextColor={COLOR.GRAY}
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={styles.input}
                  placeholder="PinCode"
                  placeholderTextColor={COLOR.GRAY}
                />
                <TextInput
                  style={styles.input}
                  placeholder="City"
                  placeholderTextColor={COLOR.GRAY}
                />
                <TextInput
                  style={styles.input}
                  placeholder="State"
                  placeholderTextColor={COLOR.GRAY}
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Country"
                  placeholderTextColor={COLOR.GRAY}
                  keyboardType="email-address"
                />
              </View>
            </View>

            {/* <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <View style={styles.butttons}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('BasicHelthDetails')}>
                  <Text style={styles.loginbtn}>Continue</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.butttons}>
                <TouchableOpacity>
                  <Text style={styles.loginbtn}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View> */}
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
           
            <Text style={styles.heardingTxt}>3. Basic Helth Details</Text>
          </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 7}}>
              Have you donated blood priviously?
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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

          <View style={styles.forms}>
            <Text style={{marginTop: 7}}>
              Are you suffering from acute registry disease?
            </Text>
            <RadioForm
              radio_props={radio_props2}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 7}}>
              Did you eat anything in last 4 hourse?
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Are you air crow member or long distance vehicle driver?
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Any travell to geographical area,endemic disease?
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5}}>
              Any skin deaseses at the site of phelbotomy
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <View style={styles.butttons}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SurgeryAndIllness')}>
                  <Text style={styles.btnText}>Continue</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cancelbutttons}>
                <TouchableOpacity>
                  <Text style={{fontSize: 16}}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View> */}
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
           
           <Text style={styles.heardingTxt}>4. Surgery and illness</Text>
         </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 7}}>
              Any minor/major non-specific symptoms like...
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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

          <View style={styles.forms}>
            <Text style={{marginTop: 5}}>
              Have you gone through any major/minor surgery?
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5}}>
              Have you or your partner/spouse received any blood...
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5}}>
              History of any medication in last 72 hours?
            </Text>
            <SelectableChips
              initialChips={[
                'Antibiotics',
                'Aspirin',
                'Steroids',
                'Alcohol',
                'Other',
              ]}
              onChangeChips={chips => console.log(chips)}
              alertRequired={false}
              chipStyle={styles.chips}
              chipStyleSelected={styles.chipSelected}
              valueStyleSelected={styles.chipSelectedValue}
              valueStyle={styles.chipText}
            />
          </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 5}}>
              Any history of following disease.. select which apply.
            </Text>
            <SelectableChips
              initialChips={[
                'Heart Disease',
                'Cancer surgery',
                ' Breathing Issues',
                'Chronic Lever Disease',
                'HIV',
                'Prolonged and repeated fever or diarrhoe',
                'Genital sore or skin rashes',
                'Leprosy',
                'Kidney disease or Ranal Failure',
                'Polycythaemia Vera',
                'Bleeding Disorders',
                'Malignancy',
                'Allergic Disorder',
                'Haemolysis',
              ]}
              onChangeChips={chips => console.log(chips)}
              alertRequired={false}
              chipStyle={styles.chips}
              chipStyleSelected={styles.chipSelected}
              valueStyleSelected={styles.chipSelectedValue}
              valueStyle={styles.chipText}
            />
          </View>

          <View style={styles.forms}>
            <Text style={{marginTop: 5}}>
              Are ypu suffering from severe anxiety or mood...
            </Text>
            <RadioForm
              radio_props={radio_props2}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
           
           <Text style={styles.heardingTxt}>5. Endocrinology</Text>
         </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Are you Diabetic
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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

          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Any Thyroid Disorders...please check which apply
            </Text>
            <RadioForm
              radio_props={AnyThyroid}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Any Other endocrine disorders
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
        </ProgressStep>
        {/* Liver Diseases and hepatitis */}
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
           
           <Text style={styles.heardingTxt}>6. Liver Diseases and Hepatitis</Text>
         </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Are you having Hepatitis infection
            </Text>
            <RadioForm
              radio_props={Hepatitis}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              In last 12 months,did you or partner came in ...
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              In last 12 months,did you or partner have any ...
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
        </ProgressStep>
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
           
           <Text style={styles.heardingTxt}>7. Other infections Disease</Text>
         </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              In last 3 months, did you have history of following?
            </Text>
            <SelectableChips
              initialChips={[
                'Measles, Mumps, Chickenpox',
                'Malaria',
                'Acute infection of bladder (cystitis) ITO',
                'Diarrhoea',
                'Visit to Dengue/Chikungunya endemic area',
                'Genital sore or skin rashes ',
                'Haemolysis',
                'Zika Virus',
              ]}
              onChangeChips={chips => console.log(chips)}
              alertRequired={false}
              chipStyle={styles.chips}
              chipStyleSelected={styles.chipSelected}
              valueStyleSelected={styles.chipSelectedValue}
              valueStyle={styles.chipText}
            />
          </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              In last 6 months, did you have history of following?
            </Text>
            <SelectableChips
              initialChips={[
                'Dengue/ Chikungunya',
                'Acute infection of kidney',
                'Ear Piercing',
                'Anemia',
                'Dental Extraction',
              ]}
              onChangeChips={chips => console.log(chips)}
              alertRequired={false}
              chipStyle={styles.chips}
              chipStyleSelected={styles.chipSelected}
              valueStyleSelected={styles.chipSelectedValue}
              valueStyle={styles.chipText}
            />
          </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              In last 12 months, did you have history of following?
            </Text>
            <SelectableChips
              initialChips={[
                'Typhoid',
                'GI Endoscopy',
                'Tuberculosis or Osteomyelitis infection',
                'Anti-rabies vaccination',
              ]}
              onChangeChips={chips => console.log(chips)}
              alertRequired={false}
              chipStyle={styles.chips}
              chipStyleSelected={styles.chipSelected}
              valueStyleSelected={styles.chipSelectedValue}
              valueStyle={styles.chipText}
            />
          </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Any recent travel history to west Nile or zika virus
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Did you have any vaccine recently, if yes then check
            </Text>
            <SelectableChips
              initialChips={[
                'Non live vaccines and Toxold',
                'Live attenuated vaccines',
                'Anti-tetanus serum',
                'Anti-rabies vaccination',
                'Swine Flu',
              ]}
              onChangeChips={chips => console.log(chips)}
              alertRequired={false}
              chipStyle={styles.chips}
              chipStyleSelected={styles.chipSelected}
              valueStyleSelected={styles.chipSelectedValue}
              valueStyle={styles.chipText}
            />
          </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Did you have any medicines recently, select applicable
            </Text>
            <SelectableChips
              initialChips={[
                'Salicylates (aspirin), other NSAIDs',
                'Ketoconazole Antinelminthic',
                'Antibiotics',
                'Ticlopidine, Clopidogre!',
                'Piroxicam, dipyridamole ',
                'Etretinate, Acitretin or Isotretinoin',
                'Finasteride',
                'Radioactive contrast material',
                'Dutasteride',
              ]}
              onChangeChips={chips => console.log(chips)}
              alertRequired={false}
              chipStyle={styles.chips}
              chipStyleSelected={styles.chipSelected}
              valueStyleSelected={styles.chipSelectedValue}
              valueStyle={styles.chipText}
            />
          </View>
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Any medication of organ, stem cell and tissues.
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Did you ever have sexual contact with a person of sam.
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Did you ever have sex with commercial sex worker?
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
          <View style={styles.forms}>
            <Text style={{marginTop: 5, width: width * 0.7}}>
              Did you ever use IV narcotics drugs?
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
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
        </ProgressStep>
      </ProgressSteps>
    </SafeAreaView>
  );
};

export default BecomeDonor;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    backgroundColor: COLOR.WHITE,
    // margin:20,
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
    marginVertical: width * 0.02,
  },
  SubHeardingTxt: {
    fontSize: width * 0.05,
    fontWeight: '700',
  },
  searchSection: {
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
  btmTxtStyl: {flexDirection: 'row', justifyContent: 'space-between'},
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
  formHeading: {
    fontSize: width * 0.05,
    fontWeight: '600',
    // color:COLOR.PRIMARY,
  },
  radioLabel: {
    fontSize: width * 0.038,
    fontWeight: '500',
    color: COLOR.GRAY,
    marginHorizontal: width * 0.04,
  },
  radiostyle: {
    // justifyContent: 'space-between',
    marginTop: 20,
    flexWrap: 'wrap',
    paddingHorizontal: width * 0.01,
  },
  forms: {
    padding: width * 0.02,
    elevation: 4,
    shadowColor: '#000',
    marginHorizontal: width * 0.03,
    marginVertical: height * 0.01,
    backgroundColor: COLOR.WHITE,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  chipText: {
    fontSize: width * 0.035,
    color: COLOR.PRIMARY,
  },
  chips: {
    borderColor: COLOR.PRIMARY,
  },
  chipSelected: {
    backgroundColor: COLOR.PRIMARY,
  },
  chipSelectedValue: {
    color: COLOR.WHITE,
  },
});
