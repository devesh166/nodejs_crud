var mongoose = require('mongoose');

var user_schema = mongoose.Schema({
    role: { type: Number, require: true },
    user_id: { type: Number, require: true, },
    name: { type: String, require: true },
    email: { type: String },
    loc: {
        type: { type: Number },
        coordinates: []
    }
}, { versionKey: false });

var job_schema = mongoose.Schema({
    job_id: { type: Number, require: true },
    job_des: { type: String, require: true },
    company_name: { type: String, require: true }
}, { versionKey: false });

var Apply_schema = mongoose.Schema({
    user_id: { type: Number, require: true },
    job_id: { type: Number, require: true },
    job_status: { type: String, require: true }
}, { versionKey: false });
module.exports = {
    user_model: mongoose.model('user_types', user_schema),
    jobs_model: mongoose.model('Jobs', job_schema),
    Apply_model: mongoose.model('Apply', Apply_schema)
}