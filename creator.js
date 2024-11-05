const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "2 Days Aswan and Abu Simbel Tour from Hurghada",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "1 days",
  des: `

2 Days Aswan and Abu Simbel tour from Hurghada is a magical voyage showcasing the wonders of the blessed city of Aswan. Marvelous Egypt Travel, the best travel agency in Egypt, will ensure all our guests enjoy the most efficient and relaxing service of a private A/C vehicle and a professional tour guide during their exploration tour in the mythical city of Aswan.

Book this amazing holiday and discover the golden legacy and wealth of southern Egypt.
`,
  reviews: "123 Reviews",
  priceSale: "$175",
  priceOriginal: "$175",
  rating: 5,
  tourPlans: [
    {
      title: "Day 1",
      des: `
Morning:

We will pick you up from your hotel by a modern private A.C car to Luxor to catch the 1st class train to Aswan. Upon arrival at the Nubia country, you will join your private Egyptologist tour guide to visit Aswan tourist attractions starting at:
The High Dam:

The marvelous High Dam of Aswan came into being during the 60s and 70s to offer a new way of life by producing electricity and saving power.
The Unfinished Obelisk:

The enlightening Unfinished Obelisk was initiated by Queen Hatshepsut (1508-1458 BC) to stand as a symbol of power and grace at the golden entrance of the Karnak temples complex. It now stands at the great open-air museum displaying the skill of ancient Egyptian carvers and craftsmen.
Philae Temple:

The legendary Philae Temple is a celestial open book made of holy stone narrating the everlasting story of the “Myth of Osiris.” It was built as the last example of ancient Egyptian architecture in 280 BC through an order from King Ptolemy II. The temple was part of a rescue operation in the mid-60s and 70s known as the UNESCO Nubia Campaign project which relocated the temple to Agilkia Island where it is found today.
Lunch:

You will have your lunch at a local restaurant and check in at the 5* hotel in Aswan to spend the night.
Meals:

Lunch.
Overnight:

Aswan Hotel.
`,
    },
    {
      title: "Day 2",
      des: `
Morning:

After breakfast, you will check out from the hotel, then you will join your private tour guide to visit:
Abu Simbel Temples:

The two temples of Abu Simbel are among the most magnificent monuments in the world. They were built by Ramses II, and their significance and grandeur are unparalleled. The great temple was dedicated to Ramses II himself, while the smaller temple was dedicated to his beloved wife, Queen Nefertari.
Lunch:

You will enjoy a lunch meal at a local restaurant.
Evening:

Return to Aswan, catch the train to Luxor, and transfer by a private A.C car to Hurghada.
Meals:

Breakfast, Lunch.
`,
    },
  ],
  included: [
    "Pick up service from your hotel in Hurghada and return.",
    "Egyptologist tour guide during the tour. ",
    "Entrance fees to the mentioned historical places.",
    "All transfers by a modern air-conditioned vehicle.",
    "Mineral water on board your vehicle. ",
    "One-night accommodation in Aswan at a 5-star Hotel.",
    "1 Breakfast, and 2 Lunch meals in Aswan",
    "All service charges and taxes.",
  ],
  excluded: [
    "Any extras not mentioned in the program. ",
    "Tipping. ",
    "Optional Experiences available at an additional cost. ",
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

  const newPath = `./Egypt-Day-Tours-Hurghada-Excursions/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
