const URL_BASE ="https://todoapp-f2592-default-rtdb.europe-west1.firebasedatabase.app/tasks";

async function handleResponse(response) {
  if (!response.ok) {
    const errorText = response.text();
    throw new Error("Fire base error:" + response.status + " " + errorText);
  }
  return response.json();
}

export async function fecthTasks() {
  try {
    const response = await fetch(TASKS_URL + ".json");
    const data = await handleResponse(response);
   // console.log("data",data)
    if(!data){
      return  []
    }
const tasks=Object.keys(data).map((id)=>{
  console.log(id)
  return {
      id,

     ...data[id]
    }})
    console.log("tasks",tasks)
    return tasks
  //   return Object.entries(data).map(([id, value]) => ({
  //   id,
  //   text: value.text,
  //   done: Boolean(value.done),
  // }));

  } catch (err) {
    console.error("ERRORE fecthTasks:" + err);
  }
}