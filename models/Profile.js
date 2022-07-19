const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },

  status: {
    type: String,
    default: 'contibuter',
  },

  bio: {
    type: [String]
  },

  location: {
    type: String
  },

  skills: {
    type: [String]
  },

  social: {
    youtube: {
      type: String
    },

    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  }
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
