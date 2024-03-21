function appSetBusy(val) {
    App.setBusy(val);
}

function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

function dummyDate(date, symb, day) {
    var formatDate;

    endDate = date;

    if (symb === "+") {
        formatDate = endDate.getDate() + day;
    } else {
        formatDate = endDate.getDate() - day;
    }

    endDate.setDate(formatDate);

    endDate.setHours(0, 0, 0, 0);
}

function f_clearAddDeliveryFields() {
    modelDialogAddDelivery.setData();
}

function setDataToPopup(data) {
    var formatDate = data.deliveryDate.split("T"); //Split Date from Time
    formatDate = formatDate[0].split("-"); //Split date into year, month and day
    formatDate = formatDate[0] + formatDate[1] + formatDate[2]; //Year + Month + Day --> EX: 2023 + 01 + 01 = 20230101

    Object.assign(data, { formatDate: formatDate });

    modelPopoverOpenEditionDelivery.setData(data);
    modelPopoverOpenEditionDelivery.getData().appIndex = parseInt(
        selectedDelivery.getBindingContext().getPath().split("/")[4]
    );

    PopoverOpenEditionDelivery.openBy(selectedDelivery);
}

function refreshCalendarData() {
    deliveriesCalendarHeader = {
        startDate: orig_date,
        deliveries: [],
    };

    modelPlanningCalendar.setData(deliveriesCalendarHeader);
    modelPlanningCalendar.refresh();
}

function getDateWithoutTimezone(date) {
    var userTimezoneOffset = date.getTimezoneOffset() * 60000;
    var dateWithoutTimezone = new Date(date.getTime() - userTimezoneOffset);
    dateWithoutTimezone.setHours(0, 0, 0, 0);
    return dateWithoutTimezone;

    // var dateWithoutTimezone = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    // return dateWithoutTimezone;
}

function setDataToListPopup(data, event) {
    var formatDate = data.deliveryDate.split("T"); //Split Date from Time
    formatDate = formatDate[0].split("-"); //Split date into year, month and day
    formatDate = formatDate[0] + formatDate[1] + formatDate[2]; //Year + Month + Day --> EX: 2023 + 01 + 01 = 20230101

    Object.assign(data, { formatDate: formatDate });

    // modelPopoverOpenEditionDelivery.setData(data);
    modelDialogOpenEditionDelivery.setData(data);

    // PopoverOpenEditionDelivery.openBy(event);
    // PopoverOpenEditionDelivery.openBy(ListViewDeliveries);
    DialogOpenEditionDelivery.open();
}
