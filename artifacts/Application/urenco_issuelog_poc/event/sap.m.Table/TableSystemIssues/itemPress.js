//App.to(PageDisplayIssue);
App.to(PageCreateIssue);
PageCreateIssue.setTitle("Display & Edit Issue");
ButtonCloseIssue.setVisible(true);

var pathClicked = oEvent.getParameter("listItem").getBindingContext().sPath;
var object = modelTableSystemIssues.getObject(pathClicked);
if(object.STATUS == "Closed"){
    setFormEditable(false);
    ActionEditable = false; //Add - Daniel
}else{
    setFormEditable(true);
    ActionEditable = true; //Add - Daniel
}
var options = {
    parameters: {
         where: JSON.stringify({
                ISSUE_ID: object.ISSUE_ID,
            }),
        "select": "", // Optional 
        "take": "", // Optional 
        "skip": "", // Optional 
        "order": "" // Optional 
    }
};

apiGetIssue(options);

var options = {
    parameters: {
         where: JSON.stringify({
                NotificationId: object.ISSUE_ID,
                 Flag: "Not(D)"
            }),
        "select": "", // Optional 
        "take": "", // Optional 
        "skip": "", // Optional 
        "order": "" // Optional 
    }
};

apiGetActionOnIssue(options);


var options = {
    parameters: {
         where: JSON.stringify({
                IssueId: object.ISSUE_ID,
                 Flag: "Not(D)"
            }),
        "select": "", // Optional 
        "take": "", // Optional 
        "skip": "", // Optional 
        "order": "" // Optional 
    }
};

apiGetFacilitySubAreaOnIssue(options);
