const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    image: {
      type: String,
    },
    Name: {
      type: String,
    },
    
    Text: {
      type: String,
      default: 'blog.....',
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'Upload',
  }
);

module.exports = mongoose.model('upload', UploadSchema);
