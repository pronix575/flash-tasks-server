import { Schema, model } from "mongoose";

const User = new Schema({
  avatar: { type: String, unique: true },
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export default model("User", User);
