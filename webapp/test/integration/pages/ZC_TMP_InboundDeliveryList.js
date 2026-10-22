sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ae.emsteel.asas.noteprint',
            componentId: 'ZC_TMP_InboundDeliveryList',
            contextPath: '/ZC_TMP_InboundDelivery'
        },
        CustomPageDefinitions
    );
});