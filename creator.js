const fs = require("fs");
const path = "./Egypt-Day-Tours-cairo-Excursions/tour-single.html";

let Data = {
  title: "5 Days Abu Simbel Nile River Cruise Package",
  maxGuests: "Unlimited",
  location: "Egypt",
  left: "5 days",
  des: `5 days Abu Simbel Nile River cruise package will provide a magical exotic quest leading across all the rare wonders of southern Egypt. Marvelous Egypt Travel is the best travel agency in Egypt which will offer all our clients the best services which include the best Egyptologist tour guide, the most magical Nile Cruise, and a private A/C Vehicle so everyone can live a magical adventure filled with grace and wonder.
All our guests will get to enjoy 5 days Abu Simbel Nile River cruise package that will be the key to discovering rare ancient Egyptian history and archaeological sites for 5 days/ 4 nights Abu Simbel Nile River cruise package in upper Egypt such as Abu Simbel temple, Wadi EL Seboua, Kalabsha, and more. Book this magical tour and discover the marvelous treasures of ancient Egypt.`,
  reviews: "456 Reviews",
  priceSale: "$890",
  priceOriginal: "$890",
  rating: 5,
  tourPlans: [
    {
      title: "Arrival and Boarding",
      des: `
13:00

Lunch on board.
17:00

Tea Time.
20:00

Dinner On Board.
Meals:

Lunch, Dinner.
Overnight:

At Aswan.
`,
    },
    {
      title: "Kalabsha Temples and Wadi El Seboua",
      des: `
07:30

Breakfast Meal.
08:00

Visit Kalabsha Temples: The Temple of Kalabsha is found on the Nubia border on the west bank of the Nile River just 50 km in southern Aswan. The marvelous temples of Mandulis stand as a magical model of Nubian architecture which was built in 30 BC in the Roman era during the reign of Augustus that was for the Lower Nubian sun god Mandulis.
10:30

Sail to Wadi El Seboua.
13:00

Lunch on Board.
17:00

Tea Time.
19:15

Cocktail Party (Head Departments Presentation).
20:00

Dinner On Board.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

At Wadi El Seboua.
`,
    },
    {
      title: "Wadi El Seboua and Amada Temples",
      des: `
07:30

Breakfast Meal.
08:00

Visit Wadi El Seboua Temples: The majestic Valley of the Lions is a magical part of the Nubian monuments found in Southern Egypt which was created by Amenhotep III (1391 – 1353 BC) and enlarged by Ramsess II which was for the god Amun and Ra-Horakhty. It is found just 50 KM south of Aswan Dam. The area holds a majestic row of lion-headed sphinxes at the front entrance of the temple.
10:30

Sail to Amada.
13:30

Lunch on Board.
16:00

Visit Amada (Amada + Derr + Tomb of Pennut): The great temple of Amada is considered to be the oldest Nubian Egyptian temple which was created by Thutmose III (1479 – 1425 BC) to honor Re-Horakhty and Amun and is found 160 km south of Aswan. It holds a very significant historical value showcasing a number of very important facts.
20:00

Dinner On Board.
21:30

Nubian Show (by the Staff).
Meals:

Breakfast, Lunch, Dinner.
Overnight:

At Amada.
`,
    },
    {
      title: "Kasr Ibrim and Abu Simbel Temples",
      des: `
06:30

Sail to Kasr Ibrim.
07:30

Breakfast Meal.
08:45

Overview Kasr Ibrim (15 Minutes for photos only from Sundeck).
12:15

Abu Simbel Temple Panorama (15 Minutes for photos only from Sundeck).
12:30

Visit Abu Simbel Temple: The grand temples of Abu Simbel beloved by Amun are glorious gems of greatness and divinity that were constructed by Ramses the Great (1279-1213 BCE) between 1264 BC and 1244 BC which honored Ptah, Ra-Horakty, Amun-Re, and the king himself during the divine sun festival that took place in 22 of each year on October and February. The small temple of his wife Nefertiti which was dedicated to Hathor is just 100 m away standing as an example of Ramses' love for his beautiful queen's wife.
19:00

Dinner On Board.
20:00

Optional Visit Sound and Light Show of Abu Simbel.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

At Abu Simbel.
`,
    },
    {
      title: "Disembarkation",
      des: `
08:30

Breakfast Meal.
09:00

Check Out from the Cruise.
Meals:

Breakfast.
`,
    },
  ],
  included: [
    "Accommodation for 4 nights onboard 5-star cruise on a full board basis",
    "Assistance of our personnel during your tour",
    "All transfers by modern air-conditioned deluxe vehicle",
    "All Nile Cruise excursions as mentioned in the itinerary",
    "Entrance fees to all sights between Luxor and Aswan.",
    "Egyptologist guide during your journey",
    "All service charges and taxes. ",
  ],
  excluded: [
    "Tipping",
    "Personal Expenses. ",
    "Any extras not mentioned in the program",
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

  const newPath = `./Egypt-Nile-Cruises/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
