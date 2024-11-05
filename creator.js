const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "Two Days Trip to Cairo and Luxor from Sokhna Port",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "2 days",
  des: `Experience the golden legacy of ancient Egyptian civilization with our 2-day trip to Cairo and Luxor from Sokhna Port. With Marvelous Egypt Travel, expect exceptional services, including a private air-conditioned vehicle and a professional Egyptologist tour guide. This adventure covers the finest and most famous tourist attractions in Cairo and Luxor, including the Karnak Temple, the Valley of the Kings, Queen Hatshepsut’s Temple in Luxor, the Giza Pyramids, the Great Sphinx, and the Egyptian Museum in Cairo. Book this incredible two-day adventure and explore the magical wonders of Egypt.`,
  reviews: "465 Reviews",
  priceSale: "$430",
  priceOriginal: "$430",
  rating: 5,
  tourPlans: [
    {
      title: "Day 1 Luxor",
      des: `
Pickup from Sokhna Port:

Our representative will pick you up from your Cruise in Sokhna Port and transfer you to Cairo airport to fly to Luxor. Upon arrival at Luxor, you'll meet your tour guide and a private air-conditioned vehicle.
Valley of the Kings:

Discover the hidden artistic architecture in the underground Valley of the Kings with 63 royal tombs from the New Kingdom (1570 – 1050 BC).
Hatshepsut Temple:

Explore the holy temple of Queen Hatshepsut (1507–1458 BC), showcasing her legacy as one of Egypt's most successful rulers.
Colossi of Memnon:

Visit the colossal statues of Pharaoh Amenhotep III (1386 - 1349 BC) known for their incredible vocal sounds during the Greco-Roman Period.
Lunch Time:

Enjoy lunch on an island, including a boat trip on the Nile River.
Karnak Temple:

Visit the Karnak Temple Complex, the largest religious capital on earth, honoring the Theban triad of Amun, Mut, and Khonsu.
Luxor Temple:

Luxor Temple is a majestic temple complex located on the east bank of the Nile River. Built around 1400 BC, it was dedicated to the rejuvenation of kingship and was constructed by Amenhotep III and completed by Tutankhamun and Horemheb. The temple features massive pylons, a grand colonnade, and numerous statues and carvings, showcasing the grandeur of ancient Egyptian architecture and art.
Overnight:

Transfer to a 5-star hotel for the overnight stay.
Meals:

Lunch.
Flight:

From Cairo to Luxor.
Overnight:

Luxor Hotel.
`,
    },
    {
      title: "Day 2 Cairo",
      des: `
Breakfast and Checkout:

After breakfast, check-out from the hotel and catch the flight to Cairo.
Giza Pyramids Complex:

Visit the Giza Pyramids complex, built by the kings of the 4th dynasty during the Old Kingdom (2686 – 2134 BC).
The Great Pyramid:

Marvel at the Great Pyramid of Giza, built for Pharaoh Khufu (2609 BC - 2584 BC), standing 147 meters tall.
The Great Sphinx:

Admire the Great Sphinx, a symbol of Pharaoh Khafre (2558 BC - 2532 BC), with the body of a lion and the face of Khafre.
The Valley Temple:

Explore the Valley Temple, a granite mortuary temple from the 4th dynasty used for the mummification process.
The Grand Egyptian Museum:

Discover ancient Egyptian creations at the Grand Egyptian Museum, featuring artifacts like the Hanging Obelisk and King Ramses II Statue.
Lunch Time:

Lunch will be served at a Pyramids/Nile view restaurant.
The Egyptian Museum:

Visit the Egyptian Museum in Cairo, showcasing some of the greatest monuments and artifacts from ancient Egypt.
Return to Sokhna Port:

In the evening, transfer back to Sokhna Port by a private air-conditioned vehicle.
Meals:

Breakfast, Lunch.
Flight:

From Luxor to Cairo.
`,
    },
  ],
  included: [
    "Pick up from your cruise exit at Sokhna Port and return. ",
    "All transfers by a private modern A/C vehicle.",
    "Private Egyptologist guide during the 2-day tours. ",
    "One Night Accommodation in Luxor at 5-star Hotel. ",
    "Flight tickets from Cairo to Luxor and return. ",
    "2 Lunch meals during your tours. ",
    "Mineral water on board the vehicles during the tours.",
    "Entrance fees for all sightseeing are mentioned. ",
    "All service charges and taxes. ",
  ],
  excluded: [
    "Tipping",
    "Any extras not mentioned in the itinerary. ",
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

  const newPath = `./Egypt-Shore-Excursion-safaga/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
