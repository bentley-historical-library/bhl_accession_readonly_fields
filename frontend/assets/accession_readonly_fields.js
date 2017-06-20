$(function () {
  var fields = ["accession_title_", "accession_inventory_", 
                "accession_retention_rule_", "accession_user_defined__string_1_", 
                "accession_restrictions_apply_", "accession_publish_",
                "accession_access_restrictions_", "accession_resource_type_",
                "accession_use_restrictions_"];

  fields.map(function (field) {
    $("#".concat(field)).attr("readonly", "readonly");
    $("#".concat(field)).prop("disabled", true);
  });
})
