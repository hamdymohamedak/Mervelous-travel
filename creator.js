const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "2 Days Tour to Cairo and Luxor from Alexandria Port",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "2 days",
  des: `Experience the splendor of ancient Egypt with a breathtaking 2-day tour from Alexandria Port to Cairo and Luxor. This journey will take you through the rich history of Egypt’s greatest civilizations, featuring iconic landmarks and treasures. With Marvelous Egypt Travel’s top-notch services, including private transfers, expert Egyptologist guides, and luxurious accommodations, you’ll explore the wonders of Cairo and Luxor in comfort and style.`,
  reviews: "413 Reviews",
  priceSale: "$410",
  priceOriginal: "$410",
  rating: 5,
  tourPlans: [
    {
      title: "Alexandria Port to Luxor",
      des: ` Pickup from Alexandria Port:

Our representative will meet you at Alexandria Port and transfer you to Cairo airport for your flight to Luxor.
Arrival in Luxor:

Upon arrival, meet your guide and transfer to your first destination.
Valley of the Kings:

Discover the Valley of the Kings, a royal necropolis containing the tombs of ancient Egyptian pharaohs, including Ramses II and Tutankhamun. Marvel at the intricate tomb paintings and golden treasures.
Hatshepsut Temple:

Visit the impressive Temple of Queen Hatshepsut, a stunning architectural marvel dedicated to one of Egypt’s most powerful female rulers.
Colossi of Memnon:

See the Colossi of Memnon, two enormous statues of Pharaoh Amenhotep III, which have stood for centuries as guardians of the ancient city.
Lunch:

Enjoy lunch on a boat on the Nile River, offering a unique dining experience.
Karnak Temple:

Explore the Karnak Temple Complex, an expansive religious site dedicated to the gods Amun, Mut, and Khonsu. Admire the grandeur of the Hypostyle Hall and the Avenue of Sphinxes.
Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Overnight:

Check-in to a 5-star hotel in Luxor for an overnight stay.
Meals:

Lunch.`,
    },
    {
      title: "Luxor to Cairo",
      des: ` Breakfast:

Enjoy breakfast at your hotel, then check out and fly from Luxor to Cairo.
Giza Pyramids Complex:

Begin your tour by visiting the cosmic Giza Pyramids complex, an angelic embrace containing the ancient legacy and eternal wonders of the ancient Egyptian civilization during the Old Kingdom (2686-2134 BC), which includes:
The Great Pyramid:

The Grand Pyramid of King Khufu (2609 BC - 2584 BC) is a beacon of divinity and enlightenment, designed by Hemiunu. Standing 147 meters tall, it was constructed using 2.3 million limestone blocks, making up a total weight of six million tons. The pyramid contains several chambers, including the King’s Chamber, the Grand Hall, and the Queen’s Chamber.
The Great Sphinx:

The Mythical Sphinx is a masterpiece of divine art and architecture, showcasing the power and wisdom of Pharaoh Khafre (2558-2532 BC). Between its legs lies an extraordinary dream stele.
The Valley Temple:

This sacred temple, built in 2600 BC, was used for the mummification process of the kings and queens of the Old Kingdom, guiding them to the heavens.
The Grand Egyptian Museum

Explore the Grand Egyptian Museum, a golden portal to the ancient Egyptian creations cultivated over 5000 years of continuous innovation and vivid artistic imagination. Discover some of the greatest archaeological monuments and artifacts ever made, including the Hanging Obelisk, King Ramses II Statue, the 10 Statues of King Senusert, the Grand Staircase, statues of Ptolemaic Kings and Queens, the Victory Column of King Merneptah, the epic Royal Regalia, and the Grand Atrium and Gift Shop. For an enhanced experience, inquire about VIP tickets that offer access to additional artifacts.
Lunch Time:

Enjoy a delicious meal at a restaurant with views of the Pyramids or the Nile.
The Egyptian Museum:

Visit the extraordinary Egyptian Museum, a house of mythical and archaeological beauty constructed in 1901 in the heart of Cairo.
Return to Alexandria Port:

After your tour, transfer back to Alexandria Port by private air-conditioned vehicle.
Meals:

Breakfast, Lunch.`,
    },
  ],
  included: [
    "Pick-up and drop-off at Alexandria Port.",
    "All transfers by a private modern A/C vehicle",
    "Private Egyptologist guide during your journey",
    "One-night accommodation in Luxor at a 5-star hotel.",
    "Flight tickets from Cairo to Luxor and return",
    "Mineral water on board the vehicle",
    "2 Lunch, and 1 Breakfast meals. ",
    "Entrance fees for all sightseeing are mentioned",
    "All service charges and taxes",
  ],
  excluded: [
    "Tipping",
    "Any extras not mentioned in the itinerary. ",
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

  const newPath = `./Egypt-Shore-Excursions-Alexandria/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
