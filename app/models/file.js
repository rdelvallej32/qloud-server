'use strict';

const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  title: String,
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tags: {
    type: Array,
  },
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
