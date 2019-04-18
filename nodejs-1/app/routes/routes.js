module.exports=(app)=>{
    const users_coll=require('../controllers/users.controllers.js');
    const jobs_coll=require('../controllers/job.controllers.js');
    const apply_coll=require('../controllers/apply.controllers.js');

    //user collection routes
    app.post('/users/post', users_coll.create);
    app.get('/users/read', users_coll.findAll);
    app.delete('/users/:noteId', users_coll.deleteOne);
    app.put('/users/put/:noteId', users_coll.update);

    //jobs collection routes
    app.post('/jobs/post/:id',jobs_coll.create);
    app.get('/jobs/read', jobs_coll.findAll);
    app.delete('/jobs/:noteId', jobs_coll.deleteOne);
    app.put('/jobs/put/:noteId', jobs_coll.update);

    //Apply collection routes
    app.post('/apply/post/:id', apply_coll.create);
    app.get('/apply/:company_name', apply_coll.findAll);
    app.get('/apply/:company_name/:user_id', apply_coll.find_user);
    app.put('/apply/:company_id/:user', apply_coll.update);

}

