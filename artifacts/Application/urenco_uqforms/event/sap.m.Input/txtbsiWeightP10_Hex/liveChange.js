var p10Empty = txtbsiWeightP10Empty.getValue();
var p10_Hex = txtbsiWeightP10_Hex.getValue();
var hex;
var water;

hex = p10_Hex - p10Empty;
hex = roundNumber(hex,2);
water = hex / 0.0414

water = roundNumber(water,2);

txtbsiWeightHex.setValue(hex)
txtbsiWeightWater.setValue(water);
