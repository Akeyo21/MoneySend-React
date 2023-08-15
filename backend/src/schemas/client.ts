import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  outstandingBalance: { type: Number, required: true },
  interest: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Client = mongoose.model("Client", ClientSchema);
