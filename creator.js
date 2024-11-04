const fs = require("fs");
const path = "./tour-single.html";

let Data = {
  title: "Cairo Tour Packages",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "4 Days",
  des: "Embark on an unforgettable 4-day journey through Cairo and Giza with our exclusive tour package. Experience the perfect blend of ancient wonders and vibrant culture. This private tour, guided by expert Egyptologists, is ideal for solo travelers, couples, and families looking to explore the heart of Egypt.",
  reviews: "246 Reviews",
  priceSale: "$345",
  priceOriginal: "$345",
  rating: 5,
  tourPlans: [
    {
      title: "Day 1: Arrival and Nile Dinner Cruise",
      des: "Arrive at Cairo International Airport where you'll be greeted by our team and transferred to your hotel. Enjoy the rest of the day at leisure before a welcome dinner at a local restaurant.",
    },
    {
      title: "Day 2: Giza Pyramids, Sphinx, Saqqara, Memphis",
      des: `
    Experience:
    
    After breakfast, visit the iconic Giza Pyramids Complex, including the Great Pyramid, the Sphinx, and the Valley Temple. Enjoy lunch at a local restaurant before exploring the Saqqara Step Pyramid and the ancient city of Memphis.
    Meals:
    
    Breakfast, Lunch
    Overnight:
    
    Cairo hotel
    `,
    },
    {
      title: "Day 3: Egyptian Museum, Cairo Citadel, Khan El Khalili",
      des: `
    Experience:
    
    Begin your day with breakfast, followed by a visit to The Egyptian Museum, home to an extensive collection of ancient artifacts. After lunch at a local restaurant, explore the Salah El Din Citadel, Mohamed Ali Mosque, the National Museum of Egyptian Civilization, Al Muizz Street, and the bustling Khan El Khalili Bazaar
    Meals:
    
    Breakfast, Lunch
    Overnight:
    
    Cairo hotel
    `,
    },
    {
      title: "Day 4: Departure",
      des: `
    Experience:
    
    Enjoy breakfast at your hotel before being transferred to Cairo airport for your departure.
    Meals:
    
    Breakfast
    `,
    },
  ],
  included: [
    "Accommodation: 3 nights in Cairo. ",
    "Meals: 3 Breakfasts, 2 Lunches, 1 Dinner Cruise Meal. ",
    " Guided Tours:  Expert Egyptologist guides in English, French, and Spanish. ",
    "Transport: Private air-conditioned vehicle. ",
    "Entrance Fees for all sites listed",
    "Entrance Fees: Included for all sites listed in the itinerary.  ",
    "Additional Services: Free airport meet and greet transfer.",
  ],
  excluded: [
    "Flights: International flights before and after the tour. ",
    "Insurance: Travel insurance is mandatory. ",
    "Optional: experiences at additional cost",
    " Egypt Visa:  Egypt Entry Visa (USD 25 per passport).  ",
    "Tipping: (Recommended)",
    "Personal expenses (laundry, sauna, telephones, etc.)",
    "SIM card: Available for purchase at Cairo International Airport. ",
  ],
};

// Read the HTML file content
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Replace sections as per the requirement
  let updatedData = data
    .replace(
      /<h2 class="title">Tour Title<\/h2>/g,
      `<h2 class="title">${Data.title}</h2>`
    )
    .replace(
      /<span>Max Guests: <\/span>\s*<!-- سيتم تغيير هذا -->/g,
      `<span>Max Guests:${Data.maxGuests}</span>`
    )
    .replace(
      /<span>Location<\/span>\s*<!-- سيتم تغيير هذا -->/g,
      `<span>Location: ${Data.location}</span>`
    )
    .replace(
      /<span class="review">\(Review\)<\/span>\s*<!-- سيتم تغيير هذا -->/g,
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
    // Replace Tour Plans
    .replace(
        /<div id="tour_planing" class="tour-planing-section flex"><\/div>/,
        `<div class="col-lg-8">
            <div class="planing-content-tour">
              <h3 class="title-plan">Tour Plan :</h3>
              <div style="display: flex; flex-direction: column" id="tour_planing" class="tour-planing-section flex">
                ${Data.tourPlans
                  .map(
                    (plan, index) => `
                    <div class="tour-planing-section flex">
                      <div class="number-box flex-five">${String(index + 1).padStart(2, '0')}</div>
                      <div class="content-box">
                        <h5 class="title">${plan.title}</h5>
                        <p class="des">${plan.des}</p>
                      </div>
                    </div>`
                  )
                  .join('')}
              </div>
            </div>
          </div>`
      );

  // Define a new filename
  const newPath = "./new-cairo-tour-packages.html";

  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
