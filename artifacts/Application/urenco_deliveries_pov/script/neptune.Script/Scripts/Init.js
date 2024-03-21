//Custom Init - Happens only once when mounting the component
sap.ui.getCore().attachInit(function (startParams) {
    appSetBusy(true);

    PlanningCalendarRow.bindAggregation("appointments", {
        path: "delivery_data",
        template: CalendarAppointment,
        templateShareable: false,
    });
    PlanningCalendar.bindAggregation("rows", {
        path: "/deliveries",
        template: PlanningCalendarRow,
        templateShareable: false,
    });
});
