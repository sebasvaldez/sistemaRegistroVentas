import Sale from "../models/sale.model.js";

//consultas para administrador

export const getAllSales = async (req, res) => {
  const sales = await Sale.find();
  res.json(sales);
};





//crud basico

export const getSales = async (req, res) => {
  const sales = await Sale.find({
    user: req.user.id,
  }).populate("user");
  res.json(sales);
};

export const getSale = async (req, res) => {
  const sale = await Sale.findById(req.params.id).populate("user");
  if (!sale) return res.status(204).json({ message: "Venta no encontrada" });
  res.json(sale);
};

export const createSale = async (req, res) => {
  const { dniClient, nameClient, nameProduct, quantity, price, totalSale } =
    req.body;
  const newSale = new Sale({
    dniClient,
    nameClient,
    nameProduct,
    quantity,
    price,
    totalSale,
    user: req.user.id,
  });

  const saleSaved = await newSale.save();
  res.json(saleSaved);
};

export const deleteSale = async (req, res) => {
  const sale = await Sale.findByIdAndDelete(req.params.id);
  if (!sale) res.status(404).json({ message: "Venta no encontrada" });
  res.json({ message: "Venta eliminada" });
};

export const updateSale = async (req, res) => {
  const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!sale) return res.status(404).json({ message: "Venta no encontrada" });
  res.json(sale);
};
