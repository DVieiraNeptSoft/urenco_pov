var uqform = modelPageForm.getData();

var options = {
    parameters: {
        where: JSON.stringify({ uqFormId: uqform.id }),
    },
};
apiapiGetP10s(options);

modelformP10.setData({});