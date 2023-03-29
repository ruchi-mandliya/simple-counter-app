import { View, Text, StyleSheet, Button } from "react-native";
import React,{useState} from "react";

const App = () => {
  const [counter,setCounter] = useState(0);

  const increamentHandler = () => {
    setCounter(counter+1);
  }
  const decreamentHandler = () => {
    if(counter>0)
    setCounter(counter-1);
     

  }
  const resetHandler = () => {
    setCounter(0);

  }

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text>{counter}</Text>
      </View>
      <View style = {styles.horizontalButtonContainer}>
        <View style = {[styles.buttonContainer,{flex:1}]}>
          <Button title="increament" color={'green'} onPress={increamentHandler}/>

        </View>
        <View style = {[styles.buttonContainer,{flex:1}]}>
          <Button title="decreament" color={'red'} onPress={decreamentHandler} />

        </View>
        
        
       
      </View>
      <View style = {{padding: 10,width: '100%'}}>
        <View style = {styles.resetButtonContainer}>
         <Button title="reset" color={'grey'} onPress={resetHandler}/>

      </View>
      
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: 120,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalButtonContainer: {
    flexDirection: "row",
    alignItems: 'center'
    // margin: 10,
    // padding: 10
  },
  buttonContainer: {
    margin: 10
  },
  resetButtonContainer : {
    width:'100%'


  }

});


export default App;
