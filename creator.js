const fs = require("fs");
const path = "./Egypt-Day-Tours/tour-single.html";

let Data = {
  title: "Petra and the Nile",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "13 days",
    des: `Experience an unforgettable two-week journey through Jordan and Egypt with our “Petra and the Nile” tour. Explore the highlights of both countries, from the ancient wonders of Jordan -including Petra, Wadi Rum, and the Dead Sea- to the iconic Pyramids and Sphinx in Cairo, complemented by a luxurious Nile Cruise. Your adventure begins in Amman, where you'll explore historical sites, picturesque landscapes, and ancient ruins before embarking on a breathtaking Nile cruise.`,
    reviews: "612 Reviews",
    priceSale: "$3060",
    priceOriginal: "$3060",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1: Amman Arrival: Hotel Transfers & City Exploration",
        des: `Upon your arrival in Amman, our team will ensure a seamless transfer to your hotel. Following check-in, we will offer a brief introduction to the local surroundings, highlighting convenient nearby establishments such as shops, cafés, and restaurants. You’ll then have the opportunity to independently explore the city, gaining a firsthand experience of its distinctive ambiance, in anticipation of the tour’s official commencement tomorrow.
OVERNIGHT: Amman 3-star hotel
MEALS: None
EXTRAS:
Single room supplement (JOSHJA)
Single room supplement – Standard Hotels (JOSHJS)
Extra day in Amman – pre tour
As-Salt and Bethany tour
`,
      },
      {
        title:
          "Day 2: Exploring Ancient Roman Ruins and the Historical Sites of Amman",
        des: `Embark on a captivating journey through time, commencing with a visit to the ancient city of Jerash, where you’ll be awestruck by the remarkable Roman architecture, once buried beneath the sands. Explore the city’s most impressive ruins, including theaters, baths, fountains, winding paved streets, and striking hilltop temples.
Upon returning to Amman, the “white city,” your city tour begins. Amman’s white limestone buildings are a sight to behold. Your expert guide will delve into the city’s rich history, highlighting excavations and renovations spanning the Neolithic, Hellenistic, late Roman, and Arab Islamic eras.
A tour highlight is the Citadel, where you’ll uncover the ancient temple of Hercules, the 8th-century Umayyad Palace, the Byzantine Church, and the well-preserved 6,000-seat Roman theatre dating back to the 2nd century. Remarkably, this ancient theatre is still utilized for cultural events today, providing a living link to Amman’s cultural heritage.
OVERNIGHT: Amman hotel
MEALS: Breakfast
EXTRAS:
`,
      },
      {
        title:
          "Day 3: Unveiling Madaba, Mount Nebo, Kerak Castle, and the Enchantment of Petra",
        des: `Today, we embark on a picturesque journey along the King’s Highway en route to Petra, soaking in the stunning vistas of Jordan’s wadis, olive groves, and rustic villages. Our adventure includes stops at significant historical sites, commencing with Madaba, where we’ll visit the Greek Orthodox Church of St. George. Here, you’ll admire the renowned 6th-century Byzantine mosaic map of the Holy Land, among other biblical landmarks.
Our path leads to Mount Nebo, affording breathtaking panoramic views of the Holy Land from its summit. En route to Petra, we’ll traverse the remarkable Wadi al-Mujib and pause at the formidable 12th-century Kerak Castle, a colossal fortress constructed by Crusader King Baldwin along the ancient Egypt-Syrian caravan route.
Finally, we’ll reach Petra and assist you with the check-in process at your hotel for the night. While you’ll have some free time to explore the city independently, we strongly recommend the Petra by Candlelight tour through the Siq to the Treasury—an enchanting experience not to be missed.
OVERNIGHT: Petra hotel
MEALS: Breakfast
EXTRAS:
`,
      },
      {
        title:
          "Day 4: Exploring the Wonders of Petra & camping under stars in Wadi Rum",
        des: `Today, we embark on a full-day expedition to uncover the marvels of Petra, the renowned Nabatean site. Dating back to the 1st century AD, Petra once thrived as the Nabatean commercial empire’s capital. Forgotten for centuries, it was rediscovered in 1812 by Swiss explorer Johann Ludwig Burckhardt. Accessible solely through the narrow passage known as the Siq, Petra is nestled on the precipice of Wadi Aruba, encircled by towering canyon walls and hills.
Our guided tour guides us through the winding Siq, a narrow passage that rises 200 meters and narrows to just 2 meters wide. We’ll pass the terracotta pipes that once conveyed water into the city and the ancient Nabatean water channel. Upon emerging from the Siq, we’ll be mesmerized by the sight of the Khazneh, also known as the Treasury, one of Petra’s most magnificent landmarks. Our exploration continues to the Roman amphitheater, colonnaded streets, and the multi-colored sandstone cliffs leading to the Monastery, Petra’s grandest carved monument, standing at an impressive 50 meters in height and 45 meters in width. The vistas of Wadi Aruba and the Jordan Valley from this vantage point are simply awe-inspiring.
Following an unforgettable day in Petra, we journey to Wadi Rum, an awe-inspiring desert landscape characterized by towering rock formations and cliffs. Here, we’re welcomed by hospitable Bedouin hosts and make ourselves at home in a comfortable campsite beneath the starlit sky. Indulging in a delectable traditional Jordanian meal, we spend the evening gathered around the campfire, stargazing, and relishing the serenity of this magnificent desert backdrop.
OVERNIGHT: Wadi Rum Bedouin camp
MEALS: Breakfast, Dinner
EXTRAS: None
`,
      },
      {
        title:
          "Day 5: Jeep Safari adventure in Wadi Rum & Swim in the Dead Sea",
        des: `Our day kicks off with an exhilarating jeep safari through the captivating desert landscape of Wadi Rum. This region, renowned for its towering cliffs and intriguing rock formations, became famous through its depiction in the film “Lawrence of Arabia.” We’ll navigate the desert’s diverse terrain, taking in the breathtaking vistas that stretch before us.
Following our Wadi Rum adventure, we’ll journey northward to the shores of the Dead Sea. This remarkable body of water holds the distinction of being the Earth’s lowest point, situated more than 400 meters below sea level. It receives waters from various sources, including the Jordan River, and the convergence of these waters leaves behind a unique amalgamation of salts and minerals, contributing to the production of high-quality local products.
We’ll pause for a swim in the Dead Sea, an extraordinary experience unlike any other. Thanks to its remarkably high salt concentration, you’ll effortlessly float on its surface, creating a truly unforgettable and unique encounter. Just remember to avoid getting the water in your eyes, as it can be quite uncomfortable.
After savoring this distinctive swim in the Dead Sea, we’ll make our way back to Amman, savoring the picturesque views of the hills of Jerusalem along the journey. This region is historically associated with five biblical cities: Sodom, Gomorrah, Adman, Zebouin, and Zoar (Bela). For those desiring additional time at the Dead Sea for spa treatments or relaxation, we offer the option of spending your final night in Jordan here rather than returning to Amman.
OVERNIGHT: Amman hotel
MEALS: Breakfast
EXTRAS:
`,
      },
      {
        title:
          "Day 6: Amman to Cairo: Hotel Transfer with Optional Nile Dinner Cruise",
        des: `We’ll start by transferring you to Amman airport for your flight to Cairo. Upon your arrival in Cairo, our dedicated team will be there to assist you in obtaining your visa and collecting your luggage. From there, we’ll transfer you to your Cairo hotel for check-in, giving you some free time to explore the city at your own pace or simply unwind at the hotel. For those seeking a unique dining experience, there’s the option of a Nile dinner cruise available tonight.
Please be aware that the cost of the Amman-Cairo flight is not included in the tour price. To offer flexibility, you have the choice to include this flight as part of your primary international ticket, or we can help you book it separately. Egypt Air and Royal Jordanian Airlines both provide direct flights throughout the day. Rest assured, all transfers in both Amman and Cairo are part of our inclusive services, and we are fully equipped to manage all your international flight arrangements upon your request.
OVERNIGHT: Cairo 5-star hotel
MEALS: Breakfast
EXTRAS: Amman to Cairo flight upon request
`,
      },
      {
        title: "Day 7: Discovering Pyramids, Sphinx & Saqqara",
        des: `Embark on your Egyptian journey with a visit to the iconic Great Pyramids of Giza, situated on the outskirts of Cairo. These pyramids, constructed around 2500 years BC by the Pharaohs Khufu, Khafre, and Menkaure, stand as some of the most globally recognized ancient structures. Guided by your Egyptologist, you’ll delve into the history of the Pharaohs and gain insights into the construction of these awe-inspiring pyramids. For the adventurous, there’s even the option to explore the interior of one of the pyramids (subject to availability).
Next on the itinerary is a visit to the majestic Sphinx, fully revealed in the 1920s, and situated in close proximity to the pyramids.
Following this, we’ll journey to the ancient capital of Memphis, where you’ll encounter the statue of Ramses II and the Step-Pyramid in Saqqara.
OVERNIGHT: Cairo 5-star hotel
MEALS: Breakfast
EXTRAS: None
`,
      },
      {
        title: "Day 8: Fly to Luxor, west bank tour and Luxor temple",
        des: `Today, we embark on an exciting journey as we catch an early flight from Cairo to Luxor. Our exploration on the West bank of the Nile begins with a visit to the impressive Colossi of Memnon. From there, we delve into the dusty, ancient Pharaonic tombs situated in the renowned Valley of the Kings, where we can marvel at the rich history and artistry preserved within.
Our adventure continues as we proceed to the Temple of Queen Hatshepsut, an architectural marvel that tells tales of ancient royalty. We also have the privilege of witnessing the vibrant hieroglyphics adorning the temple walls.
After concluding our West Bank exploration, we’ll take some time to relax over lunch before heading back to the East Bank, where we’ll visit the magnificent Karnak Temple and Luxor Temple. The grandeur of Karnak Temple, a complex of temples dedicated to Amun, will undoubtedly leave you in awe.
OVERNIGHT: Luxor 5-star hotel
MEALS: Breakfast, Lunch
EXTRAS: None
`,
      },
      {
        title: "Day 9: Hot Air Balloon Ride & Free time in Luxor",
        des: `To commence our day, we’ll rise early for an unforgettable hot air balloon ride at dawn, providing us with an unparalleled view of the Nile and the ancient temples dotting the landscape.
Once back on solid ground, you’ll have the rest of the day at your leisure to explore Luxor independently, shop for souvenirs, or relax at your hotel.
OVERNIGHT: Luxor 5-star hotel
MEALS: Breakfast
EXTRAS: Hot air balloon ride
`,
      },
      {
        title: "Day 10: Luxor to Cairo, Final Departure",
        des: `On our final day, we’ll transfer you to Luxor airport for your domestic flight back to Cairo. Our dedicated team will assist you with your luggage and guide you through any necessary connections for your onward journey or international flight home`,
      },
    ],
    included: [
      "4 nights in 3- to 4-star hotels in Jordan",
      "3 nights in 5-star hotels in Egypt",
      "1 night in a comfortable tent at a Bedouin camp in Wadi Rum",
      "4-night 5-star Nile cruise from Luxor to Aswan",
      "All transport and transfers in private AC vehicles",
      "4×4 jeep safari and a Bedouin experience in Wadi Rum",
      "Guided sightseeing tours as specified in the itinerary",
      "Domestic flight tickets (economy class) from Cairo to Luxor and Aswan to Cairo",
      "Meals as indicated in the itinerary",
    ],
    excluded: [
      "International flights (available upon inquiry)",
      "Amman-Cairo flight (available upon request)",
      "Egypt visa fees (available upon arrival for most nationalities, US$25)",
      "Jordan Visa fees (free as part of the Jordan Pass)",
      "Entrance fees for Jordan",
      "Egypt entrance fees to sites visited",
      "Tipping/gratuity",
      "Travel insurance",
      "Meals not mentioned in the inclusions",
      "Hotel gala dinners on 24 and/or 31 Dec",
      "Personal expenses such as drinks, laundry, etc.",
      "Additional activities or unmentioned items",
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

  const newPath = `./Egypt-Travel-Packages/${newFileName}.html`;
  // Write the updated content to a new HTML file
  fs.writeFile(newPath, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log(`File has been saved as ${newPath}`);
  });
});
