import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal, Image} from "react-native";

const TaskInput = (props) => {
    const [task, setTask] = useState("");
    function addTask() {
        props.onAddTask(task)
        setTask("")
        props.onCancel()
    }
    function annulla(){
        setTask("")
        props.onCancel()
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer} >
                <Image style={styles.image} source={require("../assets/images/Napoli.png")}></Image>
                <TextInput
                    style={styles.textInput}
                    placeholder='Inserisci task'
                    onChangeText={setTask}
                    value={task}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Aggiungi'
                            onPress={addTask}
                            color="#f31282"
                            disabled={task === ""}
                        ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Annulla'
                            onPress={annulla}
                        ></Button>
                    </View>
                </View>
            </View >
        </Modal>
    );
};

export default TaskInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 8
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottonColor: '#cccccc',
        gap:16
    },
    buttonContainer:{
        flexDirection:'row',
    },
    button:{
        marginHorizontal:8
    },
    image:{
        width:100,
        height:100,
        margin:20
    }
});