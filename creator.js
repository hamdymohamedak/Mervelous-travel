const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "Port Ghalib to Luxor and Abu Simbel in Two Days",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "2 days",
  des: `Experience the ultimate chance to witness the greatest archaeological wonders on earth with this special two-day tour from Port Ghalib to Luxor and Abu Simbel. Marvelous Egypt Travel, the best travel agency in Egypt, provides ideal services including a private A/C Vehicle, relaxing accommodations, and a skilled Egyptologist tour guide. Uncover the mystical secrets of ancient Egyptian culture through visits to the Karnak Temple complex, the Valley of the Kings, Hatshepsut Temple, and the majestic Abu Simbel Temples. Book your ticket to ancient times and live the wonders of ancient history.`,
  reviews: "456 Reviews",
  priceSale: "$250",
  priceOriginal: "$250",
  rating: 5,
  tourPlans: [
    {
      title: "Day 1 Luxor",
      des: `
Pick-Up and Transfer:

Pickup from your hotel in Port Ghalib by an A/C vehicle to Luxor.
Explore the Valley of the Kings:

This sacred site on the west bank of the Nile opposite Luxor is a golden history book buried deep within a sacred hill. Home to 63 royal tombs of the greatest Pharaohs of the 18th, 19th, and 20th dynasties of the New Kingdom (1570–1050 BC), including Ramses II, Hatshepsut, Seti I, and Tutankhamen. The valley gained global fame with the discovery of Tutankhamen's tomb, making it one of the most famous archaeological sites on earth. It was declared a World Heritage Site in 1979, along with the entire Theban Necropolis.
Visit Hatshepsut Temple:

This beautiful temple, known as the "Holy of Holies," was constructed over 15 years on the golden rock hills of Deir El Bahari in 1479 BC. Built to honor the sun god Amun and immortalize the legacy of Queen Hatshepsut, one of the most successful pharaohs in ancient Egyptian history, it is the most preserved example of classical ancient Egyptian architecture.
Admire the Colossi of Memnon:

These two grand statues of Pharaoh Amenhotep III (1386 - 1349 BC) were built in 1350 BC to guard the entrance of his long-faded temple. The statues underwent numerous renovations and became known for their Vocal Phenomenon at dawn during the Greco-Roman period. The Colossi are adorned with mystical decorations depicting Amenhotep III's history, family, and the Nile god Hapi.
Lunch Time:

Enjoy a meal at an oriental Nile view restaurant.
Discover Karnak Temple:

This colossal temple complex, covering 247 acres, was built between 2000 BC and 30 BC during the Middle Kingdom to the Greco-Roman period. It served as the main religious center for worshipping the Theban triad of Amun, Mut, and Khonsu for over 1500 years. The complex features the Avenue of Sphinxes, the grand Hypostyle Hall, and numerous carvings, paintings, and shrines dedicated to various gods.
Explore Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Evening:

Transfer to the train station to catch the 1st class train to Aswan. Upon arrival, transfer to your hotel in Aswan for the overnight stay.
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
Afternoon:

Catch the train back to Luxor and then drive back to your hotel in Port Ghalib, concluding your two-day tour.
Meals:

Breakfast, Lunch.
`,
    },
  ],
  included: [
    "1st class train tickets from Luxor to Aswan and return. ",
    "1-night accommodation at a 5-star hotel in Aswan. ",
    "All transfers by a private modern air-conditioned vehicle. ",
    "Private Egyptologist guide during your tour. ",
    "Entrance fees to all the mentioned sights.",
    "Bottled water during your trip. ",
    "Pickup services from your hotel and return. ",
    "Two lunch meals. ",
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

  const newPath = `./Egypt-Day-Tours-Port-Ghalib-Excursions/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
