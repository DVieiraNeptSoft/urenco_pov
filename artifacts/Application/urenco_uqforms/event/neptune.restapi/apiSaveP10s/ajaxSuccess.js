App.setBusy(false);
modelformP10.setData({});
var uqform = modelPageForm.getData();

var options = {
    parameters: {
        where: JSON.stringify({ uqFormId: uqform.id }),
    },
};
apiapiGetP10s(options);
