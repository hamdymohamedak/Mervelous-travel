const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "Overnight Tour to Cairo and Luxor from Port Said",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "2 days",
    des: `Embark on a heavenly 2-day journey exploring the timeless wonders of Cairo and Luxor. Marvel at ancient Egypt’s greatest monuments with exceptional service provided by Marvelous Egypt Travel, including a private Egyptologist guide and air-conditioned transportation.`,
    reviews: "165 Reviews",
    priceSale: "$410",
    priceOriginal: "$410",
    rating: 5,
    tourPlans: [
      {
        title: "Luxor’s Ancient Treasures",
        des: `
Pickup from Port Said:

Meet your guide at Port Said and transfer to Cairo Airport for your flight to Luxor.
Arrival in Luxor:

Upon arrival, be met by your guide and start your exploration with a private air-conditioned vehicle.
Valley of the Kings:

Discover the Valley of the Kings, an ancient burial site for the most influential pharaohs of the New Kingdom. Explore tombs filled with intricate decorations and treasures of renowned rulers like Ramses II, Hatshepsut, and Tutankhamun.
Hatshepsut Temple:

Visit the stunning Temple of Hatshepsut, a mortuary temple dedicated to one of Egypt’s most successful female pharaohs. Admire its unique architecture and learn about Hatshepsut’s reign.
Colossi of Memnon:

Marvel at the colossal statues of Amenhotep III, known as the Colossi of Memnon. These imposing figures once guarded his mortuary temple and now stand as silent sentinels.
Lunch:

Enjoy lunch on a Nile island with a scenic boat trip included.
Karnak Temple:

Explore the Karnak Temple Complex, the largest religious building ever constructed. Walk through the Avenue of Sphinxes and discover the grand halls and sanctuaries dedicated to the Theban triad of Amun, Mut, and Khonsu.
Overnight:

Check-in at a 5-star hotel in Luxor. Relax and enjoy dinner at your leisure.
Meals:

Lunch.
Flight:

Cairo to Luxor.
Overnight:

Luxor Hotel.
`,
      },
      {
        title: "Cairo’s Majestic Highlights",
        des: `
Breakfast:

Start your day with breakfast at the hotel in Luxor.
Flight to Cairo:

Check out and catch your flight back to Cairo.
Giza Pyramids Complex:

Begin your tour by visiting the cosmic Giza Pyramids complex, an angelic embrace containing the ancient legacy and eternal wonders of the ancient Egyptian civilization during the Old Kingdom (2686-2134 BC), which includes:
The Great Pyramid:

The Grand Pyramid of King Khufu (2609 BC - 2584 BC) is a beacon of divinity and enlightenment, designed by Hemiunu. Standing 147 meters tall, it was constructed using 2.3 million limestone blocks, making up a total weight of six million tons. The pyramid contains several chambers, including the King’s Chamber, the Grand Hall, and the Queen’s Chamber.
The Great Sphinx:

The Mythical Sphinx is a masterpiece of divine art and architecture, showcasing the power and wisdom of Pharaoh Khafre (2558-2532 BC). Between its legs lies an extraordinary dream stele.
The Valley Temple:

This sacred temple, built in 2600 BC, was used for the mummification process of the kings and queens of the Old Kingdom, guiding them to the heavens.
The Grand Egyptian Museum

Explore the Grand Egyptian Museum, a golden portal to the ancient Egyptian creations cultivated over 5000 years of continuous innovation and vivid artistic imagination. Discover some of the greatest archaeological monuments and artifacts ever made, including the Hanging Obelisk, King Ramses II Statue, the 10 Statues of King Senusert, the Grand Staircase, statues of Ptolemaic Kings and Queens, the Victory Column of King Merneptah, the epic Royal Regalia, and the Grand Atrium and Gift Shop. VIP tickets are available for access to additional artifacts; for more information, contact us.
Lunch:

Savor lunch at a restaurant with views of the Pyramids or the Nile.
The Egyptian Museum:

Visit the extraordinary Egyptian Museum, a house of mythical and archaeological beauty constructed in 1901 in the heart of Cairo.
Return to Port Said:

After a day of exploration, transfer back to Port Said by private vehicle.
Meals:

Breakfast, Lunch.
Flight:

Luxor to Cairo.
`,
      },
    ],
    included: [
      "Pick-up and drop-off from Port Said. ",
      "All transfers by a private modern A/C vehicle. ",
      "Private Egyptologist guide during your journey. ",
      "Mineral water on board the vehicle. ",
      "2 Lunches and 1 breakfast. ",
      "Entrance fees for all sightseeing are mentioned. ",
      "1 Night Accommodation in Luxor at a 5-star hotel. ",
      "Flights from Cairo to Luxor and return. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Tipping",
      "Any extras not mentioned in the itinerary. ",
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

  const newPath = `./Egypt-Shore-Excursion-Said/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
