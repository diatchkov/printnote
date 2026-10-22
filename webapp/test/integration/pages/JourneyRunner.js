sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ae/emsteel/asas/noteprint/test/integration/pages/ZC_TMP_InboundDeliveryList",
	"ae/emsteel/asas/noteprint/test/integration/pages/ZC_TMP_InboundDeliveryObjectPage"
], function (JourneyRunner, ZC_TMP_InboundDeliveryList, ZC_TMP_InboundDeliveryObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ae/emsteel/asas/noteprint') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_TMP_InboundDeliveryList: ZC_TMP_InboundDeliveryList,
			onTheZC_TMP_InboundDeliveryObjectPage: ZC_TMP_InboundDeliveryObjectPage
        },
        async: true
    });

    return runner;
});

