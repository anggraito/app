//CREATE variabel 
	//READ dan SAVE  variabel 
	//IF nama kosong TAMPILKAN "Harusnya di isi nama kamu!!"
	//ELSE "Selamat menggunakan Applikasi To Do List " dengan variable "nama"
//CREATE sebuah variabel untuk menampilkan nama
	//GRAB dari variabel yang sebelumnya sudah disimpan
	//PRINT username
//CREATE sebuah variabel untuk gambar icon yang nantinya akan dipanggil
//TAMPILKAN data yang didapat dari sebuah identity saat di klik
	//CREATE sebuah tag baru
	//IF hasilnya sesuai nilai TAMPILKAN
//FUNCTION untuk menambahkan data
	//CREATE sebuah variabel untuk menambah data yang didapatkan dari ID
	//CREATE item baru untuk dimasukan di list
	//SET hasil data tersebut dengan objek
	//CREATE tag baru dari class untuk list data
	//SET tag tersebut menjadi button
	//CREATE tag baru dari class untuk ceklist
	//SET tag tersebut 
	//SET dengan variabel gambar icon yang telah dibuat

	//SET record baru ceklist dari tag button
	//SET record data baru dengan data lama dari item list

	//SET tampilan dimulai dari data yang baru diinputkan ke data lama

	//PRINT hasil proses tersebut


var nama;
nama = prompt("Masukan Nama untuk memasukan To Do List!!");

if(nama == ""){
	alert("Harusnya di isi nama kamu!!");
}
else {
	alert("Selamat menggunakan Applikasi To Do List " + nama);
}

var username;
username = nama; // Grab the stylesheet object
//console.log(username);
document.getElementById('username').innerHTML=username;


var imgSVG ='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve" width="512px" height="512px"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/><path class="fill" d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406 l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411 C39.251,14.885,38.62,14.922,38.252,15.336z"/></g></svg>';

document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('additem').value;
  if (value){
  	addItemTodo(value);
  	document.getElementById('additem').value = '';
  }
 
});

function addItemTodo(text) {
	var list = document.getElementById('todo');

	var item = document.createElement('li'); // Create a new list tag
	item.innerText = text;

	var buttons = document.createElement('ceklist'); // Create a new buttons tag
	buttons.classList.add('buttons');

	var ceklist = document.createElement('button');
	ceklist.classList.add('ceklist');
	ceklist.innerHTML = imgSVG; 

	// Append the style tag to head
	buttons.appendChild(ceklist);
	item.appendChild(buttons);

	//pengganti array desc
	list.insertBefore(item, list.childNodes[0]);

	console.log(text);
}