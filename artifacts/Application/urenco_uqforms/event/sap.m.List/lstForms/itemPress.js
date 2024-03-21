const selectedItem = lstForms.getSelectedItem();

if (selectedItem) {
    const context = selectedItem.getBindingContext(); // Multimodel, remember name of model
    const data = context.getObject();

    //Fixed P10 Location
    data.customerP10Location = "240GEN";

    modelPageForm.setData(data);

    var options = {
        parameters: {
            where: JSON.stringify({ uqFormId: data.id }),
        },
    };
    apiapiGetP10s(options);

    buildFormPage();
    App.to(PageForm);
}
