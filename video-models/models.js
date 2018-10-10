'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const videoSchema = mongoose.Schema({
    video1: String,
    video2: String,
    start1: Number,
    start2: Number,
    end1: Number,
    end2: Number,
    user: {
        name: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: false,
        required: [true, 'No User id found']
    
    }

})

videoSchema.methods.serialize = function() {
    return{
        id: this._id,
        video1: this.video1,
        video2: this.video2,
        start1: this.start1,
        start2: this.start2,
        end1: this.end1,
        end2: this.end2,
        user: this.user
    }
}