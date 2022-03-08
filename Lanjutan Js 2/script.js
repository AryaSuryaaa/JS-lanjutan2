document.getElementById("checkText").addEventListener("click", function() {

    document.getElementById("showText").removeAttribute("hidden");
    const kapital = /^[A-Z]/g;
    const string = document.getElementById("text").value;
    const result = (string.match(kapital));

    if(result != null){
        document.getElementById("showText").innerText = "Huruf pertama huruf besar";
    }
    else {
        document.getElementById("showText").innerText = "Huruf pertama huruf kecil";
    }
});


document.getElementById("checkAngka").addEventListener("click", function(){

    document.getElementById("showValidText").removeAttribute("hidden");
    const angka = document.getElementById("validNum").value;
    let validNum = /^[0-9]+$/;
    if (angka.match(validNum)) {
        document.getElementById("showValidText").innerText = "Yang anda masukkan sudah benar";
    } 
    else {
        document.getElementById("showValidText").innerText = "Hanya menerima angka saja";
    }
});

document.getElementById("minIncrement").addEventListener("click", function(){

    document.getElementById("showHasil").removeAttribute("hidden");
    const angkaInputan = document.getElementById("angka").value;

    for(let i = angkaInputan; i >= 0; ){

        const newElement = document.createElement("a");

        newElement.innerText = i + ", ";

        const daftar = document.getElementById("showHasil");

        daftar.appendChild(newElement);

        i--;
    }
    
});



// document.getElementById("submit").addEventListener("click", function(){

//     const newElement = document.createElement("div").className("container-tiga");
//     const tempat = document.getElementById("container-dua");
//     tempat.appendChild(newElement);

//     const nama= document.getElementById("nama").value;
//     const email = document.getElementById("email").value;

    

//     const dataDiri = document.createElement("div").className("dataDiri");
//     newElement.appendChild(dataDiri)

//     nama = document.createElement("h2");
//     nama.innerText = nama;

//     email = document.createElement("p");
//     email.innerText = email;



//     dataDiri.appendChild(nama);
//     dataDiri.appendChild(email);

// });


// document.getElementById("submit").addEventListener("click", function(){

//     class dataDiri {
//     constructor(nama, email) {
//         this.nama = nama;
//         this.email = email;
//     }
//     detail() {
//         return `${this.nama} ${this.email}`;
//     }
// }

// let person = new dataDiri(document.getElementById("nama"), document.getElementById("email"))


// document.getElementById("gantiNama").innerText(person.nama);
// document.getElementById("gantiEmail").innerText(person.email);
// });
document.getElementById("submit").addEventListener("click", function(){

    alert("NIH OOP GAGAL HIKS :)");
});

