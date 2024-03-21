function buildFormPage() {
    var uqform = modelPageForm.getData();
    var isSupervisor = false;

    isSupervisor = isUserSupervisor();

    switch (uqform.status) {
        case 1:
            //"Initial";
            lockInitial(false);
            lockInitialApproval(true);
            lockDispensing(true);
            lockLabelApproval(true);
            lockFinal(true);
            lockFinalApproval(true);
            IconTabBar.setSelectedKey("initial");
            break;
        case 2:
            //"Initial Approval";
            lockInitial(true);
            lockInitialApproval(!isSupervisor);
            lockDispensing(true);
            lockLabelApproval(true);
            lockFinal(true);
            lockFinalApproval(true);
            IconTabBar.setSelectedKey("initialapproval");
            break;
        case 3:
            //"Dispensing";
            lockInitial(true);
            lockInitialApproval(true);
            lockDispensing(false);
            lockLabelApproval(true);
            lockFinal(true);
            lockFinalApproval(true);
            IconTabBar.setSelectedKey("dispensing");
            break;
        case 4:
            //"Label Checks Approval";
            lockInitial(true);
            lockInitialApproval(true);
            lockDispensing(true);
            lockLabelApproval(!isSupervisor);
            lockFinal(true);
            lockFinalApproval(true);
            IconTabBar.setSelectedKey("labelapproval");
            break;
        case 5:
            //"Final Steps";
            lockInitial(true);
            lockInitialApproval(true);
            lockDispensing(true);
            lockLabelApproval(true);
            lockFinal(false);
            lockFinalApproval(true);
            IconTabBar.setSelectedKey("final");
            break;
        case 6:
            //"Final Approval";
            lockInitial(true);
            lockInitialApproval(true);
            lockDispensing(true);
            lockLabelApproval(true);
            lockFinal(true);
            lockFinalApproval(!isSupervisor);
            IconTabBar.setSelectedKey("finalapproval");
            break;
        case 7:
            //Completed
            lockInitial(true);
            lockInitialApproval(true);
            lockDispensing(true);
            lockLabelApproval(true);
            lockFinal(true);
            lockFinalApproval(true);
            IconTabBar.setSelectedKey("initial");
            break;
    }

    IconTabBar.fireSelect();
}

function lockInitial(lock) {
    txtLIMS.setEditable(!lock);
    txtHotBox.setEditable(!lock);
    txtDateDispensed.setEditable(!lock);
    txtPigeonHole.setEditable(!lock);
    txtCylinder.setEditable(!lock);
    btnFetchSAP.setEnabled(!lock);
}

function lockInitialApproval(lock) {
    chkDesignationLinks.setEnabled(!lock);
    chkPaperworkInitial.setEnabled(!lock);
    chkBottles.setEnabled(!lock);
    chkLIMS.setEnabled(!lock);
}

function lockDispensing(lock) {
    if (lock) {
        objP10.setType("Inactive");
    } else {
        objP10.setType("Active");
    }
    txtNumberP10.setEditable(!lock);
    txtWeightP10_Hex.setEditable(!lock);
    txtWeightP10Empty.setEditable(!lock);
    btnDeleteP10.setEnabled(!lock);
    btnSaveP10.setEnabled(!lock);

    txtbsiNumberP10.setEditable(!lock);
    txtbsiWeightP10_Hex.setEditable(!lock);
    txtbsiWeightP10Empty.setEditable(!lock);

    txtassayWeightP10_Hex.setEditable(!lock);
    txtassayWeightP10Empty.setEditable(!lock);
    txtassayWeightEmptyBottle.setEditable(!lock);
    txtassayWeightHydrolysedWater.setEditable(!lock);
}

function lockLabelApproval(lock) {
    chkLabelCheck.setEnabled(!lock);
}

function lockFinal(lock) {
    txtrefBottleWeight.setEditable(!lock);
    txtrefBottleDisposalOrder.setEditable(!lock);
    txtoutBottleDisposalOrder.setEditable(!lock);
    chkrefBottleDisposal.setEnabled(!lock);
    chkExcelSampleDetails.setEnabled(!lock);
    chkTrapDetails.setEnabled(!lock);
}

function lockFinalApproval(lock) {
    chkcheckCriticalitySheet.setEnabled(!lock);
    chkcheckSAPInformation.setEnabled(!lock);
    chkcheckPhysicalBottleLocation.setEnabled(!lock);
    chkcheckLIMSCheck.setEnabled(!lock);
    chkcheckPaperwork.setEnabled(!lock);
}

