//Convert Date
var date = modelDialogAddDelivery.oData.deliveryDate;
var newDate = new Date(date);
// var dateConverted = getDateWithoutTimezone(newDate);

// modelDialogAddDelivery.oData.deliveryDate = dateConverted;
modelDialogAddDelivery.oData.deliveryDate = newDate;

// console.log(modelDialogAddDelivery.oData.deliveryDate);

// debugger;

var options = {
    parameters: {
        "where": "" // Optional 
    },
    data: modelDialogAddDelivery.oData
};

apiRestAPIUrencoDeliveriesInputPostNewDelivery(options);