import React, { useState } from "react";
import { ImageBackground, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native'; 
import {ContainerLogin, IconesStart, Buisness, TextoStart5,TextoStart4 } from "../Style";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const image = { uri: "https://i.pinimg.com/564x/81/01/ed/8101ed6108e46eda140a7bbeaab3ed14.jpg" };
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };

export default function EmpresaMotorista(){
    const navigation = useNavigation();

    function goLogin(){
        navigation.navigate('Login');
    }
    function goCadastroEmpresa(){
        navigation.navigate('CadastroEmpresa');
    }
    function goCadastroMotorista(){
        navigation.navigate('CadastroMotorista');
    }
    return(
        <ContainerLogin>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <TextoStart4>Crie sua conta</TextoStart4>
            <IconesStart>
                
                <RectButton style={styles.Botao} onPress={goCadastroEmpresa}>
                    <Buisness>
                        <Ionicons name="business" size={30} color="#f5f5f5" />
                    </Buisness>
                    <Text style={styles.textoBotao}>  Cliente</Text>
                </RectButton>
                <TextoStart5>ou</TextoStart5>
                <RectButton style={styles.Botao} onPress={goCadastroMotorista}>
                    <Buisness>
                        <FontAwesome name="truck" size={30} color="#f5f5f5" />
                    </Buisness>
                    <Text style={styles.textoBotao}>Motorista</Text>
                </RectButton>
                </IconesStart>
                <Image style={{width:180, height:55,marginTop: 270,marginBottom: -350}} source={require('../../assets/N1.png')}/>
            </ImageBackground> 
        </ContainerLogin>
    );
}

const styles = StyleSheet.create({
    Botao:{
        flexDirection: 'row',
        width: '80%',
        height: '20%',
        justifyContent:'flex-start',
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        alignItems:'center'
    },
    image: {
        flex:1,
        justifyContent: "center",
        width:"100%",
        alignItems: "center"
      },
    textoBotao:{
        marginLeft:60,
        fontSize:17,
        color: '#135ced',
    }
});