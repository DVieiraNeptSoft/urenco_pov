// Daniel EDIT - Begin -------------------------------------------
// console.log(modelTableActionOnIssue.oData)
var actions = modelTableActionOnIssue.oData;
actions.forEach(function (action) {
    Object.assign(action, { ActionEditable: ActionEditable });
    // console.log(action);
});

console.log(actions);
modelTableActionOnIssue.refresh();
// Daniel EDIT - End ---------------------------------------------
