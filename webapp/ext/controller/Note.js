sap.ui.define([
    "ae/emsteel/asas/noteprint/utils/common"
], function (Common) {
    "use strict";

    return {
        Print: async function (oEvent) {
            var oContext = this.getBindingContext();
            var oModel = oEvent.getModel();

            var result = await this.getEditFlow().invokeAction("com.sap.gateway.srvd.ztmp_ui_inbounddelivery.v0001.printNote", {
                contexts: oContext,
                model: oModel
            });

            var oPDF = Array.isArray(result) ? result[0].value.getObject() : result.getObject();

            Common.openPDFFromBase64(oPDF);
        },
        isEnabled: function (oBindingContext, aSelectedContexts) {
            return Common.isEnabled(oBindingContext, aSelectedContexts, "__OperationControl/printNote");
        }              
    };
});
