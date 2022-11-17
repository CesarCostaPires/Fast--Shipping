import React, { useState, useEffect } from "react";
import { ImageBackground, TouchableOpacity, StyleSheet, Text, Alert, TextInput,Keyboard} from 'react-native';
import { useNavigation} from '@react-navigation/native'; 
import { CampoMedio, Botao, TextoBotao, CampoGrande, CampoPequeno,CampoPequeno1, Scrollzinho, ContainerCadastro, TituloMotorista, TituloEntregas, TextoDadosMotorista, ViewCadastro, ViewCep, BotaoCep } from "../Style";
import api from "../../services/api";
import axios from "axios"

const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
export default function CadastroEmpresa(){
    let [nomeEmpresa, setNome] = useState();
    let [cpfCnpj, setCpfCnpj] = useState();
    let [enderecoEmpresa, setEndereco] = useState();
    let [numEmpresa, setNum] = useState();
    let [bairroEmpresa, setBairro] = useState();
    let [cidadeEmpresa, setCidade] = useState();
    let [cep, setCep] = useState();
    let [estadoEmpresa, setEstado] = useState();
    let [contatoEmpresa, setContato] = useState();
    let [emailEmpresa, setEmail] = useState();
    let [senhaEmpresa, setSenha] = useState();

    //const[cep,setCep] = useState('')
    const[values, setValues] = useState({
                bairro: '',
                complemento: '',
                localidade: '',
                logradouro:'',
                uf:''
    })

function getCep(){
  axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((data) => setValues(data.data))
}

    //async function handleApi() {
        //await fetch(`https://ws.apicep.com/cep.json?code=${cepEmpresa}`).then((res) =>
          //res.json().then((json) => {
           // if (json.ok === true) {
             // navigation.navigate('Cep', {
                //endereco: json.address,
                //estado: json.state,
                //bairro: json.district,
                //cidade: json.city,
             // });
           // } else {
            //  alert('CEP inexistente');
           // }
         // })
        //);
      //}

    async function CadastrarUsuario(){
        console.log("clicou");

        let response = await api.post('cadastro.php', {
            nome: nomeEmpresa,
            cpf: cpfCnpj,
            endereco: enderecoEmpresa,
            num: numEmpresa,
            bairro: bairroEmpresa,
            cidade: cidadeEmpresa,
            cep: cep,
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
        navigation.navigate('Inicial');
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
                <TituloEntregas>           Cadastro da sua empresa</TituloEntregas>
                    <TextoDadosMotorista>Nome:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: Ana Maria" onChangeText={setNome} />
                    <TextoDadosMotorista>CPF ou CNPJ:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: 000.000.000-00" onChangeText={setCpfCnpj} />
                    <TituloEntregas>Endereço</TituloEntregas>
                    <TextoDadosMotorista>CEP:</TextoDadosMotorista>
                    <ViewCep>
                        <CampoPequeno1 placeholder="00000-000"
                      
                        keyboardType='number-pad'
                        value={cep}
                         onChangeText={setCep}
                         onBlur={()=>getCep()} />
                        
                    </ViewCep>
                    
                    <TextoDadosMotorista>Endereço:</TextoDadosMotorista>
                    <CampoGrande placeholder="Ex: Avenida Elisío Cordeiro de Siquiera" 
                    value={values.logradouro}
                    onChangeText={setEndereco} />
                    <TextoDadosMotorista>Numero:</TextoDadosMotorista>
                    <CampoPequeno placeholder="Ex: 628" onChangeText={setNum} />
                    <TextoDadosMotorista>Bairro:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: Jardim Santo Elías"
                    value={values.bairro}
                    onChangeText={setBairro}/>
                    <TextoDadosMotorista>Cidade:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: São Paulo"
                    value={values.localidade}
                    onChangeText={setCidade}/>
                    <TextoDadosMotorista>Estado:</TextoDadosMotorista>
                    <CampoMedio placeholder="São Paulo"
                    value={values.uf}
                    onChangeText={setEstado} />
                    
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
