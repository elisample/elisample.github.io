function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/TableauWork_16702613692310/Sheet1";

    var viz = new tableau.Viz(containerDiv, url);

}
initViz();