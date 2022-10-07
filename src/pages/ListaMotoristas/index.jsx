import React, { useState } from "react";
import {ImageBackground,View, TouchableOpacity, StyleSheet, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import { Container, Footer, Header, Icones, Nome, TextoFlat, TextoIcones, TextoIconeSelecionado, TextoTitulo, Titulo, ViewFlat3, BotaoFlat } from "../Style";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };

export default function ListaMotorista(){

    const navigation = useNavigation();

    function goDetalhes(){
        navigation.navigate('MotoristaSelecionado');
    }

    function goPublicar(){
        navigation.navigate('Publicar');
    }
    function goHome(){
        navigation.navigate('Empresa');
    }
    function goPerfil(){
        navigation.navigate('PerfilEmpresa');
    }

    let[entregas, setEntregas] = useState([
        {
            id:0,
            nome:'sofa',
            empresa:'Vialog',
            cliente:'Paulo'
        },
        {
            id:1,
            nome:'geladeira',
            empresa:'Varejo CIA',
            cliente:'João'
        },
        {
            id:2,
            nome:'fogao',
            empresa:'Sei la',
            cliente:'Gabriel'
        },
        {
            id:3,
            nome:'fogao',
            empresa:'Sei la',
            cliente:'Gabriel'
        },
        {
            id:4,
            nome:'fogao',
            empresa:'Sei la',
            cliente:'Gabriel'
        }
    ]);

    return(
        <Container>
              <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Header>
                <Nome>Nome do usuario</Nome>
                <TouchableOpacity onPress={() => setVisivel(true)}>
                    <SimpleLineIcons name="options-vertical" size={24} color="white" />
                </TouchableOpacity> 
            </Header>
            <Titulo>
                <TextoTitulo>Motoristas prontos para a entrega</TextoTitulo>
            </Titulo>
            <ViewFlat3>
                <FlatList 
                    data={entregas}
                    keyExtractor={(item) => item.id}
                    renderItem={(({item}) =>
                    <BotaoFlat onPress={goDetalhes}>
                        <TextoFlat>Produto: {item.nome}</TextoFlat>
                        <TextoFlat>Empresa: {item.empresa}</TextoFlat>
                        <TextoFlat>Nome do cliente: {item.cliente}</TextoFlat>
                    </BotaoFlat>)}
                />
                </ViewFlat3>
            <Footer>
            <Icones onPress={goHome}>
                    <AntDesign name="appstore1" size={30} color="#5f5f5f" />
                    <TextoIcones>Home</TextoIcones>
                </Icones>
                <Icones onPress={goPublicar}>
                    <Ionicons name="create" size={30} color="#5f5f5f" />            
                    <TextoIcones>Publicar</TextoIcones>
                </Icones>
                
                <Icones onPress={goPerfil}>
                    <FontAwesome name="user-circle" size={30} color="#5f5f5f" />
                    <TextoIcones>Perfil</TextoIcones>
                </Icones>
            </Footer>
            </ImageBackground>
        </Container>
    );
}


const styles = StyleSheet.create({
    
    image: {
    flex:1,
    justifyContent: "center",
    width:"100%",
    alignItems: "center"
  
}});
