module.exports=(app)=>{
    const fun=require('../controllers/users.controllers.js');
    app.post('/users/post', fun.create);

    app.get('/users/read', fun.findAll);

    app.delete('/users/:noteId', fun.deleteOne);

    app.put('/users/put/:noteId', fun.update);

}

