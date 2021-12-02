function tambah()
{
	var angkapertama = parseFloat(document.formku.angkapertama.value);
	var angkakedua = parseFloat(document.formku.angkakedua.value);
	document.formku.hasil.value = angkapertama + angkakedua;
}
function kurang()
{
	var angkapertama = parseFloat(document.formku.angkapertama.value);
	var angkakedua = parseFloat(document.formku.angkakedua.value);
	document.formku.hasil.value = angkapertama - angkakedua;
}

function kali()
{
	var angkapertama = parseFloat(document.formku.angkapertama.value);
	var angkakedua = parseFloat(document.formku.angkakedua.value);
	document.formku.hasil.value = angkapertama * angkakedua;
}

function bagi()
{
	var angkapertama = parseFloat(document.formku.angkapertama.value);
	var angkakedua = parseFloat(document.formku.angkakedua.value);
	document.formku.hasil.value = angkapertama / angkakedua;
}

function persen()
{
	var angkapertama = parseFloat(document.formku.angkapertama.value);
	var angkakedua = parseFloat(document.formku.angkakedua.value);
	document.formku.hasil.value = angkapertama / 100;
}

function akar()
{
	var angkapertama = parseFloat(document.formku.angkapertama.value);
	var angkakedua = parseFloat(document.formku.angkakedua.value);
	document.formku.hasil.value = Math.sqrt(angkapertama);
}

function pangkat()
{
	var angkapertama = parseFloat(document.formku.angkapertama.value);
	var angkakedua = parseFloat(document.formku.angkakedua.value);
	document.formku.hasil.value = Math.pow(angkapertama,angkakedua);
}