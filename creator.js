const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "Day Trip to Abu Simbel from Aswan",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "1 days",
  des: `Embark on a fascinating day trip from Aswan to Abu Simbel, where the monumental grandeur of ancient Egypt awaits you. This tour, provided by Marvelous Egypt Travel -the premier travel agency in Egypt- includes the expertise of a private Egyptologist guide and a comfortable, air-conditioned vehicle. Experience the breathtaking Temples of Abu Simbel, marvel at their grandeur, and delve into the rich history of ancient Egyptian civilization. Conclude your adventure with a return to your hotel or Nile river cruise, enriched by the majesty of Egypt’s past.`,
  reviews: "165 Reviews",
  priceSale: "$50",
  priceOriginal: "$50",
  rating: 5,
  tourPlans: [
    {
      title: "Day Trip to Abu Simbel from Aswan",
      des: `
Pick-Up and Transfer:

Begin your journey with a pickup from your hotel or Nile cruise in Aswan. Travel by private vehicle to the awe-inspiring Temples of Abu Simbel.
Explore the Temples of Abu Simbel:

The two rock-cut temples at Abu Simbel, masterpieces of ancient Egyptian architecture, were constructed during the reign of King Ramses II around 1200 B.C. The first temple is dedicated to Ramses II himself, showcasing colossal statues and intricate carvings. The second temple honors Queen Nefertari, adorned with exquisite artwork and inscriptions. Discover the grandeur of these monuments and their historical significance.
Lunch:

After visiting Abu Simbel, return to Aswan for a delightful lunch at a local restaurant.
Transfer Back:

Conclude your day with a return transfer to your hotel or Nile cruise in Aswan, ending your memorable trip to Abu Simbel.
Meals:

Lunch.
`,
    },
  ],
  included: [
    "Pick up service from your hotel in Aswan/ Nile Cruise and return. ",
    "All transfers by a private modern air-conditioned vehicle. ",
    "Private Egyptologist guides during your tours. ",
    "Entrance fees to all the mentioned sights. ",
    "Lunch at a local restaurant. ",
    "Mineral water on board the vehicle during the tour. ",
    "All service charges and taxes.",
  ],
  excluded: [
    "Any extras not mentioned in the program. ",
    "Tipping",
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

  const newPath = `./Egypt-Day-Tours-Aswan-Excursions/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
