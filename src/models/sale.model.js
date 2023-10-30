import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    dniClient: {
      type: Num,
      required: true,
      trim: true,
    },
    nameClient: {
      type: String,
      required: true,
      trim: true,
    },
    nameProduct: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Num,
      required: true,
      trim: true,
    },
    price: {
      type: Num,
      required: true,
      trim: true,
    },
    totalSale: {
      type: Num,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Sale", saleSchema);
