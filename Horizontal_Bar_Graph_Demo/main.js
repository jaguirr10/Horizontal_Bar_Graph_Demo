// Juan Aguirre

HorizontalBarGraph = function (el, series) {
  this.el = d3.select(el);
  this.series = series;
};

HorizontalBarGraph.prototype.draw = function () {
  var x = d3.scale.linear().
  domain([0, d3.max(this.series, function (d) {return d.value;})]).
  range([0, 100]);

  var segment = this.el.
  selectAll(".horizontal-bar-graph-segment").
  data(this.series).
  enter().
  append("div").classed("horizontal-bar-graph-segment", true);

  segment.
  append("div").classed("horizontal-bar-graph-label", true).
  text(function (d) {return d.label;});

  segment.
  append("div").classed("horizontal-bar-graph-value", true).
  append("div").classed("horizontal-bar-graph-value-bar", true).
  style("background-color", function (d) {return d.color;}).
  text(function (d) {return d.inner_label ? d.inner_label : "";}).
  transition().
  duration(1000).
  style("min-width", function (d) {return x(d.value) + "%";});

};

var graph = new HorizontalBarGraph('#my-graph', [
{ label: "Desktop", inner_label: "2,167 visits", value: 1167, color: "#6ea6df" },
{ label: "Mobile", inner_label: "395 visits", value: 543, color: "#84c26d" },
{ label: "Tablet", inner_label: "167 visits", value: 224, color: "#e17a69" }]);

graph.draw();
