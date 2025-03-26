const mongoose = require("mongoose");

const pricesHistorySchema = new mongoose.Schema({
  ID: { type: Number, required: true },
  DATE: { type: Date },
  OPEN: { type: Decimal },
  HIGH: { type: Decimal },
  LOW: { type: Decimal },
  CLOSE: { type: Decimal },
  VOLUME: { type: Decimal },
});

export default mongoose.model(
  "ZTPRICESHISTORY",
  institutosSchema,
  "ZTPRICESHISTORY"
);
