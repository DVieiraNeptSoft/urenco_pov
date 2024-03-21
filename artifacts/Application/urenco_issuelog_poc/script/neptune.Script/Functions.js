//Global Variables
var ActionEditable;

function getGroupHeader(oGroup) {
    return new SeparatorItem({
        text: oGroup.key,
    });
}

function setFormEditable(flag) {
    FormIssueInfo.setEditable(flag);
    ButtonAddFacility.setEnabled(flag);
    ButtonAddAction.setEnabled(flag);
    SelectFormIssueInfoDELIVERY_ROUTE.setEditable(flag);
    SelectFormIssueInfoINVESTMENT_YEAR.setEditable(flag);
    inFormIssueInfoISSUE_TITLE.setEditable(flag);
    inFormIssueInfoDATE_RAISED.setEditable(flag);
    inFormIssueInfoCONSEQUENCE_SCORE.setEditable(flag);
    inFormIssueInfoPROBABILITY_SCORE.setEditable(flag);
    // Daniel EDIT - Begin -----------------------------------------
    // taTableActionOnIssueActionRequired.setEditable(flag);
    // inTableActionOnIssueActionOn.setEditable(flag);
    // Daniel EDIT - End -------------------------------------------
    ButtonCreateIssueSubmit.setVisible(flag);
    ButtonCloseIssue.setVisible(flag);
    if (!flag) {
        TableFacilityOnIssue.setMode("None");
        TableActionOnIssue.setMode("None");
    } else {
        TableFacilityOnIssue.setMode("Delete");
        TableActionOnIssue.setMode("Delete");
    }
}
