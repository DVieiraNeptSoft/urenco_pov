var uqform = modelPageForm.getData();
var cylinderNum, actionText, statusText, options;

//Send e-mail to next person if we're approving or submitting
if (actionType !== "") {
    cylinderNum = uqform.cylinder;
    if ((actionType = c_SUBMIT)) {
        actionText = "approval";
    } else if ((actionType = c_APPROVE)) {
        actionText = "attention";
    }
    switch (uqform.status) {
        case 1:
            statusText = "Initial";
            break;
        case 2:
            statusText = "Initial Approval";
            break;
        case 3:
            statusText = "Dispensing";
            break;
        case 4:
            statusText = "Label Checks Approval";
            break;
        case 5:
            statusText = "Final Steps";
            break;
        case 6:
            statusText = "Final Approval";
            break;
        case 7:
            statusText = "Completed";
            break;
    }

    sendEmail(cylinderNum, actionText, statusText);
    actionType = "";
}

//If we have just created this entry, retrieve the id field to save P10s later
// switch (uqform.status) {
//     case 2:
//         options = {
//             parameters: {
//                 where: JSON.stringify({ id: uqform.id }),
//             },
//             data: uqform,
//         };
//         break;
// }

App.setBusy(false);
sap.m.MessageToast.show("Data saved successfully");
