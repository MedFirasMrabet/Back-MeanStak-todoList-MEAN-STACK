const mongoose = require('mongoose');

const { Schema } = mongoose;

const TodosSchema = new Schema({
    task: String,
    deadline: String,
    checked: {
        type: Boolean, default: false
    }

});

mongoose.model('Todos', TodosSchema);
