var uqform = modelPageForm.getData();
var options = {};

if (oEvent === "YES") {
    if (uqform !== null && uqform.id !== undefined && uqform.id !== "") {
        //Record already exists - updating data only

        uqform.status++;

        options = {
            parameters: {
                where: JSON.stringify({ id: uqform.id }),
            },
            data: uqform,
        };
    } else {
        //Creating new record
        uqform.status = 2;
        options = {
            parameters: {
                where: "",
            },
            data: uqform,
        };
    }

    //Do we need to execute any SAP actions right now?
    switch (uqform.status) {
        case 2:
            sap.m.MessageToast.show("Initiating call to SAP backend");    
            apiapiSAPPigeonHole();
            break;
    }

    //Save form
    actionType = c_SUBMIT;
    apiapiSaveUQForm(options);
    buildFormPage();
}
