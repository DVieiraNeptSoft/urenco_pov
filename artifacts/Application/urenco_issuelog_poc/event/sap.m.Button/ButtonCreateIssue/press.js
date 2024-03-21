App.to(PageNotificationList);

/**
 * Name: API_URENCO_NOTIFICATIONS
 * Description: Urenco POC Notifications
 * 
 * Path: /GET_NOTIFICATIONS_2
 * Method: GET
 * 
 * Parameters:
 * $select - Optional parameter 
 * Description: Select fieldnames to be returned. Separated by comma
 * sap-client - Required parameter 
 * Description: SAP Client
 * Example: 100
 * 
 */
var options = {
    parameters: {
        "$select": "", // Optional 
        "sap-client": "" // Required 
    }
};

apiGetNotifications();