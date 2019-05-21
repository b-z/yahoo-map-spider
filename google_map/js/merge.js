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
    var filename = [cx, cy, w, h, label ? 'label' : 'map'].join('_');
    downloadCanvas(filename);
}

function dataURLtoBlob(dataurl) {
	var arr = dataurl.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {
		type: mime
	});
}

function downloadCanvas(filename) {
	var link = document.createElement('a');
	var imgData = $('#canvas')[0].toDataURL({
		format: 'png',
		multiplier: 4
	});
	var strDataURI = imgData.substr(22, imgData.length);
	var blob = dataURLtoBlob(imgData);
	var objurl = URL.createObjectURL(blob);
	link.download = filename + '.png';
	link.href = objurl;
	link.click();
}
