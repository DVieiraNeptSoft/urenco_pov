var p10Empty = txtWeightP10Empty.getValue();
var p10_Hex  = txtWeightP10_Hex.getValue();
var hex;

hex = p10_Hex - p10Empty;
hex = roundNumber(hex,2);

txtWeightHex.setValue(hex)