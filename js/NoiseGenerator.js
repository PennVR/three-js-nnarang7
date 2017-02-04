function generateRandomArray(size) {
	var randomArray = [];
	var i = 0;
	while (i < size) {
		var new_num = Math.random() * size*2;
		new_num = Math.floor(new_num);
		if (randomArray.indexOf(new_num) < 0) {
			randomArray.push(new_num);
			i++;
		}
	}
	var j = 0;
	while (j < size) {
		randomArray.push(randomArray[j]);
		j++;
	}
	return randomArray;
}

//based off of Ken Perlin's fade formula
function fade(t) {
	return 6 * Math.pow(t, 5) - 15 * Math.pow(t, 4) + 10 * Math.pow(t, 3);
}

function noise(x, y, z, p, world_dim) {

	x = x % world_dim;
	y = y % world_dim;
	z = z % world_dim;


	var x_unit_left = x & 255;
	var y_unit_left = y & 255;
	var z_unit_left = z & 255;

	var x_unit_right = x - x_unit_left;
	var y_unit_right = y - y_unit_left;
	var z_unit_right = z - z_unit_left;

	var u = fade(x_unit_right);
	var v = fade(y_unit_right);
	var w = fade(z_unit_right);

	var hashes = hash(x_unit_left, y_unit_left, z_unit_left, p);

	var bottom_left, bottom_right, top_left, top_right;
	var AAA, BAA, ABA, BBA, AAB, BAB, ABB, BBB;

	AAA = grad(x_unit_right, y_unit_right, z_unit_right, hashes.AAA);
	BAA = grad(x_unit_right - 1, y_unit_right, z_unit_right, hashes.BAA);
	ABA = grad(x_unit_right, y_unit_right - 1, z_unit_right, hashes.ABA);
	BBA = grad(x_unit_right - 1, y_unit_right - 1, z_unit_right, hashes.BBA);
	AAB = grad(x_unit_right, y_unit_right, z_unit_right - 1, hashes.AAB);
	BAB = grad(x_unit_right - 1, y_unit_right, z_unit_right - 1, hashes.BAB);
	ABB = grad(x_unit_right, y_unit_right - 1, z_unit_right - 1);
	BBB = grad(x_unit_right - 1, y_unit_right - 1, z_unit_right - 1);


	bottom_left = lerp(AAA, BAA, u);
	bottom_right = lerp(ABA, BBA, u);
	top_left = lerp(bottom_left, bottom_right, v);

	bottom_left = lerp(AAB, BAB, u);
	bottom_right = lerp(ABB, BBB, u);

	top_right = lerp(bottom_left, bottom_right, v);

	return (lerp(top_left, top_right, w) + 1.0) / 2.0;

}

//for linear interpolation - based off Ken Perlin's linear interpolation formula
function lerp(a, b, u) {
	return a + u * (b - a);
}

function grad(x, y, z, hash) {
	var hash_and = hash & 15;
	var gradient_val = 0;
	switch (hash_and) {
		case 0: gradient_val = x + y;
			break;
		case 1: gradient_val = -x + y;
			break;
		case 2: gradient_val = x - y;
			break;
		case 3: gradient_val = -x - y;
			break;
		case 4: gradient_val = x + z;
			break;
		case 5: gradient_val = -x + z;
			break;
		case 6: gradient_val = x - z;
			break;
		case 7: gradient_val = -x - z;
			break;
		case 8: gradient_val = z + y;
			break;
		case 9: gradient_val = z - y;
			break;
		case 10: gradient_val = y - z;
			break;
		case 11: gradient_val = -y - z;
			break;
		case 12: gradient_val = x + y;
			break;
		case 13: gradient_val = -y + z;
			break;
		case 14: gradient_val = y - x;
			break;
		case 15: gradient_val = -y - z;
			break;
		default: gradient_val = 0;
			break;
		}

		return gradient_val;
	}

//hash function modeled off Perlin Noise
function hash(x, y, z, p) {
	var hashes = {};
	//A refers to the original term and B refers to the term plus 1
	hashes.AAA = p[p[p[x] + y] + z];
	hashes.ABA = p[p[p[x] + (y + 1)] + z];
	hashes.AAB = p[p[p[x] + y] + (z + 1)];
	hashes.ABB = p[p[p[x] + (y + 1)] + (z + 1)];
	hashes.BAA = p[p[p[(x + 1)] + y] + z];
	hashes.BBA = p[p[p[(x + 1)] + (y + 1)] + z];
	hashes.BAB = p[p[p[(x + 1)] + y] + (z + 1)];
	hashes.BBB = p[p[p[(x + 1)] + (y + 1)] + (z + 1)];
	return hashes;
}
