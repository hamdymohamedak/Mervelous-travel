const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "Super Safari by Quads from Safaga Port",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `

The Safaga Super Safari Trip offers an illuminating journey through the golden treasures of the Egyptian Sahara. Marvelous Egypt Travel, the leading travel agency in Egypt, ensures all our clients receive exceptional service, including a private safari guide, comfortable quad bikes, and an A/C vehicle for the trip across the divine eastern desert.

During this thrilling adventure, guests will experience the magical Safaga Port Super Safari by quad bike, followed by a delightful BBQ dinner in a Bedouin village. After an unforgettable day, we will drive you back to Safaga Port. Book this exciting adventure to create magical memories.
`,
    reviews: "488 Reviews",
    priceSale: "$30",
    priceOriginal: "$30",
    rating: 5,
    tourPlans: [
      {
        title: "Super Safari by Quads from Safaga Port",
        des: `
Afternoon:
Pickup from Safaga Port:

You will be transferred from your cruise at Safaga Port by a private A/C vehicle and driven to the quad bike station.
Quad Bike Adventure:

Begin your mystical quest across the heavenly sands of the eastern Sahara from Safaga Port, driving the quad 45 km in 2 ways.
Evening:
Bedouin Village Visit:

Once everyone has reached the Bedouin village, you will be greeted by the Bedouin tribe.
BBQ Dinner:

Enjoy a tasty BBQ dinner in a magical atmosphere in the company of the Bedouin tribe.
Camel Ride:

Experience an hour Camel ride session across the Eastern Sahara.
Night:
Bedouin Celebration:

Participate in the Bedouin hosts' celebration under the most beautiful starry skies.
Return to Safaga Port:

After the celebrations, you will be transferred back to Safaga Port to end your Super Safari adventure.
`,
      },
    ],
    included: [
      "Pick up services from Safaga port and return. ",
      "All transfers by a private modern A/C vehicle. ",
      "Driving the quad 45 km in 2 ways. ",
      "Visiting the Bedouin village. ",
      "BBQ dinner. ",
      "All service charges and taxes.",
    ],
    excluded: [
      "Tipping",
      "Any extras not mentioned in the itinerary. ",
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

  const newPath = `./Egypt-Shore-Excursion-safaga/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
