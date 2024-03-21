// var popupHeaderData = modelPopoverDeliveryDetails.oData;
var popupHeaderData = modelDialogListDeliveryDetails.oData;
// var popupUserInputData = modelSimpleFormUserInput.oData;
var popupUserInputData = modelSimpleFormListDeliveryDetailsUserInput.oData;

//Use of javascript code to simply check if the date has been changed
var newdate;

//Need to diferentiate the fields
var date;

date = dtDeliveryDate.getDateValue();

newdate =
    date.getFullYear().toString() + (date.getMonth() + 1).toString() + date.getDate().toString();

//If so... Ask user if they want to update the date in SAP
if (originalDeliveryDate !== newdate) {
    OpenMessageBoxDate();
}

if (inputDataAlreadyExists === false) {
    //If its false, we're going to insert the data for the first time in Open Edition
    var options = {
        data: {
            vbeln: popupHeaderData.VBELN,
            tmc: popupUserInputData.tmc,
            observations: popupUserInputData.observations,
            // read: chkAcknowledgement.getSelected(),
            read: chkAcknowledgementList.getSelected(),
        },
    };

    apiRestAPIUrencoDeliveriesInputInsert(options);
} else {
    //We're going to update the already existing data in Open Edition
    var options = {
        parameters: {
            where: JSON.stringify({ vbeln: popupHeaderData.VBELN }),
        },
        data: {
            tmc: popupUserInputData.tmc,
            observations: popupUserInputData.observations,
            // read: chkAcknowledgement.getSelected(),
            read: chkAcknowledgementList.getSelected(),
        },
    };

    apiRestAPIUrencoDeliveriesInputPost(options);
}

//Maybe better for user to not need to click a button just to acknowledge the success message
//Let's use a Toast instead?
//OpenMessageBox();
DialogListDeliveryDetails.close();
sap.m.MessageToast.show("Data was saved successfully!");