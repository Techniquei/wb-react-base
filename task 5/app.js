function addElement(jsonElement) {
    var newElement = document.createElement(jsonElement.tag);
    if (jsonElement.attrs) {
        for (var key in jsonElement.attrs) {
            newElement.setAttribute(key, jsonElement.attrs[key]);
        }
    }
    if (jsonElement.children) {
        jsonElement.children.forEach(function (item) {
            if (typeof item === 'string') {
                newElement.innerText = item;
                return;
            }
            newElement.appendChild(addElement(item));
        });
    }
    return newElement;
}
fetch('component.json')
    .then(function (response) { return response.json(); })
    .then(function (json) {
    console.log(json);
    var resultElem = addElement(json);
    if (resultElem)
        document.body.appendChild(resultElem);
});
