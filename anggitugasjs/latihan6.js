//Soal 1
class Persegi {
    constructor(sisi){
        this.sisi = sisi;
    };
    perkalian(){
        return this.sisi * this.sisi;
    }
    pertambahan(){
        return this.sisi + this.sisi;
    }
    pengurangan(){
        return this.sisi - this.sisi;
    }
    pembagian(){
        return this.sisi / this.sisi;
    }
}
const persegi = new Persegi(69)
console.log(persegi.pertambahan());


// soal 2
const map = Array.prototype.map;
function separated(string) {
    const separated = map.call(string, el => {
        return `${el}`;
    });
    console.log(separated.sort());
}
separated("anggita");

// soal 3
function age(umur) {
    if(umur > 17) {
        console.log("Adult")
    } else {
        console.log("Tidak Adult")
    }
}
age(16)

// soal 4
class identity {
    constructor(nama,alias,hobi){
        this.Nama = nama;
        this.Alias = alias;
        this.Hobi = hobi;
    };    
};

const identity1 = new identity("anggi","cooking","swimming")
console.log(i);

// soal 5
class Person {
    constructor(nama, kelas, umur){
        this.Nama = nama;
        this.Kelas = kelas;
        this.Umur = umur;
    };
    greeting (){
        return (
            "namaku " + this.Nama + " aku kelas " + this.Kelas + " umurku " + this.Umur
        )
    }
};

const jedayy = new Person("anggi", 11, 17)
console.log(jedayy.greeting());