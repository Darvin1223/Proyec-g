$(document).ready(function(){
	console.log('Hola');
	$('#click3').click(function(){
		pasarimg($('#img3').attr('src'))
	});
	$('#click1').click(function(){
		pasarimg($('#img1').attr('src'))
	});
	$('#click2').click(function(){
		pasarimg($('#img2').attr('src'))
	});
})


console.log('Ahi ahi');

function pasarimg(src){
	console.log(src, 'Hola');
	document.getElementById('img-principal').setAttribute("src", src);
}
