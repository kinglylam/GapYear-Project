import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView,Image,TouchableOpacity,} from "react-native";
import Header from "../../components/Header";
import { CameraIcon, ProfileCircleIcon}  from "../../assets/icons";
import ProfileImg from  "../../assets/images/profileImg.png";


const UserInfo = ({ navigation,}) => {
  const [TextInput, setTextInputs] = useState({
    FirstName: "",
    password: "",
  });

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({
      ...prevState,
      [input]: text,
    }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerName={"Personal Information"}
        onPress={() => navigation.goBack()}
      />
      <View >
        <View style={styles.auto}>
        <Image source={ProfileImg} style={styles.ProfileImg}/>
        <View style={styles.Icon}>
          <Text> {<CameraIcon/>}</Text>
        </View>
        </View>
      </View>
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  auto:{
   flexDirection:"row",
   textAlign:"center",
   justifyContent:"center",
   marginHorizontal:15,
   marginVertical:15,
   marginTop:40,

    
  },
  Icon:{
marginTop:12,
  },
  smile:{
    color:"#2D156F",
    fontSize:20,
    fontWeight:20,
    
  },
  Button:{
    height:40,
alignItems:"center",
justifyContent:"center",
backgroundColor:"#3E238B",
borderRadius:10,
borderBlockColor:"#3E238B",
marginHorizontal:10,
  }, 
  textStyle:{
   color:"white",
   marginTop:20,
  },
 
});

export default UserInfo;
