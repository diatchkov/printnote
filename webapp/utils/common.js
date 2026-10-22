sap.ui.define([
    "sap/m/PDFViewer",
    "sap/m/MessageBox"
], function (PDFViewer, MessageBox) {
    "use strict";

    let oViewer = null;
    let sBlobUrl = null;

    function base64ToBlob(sBase64, sMimeType) {
        const aBytes = Uint8Array.from(atob(sBase64), (c) => c.charCodeAt(0));
        return new Blob([aBytes], { type: sMimeType || "application/pdf" });
    }

    return {
        /**
         * Opens a PDF from a base64 encoded string.
         * Reuses one viewer instance and releases the previous blob URL.
         * @param {object} oPDF
         * @param {string} oPDF.MimeCont  Base64 encoded content
         * @param {string} [oPDF.MimeType] defaults to application/pdf
         * @param {string} [oPDF.FileName] dialog title
         * @returns {sap.m.PDFViewer|null}
         */
        openPDFFromBase64: function (oPDF) {
            if (!oPDF || !oPDF.MimeCont) {
                return null;
            }

            try {
                const oBlob = base64ToBlob(oPDF.MimeCont, oPDF.MimeType);

                if (sBlobUrl) {
                    URL.revokeObjectURL(sBlobUrl);
                }
                sBlobUrl = URL.createObjectURL(oBlob);

                if (!oViewer) {
                    oViewer = new PDFViewer({
                        error: function () {
                            MessageBox.error("The PDF could not be displayed.");
                        }
                    });
                }
                oViewer.setSource(sBlobUrl);
                oViewer.setTitle(oPDF.FileName || "Document");
                oViewer.open();

                return oViewer;
            } catch (oError) {
                MessageBox.error("The PDF could not be opened.");
                return null;
            }
        },

        /**
         * True if sProperty is true on the binding context or any selected context.
         */
        isEnabled: async function (oBindingContext, aSelectedContexts, sProperty) {
            const aContexts = [oBindingContext]
                .concat(aSelectedContexts || [])
                .filter(Boolean);

            if (!aContexts.length) {
                return false;
            }

            try {
                const aValues = await Promise.all(
                    aContexts.map((oContext) => oContext.requestProperty(sProperty))
                );
                return aValues.some((bValue) => bValue === true);
            } catch (oError) {

                return false;
            }
        }
    };
});