const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "2 Days Aswan and Abu Simbel Trip from Soma Bay",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a 2-day journey from Soma Bay to the legendary lands of Southern Egypt, shedding light on the extraordinary heritage of ancient Egyptian civilization. With Marvelous Egypt Travel, the best travel agency in Egypt, guests will enjoy excellent service, including a private A/C vehicle and a professional tour guide. This tour covers distant destinations and showcases wonders created with pure skill and beauty for honoring religious beliefs. Visit the beautiful Philae Temple, the High Dam, the Unfinished Obelisk, and the legendary Two Temples of Abu Simbel. Book this magical two-day tour from Soma Bay to Aswan & Abu Simbel and witness the enchanting constructions of ancient Egypt.`,
    reviews: "315 Reviews",
    priceSale: "$220",
    priceOriginal: "$220",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1 Aswan",
        des: `
Pick-Up and Transfer:

Pick up from your hotel by a private modern A.C car to catch a 1st class train to Aswan. Upon arrival, meet your private professional tour guide and begin your tour:
Visit the Aswan High Dam:

Built in the 1960s and 1970s, the Aswan High Dam is one of the largest embankment dams in the world. It plays a crucial role in the economy and culture of Egypt.
Explore the Unfinished Obelisk:

This is the largest known obelisk from ancient Egypt, commissioned by Queen Hatshepsut (1508-1458 BC). The obelisk showcases the carving techniques of the ancient Egyptians and is now an open-air museum.
Lunch Time:

Enjoy lunch at a local restaurant in Aswan.
Discover Philae Temple:

Dedicated to the goddess Isis, Philae Temple was built in 280 BC during the reign of Ptolemy II. It was relocated to Agilkia Island by UNESCO to save it from the rising waters of the Nile.
Check-in:

Transfer to a 5-star hotel in Aswan for an overnight stay.
Meals:

Lunch.
Overnight:

Aswan Hotel.
`,
      },
      {
        title: "Day 2 Abu Simbel",
        des: `
Early Morning:

Enjoy breakfast as you prepare for an early start.
Visit the Abu Simbel Temples:

These temples are part of the UNESCO World Heritage Site known as the "Nubian Monuments." The temples, built by Pharaoh Ramses the Great in 1200 BC, honor Ptah, Amun, Ra, and commemorate Ramses' victory at the Battle of Kadesh and his devotion to Queen Nefertari.
Lunch Time:

Return to Aswan for lunch at a local restaurant.
Evening:

Catch a train to Luxor, then transfer by a private car to your hotel in Soma Bay, concluding your two-day trip from Soma Bay to Aswan and Abu Simbel.
Meals:

Breakfast, Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Soma Bay and return. ",
      "2 lunch meals in Aswan. ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights. ",
      "One-night accommodation in Aswan at a 5-star Hotel. ",
      "Train tickets from Luxor to Aswan and return. ",
      "Mineral water and soft drinks onboard the vehicle.",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
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

  const newPath = `./Egypt-Day-Tours-Soma-Bay-Excursions/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
