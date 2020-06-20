const mongoose = require('mongoose');

const ProjectListSchema = mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'project',
  },
  title: {
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

module.exports = mongoose.model('list', ProjectListSchema);
