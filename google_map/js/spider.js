function appendImage(url, x, y) {
    $('#app-container').append($('<img>').attr('src', url).attr('title', x + ' ' + y).attr('crossOrigin', 'Anonymous').load(updateProgressBar));
}

function appendNewLine() {
    $('#app-container').append($('<br>'));
}

var w, h, cx, cy;
var count = 0;

function updateProgressBar() {
    count++;
    var p = 100 * count / (w * h);
    console.log(count);
    $('#progress').css('width', p + '%');
    $('#progress-text').text(count + ' / ' + w * h);
}

function reset() {
    count = 0;
    $('#app-container').empty();
}

function download(xs, ys, level, deg, label) {
    for (var y = ys[0]; y <= ys[1]; y++) {
        for (var x = xs[0]; x <= xs[1]; x++) {
            var url1 = `https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i${level}!2i${x}!3i${y}!4i256!2m3!1e0!2sm!3i467175868!3m17!2sja!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmapSatellite!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmY!4e0!13i0!14b1&key=AIzaSyDBmW1_kjJ6Kevqf8o-HPfSsuyLXj__4RI&channel=suumo-chintai-chizu&token=42098`
            var url2 = `https://khms1.googleapis.com/kh?v=124&hl=ja&deg=${deg}&x=${x}&y=${y}&z=${level}`;
            var filename = `images/google/${level}/${x}_${y}.png`;
            appendImage(label ? url1 : url2, x, y);
        }
        appendNewLine();
    }

    // $('body').width((radius * 2 + 1) * 47);
    $('#app-container img').width('calc(' + 100 / (xs[1] - xs[0] + 1) + '% - 1px)');
}

function preview() {
    var level = parseInt($('#level').val());
    var deg = parseInt($('#deg').val());
    w = parseInt($('#size-w').val());
    h = parseInt($('#size-h').val());
    cx = parseInt($('#cx').val());
    cy = parseInt($('#cy').val());
    label = $('#map-or-label')[0].checked;
    var xs = [cx - Math.floor(w / 2)];
    xs.push(xs[0] + w - 1);
    var ys = [cy - Math.floor(h / 2)];
    ys.push(ys[0] + h - 1);
    reset();
    download(xs, ys, level, deg, label);
}

// Tokyo
// var center = [232843, 111380];
// var radius = 20;
// var level = 18;

// var center = [232843 * 2, 111380 * 2];
// var radius = 20;
// var level = 19;
