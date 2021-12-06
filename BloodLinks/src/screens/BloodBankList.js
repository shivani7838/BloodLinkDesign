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
//   TouchableOpacity,FlatList
// } from 'react-native';

// import StatusTopBar from '../Components/StatusTopBar';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Iconn  from 'react-native-vector-icons/MaterialIcons';
// import { Rating, AirbnbRating } from 'react-native-ratings';
// import {
//   Collapse,
//   CollapseHeader,
//   CollapseBody,
//   AccordionList,
// } from 'accordion-collapse-react-native';
// import ModalDropdown from 'react-native-modal-dropdown';
// import {COLOR} from '../constants/colorConstants';
// const {width, height} = Dimensions.get('window');
// const DATA = [
//     {
//       id:"1",
//       title:"Data Structures"
//     },
//     {
//       id:"2",
//       title:"STL"
//     },
//     {
//       id:"3",
//       title:"C++"
//     },
//     {
//       id:"4",
//       title:"Java"
//     },
//     {
//       id:"5",
//       title:"Python"
//     },
//     {
//       id:"6",
//       title:"CP"
//     },
//     {
//       id:"7",
//       title:"ReactJs"
//     },
//     {
//       id:"8",
//       title:"NodeJs"
//     },
//     {
//       id:"9",
//       title:"MongoDb"
//     },
//     {
//       id:"10",
//       title:"ExpressJs"
//     },
//     {
//       id:"11",
//       title:"PHP"
//     },
//     {
//       id:"12",
//       title:"MySql"
//     },
//     {
//         id:"13",
//         title:"MySql"
//       },
//       {
//         id:"14",
//         title:"MySql"
//       },
//       {
//         id:"15",
//         title:"MySql"
//       },
//   ];

// const AllDonor = (props) => {
//   const navigation = props.navigation;

//   const ratingCompleted=(rating)=> {
//     console.log("Rating is: " + rating)
//   }
//   const renderItem = ({item})=>(
// <View   style={styles.body}>
//           <View   style={styles.bodyContent}>
// <View style={styles.bodyContentImage}>
// <Image
//                   style={styles.gndrIcon}
//                   source={require('../assets/icons/male.png')}
//                 />
// </View>
// <View style={styles.bodyTextContainer}>
// <Text style={styles.bodyText}>Ramu fsdefds fgfdsg </Text>
// <View style={{flexDirection:'row'}}>

// <Iconn  name="location-on"/><Text style={{fontSize:16}}>Singapore </Text>
// </View>
// {/* <View style={{flexDirection:'row',marginTop:15}}> */}
//     <TouchableOpacity style={styles.askForHelpBody} onPress={()=>navigation.navigate('SearchServices')}>

// <Text style={styles.bodyText}>Ask For Help </Text>
//     </TouchableOpacity>
// {/* </View> */}
// </View>
// </View>
// <View style={{ height: height * 0.05,backgroundColor:'#bb303a',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
//     <View style={{
//         flexDirection:'row'
//     }}>

//     <Text style={{fontSize:17,color:'white'}}>4.4</Text>
//     <Rating
//    imageSize={20}
// //   showRating
//   onFinishRating={()=>ratingCompleted()}
// //   style={{ size	:40 }}
// />
//     </View>
//     <View>

//     <Text style={{fontSize:17,color:'white'}}>700.0 m away</Text>
//     </View>

// </View>

//           </View>
//   );
//   return (
//     <SafeAreaView>
//       <StatusTopBar />
//         <View style={styles.container}>

//           <View style={styles.hearding}>
//             <TouchableOpacity style={styles.heardingArrow}>
//               <Image
//                 style={styles.heardingArrowImg}
//                 source={require('../assets/icons/left-arrow.png')}
//               />
//             </TouchableOpacity >
//             <View  style={styles.headerContent}>

//             <Text style={styles.heardingTxt}>Blood Bank </Text>
//             </View>

//           </View>

//           <View style={{height: height * 0.9,marginTop:35}}>
//           <FlatList
//        data={DATA}
//        key={'-'}
//        renderItem={renderItem}
//        keyExtractor={item => item.id}
//     />
//           </View>

//          </View>
//     </SafeAreaView>
//   );
// };

// export default AllDonor;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // height: height * 1,
//   },
//   hearding: {
//     marginVertical: width * 0.03,
//     flexDirection: 'row',elevation:10,
//   },
//   heardingTxt: {
//     fontSize: width * 0.055,
//     fontWeight: '400',
//   },
//   heardingArrow:{
//     height: height * 0.04,
//     width: width * 0.1,

