const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "Overnight Trip to Cairo and Luxor from Sharm by Flight",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "2 days",
  des: `Embark on a majestic two-day tour from Sharm El Sheikh to Cairo and Luxor by flight. Witness the timeless wonders of ancient Egypt, exploring Cairo’s Giza Pyramids and Egyptian Museum, followed by Luxor’s Karnak Temple, Valley of the Kings, and Hatshepsut Temple. Marvelous Egypt Travel, the best travel agency in Egypt, ensures top-notch service with experienced Egyptologist guides and private air-conditioned vehicles. Book this incredible excursion to live the adventure of your wildest dreams.`,
  reviews: "360 Reviews",
  priceSale: "$840",
  priceOriginal: "$840",
  rating: 5,
  tourPlans: [
    {
      title: "Day 1 Cairo",
      des: `
Pick-Up and Transfer:

Your representative will pick you up from your hotel in Sharm El Sheikh in a private air-conditioned vehicle for your flight to Cairo. Upon arrival, meet your Egyptologist guide to explore Cairo's attractions.
Arrival in Cairo:

Upon arrival at Cairo airport, meet your private tour guide who will accompany you throughout the day.
Explore the Giza Pyramids Complex:

Discover the colossal art of the ancient Egyptians, including the three main pyramids, six little pyramids, the Great Sphinx, and the Valley Temple.
The Great Pyramid:

Marvel at the Great Pyramid of Pharaoh Khufu, the last surviving wonder of the ancient world, standing tall at 147 meters with its intricate chambers.
The Great Sphinx:

Gaze upon the Great Sphinx, a magnificent limestone statue with the body of a lion and the head of Pharaoh Khafre, symbolizing wisdom and power.
The Valley Temple:

Visit the Valley Temple, a mortuary temple used for the mummification process of 4th dynasty pharaohs before their burial in the pyramids.
Discover the Grand Egyptian Museum:

Explore the latest addition to Egypt's rich cultural heritage, home to a vast collection of artifacts, including the Hanging Obelisk, the King Ramses II Statue, the 10 Statues of King Senusert, and more. (Note: A VIP ticket is available for additional access to exclusive artifacts.)
Lunch at a Pyramid/Nile View Restaurant:

Enjoy a delightful lunch with stunning views of the Pyramids or the Nile.
Visit the Egyptian Museum:

Tour the historic Egyptian Museum, showcasing an extensive collection of ancient Egyptian artifacts, located in the heart of Cairo since 1901 AD.
Transfer to Cairo Airport:

You will be driven to Cairo Airport for your flight to Luxor. Upon arrival, transfer to a 5-star hotel for an overnight stay.
Meals:

Lunch.
Overnight:

Luxor Hotel.
Flight:

From Sharm to Cairo and From Cairo to Luxor.
`,
    },
    {
      title: "Day 2 Luxor",
      des: `
Morning:

Enjoy breakfast at your hotel, then your representative will pick you up from your hotel in a private air-conditioned vehicle to explore Luxor's attractions.
Explore the Valley of the Kings:

This sacred site on the west bank of the Nile opposite Luxor is a golden history book buried deep within a sacred hill. Home to 63 royal tombs of the greatest Pharaohs of the 18th, 19th, and 20th dynasties of the New Kingdom (1570–1050 BC), including Ramses II, Hatshepsut, Seti I, and Tutankhamen. The valley gained global fame with the discovery of Tutankhamen's tomb, making it one of the most famous archaeological sites on earth. It was declared a World Heritage Site in 1979, along with the entire Theban Necropolis.
Visit Hatshepsut Temple:

This beautiful temple, known as the "Holy of Holies," was constructed over 15 years on the golden rock hills of Deir El Bahari in 1479 BC. Built to honor the sun god Amun and immortalize the legacy of Queen Hatshepsut, one of the most successful pharaohs in ancient Egyptian history, it is the most preserved example of classical ancient Egyptian architecture.
Admire the Colossi of Memnon:

These two grand statues of Pharaoh Amenhotep III (1386 - 1349 BC) were built in 1350 BC to guard the entrance of his long-faded temple. The statues underwent numerous renovations and became known for their Vocal Phenomenon at dawn during the Greco-Roman period. The Colossi are adorned with mystical decorations depicting Amenhotep III's history, family, and the Nile god Hapi.
Lunch Time:

Enjoy a delicious lunch on an island, accompanied by a scenic boat trip on the Nile River. After lunch, you will continue your guided tour to visit:
Discover Karnak Temple:

This colossal temple complex, covering 247 acres, was built between 2000 BC and 30 BC during the Middle Kingdom to the Greco-Roman period. It served as the main religious center for worshipping the Theban triad of Amun, Mut, and Khonsu for over 1500 years. The complex features the Avenue of Sphinxes, the grand Hypostyle Hall, and numerous carvings, paintings, and shrines dedicated to various gods.
Explore Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Transfer:

Transfer to Luxor airport for your flight to Cairo, then catch your direct flight back to Sharm El Sheikh. Upon arrival, your representative will transfer you to your hotel in Sharm.
Meals:

Breakfast, Lunch.
Flight:

From Luxor to Cairo and From Cairo to Sharm.
`,
    },
  ],
  included: [
    "Pick-up service from your hotel in Sharm El Sheikh and return. ",
    "Domestic flight tickets from Sharm to Cairo/ Cairo to Luxor/ Luxor to Cairo/ Cairo to Sharm. ",
    "All transfers by a private modern air-conditioned vehicle. ",
    "Private Egyptologist guide during your tour. ",
    "Entrance fees to all the mentioned sights. ",
    "One night accommodation at a 5-star hotel in Luxor. ",
    "2 Lunch meals during tours in Cairo and Luxor. ",
    "Mineral water and soft drinks onboard the vehicle. ",
    "All service charges and taxes. ",
  ],
  excluded: [
    "Any extras not mentioned in the program. ",
    "Tipping",
    "Optional Experiences available at an additional cost.",
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

  const newPath = `./Egypt-Day-Tours-Sharm-Elshekh-Excustions/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
