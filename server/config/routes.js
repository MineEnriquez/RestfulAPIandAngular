const Tasks = require('../controllers/ctrl_tasks');
const General = require('../controllers/ctrl_generic');
const Users = require('../controllers/ctrl_users');

module.exports = function (app) {
    app.get('/', (req, res) => {General.index(req, res);});
    app.post('/api/newtask', (req, res) => {Tasks.newtask(req, res);});
    app.get('/api/retrieveall', (req,res)=> {Tasks.retrieveAll(req, res);});
    app.get('/api/retrieveId/:id', (req,res)=> {Tasks.retrieveId(req, res);});
    app.get('/api/retrieveTitle/:title', (req,res)=> {Tasks.retrieveTitle(req, res);});
    app.get('/api/', (req,res)=> {Users.getRetrieveAll(req, res);});
    app.get('/api/new/:name', (req,res)=> {Users.getAddName(req, res);});
    app.get('/api/remove/:name', (req,res)=> {Users.getDeleteName(req, res);});
    app.get('/api/:name', (req,res)=> {Users.getDisplayName(req, res);});
}