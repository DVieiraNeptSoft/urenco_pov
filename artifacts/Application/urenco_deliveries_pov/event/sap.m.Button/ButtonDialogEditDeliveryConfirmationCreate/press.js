// console.log(modelDialogAddDelivery.oData.deliveryDate);
var newDelvDate = modelPopoverOpenEditionDelivery.oData.formatDate;

newDelvDate =
    newDelvDate.substr(0, 4) + "/" + newDelvDate.substr(4, 2) + "/" + newDelvDate.substr(6, 2);

var date = new Date(newDelvDate);
date.setHours(0, 0, 0, 0);

// var dateConverted = getDateWithoutTimezone(date);

debugger;

var dataToSave = {
    tmc: modelPopoverOpenEditionDelivery.oData.tmc,
    observations: modelPopoverOpenEditionDelivery.oData.observations,
    read: modelPopoverOpenEditionDelivery.oData.read,
    // deliveryDate: modelPopoverOpenEditionDelivery.oData.formatDate,
    // deliveryDate: dateConverted,
    deliveryDate: date,
    shipToName: modelPopoverOpenEditionDelivery.oData.shipToName,
    shipToAddress: modelPopoverOpenEditionDelivery.oData.shipToAddress,
    shipToCity: modelPopoverOpenEditionDelivery.oData.shipToCity,
    shipToState: modelPopoverOpenEditionDelivery.oData.shipToState,
    shipToCountry: modelPopoverOpenEditionDelivery.oData.shipToCountry,
    deliveryType: modelPopoverOpenEditionDelivery.oData.deliveryType,
    unitType: modelPopoverOpenEditionDelivery.oData.unitType,
    quantity: modelPopoverOpenEditionDelivery.oData.quantity,
    referenceNumber: modelPopoverOpenEditionDelivery.oData.referenceNumber,
    deliveryType: modelPopoverOpenEditionDelivery.oData.deliveryType,
    unitType: modelPopoverOpenEditionDelivery.oData.unitType,
};

var options = {
    parameters: {
        where: JSON.stringify({ id: modelPopoverOpenEditionDelivery.oData.id }), // Optional
    },
    data: dataToSave,
};

apiRestAPIUrencoDeliveriesInputPost(options);

sap.m.MessageToast.show("Data was saved successfully!");

DialogEditDeliveryConfirmation.close();
