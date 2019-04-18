var jobs=require('../model/model.js');
var user=require('../model/model.js');
var myenum = require('../enum_role');


exports.create=(req, res)=>{
    if (!req.body) {
        return res.send({ message: "Cannot be empty" });
    }
    user.user_model.find({'user_id':req.params.id})
    .then(response=>{
        const data= new jobs.jobs_model({
            job_id:req.body.job_id,
            job_des:req.body.job_des,
            company_name:req.body.company_name,
            loc:response[0].loc
        })
        if(response[0].role==myenum.Admin){
            data.save((err,respo)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.send(respo);
                }
            })
        }
        else if(response[0].role==myenum.Company){
            data.save((err,respo)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.send(respo);
                }
            })
        }
        else{
            res.send({message:'user cannot add job'});
        }
    }).catch(err=>{
        res.send({message:err});
    })
}

exports.findAll = (req, res) => {
    jobs.jobs_model.find((err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    })

}

exports.deleteOne = (req, res) => {
    jobs.jobs_model.findOneAndDelete({ 'job_id': req.params.id }, (err, response) => {
        if (!response) {
            res.send({ message: "no such data" });
        }
        else if (err) {
            console.log(err);
        }
        else {
            res.send({ Message: "doc deleted successfully" });
        }
    })
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.send({
            message: "Note content can not be empty"
        });
    }

    jobs.jobs_model.findOneAndUpdate({ 'job_id': req.params.id }, { $set: req.body }, { new: true }, (err, response) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(response);
        }
    });
}
