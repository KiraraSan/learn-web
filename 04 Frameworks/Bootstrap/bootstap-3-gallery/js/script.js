// event
$('.page-scroll').on('click', function(){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen yg bersangkutan
	var elementujuan = $(tujuan);
	console.log(elementujuan);

});