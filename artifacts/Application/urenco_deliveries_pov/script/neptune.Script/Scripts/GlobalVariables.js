var newdate = new Date("2021-10-24");
newdate.setHours(0, 0, 0, 0);

var orig_date = newdate;

var deliveriesCalendarHeader = {
    startDate: orig_date,
    deliveries: [],
};

var endDate;
var selectedDelivery; //Store in this variable the delivery nr to get the corresponding delivery detail data inside the popup
var inputDataAlreadyExists; //Created a variable to have True / False based on if the Input Fields data was already saved in Open Edition

var originalDeliveryDate;

var openPopupInList;