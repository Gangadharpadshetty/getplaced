const { Schema, model } = require('mongoose');

const menteeSchema = new Schema({
    name: { type: String, required: true },
    job_description: { type: String, required: true },
    price_per_hour: { type: String, required: true },   
}, { collection: 'Mentees' }); // Specify the collection name here

const Mentee = model('Mentee', menteeSchema);
module.exports = Mentee;
