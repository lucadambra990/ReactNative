import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal, Image, ScrollView } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  // const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisible,setModalVisible]=useState(false)

  function startAddTask(){
    setModalVisible(true); //Apre la modale
  }

  function endAddTask(){
    setModalVisible(false); //Chiude la modale
  }
  // function taskInputHandler(enteredTask) {
  //   console.log(enteredTask)
  //   setTask(enteredTask)
  // }

  function deleteTask(id) {
    setTasks(current => {
      return current.filter((t) => t.id !== id)
    });
  }
  function addTaskHandler(task) {
    setTasks(current => [...current, { task, id: new Date() }]);
  }

  // function addTaskHandler() {
  //   if (task !== "") {

  //     setTasks(current => [...current,{task,id:new Date()}]);
  //     setTask("");
  //   }
  // }

  return (
    <View style={styles.appContainer}>
      <Button title="Add new task" color='#5c0acc' onPress={startAddTask}/>
        <Image style={styles.image} source={require(".../assets/image/neres-david-neres.gif")}></Image>
      <TaskInput visible={modalVisible} onAddTask={addTaskHandler} onCancel={endAddTask}></TaskInput>
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Inserisci task'
          onChangeText={taskInputHandler}
          value={task}
        />
        <Button
          title='Aggiungi'
          onPress={addTaskHandler}
          disabled={task === ""}
        ></Button>
      </View> */}
      <View style={styles.goalContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={tasks}
          renderItem={(itemData) => {
            return (
              <TaskItem onDelete={deleteTask} taskItem={itemData.item}></TaskItem>
              // <View style={styles.taskText}>
              //   <Text style={styles.taskItem}>{itemData.item}</Text>
              // </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
        {/* <ScrollView>
          {
            tasks.map((t, index) => (
              <View key={index} style={styles.taskItem}>
                <Text key={index} style={styles.taskText}>{t}</Text>
              </View>
            ))}
        </ScrollView> */}
      </View>
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
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#199FD6',
    paddingTop: 50,
    paddingHorizontal: 16

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },
  goalContainer: {
    flex: 4
  },
  image:{
        width:100,
        height:100,
        margin:20
    }
});