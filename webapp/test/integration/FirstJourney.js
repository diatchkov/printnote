sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZC_TMP_InboundDeliveryList.iSeeThisPage();
            Then.onTheZC_TMP_InboundDeliveryList.onTable().iCheckColumns(5, {"InboundDelivery":{"header":"Delivery"},"SDDocumentCategory":{"header":"SD Document Category"},"DeliveryDocumentType":{"header":"Delivery Type"},"CreatedByUser":{"header":"Created By"},"CreationDate":{"header":"Created On"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZC_TMP_InboundDeliveryList.onFilterBar().iExecuteSearch();
            
            Then.onTheZC_TMP_InboundDeliveryList.onTable().iCheckRows();

            When.onTheZC_TMP_InboundDeliveryList.onTable().iPressRow(0);
            Then.onTheZC_TMP_InboundDeliveryObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});