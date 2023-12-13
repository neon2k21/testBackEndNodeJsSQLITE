const knex = require("./knex");


function createUser(user) {
   
    return knex("users").insert(user);
};
function createTask(task) {
    
    return knex("tasks").insert(task);
};
function getAllTasks(){
    return knex("tasks").select("*");
};
function getTasksForCurrentUser(id){
    return knex("tasks").select('*').where("owner", id);
}
function updateTask(id,task){
    return knex("tasks").where("id_task", id).update(task);
}
function deleteTask(id){
    return knex("tasks").where("id_task", id).del();
}

function getAllUsers(){
    return knex("users").select("*");
};
function getCurrentUser(id){
    return knex("users").select('*').where("id", id);
}
function deleteUser(id) {
    return knex("users").where("id", id).del();
};

function updateUser(id, user) {
    return knex("users").where("id", id).update(user);
};

module.exports = {
    createUser,
    getAllUsers,
    getCurrentUser,
    deleteUser,
    updateUser,
    deleteTask,
    getAllTasks,
    updateTask,
    getTasksForCurrentUser,
    createTask
}