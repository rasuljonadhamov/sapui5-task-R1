sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "sap/ui/core/UIComponent"], function (Controller, JSONModel, Filter, FilterOperator, UIComponent) {
  "use strict";

  const App = Controller.extend("ui5.tutorial.walkthrough.controller.App", {
    onInit() {
      const viewModel = new JSONModel({
        currency: "EUR"
      });
      this.getView()?.setModel(viewModel, "view");
    },
    onFilterInvoices() {
      this._applyFilters();
    },
    onFilterStatus() {
      this._applyFilters();
    },
    _applyFilters() {
      // build filter array from the search field and the status combo box
      const filter = [];
      const query = this.byId("searchField")?.getValue();
      if (query) {
        filter.push(new Filter("ProductName", FilterOperator.Contains, query));
      }
      const status = this.byId("statusFilter")?.getSelectedKey();
      if (status && status !== "all") {
        filter.push(new Filter("Status", FilterOperator.EQ, status));
      }

      // filter binding
      const list = this.byId("invoiceList");
      const binding = list?.getBinding("items");
      binding?.filter(filter);
    },
    onPress(event) {
      const item = event.getSource();
      const router = UIComponent.getRouterFor(this);
      router.navTo("detail", {
        invoicePath: window.encodeURIComponent(item.getBindingContext("invoice").getPath().substring(1))
      });
    }
  });
  return App;
});
