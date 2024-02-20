export function add100Vh() {
    var height = window.innerHeight + "px";
    var elements = document.querySelectorAll(".heightJs");
    elements.forEach(function (element) {
        element.style.setProperty("--heightJs", height);
    });
}