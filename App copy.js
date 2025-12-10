import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal } from 'react-native';

export default function App() {
  const [messaggio, setMessaggio] = useState("Ciao");
  const [visible, setVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [contatore, setContatore]= useState(0);
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const somma = Number(a) + Number(b);

  const dati = [
    { id: "1", nome: "Mario" },
    { id: "2", nome: "Luca" },
    { id: "3", nome: "Gino" }
  ]
  return (
    <View style={styles.container}>
      {visible && <Text>{messaggio} {visible}</Text>}
      <TextInput
        placeholder='Inserisci testo'
        onChangeText={setNome}
        style={styles.inputText}>
      </TextInput>
      <Button
        title='Cambia testo'
        onPress={() => setMessaggio("Forza Napoli")} />
      <Button
        title={visible ? "Nascondi" : "Visualizza"}
        onPress={() => setVisible(!visible)} />
      <Text>
        {contatore}
      </Text>
      <Button
        title='Incrementa'
        onPress={()=>setContatore(current=>current+1)}
      />
      <Button
        title='Decrementa'
        onPress={()=>setContatore(current=>current-1)}
      />
      <Button
        title='Azzera'
        onPress={()=>setContatore(0)}
      />
      <TextInput
        placeholder='Inserisci un numero'
        onChangeText={setA}
        style={styles.inputText}>
      </TextInput>
      <TextInput
        placeholder='Inseisci un numero'
        onChangeText={setB}
        style={styles.inputText}>
      </TextInput>
      <Text>
        {somma}
      </Text>
      <View style={styles.containerList}>
        <FlatList
          data={dati}
          renderItem={(dato) => <Text>{dato.item.nome}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.containerList}>
        <Text>Buonasera</Text>
        <Button title='Apri' onPress={() => setOpenModal(true)}></Button>
        <Modal visible={openModal} animationType='slide'>
          <View>
            <Text>Sono una moda</Text>
            <Button title='Chiudi' onPress={() => setOpenModal(false)}></Button>
          </View>
        </Modal>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 46,
    padding: 50
  },
  containerList: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputText: {
    borderWidth: 1,
    padding: 10
  }
});

 {/* <View style={{ flexDirection: 'row', height:200 }}>
        <View style={{ backgroundColor: 'red', flex: 1 }} />
        <View style={{ backgroundColor: 'white', flex: 1}} />
        <View style={{ backgroundColor: 'green', flex: 1 }} />
      </View> */}
      {/* <View>
         <Image
        style={styles.logo}
        source={{
          uri: 'https://it.wikipedia.org/wiki/File:SSC_Napoli_2024_%28azure%29.svg',
        }}
      />
      </View> */}