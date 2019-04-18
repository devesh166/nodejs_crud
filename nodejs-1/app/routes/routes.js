module.exports=(app)=>{
    const fun=require('../controllers/users.controllers.js');
    const fun1=require('../controllers/job.controllers.js');
    app.post('/users/post', fun.create);

    app.get('/users/read', fun.findAll);

    app.delete('/users/:noteId', fun.deleteOne);

    app.put('/users/put/:noteId', fun.update);

    app.post('/jobs/post/:id',fun1.create);

    app.get('/jobs/read', fun1.findAll);

    app.delete('/jobs/:noteId', fun1.deleteOne);

    app.put('/jobs/put/:noteId', fun1.update);

}

