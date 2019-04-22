var mongoose = require('mongoose');

var user_schema = mongoose.Schema({
    role: { type: Number, required: true },
    user_id: { type: Number, required: true, },
    name: { type: String, required: true },
    email: { type: String },
    loc: {
        type: { type: String },
        coordinates: []
    }
}, { versionKey: false });
user_schema.index({ loc: "2dsphere" });


var job_schema = mongoose.Schema({
    job_id: { type: Number, required: true },
    job_des: { type: String, required: true },
    company_name: { type: String, required: true },
    loc: {
        type: { type: String },
        coordinates: []
    }
}, { versionKey: false });
job_schema.index({ loc: "2dsphere" });

var Apply_schema = mongoose.Schema({
    user_id: { type: Number, required: true },
    job_id: { type: Number, required: true },
    company_name:{type:String, required:true},
    job_status: { type: Number}
}, { versionKey: false });

module.exports = {
    user_model: mongoose.model('user_types', user_schema),
    jobs_model: mongoose.model('Jobs', job_schema),
    Apply_model: mongoose.model('Apply', Apply_schema)
}