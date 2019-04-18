var apply = require('../model/model.js');
var enum_status=require('../enum_status.js');
var myenum=require('../enum_role.js');

exports.create=(req, res)=>{
    status_flag=enum_status.Applied;
    if (!req.body) {
        return res.send({ message: "Cannot be empty" });
    }
    apply.user_model.find({'user_id':req.params.id})
    .then(response=>{
        const data= new apply.Apply_model({
            user_id:req.params.id,
            job_id:req.body.job_id,
            company_name:req.body.company_name,
            job_status:status_flag
        })
        if(response[0].role==myenum.User){
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
            res.send({message:'only user can add a job'});
        }
    }).catch(err=>{
        res.send({message:err});
    })
}

exports.findAll = (req, res) => {
    apply.Apply_model.find({'company_name': req.params.company_name},(err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    })
}

exports.find_user=(req, res)=>{
    apply.Apply_model.find({'company_name': req.params.company_name}, (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            apply.user_model.find({'user_id':req.params.user_id},(err,response)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.send(response);
                }
            })
        }
    })
}

exports.update=(req,res)=>{
    if (!req.body) {
        return res.send({
            message: "content cannot be empty"
        });
    }
    apply.user_model.find({'user_id':req.params.company_id})
    .then(data=>{
        if(data[0].role==myenum.Company){
            let status=req.body.job_status;
            let change_status=enum_status[status];
            apply.Apply_model.findOneAndUpdate({'user_id':req.params.user}, { $set: {job_status:change_status} },{ new: true }, (err,respo)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.json(respo);
                }
            })
        }
        else{
            res.send({message:'you cannot update the status'});
        }
    }).catch(err=>{
        console.log(err);
    });
}
