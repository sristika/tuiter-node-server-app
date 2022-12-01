import mongoose from 'mongoose';
const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    username: String,
    image: String,
    title: String,
  },
  { collection: 'tuits' }
);
export default schema;
