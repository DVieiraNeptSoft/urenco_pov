PlanningCalendar.setBuiltInViews(["Week"]);

console.log(modelMultiModelUrencoDeliveries.oData.result.MT_HEADERS);

appSetBusy(false);

//Data retrieved from Sap Edition
var sapHeaders = modelMultiModelUrencoDeliveries.oData.result.MT_HEADERS;

//Data retrieved from Open Edition
var openEditionUserInputData = modelMultiModelUrencoDeliveriesUserInputAllData.oData;

var delivery_inbound = [],
    delivery_outbound = [],
    delivery_listview = [],
    delivery_all = [];

var ini_date,
    headerText,
    headerColor,
    headerTypeDelivery,
    headerTypeDeliveryDescription,
    parsedSO,
    icon,
    cyl_type;

var dateConverted;

//Add the Open Edition Data to the calendar
openEditionUserInputData.forEach(function (openEdHeader, i) {
    var OpenEditionStruc = {},
        ListViewStruc = {},
        MonthlyViewStruc = {};

    if (openEdHeader.vbeln === null) {
        ini_date = new Date(openEdHeader.deliveryDate);
        // ini_date.setDate(ini_date.getDate() + 1);
        ini_date.setHours(0, 0, 0, 0);
        // dateConverted = getDateWithoutTimezone(ini_date);
        // ini_date = dateConverted;

        var formattedDate = new Date(openEdHeader.deliveryDate);
        dummyDate(new Date(formattedDate), "+", 1); //endDate
        // dateConverted = getDateWithoutTimezone(endDate);
        // endDate = dateConverted;

        headerColor = "Type01";

        icon = "sap-icon://tnt/Manual task";

        // icon =
        //     openEdHeader.deliveryType === 1
        //         ? "sap-icon://fa-solid/calendar-minus"
        //         : "sap-icon://fa-solid/truck-loading";

        //Weekly Calendar Data
        OpenEditionStruc = {
            deliverynr: null,
            ini_date: ini_date,
            end_date: endDate,
            title: "Ref: " + openEdHeader.referenceNumber,
            sales_order: null,
            cyl_type: "TMC " + openEdHeader.tmc,
            color: headerColor,
            customer_supp: "Ship To",
            customer_supp_name: openEdHeader.shipToName,
            icon: icon,
            tmc: openEdHeader.tmc,
            id: openEdHeader.id,
            delv_type_desc: delv_type_desc,
        };

        var delv_type_desc;
        if (openEdHeader.deliveryType !== null && openEdHeader.deliveryType === 1) {
            //Inbound
            delv_type_desc = "Inbound";
            OpenEditionStruc.delv_type_desc = delv_type_desc;
            delivery_inbound.push(OpenEditionStruc);
        } else {
            delv_type_desc = "Outbound";
            OpenEditionStruc.delv_type_desc = delv_type_desc;
            delivery_outbound.push(OpenEditionStruc);
        }

        //Monthly Calendar Data
        MonthlyViewStruc = {
            deliverynr: null,
            ini_date: ini_date,
            end_date: ini_date,
            title: "Ref: " + openEdHeader.referenceNumber,
            sales_order: null,
            cyl_type: "TMC " + openEdHeader.tmc,
            color: headerColor,
            customer_supp: "Ship To",
            customer_supp_name: openEdHeader.shipToName,
            icon: icon,
            tmc: openEdHeader.tmc,
            id: openEdHeader.id,
            delv_type_desc: delv_type_desc,
        };
        delivery_all.push(MonthlyViewStruc);

        //Structure for list view
        ListViewStruc = {
            deliverynr: null,
            ini_date: ini_date,
            end_date: endDate,
            title: "Ref: " + openEdHeader.referenceNumber,
            sales_order: null,
            cyl_type: "TMC " + openEdHeader.tmc,
            color: headerColor,
            customer_supp: "Ship To",
            customer_supp_name: openEdHeader.shipToName,
            icon: icon,
            tmc: openEdHeader.tmc,
            id: openEdHeader.id,
            delv_type_desc: delv_type_desc,
        };

        // debugger;
        if (openEdHeader.deliveryDate !== null) {
            var listDate = openEdHeader.deliveryDate.split("T");

            listDate = listDate[0].split("-"); //Split date into year, month and day
            listDate = listDate[0] + listDate[1] + listDate[2]; //Year + Month + Day --> EX: 2023 + 01 + 01 = 20230101

            ListViewStruc.ini_date = listDate;

            ListViewStruc.ini_date = listDate;
        }

        delivery_listview.push(ListViewStruc);
    }
});

