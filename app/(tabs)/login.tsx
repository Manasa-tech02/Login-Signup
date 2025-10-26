// 





import Mybutton from '@/components/Mybutton';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onLogin = () => {
        setError('');
        setIsLoading(true);

        if (!email || !password) {
            setError('Please fill in both fields.');
            setIsLoading(false);
            return;
        }

        setTimeout(() => {
            if (email.toLowerCase() === 'test@email.com' && password === 'password123') {
                Alert.alert('Success', 'You are now logged in!');
               
            } else {
                setError('Invalid email or password.');
            }
            setIsLoading(false);
        }, 1500);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.formContainer}>
                <TextInput
                    placeholder='Enter Your Email'
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Enter Your Password'
                        style={styles.passwordInput}
                        value={password}
                        onChangeText={setPassword}
                       
                        secureTextEntry={isPasswordVisible}
                    />
                    
                    <TouchableOpacity

                        style={styles.eyeIcon}
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                        <Ionicons
                            name={isPasswordVisible ? "eye-off" : "eye"}
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                </View>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                

                <Mybutton
                    title={"Login"}
                    onPress={onLogin}
                    isLoading={isLoading}
                    disabled={isLoading}
                />

                <TouchableOpacity onPress={() => router.push('/(tabs)/signup')}>
                    <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
        color: '#333',
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    passwordInput: {
        flex: 1,
        height: 50,
    },
    eyeIcon: {
        padding: 5,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 15,
    },
    linkText: {
        color: 'orange',
        textAlign: 'center',
        marginTop: 20,
    },
});