import Mybutton from '@/components/Mybutton';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignupScreen = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const onRegister = () => {
        setError('');
        setIsLoading(true);

        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            setIsLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            setIsLoading(false);
            return;
        }

        setTimeout(() => {
            Alert.alert('Success', 'Your account has been created!');
            router.replace('/(tabs)/login');
            setIsLoading(false);
        }, 1500);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>

            <View style={styles.formContainer}>
                <TextInput
                    placeholder='Enter your Name'
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
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
                        <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                    </TouchableOpacity>
                </View>

               
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Confirm Your Password'
                        style={styles.passwordInput}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                       
                        secureTextEntry={isConfirmPasswordVisible}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                    >
                        <Ionicons name={isConfirmPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                    </TouchableOpacity>
                </View>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}

               

                <Mybutton
                    title={"Register"}
                    onPress={onRegister}
                    isLoading={isLoading}
                    disabled={isLoading}
                />

                <TouchableOpacity onPress={() => router.push('/(tabs)/login')}>
                    <Text style={styles.linkText}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignupScreen;


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