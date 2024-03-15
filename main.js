
function init() {
    const htmlMatcher = /\.html$/;
    const elements = document.querySelectorAll("[include-html]");

    elements.forEach(function (el) {
        const filePath = el.getAttribute("include-html").replace(htmlMatcher, "") + ".html";
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                el.outerHTML = xhr.responseText;
            }
        };

        xhr.open("GET", filePath, true);
        xhr.send();
    });
}

init();

const observer = new MutationObserver(function (mutations) {
    init();
});

observer.observe(document.body, { childList: true });