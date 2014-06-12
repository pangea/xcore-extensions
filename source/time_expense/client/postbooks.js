/*jshint bitwise:true, indent:2, curly:true, eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
trailing:true, white:true*/
/*global XT:true, XV:true, enyo:true*/

(function () {

  XT.extensions.timeExpense.initPostbooks = function () {
    var relevantPrivileges,
      projectPanels,
      setupPanels;

    // ..........................................................
    // APPLICATION
    //

    setupPanels = [
      {name: "departmentList", kind: "XV.DepartmentList"},
      {name: "expenseCategoryList", kind: "XV.ExpenseCategoryList"},
      {name: "shiftList", kind: "XV.ShiftList"}
    ];
    XT.app.$.postbooks.appendPanels("setup", setupPanels);

    projectPanels = [
      {name: "worksheetList", kind: "XV.WorksheetList"},
      {name: "employeeList", kind: "XV.EmployeeList"},
      {name: "employeeGroupList", kind: "XV.EmployeeGroupList"}
    ];

    XT.app.$.postbooks.appendPanels("project", projectPanels);

    relevantPrivileges = [
      "MaintainDepartments",
      "MaintainEmployees",
      "MaintainShifts",
      "ViewEmployees",
      "MaintainTimeExpenseOthers",
      "MaintainTimeExpenseSelf",
      "MaintainTimeExpense",
      "CanViewRates",
      "MaintainEmpCostAll",
      "CanApprove",
      "allowInvoicing",
      "allowVouchering",
      "PostTimeSheets",
      "ViewTimeExpenseHistory"
    ];
    XT.session.addRelevantPrivileges("setup", relevantPrivileges);

  };

}());