//   },
//   heardingArrowImg: {
//     height: height * 0.04,
//     width: width * 0.080,
//     marginLeft: width * 0.05,
//   },
//   headerContent:{
//     height: height * 0.04,
//     width: width * 0.7,
//     justifyContent:'center',alignItems:'center'
//   },
//   body:{
//     //   flexDirection:'row',
//     height: height * 0.25,
//     // width: width * 0.6,
//     // backgroundColor:'green',
//     borderWidth:0.3,
//   },
//   bodyContent:{
//     flexDirection:'row', height: height * 0.2
//   },
//   bodyContentImage:{
//     width:width*0.3,
//     height:height*0.2,
//     justifyContent:'center',
//     paddingHorizontal:width*0.03
//   },
// bodyTextContainer:{

// width:width*0.4,
// height:height*0.2,
// justifyContent:'center'
// },
// bodyText:{
//     fontSize:16
// },
// askForHelpBody:{
//     width:width*0.4,height:height*0.05,borderWidth:0.5,borderRadius:20,justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:15
// },
// circle:{
//     width:width*0.35,
// height:height*0.2,
// justifyContent:'center',
// alignItems:'center'
// },
//   gndrIcon: {height: height * 0.1, width: width * 0.18},
//   headerFiltter:{
//     height: height * 0.04,
//     width: width * 0.2,
//     justifyContent:'center',alignItems:'center'
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
//     backgroundColor: COLOR.BUTTON,
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
  FlatList,
} from 'react-native';

import StatusTopBar from '../Components/StatusTopBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconn from 'react-native-vector-icons/MaterialIcons';
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

const BloodBankList = props => {
  const navigation = props.navigation;
  const renderItem = ({item}) => (
    <View style={styles.body}>
      <View style={styles.bodyContent}>
        <View style={styles.bodyContentImage}>
          <Image
            style={{height: 50, width: 50}}
            source={require('../assets/Images/hospital.png')}
          />
        </View>
        <View style={styles.bodyTextContainer}>
          <Text style={styles.bodyText}>Hospital Name</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.location}
              source={require('../assets/icons/location1.png')}
            />
            <Text style={{fontSize: 13, color: '#000000'}}>
              Noida sector 63
            </Text>
          </View>
          {/* <View style={{flexDirection:'row',marginTop:15}}> */}
          <TouchableOpacity
            style={styles.askForHelpBody}
            onPress={() => navigation.navigate('BloodBankList')}>
            <Image
              style={{height: height * 0.03, width: width * 0.06}}
              source={require('../assets/icons/phone.png')}
            />
            <Text style={styles.bodyBtnText}>9233445566</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </View>
      <View
        style={{
          height: height * 0.05,
          backgroundColor: COLOR.PRIMARY,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 17, color: 'white'}}>4.4</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.headerBtn}  onPress={() => (navigation.navigate("BecomeDonor"))}>
            <Text style={{color: '#85060F', fontSize: 14, fontWeight: 'bold'}}>
              Donate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView>
      <StatusTopBar />
      <View style={styles.container}>
        {/* <View style={styles.hearding}>
          <TouchableOpacity style={styles.heardingArrow}>
            <Image
              style={styles.heardingArrowImg}
              source={require('../assets/icons/left-arrow.png')}
            />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.heardingTxt}>Blood Bank </Text>
          </View>
        </View> */}

        <FlatList
          data={DATA}
          key={'-'}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        {/* </ScrollView> */}
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default BloodBankList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: height * 1,
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
  
    hearding: {
    marginVertical: width * 0.03,
    flexDirection: 'row',elevation:10,
  },
  heardingTxt: {
    fontSize: width * 0.055,
    fontWeight: '400',
  },
    headerContent:{
      marginLeft:width*0.05,
    // height: height * 0.04,
    // width: width * 0.7,
    // justifyContent:'center',alignItems:'center'
  },
  location: {
    height: height * 0.035,
    width: width * 0.05,
    // alignSelf:'center',
    marginRight: width * 0.02,
  },
  heardingTxt: {
    fontSize: width * 0.05,
    fontWeight: '400',
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
    width: width * 0.24,
    height: height * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: width * 0.03,
    borderRadius: 200,
    backgroundColor: COLOR.PRIMARY,
    marginHorizontal: width * 0.06,
  },
  bodyTextContainer: {
    width: width * 0.4,
    height: height * 0.2,
    justifyContent: 'center',
  },
  bodyText: {
    fontSize: width * 0.05,
  },
  bodyBtnText: {
    fontSize: 18,
    color: COLOR.SPLASH,
  },
  askForHelpBody: {
    width: width * 0.4,
    height: height * 0.05,
    borderWidth: 0.5,
    borderRadius: 20,
    justifyContent: 'space-evenly',
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
  headerBtn: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.006,
    borderRadius: 100 / 30,
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
