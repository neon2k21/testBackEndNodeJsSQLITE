const express = require("express");
const app = express();
const db = require("./db/users");
const bodyParser = require("body-parser");
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//////////////////////////////users//////////////////////////////
app.post("/users", async (req, res) => {
    const results = await db.createUser(req.body);
    console.log(req.body)
    res.status(201).json({ id: results[0], 
        name: results[1],
        age: results[2]
     });

});
app.get("/users", async (req, res) => {
    const users = await db.getAllUsers();
    res.status(200).json({ users });

});
app.get("/users/:id", async (req, res) => {
    const users = await db.getCurrentUser(req.params.id);
    res.status(200).json({ users });
});
app.patch("/users/:id", async (req, res) => {
    const id = await db.updateUser(req.params.id, req.body);
    res.status(200).json({ id });

});
app.delete("/users/:id", async (req, res) => {
    await db.deleteUser(req.params.id);
    res.status(200).json({ success: true })

});
////////////////////////////tasks/////////////////////////////////
app.post("/tasks", async (req, res) => {
    const results = await db.createTask(req.body);
    res.status(201).json({ id: results[0]});
});

app.get("/tasks", async (req, res) => {
    const tasks = await db.getAllTasks();
    res.status(200).json({ tasks });
});

app.get("/tasks/:id", async (req, res) => {
    const tasks = await db.getTasksForCurrentUser(req.params.id);
    res.status(200).json({ tasks });
});

app.patch("/tasks/:id", async (req, res) => {
    const id = await db.updateTask(req.params.id, req.body);
    res.status(200).json({ id });
});

app.delete("/tasks/:id", async (req, res) => {
    await db.deleteTask(req.params.id);
    res.status(200).json({ success: true })
});

app.listen(1337, () => console.log("server is running on port 1337"));