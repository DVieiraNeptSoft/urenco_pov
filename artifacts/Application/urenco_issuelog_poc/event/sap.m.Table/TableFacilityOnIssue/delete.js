var pathDeleted = oEvent.getParameter("listItem").getBindingContext().sPath;
//var flag = modelTableFacilityOnIssue.getProperty(pathDeleted + "/Flag");

 // Remove the item from the UI list
        modelTableFacilityOnIssue.setProperty(pathDeleted + "/Flag" , "D");
        TableFacilityOnIssue.removeItem(oEvent.getParameter("listItem"));

