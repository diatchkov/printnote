sap.ui.define([
    "ae/emsteel/asas/noteprint/utils/common"
], function (Common) {
    "use strict";

    return {
        Print: async function ( ) {
            var oModel = this.getModel();
            var oExtensionAPI = this;
            var oTable = oExtensionAPI.byId("ae.emsteel.asas.noteprint::ZC_TMP_InboundDeliveryList--fe::table::ZC_TMP_InboundDelivery::LineItem::Table");
            var oItems = oTable.getSelectedContexts( );

            var result = await this.getEditFlow().invokeAction("com.sap.gateway.srvd.ztmp_ui_inbounddelivery.v0001.printNote", {
                contexts: oItems,
                model: oModel,
                invocationGrouping: "ChangeSet"
            });
            
            var oPDF = Array.isArray(result) ? result[0].value.getObject() : result.getObject();

            Common.openPDFFromBase64(oPDF);
        },
        isEnabled: function (oBindingContext, aSelectedContexts) {
            return Common.isEnabled(oBindingContext, aSelectedContexts, "__OperationControl/printNote");
        }        
    };
});