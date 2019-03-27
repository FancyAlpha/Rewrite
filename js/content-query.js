function import_content(file) {
    fetch(file)
        .then(function (response) {
            return response.text()
        })
        .then(function (html) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");

            document.body.appendChild(doc.documentElement);
        })
}

function import_content_head(file) {
    fetch(file)
        .then(function (response) {
            return response.text()
        })
        .then(function (html) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");

                document.head.appendChild(doc.documentElement);
        })
}


function define_template(file, custom_element) {
    fetch( file )
        .then( stream => stream.text() )
        .then( text =>
            customElements.define( custom_element, class extends HTMLElement {
                constructor() {
                    super();
                    this.attachShadow( { mode: 'open'} )
                        .innerHTML = text
                }
            } )
        )
}