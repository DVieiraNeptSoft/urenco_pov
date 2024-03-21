let actionType = "";
const c_APPROVE = "Approve";
const c_SUBMIT = "Submit";


sap.ui.getCore().attachInit(function(startParams) {

    // data = startParameters from Cockpit Tile application settings (action tab)
    // Do your Stuff

    // Some stuff needs to be timed later. Run them inside a timeout
    setTimeout(function() {
        butUpdate.firePress();
    }, 200);

});