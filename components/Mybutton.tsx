import React from 'react';
import { StyleSheet, Text, TouchableOpacity,ActivityIndicator } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';



interface MyButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean; 
  isLoading?: boolean; 
}


const MyButton= ({ title, onPress,disabled=false,isLoading=false }:MyButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
       style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      {isLoading? (<ActivityIndicator color="black" />
      ) :(<Text style={styles.body}>{title}</Text>)}
      
    </TouchableOpacity>
  );
};


const styles= StyleSheet.create({
    button:{
        backgroundColor:"orange",
        paddingHorizontal:50,
        paddingVertical:10,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        
        
    },
    buttonDisabled: {
    backgroundColor: '#ffc966', 
    },
    body:{
        fontSize:16,
        color:"black",
        fontWeight:"bold",
       
        
        
    }


});
export default MyButton
    
