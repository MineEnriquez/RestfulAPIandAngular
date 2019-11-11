const Tasks = require('../controllers/ctrl_tasks');
const General = require('../controllers/ctrl_generic');
const Users = require('../controllers/ctrl_users');

module.exports = function (app) {
    app.get('/', (req, res) => {General.index(req, res);});
    app.post('/e2etest', (req, res) => {Tasks.e2etest(req, res);});
    app.post('/api/tasks/newtask', (req, res) => {Tasks.newtask(req, res);});
    app.get('/api/tasks/retrieveall', (req,res)=> {Tasks.retrieveAll(req, res);});
    app.get('/api/tasks/retrieveId/:id', (req,res)=> {Tasks.retrieveId(req, res);});
    app.put('/api/tasks/Update/:id', (req,res)=> {Tasks.updateId(req, res);});
    app.delete('/api/tasks/Delete/:id', (req,res)=> {Tasks.deleteId(req, res);});
    app.get('/api/tasks/retrieveTitle/:title', (req,res)=> {Tasks.retrieveTitle(req, res);});
    app.get('/api/users/', (req,res)=> {Users.getRetrieveAll(req, res);});
    app.get('/api/users/new/:name', (req,res)=> {Users.getAddName(req, res);});
    app.get('/api/users/remove/:name', (req,res)=> {Users.getDeleteName(req, res);});
    app.get('/api/users/:name', (req,res)=> {Users.getDisplayName(req, res);});
}