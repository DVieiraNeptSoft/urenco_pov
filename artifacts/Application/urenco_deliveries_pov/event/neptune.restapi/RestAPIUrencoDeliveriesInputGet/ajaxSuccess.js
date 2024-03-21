var modelUserInput = modelMultiModelUrencoDeliveriesUserInput.oData;

//Clearing the Input fields before opening a new popup
InputTMC.setValue();
TextAreaFreeText.setValue();
chkAcknowledgement.setSelected(false);

//Clearing the Dialog Input fields before opening a new Dialog
InputTMCListDetails.setValue();
TextAreaFreeTextListDetails.setValue();
chkAcknowledgementList.setSelected(false);

if (modelUserInput.length) {
    //If the User Input data exists / was saved previously
    inputDataAlreadyExists = true;
    modelSimpleFormUserInput.setData(modelUserInput[0]);

    //Need to also set data for the Dialog Simple Form (NEW)
    modelSimpleFormListDeliveryDetailsUserInput.setData(modelUserInput[0]);
} else {
    inputDataAlreadyExists = false;
}

if (openPopupInList === false) {
    PopoverDeliveryDetails.openBy(selectedDelivery);
}
