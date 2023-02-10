const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      text: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      //   required: [true, 'User name is required'],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      text: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    token: {
      type: String,
    },
    picture: {
      type: String,
      trim: true,
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
      required: [true, 'Gender is required'],
    },
    birthYear: {
      type: String,
      trim: true,
      // required: [true, 'Year is required'],
    },
    birthMonth: {
      type: String,
      trim: true,
      // required: [true, 'Month is required'],
    },
    birthDate: {
      type: String,
      trim: true,
      // required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    following: {
      type: mongoose.Schema.Types.ObjectId,
      //   default: [],
    },
    followers: {
      type: mongoose.Schema.Types.ObjectId,
      //   default: [],
    },
    request: {
      type: mongoose.Schema.Types.ObjectId,
      //   default: [],
    },
    search: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        createdAt: {
          type: Date,
          required: true,
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highschool: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: ['Single', 'In a relationship', 'Married', 'Devoiced'],
      },
      instagram: {
        type: String,
      },
    },
    savedPosts: [
      {
        post: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post',
        },
        saveAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
