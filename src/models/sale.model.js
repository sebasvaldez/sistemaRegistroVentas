import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    dniClient: {
      type: Number,
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
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalSale: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//calcula el total de la venta multiplicando quantity*price

saleSchema.pre("sae", function (next) {
  this.totalSale = this.quantity * this.price;
  next();
});

export default mongoose.model("Sale", saleSchema);
