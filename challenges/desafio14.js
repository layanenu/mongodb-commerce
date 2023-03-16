db.produtos.updateMany(
  { ingredientes: "picles" },
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $slice: 3,
      },
    },
  },
);

db.produtos.find(
  { ingredientes: "picles" },
  { _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: 1 },
);
