modelFormIssueInfo.setProperty("/CONSEQUENCE_SCORE",modelTableSelectDialogConsequences.getProperty(oEvent.getParameter("selectedContexts")[0].sPath + "/Score"));
modelFormIssueInfo.setProperty("/SCORE",modelFormIssueInfo.getProperty("/CONSEQUENCE_SCORE") * modelFormIssueInfo.getProperty("/PROBABILITY_SCORE"));
