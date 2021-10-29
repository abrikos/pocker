import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    uid: String
},{
    timestamps: {createdAt: 'createdAt'},
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
})
schema.virtual('playersBets')
    .get(function () {
        return 10
    })
export default mongoose.model('user', schema)
