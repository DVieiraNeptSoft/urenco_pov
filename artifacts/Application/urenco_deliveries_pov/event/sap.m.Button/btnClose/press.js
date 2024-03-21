diaSAPMessages.close();

appSetBusy(true);

//Cleaning Array Data
refreshCalendarData();

var options = {
    parameters: {
        "where": "", // Optional 
        "select": "", // Optional 
        "take": "", // Optional 
        "skip": "", // Optional 
        "order": "" // Optional 
    }
};

apiRestAPIUrencoDeliveriesInputGetAllData(options);