sapHeaders.forEach(function (header, i) {
    //Format ini_date / end_date
    var year = header.LFDAT.substr(0, 4);
    var month = header.LFDAT.substr(4, 2);
    var day = header.LFDAT.substr(6, 2);

    var formattedDate1 = year + "-" + month + "-" + day;

    // if (header.VBELN === "0080003769") {
    //     debugger;
    // }

    ini_date = new Date(formattedDate1);
    // ini_date.setDate(ini_date.getDate() + 1);
    ini_date.setHours(0, 0, 0, 0);
    // ini_date.toLocaleString({ timeZone: "UTC" });
    // dateConverted = getDateWithoutTimezone(ini_date);
    // ini_date = dateConverted;

    var dateString = formattedDate1;
    var [year1, month1, day1] = dateString.split("-");
    var date = new Date(year1, month1 - 1, day1);
    // var options = {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
    // };
    // var formattedDate = date.toLocaleDateString("en-US", options);
    // console.log(formattedDate);

    ini_date = date;

// debugger;
    var date2 = new Date(year1, month1 - 1, day1);

    endDate = date2;
    endDate.setDate(date2.getDate() + 1);

    endDate.setHours(0, 0, 0, 0);

    debugger;
    // console.log(ini_date.toLocaleString({ timeZone: "CET" }));

    // dummyDate(new Date(formattedDate), "+", 2); //endDate
    // dummyDate(new Date(formattedDate2), "+", 1); //endDate
    // endDate.toLocaleString({ timeZone: "UTC" });
    // dateConverted = getDateWithoutTimezone(endDate);
    // endDate = dateConverted;

    if (header.VGBEL !== "") {
        parsedSO = "S.O.: " + parseInt(header.VGBEL, 10); // removing leading zeroes
    } else {
        parsedSO = header.VGBEL; // if the field is empty just keep it as empty
    }

    var delv_type_desc;

    if (header.LFART === "LF") {
        //Outbound
        //headerColor = "Type01";
        headerColor = "Type0" + header.DLV_STATUS;

        icon =
            header.DLV_TYPE === 1
                ? "sap-icon://fa-solid/calendar-minus"
                : "sap-icon://fa-solid/truck-loading";

        switch (header.CYL_TYPE) {
            case 1:
                cyl_type = "48Y";
                break;
            case 2:
                cyl_type = "30B - VERIFIED";
                break;
        }

        delivery_outbound.push({
            deliverynr: header.VBELN,
            ini_date: ini_date,
            end_date: endDate,
            title: header.VBELN,
            sales_order: parsedSO,
            cyl_type: cyl_type,
            color: headerColor,
            customer_supp: header.KUNAG,
            customer_supp_name: header.NAME1,
            icon: icon,
        });

        delv_type_desc = "Outbound";
    } else {
        // EL - Inbound
        //headerColor = "Type02";
        headerColor = "Type0" + header.DLV_STATUS;

        icon =
            header.DLV_TYPE === 1
                ? "sap-icon://fa-solid/calendar-minus"
                : "sap-icon://fa-solid/truck-loading";

        switch (header.CYL_TYPE) {
            case 1:
                cyl_type = "48Y - VERIFIED";
                break;
            case 2:
                cyl_type = "30B";
                break;
        }

        delivery_inbound.push({
            deliverynr: header.VBELN,
            ini_date: ini_date,
            end_date: endDate,
            title: header.VBELN,
            sales_order: parsedSO,
            cyl_type: cyl_type,
            color: headerColor,
            customer_supp: header.KUNAG,
            customer_supp_name: header.NAME1,
            icon: icon,
        });

        delv_type_desc = "Inbound";
    }

    //Monthly Calendar Data
    delivery_all.push({
        deliverynr: header.VBELN,
        ini_date: ini_date,
        // end_date: endDate,
        end_date: ini_date,
        title: header.VBELN,
        sales_order: parsedSO,
        color: headerColor,
        customer_supp: header.KUNAG,
        customer_supp_name: header.NAME1,
    });

    var listviewdate = year + "-" + month + "-" + day;
    listviewdate = new Date(listviewdate);

    listviewdate = listviewdate.toJSON().split("T");
    listviewdate = listviewdate[0].split("-"); //Split date into year, month and day
    listviewdate = listviewdate[0] + listviewdate[1] + listviewdate[2]; //Year + Month + Day --> EX: 2023 + 01 + 01 = 20230101

    var formattedlistviewDate = listviewdate;

    //List View Data
    delivery_listview.push({
        deliverynr: header.VBELN,
        ini_date: formattedlistviewDate,
        end_date: endDate,
        title: "Delv. Nr: " + parseInt(header.VBELN, 10),
        sales_order: parsedSO,
        cyl_type: cyl_type,
        color: headerColor,
        customer_supp: header.KUNAG,
        customer_supp_name: header.NAME1,
        icon: icon,
        delv_type_desc: delv_type_desc,
    });
});

headerTypeDelivery = "CYLINDER";
headerTypeDeliveryDescription = "Movements off Site";

deliveriesCalendarHeader.deliveries.push({
    //add outbound deliveries
    typeDelivery: headerTypeDelivery,
    typeDeliveryDescription: headerTypeDeliveryDescription,
    canModify: false,
    delivery_data: delivery_outbound,
});

headerTypeDelivery = "CYLINDER";
headerTypeDeliveryDescription = "Movements on to Site";

deliveriesCalendarHeader.deliveries.push({
    //add inbound deliveries
    typeDelivery: headerTypeDelivery,
    typeDeliveryDescription: headerTypeDeliveryDescription,
    canModify: false,
    delivery_data: delivery_inbound,
});

modelPlanningCalendar.setData(deliveriesCalendarHeader);
modelPlanningCalendar.refresh();

modelMonthlyPlanningCalendar.setData(delivery_all);
modelMonthlyPlanningCalendar.refresh();

modelListViewDeliveries.setData(delivery_listview);
modelListViewDeliveries.refresh();
// PlanningCalendarRow.bindAggregation("appointments", {
//     path: "delivery_data",
//     template: CalendarAppointment,
//     templateShareable: false,
// });
// PlanningCalendar.bindAggregation("rows", {
//     path: "/deliveries",
//     template: PlanningCalendarRow,
//     templateShareable: false,
// });

MonthlyPlanningCalendar.setStartDate(newdate);
PlanningCalendar.setStartDate(newdate);
