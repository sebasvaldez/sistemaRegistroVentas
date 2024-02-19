import Sale from "../models/sale.model.js";


export const createSale = async (req,res) => {
  const { user, client, products, total } = req.body;
  try {
    const newSale = new Sale({
      user,
      client,
      products,
      total,
    });
    const saleSaved = await newSale.save();
    res.json(saleSaved);
  } catch (error) {
    return res.status(500).json([error.message]);
  }
};