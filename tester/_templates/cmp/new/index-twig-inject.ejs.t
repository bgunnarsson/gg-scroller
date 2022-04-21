---
inject: true
to: src/templates/extends/template.njk
unless_exists: false
prepend: true
skip_if: <%= h.inflection.dasherize(name) %>
---
{% from "components/<%= h.inflection.dasherize(name) %>.njk" import <%= h.inflection.camelize(name) %> %}