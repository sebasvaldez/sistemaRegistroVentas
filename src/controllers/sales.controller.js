


export const getSales = async (req, res) => {
  res.send("obtener todas las ventas");
};

export const getSale = async (req, res) => {
  res.send("obtener 1 venta");
};

export const createSale = async (req, res) => {
  res.send("crear una venta");
};

export const deleteSale = async (req, res) => {
  res.send("borrar una venta");
};

export const updateSale = async (req, res) => {
  res.send("actualizar una venta");
};
