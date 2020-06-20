const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'New Project',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('project', ProjectSchema);
