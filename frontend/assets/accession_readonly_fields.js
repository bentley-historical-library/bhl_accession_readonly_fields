$(function () {
  var hidden_sections = ["accession_dates_", "accession_subjects_",
                        "accession_rights_statements_", "accession_classifications_"];
  
  hidden_sections.map(function (section) {
    $('section[id$=' + section + ']').hide();
    $('li[class^=sidebar-entry][class$=' + section + ']').hide();
  });

  var hidden_fields = ["accession_publish_", "accession_restrictions_apply_", 
                      "accession_access_restrictions_", "accession_use_restrictions_",
                      "accession_collection_management__rights_determined_"];

  hidden_fields.map(function (field) {
    var fld_label = $("[for='" + field + "']");
    fld_label.parent().hide();
  });
  
  var readonly_fields = ["accession_title_", "accession_inventory_", 
                        "accession_retention_rule_", "accession_user_defined__string_1_", 
                        "accession_restrictions_apply_", "accession_publish_",
                        "accession_access_restrictions_", "accession_resource_type_",
                        "accession_use_restrictions_"];

  readonly_fields.map(function (field) {
    $("#".concat(field)).attr("readonly", "readonly");
    $("#".concat(field)).prop("disabled", true);
  });
})