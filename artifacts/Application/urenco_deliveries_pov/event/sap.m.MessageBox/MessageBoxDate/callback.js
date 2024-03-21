var header = modelPopoverDeliveryDetails.oData;
var date = dtDeliveryDate.getDateValue();
var sapdate = date.getFullYear().toString() + (date.getMonth() + 1).toString() + date.getDate().toString();

if (oEvent === "YES") {
        options = {
            parameters: {
                I_VBELN: header.VBELN,
                I_LFDAT: sapdate,
            }
        };

    //Save changes
    apiRestAPIUrencoUpdateDeliveryDate(options);
}
