# BHL Accession Readonly Fields
This plugin disables unused fields for the Accession record type in the ArchivesSpace staff interface. It adds a JavaScript file, `accession_readonly_fields.js`, which is loaded using a `layout_head.html.erb` when an accession record is loaded.

## Directory structure

    frontend
        assets
            accession_readonly_fields.js
        views
            layout_head.html.erb

## How It Works
`frontend/accession_readonly_fields.js` defines a function, `AccessionReadOnlyFields`, which hides several fields entirely and makes others read only by using JQuery's `hide()` function or by setting an element's `readonly` property to `readonly`, respectively. Currently, fields that are hidden tend to be those which have never been used in the Bentley's accessions data, whereas fields that are read only tend to be fields that may have been used for legacy data (and, therefore, might have valuable content) but which are not used for new accessions.
