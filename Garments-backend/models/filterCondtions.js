let mongoose = require('mongoose');

const filterCondition = mongoose.Schema({
    name: String,
    // categoryId: String,
    parentConditionArr: Array,
    level: {
        type: Number,
        default: 0
    },
    subConditionArr: Array
});

module.exports = mongoose.model('FilterCondition', filterCondition);
