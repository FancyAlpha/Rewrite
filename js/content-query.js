function import_content(file, id) {
    fetch(file)
        .then(function (response) {
            return response.text()
        })
        .then(function (html) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");

            console.log(document);
            document.getElementById(id).innerHTML = doc.documentElement.innerHTML;
            //document.body.innerHTML += doc.documentElement.innerHTML;
        })
}

function import_files(file, id) {
    $(id).load(file);
}

function import_template(file, id) {
    $(id).load("/Rewrite/templates/" + file);
}


function import_content_head(file) {
    fetch(file)
        .then(function (response) {
            return response.text()
        })
        .then(function (html) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");

            document.head.innerHTML += doc.documentElement.innerHTML;
        })
}
//
// function import_template(file) {
//     import_content("/Rewrite/templates/" + file);
// }

function import_template_head(file) {
    import_content_head("/Rewrite/templates/" + file);
}
