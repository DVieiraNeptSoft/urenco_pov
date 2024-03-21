if (modelTableActionOnIssue.getData().length > 0) {
    var aActions = modelTableActionOnIssue.getData();
    aActions.push({
        NotificationId: modelFormIssueInfo.getData().ISSUE_ID,
        ActionOn: SelectAssignTo.getSelectedKey(),
        ActionRequired: TextAreaAction.getValue(),
        Flag: "N",
    });
    modelTableActionOnIssue.setData(aActions);
} else {
    modelTableActionOnIssue.setData([
        {
            NotificationId: modelFormIssueInfo.getData().ISSUE_ID,
            ActionOn: SelectAssignTo.getSelectedKey(),
            ActionRequired: TextAreaAction.getValue(),
            Flag: "N",
        },
    ]);
}

var filters = [];

filters.push(new sap.ui.model.Filter("Flag", sap.ui.model.FilterOperator.NE, "D"));

TableActionOnIssue.getBinding("items").filter(filters);
DialogAction.close();
TextAreaAction.setValue();
