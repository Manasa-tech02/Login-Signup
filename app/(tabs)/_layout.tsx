
import { Stack } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Stack screenOptions={{headerShown:true}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="login"/>
      <Stack.Screen name="signup"/>
    </Stack>
    
  );
}

