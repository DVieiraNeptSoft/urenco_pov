var pathDeleted = oEvent.getParameter("listItem").getBindingContext().sPath;
var flag = modelTableActionOnIssue.getProperty(pathDeleted + "/Flag");

 // Remove the item from the UI list
        modelTableActionOnIssue.setProperty(pathDeleted + "/Flag" , "D");
        TableActionOnIssue.removeItem(oEvent.getParameter("listItem"));

