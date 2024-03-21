modelFormIssueInfo.setProperty("/PROBABILITY_SCORE", modelTableSelectDialogProbability.getProperty(oEvent.getParameter("selectedContexts")[0].sPath + "/Score"));
inFormIssueInfoSCORE.setText(modelFormIssueInfo.getProperty("/CONSEQUENCE_SCORE") * modelFormIssueInfo.getProperty("/PROBABILITY_SCORE"));
