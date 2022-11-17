import React, {useState,useEffect,useRef} from 'react';
import { Text, View, Dimensions,StyleSheet, Image,TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import config from './index.json';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';




export default function MapaMotorista(props) {

    const mapEl=useRef(null);
    const [origin,setOrigin]=useState(null);
    const [destination,setDestination]=useState(null);
    const [distance,setDistance]=useState(null);
    const [price,setPrice]=useState(null);
    const [address,setAdress]=useState(null);


    useEffect(()=>{
        (async function(){
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
                setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.000922,
                    longitudeDelta: 0.000421
                })
            } else {
                throw new Error('Location permission not granted');
            }
        })();
    },[]);


    return (
        <View style={styles.container}>
            <MapView
                    style={styles.map}
                    initialRegion={origin}
                    showsUserLocation={true}
                    zoomEnabled={false}
                    loadingEnabled={true}
                    ref={mapEl}
            >
                {destination &&
                <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={config.googleApi}
                        strokeWidth={3}
                        onReady={result=>{
                        setDistance(result.distance);
                        setPrice(result.distance*3);
                        mapEl.current.fitToCoordinates(
                            result.coordinates,{
                                edgePadding:{
                                    top:50,
                                    bottom:50,
                                    left:50,
                                    right:50
                                }
                            }
                        );
                    }
                    }
                />
                }

            </MapView>

            <View style={styles.search}>
                <GooglePlacesAutocomplete
                        placeholder='Para onde vamos?'
                        onPress={(data, details = null) => {
                        setAdress(data.description);   
                        setDestination({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            latitudeDelta: 0.000922,
                            longitudeDelta: 0.000421
                        });
                    }}
                    query={{
                        key: config.googleApi,
                        language: 'pt-br',
                    }}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    styles={{
                        listView:{backgroundColor:'#fff', zIndex:10},
                        container:{position:'absolute',width:'100%'}
                    }}
                />

                {distance &&
                <View style={styles.distance}>
                     <Text>Frete simples</Text>
                    <Image style={{width:100, height:100}} source={require('../../assets/pngegg.png')}/> 
                    <Text style={styles.distance__text}>Distância: {distance.toFixed(2).replace('.',',')}km</Text>
                    <TouchableOpacity style={styles.price} onPress={() => props.navigation.navigate('Pagamento',{price: price.toFixed(2),address:address})}>
                        <Text style={styles.price__text}> Aceitar R${price.toFixed(2).replace('.',',')}</Text>
                    </TouchableOpacity>
                </View>
                }
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
distance:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 10
},
distance__text:{
    fontSize:20,
    fontWeight:'bold',
    
},
price:{
    backgroundColor: '#000',
    padding: 7,
    borderRadius:4,
    marginTop:30,
    justifyContent:'center',
    alignItems: 'center'
},
price__text:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 20
},
map:{
    width:450,
    height:450 
 },       
search:{
    height: 400,
    borderWidth: 0,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 5,
    padding: 5
}
});
