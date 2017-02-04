var gradient = ["#FFFFFF", "#F8F7FA", "#F2F0F5", "#ECE8F1", "#E6E1EC", "#E0DAE8", "#DAD2E3", "#D4CBDF", "#CEC4DA", "#C8BCD5", "#C2B5D1", "#BCAECC", "#B6A6C8", "#B09FC3", "#AA98BF", "#A490BA", "#9E89B6", "#9882B1", "#917AAC", "#8B73A8", "#856BA3", "#7F649F", "#795D9A", "#735596", "#6D4E91", "#67478D", "#613F88", "#5B3883", "#55317F", "#4F297A", "#492276", "#431B71", "#3D136D", "#370C68", "#310564", "#340766", "#370A68", "#3A0D6B", "#3D106D", "#401370", "#431672", "#461974", "#491C77", "#4C1E79", "#4F217C", "#53247E", "#562781", "#592A83", "#5C2D85", "#5F3088", "#62338A", "#65358D", "#68388F", "#6B3B92", "#6E3E94", "#714196", "#754499", "#78479B", "#7B4A9E", "#7E4CA0", "#814FA3", "#8452A5", "#8755A7", "#8A58AA", "#8D5BAC", "#905EAF", "#9361B1", "#9764B4", "#9667B1", "#966BAF", "#966EAC", "#9672AA", "#9676A7", "#9679A5", "#967DA3", "#9681A0", "#96849E", "#96889B", "#968C99", "#958F96", "#959394", "#959692", "#959A8F", "#959E8D", "#95A18A", "#95A588", "#95A985", "#95AC83", "#95B081", "#95B47E", "#94B77C", "#94BB79", "#94BE77", "#94C274", "#94C672", "#94C970", "#94CD6D", "#94D16B", "#94D468", "#94D866", "#94DC64", "#8FDC60", "#8BDD5D", "#86DE5A", "#82DF57", "#7DE054", "#79E151", "#74E24E", "#70E34B", "#6BE448", "#67E545", "#62E642", "#5EE63F", "#59E73C", "#55E839", "#50E936", "#4CEA33", "#47EB30", "#43EC2D", "#3EED2A", "#3AEE27", "#35EF24", "#31F021", "#2CF01E", "#28F11B", "#23F218", "#1FF315", "#1AF412", "#16F50F", "#11F60C", "#0DF709", "#08F806", "#04F903", "#00FA00", "#05F203", "#0AEB07", "#0FE40B", "#14DD0F", "#19D513", "#1ECE17", "#24C71B", "#29C01F", "#2EB823", "#33B127", "#38AA2B", "#3DA32F", "#429B33", "#489437", "#4D8D3B", "#52863F", "#577E42", "#5C7746", "#61704A", "#67694E", "#6C6152", "#715A56", "#76535A", "#7B4C5E", "#804462", "#853D66", "#8B366A", "#902F6E", "#952772", "#9A2076", "#9F197A", "#A4127E", "#AA0B82", "#AA1180", "#AB187E", "#AC1E7C", "#AD257A", "#AE2C78", "#AF3277", "#B03975", "#B14073", "#B24671", "#B34D6F", "#B4546E", "#B55A6C", "#B6616A", "#B76768", "#B86E66", "#B97564", "#B97B63", "#BA8261", "#BB895F", "#BC8F5D", "#BD965B", "#BE9D5A", "#BFA358", "#C0AA56", "#C1B054", "#C2B752", "#C3BE50", "#C4C44F", "#C5CB4D", "#C6D24B", "#C7D849", "#C8DF47", "#C9E646"]


function createHeightMap(w, h, p) {
	var heightMap = [];
	heightMap[w * h - 1] = 0.0;
	var scale_factor = 15;

	for (var i = 0; i < w * h; i++) {
		var x = i % w;
		var y = i / w;
		var z = Math.random() * w;

		var noise_val = noise(x, y, z, p, w);
		var noise_transformed = noise_val * scale_factor;
		if (heightMap[i - 1] < heightMap[i]) {
			heightMap[i] = noise_transformed - (heightMap[i] - heightMap[i - 1]) / 2;
		} else {
			heightMap[i] = noise_transformed;
		}
		
	}
	return heightMap;
}

function generateSky() {

}

function generateStars(numStars) {
	var starMap = [];
	for (var i = 0; i < numStars; i++) {
		var x, y, z;
		x = Math.random() * 800 - 300;
		y = Math.random() * 900 - 300;
		z = Math.random() * 600 - 250;

		while (y < 150) {
			y = Math.random() * 500 - 300;
		}

		starMap.push(x, y, z);
	}
	return starMap;
}

function shouldMakeFirework() {
	//20% chance of creating a firework
	return Math.random() <= 1;
}

function getRandomColor() {
	var index = Math.floor(Math.random() * gradient.length);
	return gradient[index];
}