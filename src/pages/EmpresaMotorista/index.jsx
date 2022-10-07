import React, { useState } from "react";
import { ImageBackground, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native'; 
import {ContainerLogin, IconesStart, Buisness, TextoStart } from "../Style";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };
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
            <TextoStart>Para começar nos diga se você é</TextoStart>
            <IconesStart>
                
                <RectButton style={styles.Botao} onPress={goCadastroEmpresa}>
                    <Buisness>
                        <Ionicons name="business" size={30} color="#f5f5f5" />
                    </Buisness>
                    <Text style={styles.textoBotao}>Empresa</Text>
                </RectButton>
                <TextoStart>ou</TextoStart>
                <RectButton style={styles.Botao} onPress={goCadastroMotorista}>
                    <Buisness>
                        <FontAwesome name="truck" size={30} color="#f5f5f5" />
                    </Buisness>
                    <Text style={styles.textoBotao}>Motorista</Text>
                </RectButton>
            </IconesStart>
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