const fs = require("fs");
const path = "./tour-single.html";

let Data = {
  title:
  "9 Days Easter Giza, Cairo, Aswan, Kom Ombo, Edfu, Luxor and Alexandria Tour",
maxGuests: "Unlimited",
location: "Egypt",
left: "9 days",
des: `Embark on a 9-day Easter tour through the magical lands of Egypt, designed to immerse you in the ancient civilization’s wonders. With Marvelous Egypt Travel, you’ll enjoy professional services, including a private A/C Vehicle, a splendid Nile Cruise, luxurious accommodations, and expert Egyptologist tour guides. This tour will take you through the historic and cultural treasures of Cairo, Alexandria, Luxor, and Aswan, promising a vacation filled with awe and discovery.
Explore legendary sites such as the Giza Pyramids, Sphinx, Khan El Khalili Bazaar, Hanging Church, Ben Ezra Synagogue, Alexandria Library, Qaitbay Citadel, Catacombs of Alexandria, Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, Philae Temple, and the majestic temples of Abu Simbel.`,
reviews: "365 Reviews",
priceSale: "$1090",
priceOriginal: "$1362.5",
rating: 5,
tourPlans: [
  {
    title: "Welcome to Egypt",
    des: `
Experience:

Arrival at Cairo airport, assistance with passport formalities, and transfer to a 5-star hotel in Cairo. Enjoy evening dinner cruise overlooking the Nile.
Meals:

Dinner.
Overnight:

Cairo Hotel.
`,
  },
  {
    title: "Greet the Pharaohs at the Pyramids in Cairo",
    des: `
Experience:

Visit Giza Pyramids Complex, Great Pyramid, Great Sphinx, Valley Temple, and Grand Egyptian Museum. Enjoy lunch at a local restaurant followed by a visit to Saqqara Step Pyramid.
Meals:

Breakfast, Lunch.
Overnight:

Cairo Hotel.
`,
  },
  {
    title: "Spoil Yourself with Alexandria Attractions",
    des: `
Experience:

Travel to Alexandria to visit Catacombs of Kom El Shoqafa, Pompey’s Pillar, Qaitbay Citadel, and Alexandria Library. Then we will transfer you back to your hotel in Cairo to spend the overnight.
Meals:

Breakfast, Lunch.
Overnight:

Cairo Hotel.
`,
  },
  {
    title: "Nourish Your Soul with the Beauty of Aswan and the Nile",
    des: `
Experience:

Fly to Aswan, visit Aswan High Dam, Unfinished Obelisk, and Philae Temple. Check-in on a 5-star deluxe Nile cruise.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
  },
  {
    title: "Visit Kom Ombo Temple",
    des: `
Experience:

Explore Kom Ombo Temple and continue sailing north to Edfu.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
  },
  {
    title: "Discover the Artistic Details of Edfu Temple",
    des: `
Experience:

Visit Edfu Temple and sail to Luxor.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
  },
  {
    title: "Witness the Treasures of the Capital of the Pharaohs",
    des: `
Experience:

Visit Valley of the Kings, Hatshepsut Temple, Colossi of Memnon, and Karnak Temple. Check-in at a 5-star hotel in Luxor.
Meals:

Breakfast, Lunch.
Overnight:

Luxor Hotel.
`,
  },
  {
    title: "Explore the Hidden Gems of Old Cairo",
    des: `
Experience:

Fly back to Cairo, visit the Egyptian Museum, Amr Ibn Al Aas Mosque, Hanging Church, Ben Ezra Synagogue, National Museum of Egyptian Civilization, Al Muizz Street, and Khan El Khalili Bazaar.
Meals:

Breakfast, Lunch.
Overnight:

Cairo Hotel.
`,
  },
  {
    title: "End Your Easter Experience in Egypt",
    des: `
Experience:

Transfer to Cairo airport for departure.
Meals:

Breakfast.
`,
  },
],
included: [
  `Domestic Flights:Domestic flights between Cairo, Luxor, and Aswan.`,
  "Accommodation:Accommodation in 5-stars hotels and deluxe cruises. ",
  "Meals: Meals as mentioned in the itinerary. ",
  "Guided Tours: Expert Egyptologist guide throughout your tour. ",
  "Entrance Fees: Entrance fees to all sites indicated on the itinerary. ",
  "Transport: All transfers by private A/C vehicles. ",
  "Additional Services: Free airport meet and greet transfer, and all service charges and taxes. ",
],
excluded: [
  "International Airfare: International flights before and after the tour. ",
  "Insurance: Travel insurance is mandatory.",
  "Optional Experiences: Available at an additional cost. ",
  "Egypt Visa: USD 25 per passport.  ",
  "Tipping: Recommended",
  "Personal Expenses: Laundry, sauna, telephones, etc.",
  "Drinks: Not included in meals. ",
  "SIM Card: Available for purchase at Cairo International Airport. ",
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
