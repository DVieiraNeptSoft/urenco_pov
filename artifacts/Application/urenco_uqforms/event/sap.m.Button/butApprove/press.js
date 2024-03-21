var uqform = modelPageForm.getData();
var options = {};

if (!validateFields()) {
    return;
}

//Record already exists - updating data only
uqform.status++;

if (uqform.status === 7) {
    txtapprovedBy.setValue(AppCache.userInfo.name);
    txtapprovalDate.setValue(new Date().toDateString());
}

options = {
    parameters: {
        where: JSON.stringify({ id: uqform.id }),
    },
    data: uqform,
};

//Do we need to execute any SAP actions right now?
switch (uqform.status) {
    case 5:
        sap.m.MessageToast.show("Initiating call to SAP backend");    
        apiapiSAPLabelCheck();
        break;
    case 7:
        sap.m.MessageToast.show("Initiating call to SAP backend");    
        apiapiSAPFinalApproval();
        break;
}

actionType = c_APPROVE;
apiapiSaveUQForm(options);
buildFormPage();
