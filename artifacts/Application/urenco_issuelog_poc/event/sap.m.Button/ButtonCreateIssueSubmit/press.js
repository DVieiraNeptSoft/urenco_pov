

var formObject = modelFormIssueInfo.getData();
console.log(formObject);
var options = {
    parameters: {
        "where": "" // Optional 
    },
    data: {
        "id": formObject.id,
        "ISSUE_ID": formObject.ISSUE_ID,
        "SAP_REFERENCE": formObject.SAP_REFERENCE,
        "ISSUE_TITLE": formObject.ISSUE_TITLE,
        "DATE_RAISED": formObject.DATE_RAISED,
        "CONSEQUENCE_SCORE": formObject.CONSEQUENCE_SCORE,
        "PROBABILITY_SCORE": formObject.PROBABILITY_SCORE,
        "SCORE": formObject.SCORE,
        "DELIVERY_ROUTE": SelectFormIssueInfoDELIVERY_ROUTE.getSelectedKey(),
        "INVESTMENT_YEAR":SelectFormIssueInfoINVESTMENT_YEAR.getSelectedKey(),
        "STATUS": "In Progress"
    }
};
apiSubmitIssue(options);     