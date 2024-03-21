var aFacilities = modelTableFacilityOnIssue.getData();
if (!aFacilities.length) {
    aFacilities = [];
}
var facility = SelectFacility.getSelectedItem();
var subAreas = MultiComboBoxSubArea.getSelectedItems();
if (subAreas.length > 0) {
    subAreas.forEach(function (subArea) {
        var obj = {
            IssueId: modelFormIssueInfo.getData().ISSUE_ID,
            Facility: facility.getKey(),
            Facility_Desc: facility.getText(),
            SubArea: subArea.getKey(),
            SubArea_Desc: subArea.getText(),
            Flag: "N",
        };
        aFacilities.push(obj);
    });
}else{
     var obj = {
            IssueId: modelFormIssueInfo.getData().ISSUE_ID,
            Facility: facility.getKey(),
            Facility_Desc: facility.getText(),
            SubArea: "",
            SubArea_Desc: "",
            Flag: "N",
        };
        aFacilities.push(obj);
}
modelTableFacilityOnIssue.setData(aFacilities);
var filters = [];

filters.push(new sap.ui.model.Filter("Flag", sap.ui.model.FilterOperator.NE, "D"));

TableFacilityOnIssue.getBinding("items").filter(filters);

