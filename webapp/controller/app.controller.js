sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/messagetoast"
 ], function (Controller, messagetoast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello : function () {
           // show a native JavaScript alert
           messagetoast.show("Teste message toast")
        }
     });
 });