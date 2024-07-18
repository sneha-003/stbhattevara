const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusSchema = new Schema({
    scholar: {
        type: Schema.Types.ObjectId,
        ref: 'ScholarDetails',
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Status = mongoose.model('Status', statusSchema);

module.exports = Status;
