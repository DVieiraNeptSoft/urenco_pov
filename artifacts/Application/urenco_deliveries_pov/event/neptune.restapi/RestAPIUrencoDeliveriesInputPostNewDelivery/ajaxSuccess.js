//Close Dialog & Clean Data
DialogAddDelivery.close();
DialogNewDeliveryConfirmation.close();

f_clearAddDeliveryFields();

appSetBusy(true);

//Cleaning Array Data
refreshCalendarData();

var options = {
    parameters: {
        where: "", // Optional
        select: "", // Optional
        take: "", // Optional
        skip: "", // Optional
        order: "", // Optional
    },
};

apiRestAPIUrencoDeliveriesInputGetAllData(options);
