
import React, {useState,useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App= () => {

  useEffect(() => {
    SplashScreen.hide();
  });

  const [value,setValue]=useState(0);
  const [data,setData]=useState(0);

  const performOperation=(val)=>{
    if(val<=0){
      setValue(0);
    }
    else if(val%2==0){
      setValue((data*data)-1);
    }
    else
      setValue((data*data)+1)
  };

  return(
      <View style={styles.container}>
        <Text style={styles.textLook}>Value:{value}</Text>
        <TextInput 
        style={styles.textInput}
        placeHolder='Enter an Index'
        keyboardType='numeric'
        onChangeText={d=>setData(d)}/>
        <Button
        title='SEE VALUE'
        style={styles.button}
        onPress={()=>performOperation(data)}/>
      </View>  
  );
};

const styles=StyleSheet.create({

    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textLook:{
      color: 'black',
      fontSize: 25
    },
    button:{
      color: 'white',
      borderRadius: 25
    },
    textInput:{
      borderWidth: 1,
      height: 40,
      margin: 12,
      padding: 10,
      color: '#e91e63',
      fontSize: 20
    }

});


export default App;
  