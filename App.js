import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import {useState} from 'react'; // Definición de variables de estado (state)

let estudiantes =[]

export default function App() {
  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [asignatura, setAsignatura] = useState('')
  const [notaUno, setnotaUno] = useState('')
  const [notaDos, setnotaDos] = useState('')
  const [notaTres, setnotaTres] = useState('')
  const [definitiva, setDefinitiva] = useState('')
  const [observacion, setObservacion] = useState('')

  const imagen = {uri:'https://previews.123rf.com/images/dominikhladik/dominikhladik1407/dominikhladik140700042/29817182-de-nuevo-a-fondo-de-la-escuela-con-%C3%BAtiles-escolares-y-el-bloc-de-notas-vac%C3%ADo-estilo-de-dise%C3%B1o.jpg'}
// Funcion de guardar notas



let guardarNotas = () =>{
  if ( id != "" && nombre != "" && asignatura !="" && notaUno != "" && notaDos!="" && notaTres!=""){
  const estudiante = {
    id: id,
    nombre: nombre,
    asignatura: asignatura,
    notaUno: notaUno,
    notaDos: notaDos,
    notaTres: notaTres,
    definitiva: definitiva,
    observacion: observacion
  }
  estudiantes.push(estudiante)
  alert("Estudiante guardado correctamente.")
  }  
    else {
      alert("Ingrese por favor los campos para ingresar notas del estudiante.")
    }
}

// Funcion de mostrar notas

  let mostrarNotas =() => {
    if ( id != "" && nombre != "" && asignatura !="" && notaUno != "" && notaDos!="" && notaTres!="") {
      if(notaUno >=0 && notaUno <= 5 && notaDos >= 0 && notaDos<= 5 && notaTres>= 0 && notaTres <=5){
        let definitiva = parseFloat(notaUno) + parseFloat(notaDos) + parseFloat(notaTres);
        let promedio = parseFloat(definitiva) /3 ;
        setDefinitiva(`La nota definitiva es de:  ${promedio.toFixed(2)}`)
        if(promedio >= 2.99 && promedio <=5){
        setObservacion("El estudiante ha aprobado");
      } else if(promedio >= 1.99 && promedio <=3){
        setObservacion("El estudiante queda habilitando")
        }
        else {
        setObservacion("El estudiante ha reproado, debe repetir")
      }
    } else { alert("las notas solamente pueden ser de 0 a 5") }
  }
    else {
      alert("Ingrese por favor los campos para ingresar notas del estudiante.")
    }
  }

// Funcion de buscar notas

let buscarNotas = () => {
  setObservacion.value = observacion;
  if (id !== "") {
    const estudianteEncontrado = estudiantes.find(estudiante => estudiante.id === id)
    if (estudianteEncontrado) {
      setNombre(estudianteEncontrado.nombre)
      setAsignatura(estudianteEncontrado.asignatura)
      setnotaUno(estudianteEncontrado.notaUno)
      setnotaDos(estudianteEncontrado.notaDos)
      setnotaTres(estudianteEncontrado.notaTres)
      setDefinitiva(estudianteEncontrado.definitiva)
      setObservacion(estudianteEncontrado.observacion)
    } else {
      alert('No se encontró al estudiante.')
    }
  } else {
    alert('Ingrese por favor el ID del estudiante para buscarlo.')
  }
}

  // Funcion de limpiar notas
 
  let Limpiar= () =>{ // Limpiar el conteido de las variables
    setId('');
    setNombre('');
    setAsignatura('');
    setnotaUno('');
    setnotaDos('');
    setnotaTres('');
    setDefinitiva('');
    setObservacion('');
    
  }

  return (
      <View style={[styles.container]}>
        <Text style={{
          color:'white', 
          fontSize: '28px', 
          fontWeight: 'bold', 
          fontFamily: 'system-ui',  
          letterSpacing: '2px', 
          borderRadius:12, 
          width: '50%', 
          height:'5%', 
          textAlign:'center',
          shadowColor: '#000', 
          marginTop:'3rem', 
          shadowOffset: { width: 0, height: 1},
          backgroundColor:'#EF0C54', 
          borderColor:'black', 
          shadowOpacity: 2,
          shadowRadius: 20, 
          elevation:1,}}>Sistema de notas</Text>
      
        <View style={[styles.Container1,{
          width: '50%', 
          height:'10%',
          textAlign:'center',
          flex:1,
          fontFamily: 'system-ui', 
          borderColor:'yellowgreen'}]}>
            
          <TextInput
            placeholder='Ingrese Identificación'
            style={styles.secondaryContainer}
            onChangeText={id => setId(id)}
            value={id}
          />
      
        <TextInput
          placeholder='Ingrese Nombres'
          style={styles.secondaryContainer}
          onChangeText={nombre => setNombre(nombre)}
          value={nombre}
        />
        <TextInput
          placeholder='Ingrese Asignatura'
          style={styles.secondaryContainer}
          onChangeText={asignatura => setAsignatura(asignatura)}
          value={asignatura}
        />
        <TextInput
          placeholder='Ingrese Nota Momento 1 (30%)'
          style={styles.secondaryContainer}
           onChangeText={notaUno => setnotaUno(notaUno)}
          value={notaUno}
        />
        <TextInput
          placeholder='Ingrese Nota Momento 2 (35%)'
          style={styles.secondaryContainer}
           onChangeText={notaDos => setnotaDos(notaDos)}
           value={notaDos}
        />
        <TextInput
          placeholder='Ingrese Nota Momento 3 (35%)'
          style={styles.secondaryContainer}
           onChangeText={notaTres => setnotaTres(notaTres)}
           value={notaTres}
        />
        
        <Text onChangeText={definitiva => setDefinitiva(definitiva)} value={definitiva} style={{color:'green', fontWeight:'bold', fontSize:18}}>
          Nota Definitiva:</Text>
        <Text>{(definitiva)}</Text>

        <Text onChangeText={observacion => setObservacion(observacion)} value={observacion}style={{color:'green', fontWeight:'bold',fontSize:18}}>
          Observacion:</Text>
        <Text>{(observacion)}</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={guardarNotas}>
          <Text>Guardar notas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={mostrarNotas}>
          <Text>Mostrar notas del estudiante</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={buscarNotas}>
          <Text>Buscar notas del estudiante</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Limpiar}>
          <Text>Limpiar campos</Text>
        </TouchableOpacity>
      </View>
        <view style={{flexDirection: 'row', marginTop:30}}>
          
        </view>

        <ImageBackground source={imagen} resizeMode={'cover'} style={styles.image}>


        </ImageBackground>
        
        <StatusBar style="auto"/>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'grey',
    justifyContent:'center',
    alignItems:'center'
  },

  image:{
    flex:1,
    justifyContent: 'center',
  },

  secondaryContainer: {
  backgroundColor: '#7C8FE5',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 20,
  elevation: 1,
  fontSize:'15px',
  flex:1,
  width:'35%',
  borderRadius: 20,
  margin:'1%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign:'center',
  paddingTop: 10,
  paddingBottom: 5,
  },

    Container1: {
    backgroundColor: '#CCCDD6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 1,
    fontSize:'15px',
    flex:1,
    width:'35%',
    borderRadius: 20,
    margin:'1%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    paddingTop: 10,
    paddingBottom: 5,
    },
  inputs:{
    width:'75%',
    fontSize:'17px',
    fontFamily: 'Helvetica',
    letterSpacing: '1px',
    color:'black',
    alignSelf: 'center',
    textAlign:'center',
    padding:20,
    paddingTop:5,
    marginTop: 6,
    marginBottom: 4,
    backgroundColor: 'red',
}, 

  button: {
      flex: 1,
      textAlign:'center',
      width:'10rem',
      fontWeight:'bold',
      backgroundColor: '#2ECC71',
      borderRadius: 10,
      textTransform: "uppercase",
      padding: 9,
      position: 'relative',
      marginTop: 6,
      marginBottom: 5,
      paddingTop: 10,
      paddingBottom: 10,
      
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 20,
  }

})
