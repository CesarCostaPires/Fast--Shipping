
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

`;
//---------->>>TELA LOGIN<<<----------------

export const ContainerLogin = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #135ced;
`;

export const ViewCaixas = styled.View`
    justify-content: space-around;
    width: 80%;
    align-items: center;
`;
export const CaixaTexto = styled.TextInput`
    height: 50px;
    border-radius: 10px;
    background-color: #f5f5f5;
    margin: 10px;
    width: 100%;
    color: #135ced;
    font-size: 15px;
    padding-left: 20px;
`;

export const BotaoLogin = styled.TouchableOpacity`
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 9px;
    width: 250px;
    margin: 5px;
    align-self: center;
`;
export const TextoBotaoLogin = styled.Text`
    text-align: center;
    color: #135ced;
    font-size: 18px;
`;

export const ViewBotoes = styled.View`
    justify-content: center;
    align-items: center;
`;
export const BotaoCriar = styled.TouchableOpacity`
    background-color: #135ced;
    padding: 10px;
    border-radius: 9px;
    width: 130px;
    margin: 5px;
    align-self: center;
`;
export const TextoCriar = styled.Text`
    color: white;
    font-size: 18px;
    text-align: center;
`;

//---------->>>TELA INICIAL<<<--------------

export const IconesStart = styled.View`
    flex-direction: column;
    width: 100%;
    height: 40%;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
`;
export const Buisness = styled.View`
    width: 20%;
    border-radius: 10px;
    height: 96%;
    align-items: center;
    justify-content: center;
    background-color: #135ced;
    margin: 1px;
`;
export const TextoStart = styled.Text`
    font-size: 30px;
    color: #f5f5f5;
    text-align: center;
`;
//-------------->>>>FIM TELA START<<<<-----------

export const Botao = styled.TouchableOpacity`
    background-color: #135ced;
    padding: 10px;
    border-radius: 9px;
    width: 250px;
    margin: 5px;
    align-self: center;
`;

export const TextoBotao = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 18px;
`;
export const Header = styled.View`
    justify-content:  center;
    align-items: center;
    flex-direction: row;
   
    width: 360px;
    height: 100px;
`;
export const Nome = styled.Text`
    color: #fff;
    font-size: 26px;
    fontWeight: bold;
`;

export const Modalzinho = styled.View`
    background-color: #135ced;
    margin: 20px;
    margin-top: 50px;
    width: 120px;
    height: 120px;
    align-self: flex-end;
    align-items: center;
    justify-content: space-around;
    
`;

export const Titulo = styled.View`
    margin: 15px;
    align-self: flex-start;
`;
export const TextoTitulo = styled.Text`
    font-size: 30px;
    color: 	#FFFFFF;
    
`;

export const ViewFlat = styled.View`
    width: 360px;
    height:601px;
    align-items: center;
    background-color: #fff;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;
export const ViewFlat1 = styled.View`
    width: 360px;
    height:695px;
    align-items: center;
    background-color: #fff;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;
export const ViewFlat2 = styled.View`
    width: 360px;
    height:695px;
    align-items: center;
    background-color: #fff;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;
export const ViewFlat3 = styled.View`
    width: 360px;
    height:570px;
    align-items: center;
    background-color: #fff;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;


export const TextoFlat = styled.Text`
    font-size: 15px;
    color: 	#274070;
    margin-left: 10px;
`;

export const Footer = styled.View`
    flex-direction: row;
    height: 90px;
    justify-content: space-around;
    width: 360px;
    background-color: #fff;
    border-top-width: 1px;
    border-color: #135ced;
    align-items: center;
`;
export const TextoIconeSelecionado = styled.Text`
    color: #135ced;
    font-size: 13px;
`;

export const TextoIcones = styled.Text`
    color: #5f5f5f;
    font-size: 12px;
`;
export const BotaoFlat = styled.TouchableOpacity`
    background-color: #f2f2f5;
    width: 320px;
    height: 100px;
    margin-bottom: 15px;
    border-radius: 15px;
    align-items: flex-start;
    justify-content: center;
`;

export const Icones = styled.TouchableOpacity`
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;
//PAGINA DE ENTREGAS DO USUARIO MOTORISTA

export const ViewDadosProduto = styled.View`
    align-items: center;
    align-self: flex-start;
    flex-direction: column;
    justify-content: center;
`;

export const TextoDadosEntrega = styled.Text`
    font-size: 17px;
    color: 	#FFFFFF;
    margin: 5px;
`;

export const TituloEntregas = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
    margin-top: 20px;
`;

//TELA MAPA DO MOTORISTA

export const ViewMapa = styled.View`
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    width: 93%;
    background-color: #fff;
    align-self: center;
    padding-top:32px;
    margin-top: -220px;
    align-items: center;
    justify-content: center;
    
`;

export const TextoViewMapa = styled.Text`
    font-size: 13px;
    color: #274070;
    margin: 5px;
`;
export const Linha = styled.View`
    background-color: gray;
    padding: 3px;
    width: 40px;
    align-self: center;
    border-radius: 10px;
`;

//PERFIL DO MOTORISTA
export const ViewDadosMotorista = styled.View`
    flex-direction: column;
    justify-content: center;
    border-top-width: 2px;
    border-color: #274070;
    margin-bottom: 10px;
`;

export const TextoDadosMotorista = styled.Text`
    font-size: 17px;
    color: #FFFFFF;
    margin: 5px;
`;

export const TituloMotorista = styled.Text`
    font-size: 22px;
    color: #FFFFFF;
    margin-top: 20px;
    align-self: center;
    fontWeight: bold;
`;
export const BotaoEditar = styled.TouchableOpacity`
    background-color: #135ced;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
`;

//------->>> FORMULARIO PADRÃO <<<--------

export const Scrollzinho = styled.ScrollView`
    width: 90%;
    height: 60%;
`;



export const CampoGrande = styled.TextInput`
    height: 50px;
    border-radius: 10px;
    background-color: #f5fbff;
    margin: 10px;
    width: 80%;
    color: #135ced;
    font-size: 15px;
    padding-left: 10px;
    border-width: 1px;
    border-color: #135ced;
`;

export const CampoPequeno = styled.TextInput`
    height: 50px;
    border-radius: 10px;
    background-color: #f5fbff;
    margin: 10px;
    width: 30%;
    color: #135ced;
    font-size: 15px;
    padding-left: 10px;
    border-width: 1px;
    border-color: #135ced;
`;

export const CampoMedio = styled.TextInput`
    height: 50px;
    border-radius: 10px;
    background-color: #f5fbff;
    margin: 10px;
    width: 60%;
    color: #135ced;
    font-size: 15px;
    padding-left: 10px;
    border-width: 1px;
    border-color: #135ced;
`;
//--------->>>TELAS DE CADASTRO<<<-----------
export const ContainerCadastro = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
`;
export const ViewCadastro = styled.View`
    margin: 10px;
`;
export const ViewCep = styled.View`
    flex-direction: row;
`;
export const BotaoCep = styled.TouchableOpacity`
    background-color: #135ced;
    padding: 10px;
    border-radius: 9px;
    width: 150px;
    margin: 5px;
    align-self: center;
`;