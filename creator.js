const fs = require("fs");
const path = "./tour-single.html";

let Data = {
  title: "9 Days Cairo, Giza, Luxor, Aswan, and Hurghada Tour",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "9 days",
  des: "Embark on a captivating journey through Egypt with our 9-day tour package. This fully guided tour offers a perfect blend of history, culture, and adventure, featuring luxury Nile cruises, iconic temples, and the serene beaches of Hurghada. Perfect for families and groups, our tours are tailored to provide an unforgettable Egyptian experience.",
  reviews: "222 Reviews",
  priceSale: "$988",
  priceOriginal: "$988",
  rating: 5,
  tourPlans: [
    {
      title: "Day 1: Cairo Arrival",
      des: "Unwind with an overnight stay in Cairo. Meals: No meals included.",
    },
    {
      title: "Day 2: Explore the Pyramids",
      des: "Guided tour of the awe-inspiring Pyramids of Giza. Meals: Breakfast included. Overnight: Cairo.",
    },
    {
      title: "Day 3: Fly to Aswan",
      des: "Explore Aswan and start your Nile cruise. Meals: Breakfast, Lunch, Dinner included. Overnight: Nile Cruise.",
    },
    {
      title: "Day 4: Nile Cruise Adventure",
      des: "Visit Edfu and Kom Ombo Temples. Meals: Breakfast, Lunch, Dinner included. Overnight: Nile Cruise in Edfu.",
    },
    {
      title: "Day 5: Journey to Luxor",
      des: "Explore Edfu Temple and Luxor Temple. Meals: Breakfast, Lunch, Dinner included. Overnight: Nile Cruise in Luxor.",
    },
    {
      title: "Day 6: Luxor to Hurghada",
      des: "Visit West Bank and Karnak Temple, bus transfer to Hurghada. Meals: Breakfast, Lunch, Dinner included. Overnight: Hurghada.",
    },
    {
      title: "Day 7: Hurghada Red Sea Bliss",
      des: "Relax and snorkel in Hurghada. Meals: Breakfast, Lunch, Dinner included. Overnight: Hurghada.",
    },
    {
      title: "Day 8: Return to Cairo",
      des: "Bus journey to Cairo (Flight upgrade available). Meals: Breakfast included. Overnight: Cairo.",
    },
    {
      title: "Day 9: Departure",
      des: "End your journey in Cairo. Meals: Breakfast included.",
    },
  ],

  included: [
    "Accommodation: 3 nights in Cairo, 3 nights on a Nile Cruise, 2 nights in Hurghada",
    "Meals: 8 breakfasts, 5 lunches, 5 dinners",
    "Guided Tours: Expert Egyptologist guides in English, French, and Spanish for Pyramids, Aswan, Kom Ombo, Edfu, and Luxor tours",
    "Transport: A/C Vans for tours and excursions, bus from Luxor to Hurghada, bus from Hurghada to Cairo, domestic flight from Cairo to Aswan",
    "Additional Services: Free airport meet and greet transfer",
  ],

  excluded: [
    "Flights: International flights before and after the tour.",
    "Insurance: Travel insurance is mandatory.",
    "Optional Experiences: Available at an additional cost (see below for details).",
    "Egypt Visa: USD 25 per passport.",
    "Tipping: Recommended.",
    "Entrance Fees: Approximately USD 125 for the main tour.",
    "Personal Expenses: Laundry, sauna, telephones, etc.",
    "Drinks: Not included in meals.",
    "New Year/ Xmas Dinners: If applicable.",
    "SIM Card: Available for purchase at Cairo International Airport.",
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

  const newPath = `./${newFileName}.html`;

  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
