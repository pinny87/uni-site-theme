$(document).ready(function() {

  // Add Syntax Highlighting
  hljs.initHighlightingOnLoad();

  // Homepage Tabs.
  $('.tabular.menu .item').tab();

  // Add Semantic UI classes to tables.
  $('table').addClass('ui celled table');
});
