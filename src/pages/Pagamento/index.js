import React, { useState } from "react";
import { ImageBackground,ScrollView, TouchableOpacity, StyleSheet,Image, Modal, View} from 'react-native';
import {CurrentRenderContext, useNavigation} from '@react-navigation/native'; 
import { Container1,Text, Footer, Header1, Icones, Nome1, Nome2,TextoIcones, TextoIconeSelecionado, Modalzinho, Botao, TextoBotao, TextoDadosMotorista, ViewDadosMotorista, TituloMotorista, BotaoEditar, ViewFormulario, CampoGrande, CampoPequeno, CampoMedio, Scrollzinho } from "../Style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const image = { uri: "https://i.pinimg.com/564x/1b/53/44/1b5344ade15267fc562e0b5bcbb9b649.jpg" };

export default function Pagamento(props){
 
    return(
        <Container1>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image style={{width:190, height:180}} source={require('../../assets/novo1.png')}/>
        <Nome2>R${props.route.params.price}</Nome2>
        <Nome1>Valor desse frete</Nome1>
        <Header1>
        <Nome1>Seu destino é {props.route.params.address}</Nome1>
        </Header1>
        <Nome1>Saldo em conta: R${props.route.params.price}</Nome1>
         <View style={{flexDirection: 'column'}}>
            <Nome1>
            <MaterialCommunityIcons name="bank-transfer" backgroundColor="#3b5998" size={35} color="black" onPress={() => alert('Pagamento')}/> Transferir</Nome1>
            <Icon.Button name="paypal" backgroundColor="#1e477a" size={20} onPress={()=>{Alert.alert('Pagamento')}}>Pagamento</Icon.Button>
            <Icon.Button name="credit-card-alt" backgroundColor="#7d7" size={20} onPress={() => alert('Pagamento')}>    Cartão    </Icon.Button>
            <Nome1>
            <SimpleLineIcons name="envelope" size={24} color="black" /> Rede Social</Nome1>
            <Icon.Button name="instagram" backgroundColor="#cd486b" size={20} onPress={()=>{Alert.alert('Pagamento')}}> Instagram </Icon.Button>
            <Icon.Button name="google" backgroundColor="#dc4335" size={20} onPress={()=>{Alert.alert('Pagamento')}}>    Google    </Icon.Button>
            <Icon.Button name="youtube" backgroundColor="#FF0000" size={20} onPress={()=>{Alert.alert('Pagamento')}}>    YouTube   </Icon.Button>
        </View>
            
        </ImageBackground>
           </Container1>
    );
}
const styles = StyleSheet.create({
   
    image: {
    flex:1,
    justifyContent: "center",
    width:"100%",
    alignItems: "center"
    },
    caixaTexto:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 20
},
    caixa:{
        backgroundColor: '#000',
        padding: 7,
        borderRadius:4,
        marginTop:30,
        justifyContent:'center',
        alignItems: 'center'
    }

});
