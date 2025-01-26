import mongoose from "mongoose";

const purchasedGamingItemSchema = new mongoose.Schema({
  Item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  totalEntryFee: { type: Number, required: true },
  AppliedDate: { type: Date, default: Date.now },
  paymentMethod: { type: String, enum: ["esewa", "khalti", "Fonepay"], required: true },
  status: { type: String, enum: ["pending", "completed", "refunded"], default: "pending" },
}, { timestamps: true });

const purchasedGamingItem = mongoose.model("ApplyGame", purchasedGamingItemSchema);

export default purchasedGamingItem;