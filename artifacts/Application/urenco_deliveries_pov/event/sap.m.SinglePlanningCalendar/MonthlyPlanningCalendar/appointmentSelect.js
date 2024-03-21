selectedDelivery = oEvent.getParameter("appointment");
if (selectedDelivery !== undefined) {
    var data = selectedDelivery.getBindingContext().getObject();

    openPopupInList = false;

    if (data.deliverynr !== null) {
        var modelHeaderData = modelMultiModelUrencoDeliveries.oData.result.MT_HEADERS;
        var modelDetailData = modelMultiModelUrencoDeliveries.oData.result.MT_ITEMS;

        // Using single key field
        var filteredHeaderData = ModelData.FindFirst(
            modelHeaderData,
            "VBELN",
            data.deliverynr,
            "EQ"
        );
        var filteredDetailData = ModelData.Find(modelDetailData, "VBELN", data.deliverynr, "EQ");

        modelPopoverDeliveryDetails.setData(filteredHeaderData);
        modelPopoverDeliveryDetails.getData().appIndex = parseInt(
            selectedDelivery.getBindingContext().getPath().split("/")[4]
        );

        modelGridListDeliveryItems.setData(filteredDetailData);

        //Call Open Edition API to get this Delivery User Input Data
        var options = {
            parameters: {
                where: JSON.stringify({ vbeln: data.deliverynr }), // Optional
            },
        };

        apiRestAPIUrencoDeliveriesInputGet(options);
    } else {
        var modelHeaderData = modelMultiModelUrencoDeliveriesUserInputAllData.oData;
        var filteredHeaderData = ModelData.FindFirst(modelHeaderData, "id", data.id, "EQ");

        setDataToPopup(filteredHeaderData);
    }
}
