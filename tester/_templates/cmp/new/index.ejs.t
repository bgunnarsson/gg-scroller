---
to: src/templates/components/<%= h.inflection.dasherize(name) %>.njk
---

{% macro <%= h.inflection.camelize(name) %>(props) %}

  <div class="<%= h.inflection.dasherize(name) %>">

  </div>

{% endmacro %}