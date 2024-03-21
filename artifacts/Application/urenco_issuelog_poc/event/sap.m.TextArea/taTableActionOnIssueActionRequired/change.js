var pathChanged = oEvent.getSource().getBindingContext().sPath;
if (modelTableActionOnIssue.getProperty(pathChanged + "/NotificationId") != "")
    modelTableActionOnIssue.setProperty(pathChanged + "/Flag", "C");