function validateFields() {
    switch (IconTabBar.getSelectedKey()) {
        case "initial":
            if (txtCylinder.getValue().trim() === "") {
                sap.m.MessageToast.show("Please enter Cylinder number");
                txtCylinder.setValueState("Error");
                return false;
            }
            if (txtLIMS.getValue().trim() === "") {
                sap.m.MessageToast.show("Please enter LIMS number");
                txtLIMS.setValueState("Error");
                return false;
            }
            if (txtHotBox.getValue().trim() === "") {
                sap.m.MessageToast.show("Please enter HotBox");
                txtHotBox.setValueState("Error");
                return false;
            }
            if (txtDateDispensed.getValue().trim() === "") {
                sap.m.MessageToast.show("Please enter Date Dispensed");
                txtDateDispensed.setValueState("Error");
                return false;
            }
            if (txtPigeonHole.getValue().trim() === "") {
                sap.m.MessageToast.show("Please enter Pigeon Hole");
                txtPigeonHole.setValueState("Error");
                return false;
            }
            break;
        case "initialapproval":
            if (chkDesignationLinks.getSelected() === false) {
                sap.m.MessageToast.show("Please check Designation Links");
                chkDesignationLinks.setValueState("Error");
                return false;
            }
            if (chkPaperworkInitial.getSelected() === false) {
                sap.m.MessageToast.show("Please check Paperwork");
                chkPaperworkInitial.setValueState("Error");
                return false;
            }
            if (chkBottles.getSelected() === false) {
                sap.m.MessageToast.show("Please check Bottles");
                chkBottles.setValueState("Error");
                return false;
            }
            if (chkLIMS.getSelected() === false) {
                sap.m.MessageToast.show("Please check LIMS");
                chkLIMS.setValueState("Error");
                return false;
            }
            break;
        case "dispensing":
            break;
        case "labelapproval":
            break;
        case "final":
            break;
        case "finalapproval":
            break;
        default:
        // code
    }

    return true;
}

function calculateTotalP10HexWeight() {
    var data = modellstP10.getData();
    var totalSum = 0;

    for (var i = 0, l = data.length; i < l; i++) {
        var p10 = data[i];
        totalSum = totalSum + p10.weightHex;
    }

    txtweightHexTotal.setValue(totalSum);
}

function roundNumber(num, scale) {
    if (!("" + num).includes("e")) {
        return +(Math.round(num + "e+" + scale) + "e-" + scale);
    } else {
        var arr = ("" + num).split("e");
        var sig = "";
        if (+arr[1] + scale > 0) {
            sig = "+";
        }
        return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
}

function calculateAssay() {
    var p10Empty = Number(txtassayWeightP10Empty.getValue());
    var p10_Hex = Number(txtassayWeightP10_Hex.getValue());
    var emptyBottle = Number(txtassayWeightEmptyBottle.getValue());
    var hydro = Number(txtassayWeightHydrolysedWater.getValue());

    var hex = 0;
    var water = 0;
    var solution = 0;
    var check = 0;
    var check_color;
    var bottle_P10 = 0;

    hex = p10_Hex - p10Empty;
    hex = roundNumber(hex, 4);
    water = hex / 0.0414;

    bottle_P10 = emptyBottle + p10_Hex;
    bottle_P10 = roundNumber(bottle_P10, 4);
    water = roundNumber(water, 4);
    solution = hydro - p10_Hex;
    solution = roundNumber(solution, 4);

    txtassayWeightHex.setValue(hex);
    txtassayWeightWater.setValue(water);
    txtassayWeightAssaySolution.setValue(solution);
    txtassayWeightP10_Bottle.setValue(bottle_P10);

    //Check
    check = solution - hex - water;

    if (check > 0.01) {
        check_color = "RED";
    } else if ((check >= 0.006) & (check <= 0.01)) {
        check_color = "YELLOW";
    } else if (check < 0.006) {
        check_color = "GREEN";
    }

    check = check + " " + check_color;
    txtassayCheck.setValue(check);
}

function isUserSupervisor() {
    if (sap.n) {
        var roles = AppCache.userInfo.roles;
        //Is this user an admin?
        for (var i = 0, l = roles.length; i < l; i++) {
            var role = roles[i];
            if (role.id === "7F1390F3-FAFB-ED11-907C-000D3A654FB6") {
                return true;
            }
        }
    }
    return false;
}

function sendEmail(cylinderNum, actionText, statusText) {
    var options = {
        data: {
            idTemplate: "A56F7237-FEFB-ED11-907C-000D3A654FB6",
            toEmail: "gabriel.andrade@neptune-software.com",
            values: {
                cylinder: cylinderNum,
                action: actionText,
                status: statusText,
            },
        },
    };

    apiapiSendEmail(options);
}
