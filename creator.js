const fs = require("fs");
const path = "./tour-single.html";

let Data = {
  title: "Cleopatra Egypt Tour Package",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "12 Days",
  des: "Embark on a luxurious 12-day journey through Egypt with Marvelous Egypt Travel. Immerse yourself in the ancient splendors and modern comforts of Egypt, guided by professional Egyptologists and transported in private, air-conditioned vehicles. This exceptional tour covers the most iconic landmarks from Cairo to Aswan, Luxor, and Hurghada",
  reviews: "188 Reviews",
  priceSale: "$1530",
  priceOriginal: "$1530",
  rating: 5,
  tourPlans: [
    {
      title: "Day 1: Arrival in Cairo",
      des: "Meet and assist at Cairo airport, transfer to Four Seasons 5-star luxury hotel in Cairo. Evening: Dinner cruise with belly dancing show and Tannoura spin. Overnight: Cairo Hotel. Meals: Dinner.",
    },
    {
      title: "Day 2: Cairo - Giza Pyramids and Saqqara",
      des: "Morning: Visit Giza Pyramids Complex, including the Great Pyramid, Great Sphinx, and Valley Temple. Afternoon: Explore the Grand Egyptian Museum, followed by lunch with views of the Pyramids or the Nile. Evening: Visit Saqqara Step Pyramid and Memphis City. Overnight: Cairo Hotel. Meals: Breakfast, Lunch.",
    },
    {
      title: "Day 3: Cairo - Islamic and Coptic Landmarks",
      des: "Morning: Visit the Egyptian Museum, Salah El Din Citadel, and Mohamed Ali Mosque. Afternoon: Lunch, visit the National Museum of Egyptian Civilization, Al Muizz Street, and Khan El Khalili Bazaar. Overnight: Cairo Hotel. Meals: Breakfast, Lunch.",
    },
    {
      title: "Day 4: Flight to Aswan - Nile Cruise Embarkation",
      des: "Morning: Flight to Aswan, visit Aswan High Dam, Unfinished Obelisk, and Philae Temple. Afternoon: Check-in on the luxury Nile cruise, with lunch and dinner on board. Overnight: Onboard the Cruise. Meals: Breakfast, Lunch, Dinner.",
    },
    {
      title: "Day 5: Abu Simbel Temples Excursion",
      des: "Early Morning: Private tour to Abu Simbel Temples. Afternoon: Return to the cruise, with lunch and dinner on board. Overnight: Onboard the Cruise. Meals: Breakfast, Lunch, Dinner.",
    },
    {
      title: "Day 6: Kom Ombo and Edfu Temples",
      des: "Morning: Sail to Kom Ombo, visit Kom Ombo Temple. Afternoon: Sail to Edfu, visit Edfu Temple, and continue sailing to Luxor. Overnight: Onboard the Cruise. Meals: Breakfast, Lunch, Dinner.",
    },
    {
      title: "Day 7: Luxor - West Bank",
      des: "Morning: Visit Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon. Afternoon: Lunch on board. Evening: Visit Luxor Temple. Overnight: Onboard the Cruise. Meals: Breakfast, Lunch, Dinner.",
    },
    {
      title: "Day 8: Luxor - East Bank",
      des: "Morning: Visit Karnak Temple, followed by check-in at a luxury hotel in Luxor. Afternoon: Lunch at a local restaurant. Overnight: Luxor Hotel. Meals: Breakfast, Lunch.",
    },
    {
      title: "Day 9: Hurghada - Red Sea Relaxation",
      des: "Morning: Transfer to Hurghada, check-in at a luxury resort. Afternoon: Leisure time at the beach or optional water activities. Overnight: Hurghada Hotel. Meals: Breakfast, Dinner.",
    },
    {
      title: "Day 10: Hurghada - Snorkeling Excursion",
      des: "Morning: Guided snorkeling excursion in the Red Sea. Afternoon: Return to the resort for leisure. Overnight: Hurghada Hotel. Meals: Breakfast, Lunch, Dinner.",
    },
    {
      title: "Day 11: Hurghada - Super Safari Adventure",
      des: "Morning: Super Safari tour including quad biking, Bedouin village visit, and traditional dinner. Afternoon: Return to the resort. Overnight: Hurghada Hotel. Meals: Breakfast, Lunch, Dinner.",
    },
    {
      title: "Day 12: Departure",
      des: "Morning: Breakfast, check-out from the hotel, and transfer to Hurghada airport for the flight to Cairo. Afternoon: Transfer to Cairo International Airport for departure. Meals: Breakfast.",
    },
  ],
  included: [
    "Accommodation: - Accommodation for 5 Nights in Cairo at a luxury hotel. - Accommodation for 3 Nights on a luxury Nile cruise. - Accommodation for 3 Nights in Hurghada at a luxury resort.",
    "Domestic Flight Tickets: (Cairo/ Aswan - Luxor/ Hurghada - Cairo)",
    "Meals: Meals as mentioned in the itinerary.",
    "Guided Tours: Expert Egyptologist guides in English, French, and Spanish throughout the journey.",
    "Entrance Fees: Entrance fees to all sites as indicated in the itinerary.",
    "Water and Soft Drinks: Water and soft drinks onboard the vehicles.",
    "Transport: All transfers by private air-conditioned vehicle.",
    "Additional Services: - Free airport meet and greet transfer. - Assistance from guest relations throughout the trip. - All service charges and taxes.",
  ],
  excluded: [
    "International Airfare: International flights before and after the tour.",
    "Insurance: Travel insurance is mandatory.",
    "Optional Experiences: Available at an additional cost.",
    "Egypt Visa: USD 25 per passport.",
    "Tipping: Recommended.",
    "Personal Expenses: Laundry, sauna, telephones, etc.",
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
