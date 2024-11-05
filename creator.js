const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "Day Trip to Islamic Cairo",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "1 days",
  des: `A day trip to Islamic Cairo is a divine voyage showcasing the golden glory of the greatest civilization on earth. Marvelous Egypt Travel will provide all our clients with the most ideal services, including a private A/C vehicle and a professional Egyptologist tour guide, as expected from the best travel agency in Egypt. All our clients will witness the beauty and greatness of the best Islamic Cairo attractions. Join us on a fabulous day trip to Islamic Cairo. Your expert tour guide will take you to explore Khan El Khalili bazaar, Salah El-Din Citadel, Sultan Hassan and Ibn Tulun Mosques, and many more Old Cairo masterpieces by a deluxe air-conditioned car, then transfer you back to your hotel. Book this blessed excursion and explore all the immortal treasures of Islamic Cairo.`,
  reviews: "123 Reviews",
  priceSale: "$40",
  priceOriginal: "$40",
  rating: 5,
  tourPlans: [
    {
      title: "Day Trip to Islamic Cairo",
      des: `
Morning:

We will pick you up from your hotel in Cairo to join our professional tour guide in a private air-conditioned vehicle to visit the best historical highlights of Islamic Cairo.
Salah El Din Citadel:

Salah El-Din Citadel is one of the most prestigious military castles constructed in the Middle Ages. Its strategic location controls the cities of Cairo and Al Fustat, providing defensive importance. The Citadel was erected during the 12th century to defend Cairo against the Crusaders and served as the seat of the government during the ruling periods of the Ayyubids, Mamluks, and Ottomans.
Mohamed Ali Mosque:

Mohamed Ali Mosque proudly stands as the highest point inside Cairo Citadel. It was established by Mohammed Ali Pasha in 1830 AD, with construction continuing until his death in 1848 AD. The exterior design was inspired by the Sultan Ahmad Mosque in Istanbul, and it is one of the most significant Islamic attractions in Cairo.
Lunch Time:

Enjoy a lunch meal at a local restaurant before continuing your day tour.
Sultan Hassan Madrassa and Mosque:

Sultan Hassan Madrassa and Mosque is one of the rarest examples of early Mamluk architecture, founded between 1356 AD and 1363 AD. Built out of giant blocks of stone, it symbolizes the culmination of architectural projects during the Mamluk reign.
Al Rifai Mosque:

Another impressive Islamic monument in Cairo, Al Rifai Mosque, was founded by Khoshiar Hanim, the mother of Khedive Ismail. Construction began in 1869 AD and was completed in 1911 AD, with a 25-year hiatus from 1880 to 1905 AD. The mosque serves as the burial site for Mohamed Ali's family members.
Ibn Tulun Mosque:

The oldest and largest mosque in Cairo, Ibn Tulun Mosque, was established between 876 and 879 AD by Ahmed Ibn Tulun, commissioned by the Abbasid Caliph to govern Al Fustat. The mosque's interior design reflects the Abbasid architectural style, featuring beautifully decorated arches and a large courtyard.
Al Muizz Street:

Al Muizz Street provides a magical journey through Cairo's living miracles. This attractive cultural marvel showcases the golden street of Cairo, which dates back to the Fatimid period in the 10th century AD. It is a golden labyrinth filled with incredible monuments, artifacts, and houses.
Khan El Khalili Bazaar:

Khan El Khalili Bazaar is an ancient renowned souk in central Cairo, founded as a large trade center during the Mamluk reign. Dating back to the 14th century, the bazaar is filled with cafes and restaurants, including El Fishawy, the city's oldest café.
Afternoon:

Finally, we will drive you back to your hotel to end your day trip.
`,
    },
  ],
  included: [
    "The service of pick-up from your hotel and return. ",
    "Egyptologist tour guide during the tours",
    "A deluxe private air-conditioned vehicle throughout your trip",
    "Admission fees to all the sights listed in the itinerary.",
    "Lunch meal",
    "Bottled water on the vehicle",
    "All service charges and taxes. ",
  ],
  excluded: [
    "Any extras not mentioned in the program",
    "Tipping",
    "Optional Experiences available at an additional cost",
  ],
};

fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  let updatedData = data
    .replace(
      /<h2 class="title">Tour Title<\/h2>/g,
      `<h2 class="title">${Data.title}</h2>`
    )
    .replace(
      /<span>Max Guests: <\/span>\s*/g,
      `<span>Max Guests: ${Data.maxGuests}</span>`
    )
    .replace(
      /<span>Location<\/span>\s*/g,
      `<span>Location: ${Data.location}</span>`
    )
    .replace(
      /<span class="review">\(Review\)<\/span>\s*/g,
      `<span class="review">(${Data.reviews})</span>`
    )
    .replace(
      /\$Sale Price\s*<span class="price">\$Original Price<\/span>\s*<!-- سيتم تغيير هذا -->/g,
      `${Data.priceOriginal} <span class="price">${Data.priceSale}</span>`
    )
    .replace(/<p class="des">[^<]*<\/p>/, `<p class="des">${Data.des}</p>`)
    // Replace Included Items
    .replace(
      /<div id="Included" class="col-md-6">[\s\S]*?<\/ul>/,
      `<div id="Included" class="col-md-6">
      <ul class="listing-clude">
        ${Data.included
          .map(
            (item) => `
            <li class="flex-three">
              <i class="icon-Vector-7"></i>
              <p>${item}</p>
            </li>`
          )
          .join("")}
      </ul>`
    )
    // Replace Excluded Items
    .replace(
      /<div id="excluded" class="col-md-6">[\s\S]*?<\/ul>/,
      `<div id="excluded" class="col-md-6">
      <ul class="listing-clude">
        ${Data.excluded
          .map(
            (item) => `
            <li class="flex-three">
              <img style="height: 1.3rem; width: auto; margin-right: 1rem;" src="./assets/images/confidence_icons/Wrong.png" alt="Not Excluded">
              <p>${item}</p>
            </li>`
          )
          .join("")}
      </ul>`
    )
    .replace(
      /<div class="tour-planing-section flex">\s*<div class="number-box flex-five">01<\/div>\s*<div class="content-box flex-grow-1">\s*<h5 class="title">\s*Day 1: Arrival and Nile Dinner Cruise\s*<\/h5>\s*<p class="des">\s*Arrive at Cairo International Airport where\s*you'll be greeted by our team and\s*transferred to your hotel. Enjoy the rest of\s*the day at leisure before a welcome dinner\s*at a local restaurant.\s*<\/p>\s*<\/div>\s*<\/div>/,
      `<div class="col-lg-8">
            <div class="planing-content-tour">
                <div style="display: flex; flex-direction: column;" id="tour_planing" class="tour-planing-section flex">
                    ${Data.tourPlans
                      .map(
                        (plan, index) => `
                        <div class="tour-planing-section flex">
                            <div class="number-box flex-five">${String(
                              index + 1
                            ).padStart(2, "0")}</div>
                            <div class="content-box flex-grow-1">
                                <h5 class="title">${plan.title}</h5>
                                <p class="des">${plan.des
                                  .replace(/\s+/g, " ")
                                  .trim()}</p>
                            </div>
                        </div>
                        `
                      )
                      .join("")}
                </div>
            </div>
        </div>`
    )

    .replace(
      /<title>Marvelous \| Tour<\/title>/,
      `<title>Marvelous | ${Data.title}</title>`
    );

  // Define a new filename
  let newFileName = Data.title.replace(/ /g, "-"); // Replace all spaces with hyphens

  const newPath = `./Egypt-Day-Tours/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
