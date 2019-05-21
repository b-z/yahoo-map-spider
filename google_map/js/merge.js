var size = 256;
function merge() {
    $('#canvas').attr('width', w * size + 'px').attr('height', h * size + 'px');
    var ctx = $('#canvas')[0].getContext('2d');
    var c = 0;
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            ctx.drawImage($('#app-container img')[c], x * size, y * size, size, size);
            c++;
        }
    }
}

function save() {
    if (w * h != count) return;
    merge();
}
