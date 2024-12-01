type JsonElement = {
    tag: string,
    attrs?: {[key: string]: string},
    children?: Array<JsonElement | string>,
}

function addElement(jsonElement: JsonElement) {
    const newElement = document.createElement(jsonElement.tag);

    if (jsonElement.attrs) {
        for (let key in jsonElement.attrs) {
            newElement.setAttribute(key, jsonElement.attrs[key])
        }
    }

    if (jsonElement.children) {
        jsonElement.children.forEach((item) => {
            if (typeof item === 'string') {
                newElement.innerText = item;
                return;
            }

            newElement.appendChild(addElement(item))
        })
    }

    return newElement;
}

fetch('component.json')
.then(response => response.json())
.then(json => {
    console.log(json);
    const resultElem = addElement(json);

    if (resultElem) document.body.appendChild(resultElem);
});
