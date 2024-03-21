const selectedItem = lstP10.getSelectedItem();

if (selectedItem) {
    const context = selectedItem.getBindingContext(); // Multimodel, remember name of model
    const data = context.getObject();

    modelformP10.setData(data);
}
