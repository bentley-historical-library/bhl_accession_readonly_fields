$(function () {
  var disable_accession_fields = function () {
    $("#accession_title_").attr("readonly", "readonly");
    $("#accession_title_").prop("disabled", true);
    $("#accession_inventory_").attr("readonly", "readonly");
    $("#accession_inventory_").prop("disabled", true);
    $("#accession_retention_rule_").attr("readonly", "readonly");
    $("#accession_retention_rule_").prop("disabled", true);
    $("#accession_user_defined__string_1_").attr("readonly", "readonly");
    $("#accession_user_defined__string_1_").prop("disabled", true);
  };

  disable_accession_fields();
})
