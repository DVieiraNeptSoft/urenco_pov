inFormIssueInfoSAP_REFERENCE.setText(modelListNotifications.getObject(oEvent.getParameter("listItem").getBindingContext().sPath).QMNUM);
PageCreateIssue.setTitle("Create Issue");
ButtonCloseIssue.setVisible(false);
modelFormIssueInfo.setData({
    "ISSUE_ID": globalThis.issueId,
    "SAP_REFERENCE": modelListNotifications.getObject(oEvent.getParameter("listItem").getBindingContext().sPath).QMNUM,
        "ISSUE_TITLE": "",
        "DATE_RAISED": "",
        "CONSEQUENCE_SCORE": "",
        "PROBABILITY_SCORE": "",
        "SCORE": 0,
});

modelTableActionOnIssue.setData({});
modelTableFacilityOnIssue.setData({});
SelectFormIssueInfoDELIVERY_ROUTE.setSelectedKey();
SelectFormIssueInfoINVESTMENT_YEAR.setSelectedKey();
//inFormIssueInfoISSUE_ID.setText(globalThis.issueId);
App.to(PageCreateIssue);
