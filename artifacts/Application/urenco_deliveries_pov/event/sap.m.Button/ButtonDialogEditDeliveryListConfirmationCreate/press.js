// console.log(modelDialogAddDelivery.oData.deliveryDate);
var newDelvDate = modelDialogOpenEditionDelivery.oData.formatDate;

newDelvDate =
    newDelvDate.substr(0, 4) + "/" + newDelvDate.substr(4, 2) + "/" + newDelvDate.substr(6, 2);

var date = new Date(newDelvDate);
date.setHours(0, 0, 0, 0);

// var dateConverted = getDateWithoutTimezone(date);

debugger;

var dataToSave = {
    tmc: modelDialogOpenEditionDelivery.oData.tmc,
    observations: modelDialogOpenEditionDelivery.oData.observations,
    read: modelDialogOpenEditionDelivery.oData.read,
    // deliveryDate: modelPopoverOpenEditionDelivery.oData.formatDate,
    // deliveryDate: dateConverted,
    deliveryDate: date,
    shipToName: modelDialogOpenEditionDelivery.oData.shipToName,
    shipToAddress: modelDialogOpenEditionDelivery.oData.shipToAddress,
    shipToCity: modelDialogOpenEditionDelivery.oData.shipToCity,
    shipToState: modelDialogOpenEditionDelivery.oData.shipToState,
    shipToCountry: modelDialogOpenEditionDelivery.oData.shipToCountry,
    deliveryType: modelDialogOpenEditionDelivery.oData.deliveryType,
    unitType: modelDialogOpenEditionDelivery.oData.unitType,
    quantity: modelDialogOpenEditionDelivery.oData.quantity,
    referenceNumber: modelDialogOpenEditionDelivery.oData.referenceNumber,
    deliveryType: modelDialogOpenEditionDelivery.oData.deliveryType,
    unitType: modelDialogOpenEditionDelivery.oData.unitType,
};

var options = {
    parameters: {
        where: JSON.stringify({ id: modelDialogOpenEditionDelivery.oData.id }), // Optional
    },
    data: dataToSave,
};

apiRestAPIUrencoDeliveriesInputPost(options);

sap.m.MessageToast.show("Data was saved successfully!");

DialogEditDeliveryListConfirmation.close();
