// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";

const firstUserFavColor = new Set();
firstUserFavColor.add("Yellow");
firstUserFavColor.add("Pink");
firstUserFavColor.add("White");
firstUserFavColor.add("Purple");
const newFirstFavColor = [...firstUserFavColor];

firstUser.favoriteColor = newFirstFavColor;
firstUser.isHavePet = true;
firstUser.education = [{
        name: "SD 01",
        city: "Jakarta",
        graduate: "2016",
    },
    {
        name: "SMP 02",
        city: "Jakarta",
        graduate: "2019",
    },
    {
        name: "SMA 03",
        city: "Jakarta",
    },
];

const firstUserFavRestaurant = new Set();
firstUserFavRestaurant.add("Bento");
firstUserFavRestaurant.add("Sushi");
firstUserFavRestaurant.add("Pancake");
firstUserFavRestaurant.add("Eggy");
firstUserFavRestaurant.add("Tempura");
firstUserFavRestaurant.add("Bento");
firstUserFavRestaurant.add("Eggy");
firstUserFavRestaurant.add("Padang");
firstUserFavRestaurant.add("Tteok");
firstUserFavRestaurant.add("Sushi");
firstUserFavRestaurant.add("Sushi");
const newFirstFavRestaurant = [...firstUserFavRestaurant];

firstUser.favoriteRestaurant = newFirstFavRestaurant;

const secondUser = {};
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";

const secondUserFavColor = new Set();
secondUserFavColor.add("Blue");
secondUserFavColor.add("Black");
secondUserFavColor.add("Grey");
const newSecondFavColor = [...secondUserFavColor];

secondUser.favoriteColor = newSecondFavColor;
secondUser.isHavePet = false;
secondUser.education = [{
        name: "SD 02",
        city: "Jakarta",
        graduate: "2010",
    },
    {
        name: "SMP 03",
        city: "Bogor",
        graduate: "2013",
    },
    {
        name: "SMA 01",
        city: "Surabaya",
        graduate: "2016",
    },
    {
        name: "Universitas Maju",
        city: "Tanggerang",
    },
];

const secondUserFavRestaurant = new Set();
secondUserFavRestaurant.add("Tempura");
secondUserFavRestaurant.add("Bento");
secondUserFavRestaurant.add("Sushi");
secondUserFavRestaurant.add("Pancake");
secondUserFavRestaurant.add("Padang");
secondUserFavRestaurant.add("Katsu");
secondUserFavRestaurant.add("Geprek");
secondUserFavRestaurant.add("Pancake");
secondUserFavRestaurant.add("Eggy");
const newSecondFavRestaurant = [...secondUserFavRestaurant];

secondUser.favoriteRestaurant = newSecondFavRestaurant;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users,
};