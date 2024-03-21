// Save all Actions
var actionsToSubmit = [];
modelTableActionOnIssue.getData().forEach(function(action){
    if(action.Flag == "D" && action.id == ""){
        // ignore this action
    }else{
        actionsToSubmit.push(action);
    }
})
    var options = {
        data: actionsToSubmit,
    };

    apiSaveActions(options);


// Save All Facilities

var facilityToSubmit = [];
modelTableFacilityOnIssue.getData().forEach(function(facility){
    if(facility.Flag == "D" && facility.id == ""){
        // ignore this action
    }else{
        facilityToSubmit.push(facility);
    }
})
    options = {
        data: facilityToSubmit,
    };
    apiSaveFacilitySubArea(options);

//set Notification Used
var options = {
    parameters: {
        "I_QMNUM": modelFormIssueInfo.getData().SAP_REFERENCE // Required 
    }
};

apisetNotificationUsed(options);
apiRestAPIGetIssuesList();
sap.m.MessageToast.show("Issue " + globalThis.issueId + " submitted Successfully!");
App.to(PageIssueList);
