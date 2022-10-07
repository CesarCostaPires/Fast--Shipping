import React, { useState, useEffect } from "react";
import { ImageBackground, TouchableOpacity, StyleSheet, Text, Alert, Keyboard} from 'react-native';
import { useNavigation} from '@react-navigation/native'; 
import { CampoMedio, Botao, TextoBotao, CampoGrande, CampoPequeno, Scrollzinho, ContainerCadastro, TituloMotorista, TituloEntregas, TextoDadosMotorista, ViewCadastro, ViewCep, BotaoCep } from "../Style";
import api from "../../services/api";
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
export default function CadastroEmpresa(){
    let [nomeEmpresa, setNome] = useState();
    let [cpfCnpj, setCpfCnpj] = useState();
    let [enderecoEmpresa, setEndereco] = useState();
    let [numEmpresa, setNum] = useState();
    let [bairroEmpresa, setBairro] = useState();
    let [cidadeEmpresa, setCidade] = useState();
    let [cepEmpresa, setCep] = useState();
    let [estadoEmpresa, setEstado] = useState();
    let [contatoEmpresa, setContato] = useState();
    let [emailEmpresa, setEmail] = useState();
    let [senhaEmpresa, setSenha] = useState();

    

    async function CadastrarUsuario(){
        console.log("clicou");

        let response = await api.post('cadastro.php', {
            nome: nomeEmpresa,
            cpf: cpfCnpj,
            endereco: enderecoEmpresa,
            num: numEmpresa,
            bairro: bairroEmpresa,
            cidade: cidadeEmpresa,
            cep: cepEmpresa,
            estado: estadoEmpresa,
            contato: contatoEmpresa,
            email: emailEmpresa,
            senha: senhaEmpresa
        }).then(function(response){Alert.alert("Usuario cadastrado com sucesso!");
    console.log(response);
        }).catch(function(error){
            Alert.alert("Erro ao cadastrar,tente mais tarde!");
            console.log(error);
        });
        navigation.navigate('Login');
    }
    useEffect(()=>{
        //async function loadData(){
          //  const data = await AsyncStorage.getItem(dataKey);

            //console.log(JSON.parse(data));
        //}
        //loadData();
    }, [])
    const navigation = useNavigation();

    
    return(
        <ContainerCadastro>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <ViewCadastro>
            <Scrollzinho showsVerticalScrollIndicator={false}>
                <TituloEntregas>Cadastro da sua empresa</TituloEntregas>
                    <TextoDadosMotorista>Nome:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: Ana Maria" onChangeText={setNome} />
                    <TextoDadosMotorista>CPF ou CNPJ:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: 000.000.000-00" onChangeText={setCpfCnpj} />
                    <TituloEntregas>Endereço</TituloEntregas>
                    <TextoDadosMotorista>CEP:</TextoDadosMotorista>
                    <ViewCep>
                        <CampoPequeno placeholder="Ex: 00000-000" onChangeText={setCep} />
                        <BotaoCep >
                            <TextoBotao>Pesquisar</TextoBotao>
                        </BotaoCep>
                    </ViewCep>
                    
                    <TextoDadosMotorista>Endereço:</TextoDadosMotorista>
                    <CampoGrande placeholder="Ex: Avenida Elisío Cordeiro de Siquiera" onChangeText={setEndereco} />
                    <TextoDadosMotorista>Numero:</TextoDadosMotorista>
                    <CampoPequeno placeholder="Ex: 628" onChangeText={setNum} />
                    <TextoDadosMotorista>Bairro:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: Jardim Santo Elías"onChangeText={setBairro}/>
                    <TextoDadosMotorista>Cidade:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: São Paulo"onChangeText={setCidade}/>
                    <TextoDadosMotorista>Estado:</TextoDadosMotorista>
                    <CampoMedio placeholder="São Paulo"onChangeText={setEstado} />
                    
                    <TituloEntregas>Contatos</TituloEntregas>
                    <TextoDadosMotorista>Contato:</TextoDadosMotorista>
                    <CampoMedio placeholder="0000000-0000"onChangeText={setContato} />
                    <TextoDadosMotorista>E-mail:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: anamaria@gmail.com"onChangeText={setEmail} />
                    <TextoDadosMotorista>Senha:</TextoDadosMotorista>
                    <CampoMedio placeholder="000000000000000"onChangeText={setSenha} />
                    <Botao onPress={CadastrarUsuario}><TextoBotao>Cadastrar</TextoBotao></Botao>
            </Scrollzinho>
            </ViewCadastro>
            </ImageBackground>
        </ContainerCadastro>
    );
}
const styles = StyleSheet.create({
    
    image: {
        flex:1,
        justifyContent: "center",
        width:"100%",
        alignItems: "center"
      },
      textoDadosMotorista:{
        
      
        
        backgroundColor:'#F8F8FF',
      
        color:'#F8F8FF',
        
        textAlign:'center'
}});
