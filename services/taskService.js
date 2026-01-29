const TASKS_URL = "https://prova-its-web3-default-rtdb.firebaseio.com/tasks/";

async function handleResponse(response) {
  if (!response.ok) {
    const errorText = response.text();
    throw new Error("Fire base error:" + response.status + " " + errorText);
  }
  return response.json();
}

export async function fetchTasks() {
  try {
    const response = await fetch(TASKS_URL + ".json");
    const data = await handleResponse(response);
    // console.log("data",data)
    if (!data) {
      return [];
    }
    const tasks = Object.keys(data).map((id) => {
      console.log(id);
      return {
        id,

        ...data[id],
      };
    });
    console.log("tasks", tasks);
    return tasks;
    //   return Object.entries(data).map(([id, value]) => ({
    //   id,
    //   text: value.text,
    //   done: Boolean(value.done),
    // }));
  } catch (err) {
    console.error("ERRORE fecthTasks:" + err);
  }
}

export async function addTask(taskText) {
  try {
    const newTask = { text: taskText, done: false };
    const response = await fetch(TASKS_URL + ".json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    return await response.json();
  } catch (err) {
    console.log("Errore:", err);
    return null;
  }
}

export async function doneTask(task) {
  const response = await fetch(TASKS_URL + task.id + ".json", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: !task.done }),
  });

  await handleResponse(response);
}