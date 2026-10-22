sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ae.emsteel.asas.noteprint',
            componentId: 'ZC_TMP_InboundDeliveryObjectPage',
            contextPath: '/ZC_TMP_InboundDelivery'
        },
        CustomPageDefinitions
    );
});