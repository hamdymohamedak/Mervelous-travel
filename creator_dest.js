const fs = require("fs");
const path = "./single-destination.html";

let Data = {
  title: "Sharm El Sheikh Adventure",
  intro: "Experience Egypt's Coastal Oasis",
  description: `Situated on the Sinai Peninsula along the Red Sea, Sharm El Sheikh is one of Egypt’s premier destinations for relaxation, adventure, and stunning natural beauty. Known for its clear blue waters, colorful coral reefs, and vibrant marine life, Sharm El Sheikh is a paradise for divers and snorkelers from around the world. Beyond the beach, this resort town offers a unique blend of luxury, culture, and adventure.

Visitors can explore Ras Mohammed National Park, a protected area renowned for its extraordinary coral reefs, or take a thrilling desert safari by quad bike. At night, the bustling Naama Bay offers a lively scene with restaurants, cafes, and entertainment. Whether you seek underwater wonders, desert excursions, or relaxation by the sea, Sharm El Sheikh is a captivating destination that promises unforgettable experiences.`,
  images: [
      "./assets/images/Cairo_Images/img10.jpeg",
      "./assets/images/Cairo_Images/img (1).webp"
  ],
  cover_image: "./assets/images/sharm_cover_11zon.jpg",
  secoundDes: `Sharm El Sheikh, with its pristine waters and luxurious resorts, is a paradise for travelers seeking both excitement and relaxation. Known for its world-class diving spots and vibrant nightlife, Sharm El Sheikh seamlessly blends natural beauty with modern comfort.`,
  Municipalities: `Sharm El Sheikh offers an incredible range of experiences, from the marine life of the Red Sea to the scenic deserts of the Sinai Peninsula. Dive at the famous Blue Hole, visit the lively markets of Old Sharm, or unwind at the luxurious resorts along the coast. With its perfect mix of nature and adventure, Sharm El Sheikh is an essential stop for anyone exploring Egypt's coastal charm.`
}
fs.readFile(path, "utf8", (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }

    let updatedData = data
        .replace(
            /<h2 class="title">[^<]*<\/h2>/,
            `<h2 class="title">${Data.title}</h2>`
        )
        .replace(
            /<p class="des_intro">[^<]*<\/p>/,
            `<p class="des_intro">${Data.intro}</p>`
        )
        .replace(
            /<p class="des">[^<]*<\/p>/,
            `<p class="des">${Data.description}</p>`
        )
        .replace(
            /<img style="height: 20rem; width: auto; object-fit: cover" src="[^"]+" alt="image" \/>/,
            `<img style="height: 20rem; width: auto; object-fit: cover" src="${Data.images[0]}" alt="image" />`
        )
        .replace(
            /<img style="height: 20rem; width: auto; object-fit: cover" src="[^"]+" alt="image" \/>/,
            `<img style="height: 20rem; width: auto; object-fit: cover" src="${Data.images[1]}" alt="image" />`
        )
        .replace(
            /<p id="secoundDes" class="des mb-18">[^<]*<\/p>/,
            `<p id="secoundDes" class="des mb-18">${Data.secoundDes}</p>`
        )
        .replace(
            /<p id="MunicipalitiesDes" class="des mb-25">[^<]*<\/p>/,
            `<p id="MunicipalitiesDes" class="des mb-25">${Data.Municipalities}</p>`
        )
        .replace(
            /<title>Marvelous \| Tour<\/title>/,
            `<title>Marvelous | ${Data.title}</title>`
        );

    const newFileName = Data.title.replace(/ /g, "-"); // Replace spaces with hyphens
    const newPath = `./${newFileName}.html`;

    fs.writeFile(newPath, updatedData, "utf8", (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
            return;
        }
        console.log(`File has been saved as ${newPath}`);
    });
});
