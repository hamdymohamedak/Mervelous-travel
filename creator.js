const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "Aswan Sightseeing Tour",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "1 days",
  des: `Embark on an enchanting full-day tour of Aswan, guided by a professional Egyptologist and traveling in the comfort of a private air-conditioned vehicle. This meticulously curated itinerary includes visits to some of Aswan’s most historically significant and visually stunning landmarks. Experience the monumental Aswan High Dam, the fascinating Unfinished Obelisk, and the magnificent Philae Temple. This tour provides a deep dive into the rich history and culture of the Nubian City, offering a memorable and educational experience.`,
  reviews: "354 Reviews",
  priceSale: "$40",
  priceOriginal: "$40",
  rating: 5,
  tourPlans: [
    {
      title: "Aswan Sightseeing Tour",
      des: `
      Morning:
      Pick-Up:

      Your private tour guide will meet you at your hotel or Nile cruise to commence your Aswan sightseeing adventure.
      Aswan High Dam:

      Begin with a visit to the Aswan High Dam, a monumental engineering feat constructed between 1960 and 1970. This structure has had a profound impact on Egypt's economy and culture. Learn about the dam's historical significance and its role in modern Egypt.
      Unfinished Obelisk:

      Next, visit the Unfinished Obelisk, the largest obelisk ever attempted by the ancient Egyptians. Commissioned by Queen Hatshepsut, it remains partially carved from the bedrock, offering unique insights into ancient construction techniques.
      Lunch:

      Enjoy a delectable lunch at a local restaurant in Aswan, savoring some of the region's culinary specialties.
      Afternoon:
      Philae Temple:

      After lunch, explore the exquisite Philae Temple, dedicated to the goddess Isis of Love and Beauty. The temple complex was relocated to Agilkia Island as part of the UNESCO Nubia Campaign, which aimed to protect it from flooding following the construction of the Aswan High Dam. Marvel at the intricate reliefs and learn about the myths and legends associated with this sacred site.
      Evening:
      Return:

      After a day of extensive exploration, you will be transferred back to your hotel or Nile cruise, concluding your comprehensive Aswan sightseeing tour.
      Meals:

      Lunch.
`,
    },
  ],
  included: [
    "Pick up service from your hotel in Aswan/ Nile Cruise and return. ",
    "All transfers by a private modern air-conditioned vehicle.",
    "Private Egyptologist guides during your tours",
    "Entrance fees to all the mentioned sights.",
    "Lunch at a local restaurant. ",
    "Mineral water on board the vehicle during the tour. ",
    "All service charges and taxes.",
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

  const newPath = `./Egypt-Day-Tours-Luxor-Excursions/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
