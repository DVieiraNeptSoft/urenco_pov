var firstDayOfWeek = getMonday(oEvent.mParameters.date);

console.log(firstDayOfWeek);

PlanningCalendar.setStartDate(firstDayOfWeek);

App.to(PageCalendarWeek);