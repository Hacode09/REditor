function start() {
    var html = document.getElementById('html');
    var css = document.getElementById('css');
    var js = document.getElementById('js');
    var code = document.getElementById('code').contentWindow.document;

    document.body.onkeyup = function () {
        code.open();
        code.writeln(
            "<!DOCTYPE html>" + html.value + "</html>" +

            "<style>" + css.value + "</style>" +

            "<script>" + js.value + "</script>"
        );

        code.close();
    }
}
start();