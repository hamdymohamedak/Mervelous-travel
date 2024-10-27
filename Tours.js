const params = new URLSearchParams(window.location.search);
const tourId = params.get("id");

const tourDetails = {
  1: {
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
  },

  2: {
    title: "Essential Egypt",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "5 Days",
    des: "Embark on a journey through time with our 5 Days Cairo, Luxor and Abu Simbel Tour Package. This tour captures the essence of Egypt’s magnificent history and culture, offering a blend of ancient wonders and modern comfort. From the pyramids of Giza to the temples of Luxor and the grandeur of Abu Simbel, this package provides an unforgettable adventure. Marvelous Egypt Travel ensures exceptional service with professional Egyptologist guides, luxurious accommodations, and private A/C transportation, making it the ideal choice for exploring Egypt.",
    reviews: "362 Reviews",
    priceSale: "$770",
    priceOriginal: "$770",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1: Arrival in Cairo",
        des: `Experience:
Arrival at Cairo Airport, meet and assist by our representative, transfer to a 5-star hotel, and enjoy a welcome dinner.
Meals:
Dinner included.
Overnight:

Cairo Hotel.
`,
      },
      {
        title: "Day 2: Cairo Sightseeing",
        des: `
Experience:

Guided tour of the Giza Pyramids Complex, including the Great Pyramid, the Sphinx, and the Valley Temple, followed by visits to the Grand Egyptian Museum and the Egyptian Museum.
Meals:

Breakfast and lunch included.
Overnight:

Cairo Hotel.
`,
      },
      {
        title: "Day 3: Abu Simbel Temples and Aswan",
        des: `
Experience:

Flight to Aswan, tour the Abu Simbel Temples, lunch in Aswan, and transfer to a 5-star hotel.
Meals:

Breakfast and lunch included.
Overnight:

Aswan Hotel.
`,
      },
      {
        title: "Day 4: Luxor Sightseeing",
        des: `
Experience:

Morning flight to Luxor, visit the Valley of the Kings, Hatshepsut Temple, Colossi of Memnon, and Karnak Temple, lunch in Luxor, and return flight to Cairo.
Meals:

Breakfast and lunch included.
Overnight:

Cairo Hotel.
`,
      },
      {
        title: "Day 5:",
        des: `
Experience:

Breakfast at the hotel, transfer to Cairo Airport for your departure flight.
Meals:

Breakfast included.
`,
      },
    ],
    included: [
      "Accommodation: 3 nights in Cairo, 1 night in Aswan . ",
      "Meals: 4 breakfasts, 3 lunches, 1 dinner. ",
      " Guided Tours:  Expert Egyptologist guides in English, French, and Spanish.  ",
      "Transport:  A/C vehicles for tours and excursions, domestic flights from Cairo to Aswan and Luxor to Cairo.  ",
      "Additional Services:  Free airport meet and greet transfer, And meet and assist at all destinations, All taxes, and charges. ",
    ],
    excluded: [
      "International flights:  International flights before and after the tour. . ",
      " Domestic Flights:  Domestic Flights tickets.  ",
      "Insurance:   Travel insurance is mandatory. ",
      "Optional Experiences: Available at an additional cost.    ",
      "Egypt Visa: USD 25 per passport.  ",
      "Tipping: Recommended ",
      "Personal Expenses:  Laundry, sauna, telephones, etc.   ",
      " SIM Card:  Available for purchase at Cairo International Airport. ",
    ],
  },
  3: {
    title: "Cairo, Giza, Luxor & Aswan Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "5 Days",
    des: "Embark on a mesmerizing journey through ancient Egypt with the 8 Days Cairo, Giza, Luxor, and Aswan Adventure Tour. This 8-day package, operated by Marvelous Tours, takes you from Cairo to Aswan, exploring iconic sites and offering an unforgettable Nile cruise experience.",
    reviews: "302 Reviews",
    priceSale: "$888",
    priceOriginal: "$888",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1: Arrival in Cairo",
        des: `
Experience:

Arrive in Cairo and transfer to your hotel.
Overnight:

Cairo
`,
      },
      {
        title: "Day 2: Giza Pyramids - Sphinx - Egyptian Museum",
        des: `
Experience:

Visit the Great Pyramids, Sphinx, and Egyptian Museum.
Meals:

Breakfast included.
Overnight:

Cairo
`,
      },
      {
        title: "Day 3: Luxor - Nile Cruise - Luxor and Karnak Temples",
        des: `
Experience:

Fly to Luxor, embark on a Nile Cruise, visit Luxor and Karnak Temples.
Meals:

Breakfast, Lunch, Dinner included.
Overnight:

Nile Cruise
`,
      },
      {
        title:
          "Day 4: Nile Cruise - Valley of the Kings - Queen Hatshepsut - Esna - Edfu",
        des: `
Experience:

Explore Valley of the Kings, Queen Hatshepsut's temple, sail to Esna and Edfu.
Meals:

Breakfast, Lunch, Dinner included.
Overnight:

Nile Cruise
`,
      },
      {
        title: "Day 5: Nile Cruise - Edfu - Kom Ombo - Aswan",
        des: `


          Experience:

          Visit Edfu and Kom Ombo temples, sail to Aswan.
          Meals:
          
          Breakfast, Lunch, Dinner included.
          Overnight:
          
          Nile Cruise
          
          
`,
      },
      {
        title: "Day 6: Aswan - Abu Simbel - Nubian Village",
        des: `


          Experience:

          Visit Abu Simbel and a Nubian village.
          Meals:
          
          Breakfast, Lunch, Dinner included.
          Overnight:
          
          Nile Cruise
          
          
`,
      },
      {
        title: "Day 7: Philae Temple - High Dam - Aswan - Cairo",
        des: `
          Experience:

          Explore Philae Temple, High Dam, fly back to Cairo.
          Meals:
          
          Breakfast included.
          Overnight:
          
          Cairo    
`,
      },
      {
        title: "Day 8: Cairo - Departure",
        des: `

          Experience:

          Transfer to the airport for departure.
          Meals:
          
          Breakfast included.
           
`,
      },
    ],
    included: [
      "Accommodation: - Cairo: 4+ Star hotel with daily breakfast. - Nile Cruise: 5-star standard Nile cruise with full-board meals.  ",
      "Meals: - 7 Breakfasts - 5 Lunches - 4 Dinners",
      "Guided Tours: Expert Egyptologist guides in English, French, and Spanish. ",
      "Flights:  Return domestic flights from Cairo to Luxor and Aswan to Cairo. . ",
      "Transport:  Air-conditioned mini-coach throughout the tour.- 5-star luxury Nile cruise ship - Return domestic flights included.",
      "Additional Services:- Arrival and departure transfers VIP treatment throughout the tour 24/7 Support",
    ],
    excluded: [
      "Insurance: Travel insurance is required and not included.  ",
      " Optional Experiences: - Abu Simbel Temple visit - Sunrise Hot Air  Balloon Ride - Nubian village - Old Cairo - Alexandria.  ",
      " Additional Services:  - Entrance fees.- Tipping kitty for crew, drivers, and tour guide - Pre and post-tour accommodation - Other meals, snacks, and drinks - Single supplement (mandatory) ",
      "Egypt Visa:  USD 25 per passport. ",
    ],
  },
  4: {
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
  },
  5: {
    title: "One-Day Pyramids Tour from Cairo Airport",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 Days",
    des: "Embark on a mystical quest through the history of ancient Egypt with our exclusive Pyramids tour from Cairo Airport. Marvelous Egypt Travel is proud to offer our clients the finest services, including expert Egyptologist tour guides and private A/C vehicles. Experience the wonders of ancient Egypt, including the three pyramids, the Sphinx, the Valley Temple, and Memphis City. Enjoy 24/7 customer service, seamless transportation, and professional tour guides. Book this marvelous tour and turn your dream vacation into reality.",
    reviews: "135  Reviews",
    priceSale: "$100",
    priceOriginal: "$100",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1: Day Tour To Pyramids From Cairo Airport",
        des: `

Your journey begins with a pickup from Cairo Airport, followed by a transfer in a private A/C vehicle to:
Giza Pyramids Complex:

The Giza Pyramids Plateau, constructed around 2600 BC, showcases the grandeur of ancient Egypt. Explore the three pyramids of Menkaure, Khafre, and Khufu, along with six smaller pyramids, the Sphinx, and the Valley Temple.
The Great Pyramid:

The Pyramid of Khufu, built in 2580 BC, stands as the last surviving wonder of the ancient world. This monumental structure, standing 147 meters tall and weighing 5.7 million tons, features a series of inner rooms and pathways.
The Great Sphinx:

Carved from limestone in 2500 BC, the Sphinx represents Pharaoh Khafre and is the oldest monumental sculpture in the world.
The Valley Temple:

This temple, dating back to the 26th century BC, served as a site for the purification and mummification of 4th dynasty kings and queens.
The Grand Egyptian Museum:

A treasure trove of ancient Egyptian artifacts, this museum houses remarkable items such as the Hanging Obelisk, the statue of King Ramses II, statues of Ptolemaic kings and queens, and more. A VIP ticket offers access to additional artifacts.
Lunch Time:

Enjoy a delicious lunch at a local restaurant before continuing your tour.
Memphis City:

Founded in 2925 BC by Pharaoh Narmer, Memphis was the first capital of unified Egypt, under the protection of Ptah, the god of craftsmanship.

Then you will be transferred back to Cairo Airport by a private A/C vehicle.
`,
      },
    ],
    included: [
      "Pick up and drop off service from Cairo Airport.",
      "All transfers by a private air-conditioned vehicle.",
      "Private Egyptologist guide in your own language.",
      "Mineral water on board the vehicle during the tour.",
      "Lunch at a local restaurant.",
      "Entrance fees for all sightseeing mentioned.",
      "All service charges and taxes.",
    ],
    excluded: [
      "Any extras not mentioned in the itinerary.",
      "Tipping.",
      "Optional Experiences available at an additional cost.",
    ],
  },
  6: {
    title: "Day Trip to Cairo from Hurghada by Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 Days",
    des: "A day trip to Cairo from Hurghada is enough to change your life as you explore ancient Egyptian history. Our guests will be taken from the magical tropical atmosphere of Hurghada to the immortal wonders of Cairo, such as the Giza Pyramids Complex, which dates back more than 4000 years to the times of gods and pharaohs. In old Cairo, you will discover a number of Islamic monuments such as the Khan El Khalili Bazaar and more. Our clients will enjoy the excellent services of Marvelous Egypt Travel, the best travel agency in Egypt, which includes a skilled tour guide and a relaxing A/C vehicle. Feel the magical spirits of the past and explore the majestic works of ancient times by booking this incredible tour.",
    reviews: "154   Reviews",
    priceSale: "$400",
    priceOriginal: "$400",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1: Day Tour To Pyramids From Cairo Airport",
        des: `
Day Trip to Cairo from Hurghada by Plane
Morning:

We will transfer you from your hotel in Hurghada to Hurghada airport for a flight to Cairo. Upon arrival at Cairo airport, meet your private Egyptologist tour guide who will join you to start a private guided day trip to Cairo from Hurghada to discover all that Cairo and Giza have to offer starting with one of the seven wonders of the world:
Giza Pyramids Complex:

Where the glorious history of the ancient Egyptian civilization is remembered day after day until the end of days. The Great Giza complex consists of the three main great pyramids, six little pyramids, the great sphinx, and the valley temple.
The Great Pyramid:

The Great Pyramid of Khufu is a monument of pure greatness made to challenge time, it is the last intact structure of the seven wonders of the ancient world. Constructed in 2580 BC in 20 years using 2,300,000 pieces of limestone each weighing 2.5 tons with a workforce of about 100,000 free skilled workers, it is 147 m (481 ft) tall and remained the tallest building in history for 3800 years.
The Great Sphinx:

Known as "Hor-em-Akhet" which means "Horus of the horizon," is the immortal celestial guardian of Egypt. The sphinx is 73 m (240 ft) tall, 19 m (66 ft) wide, and has the shape of a mythical creature with the body of a lion and the head of a man, believed to be King Khafre, showcasing his power and wisdom.
The Valley Temple:

Created during Egypt's Old Kingdom (2686-2134 BC) for the mummification process, it offers valuable information about the mummification process and mortuary rituals of ancient Egypt.
The Grand Egyptian Museum:

A golden portal leading to cosmic ancient Egyptian creations of celestial intelligence cultivated across 5000 years. Discover some of the greatest archaeological monuments and artifacts ever made, including The Hanging Obelisk, King Ramses II Statue, The 10 Statues of King Senusert, The Grand staircase, Statues of Ptolemaic Kings and Queens, The Victory Column of King Merneptah, The epic Royal Regalia, and the Grand Atrium & Gift show. There is a VIP ticket for access to additional artifacts; contact us for more information.
Lunch Time:

Lunch will be served at a Pyramids/Nile view restaurant, then move to visit:
The Egyptian Museum:

A time capsule filled with the greatest ancient Egyptian artifacts dating back more than 4000 years. The museum is made from extravagant materials like gold, silver, and precious gems, and ordinary ones such as wood or stone, found in the shape of statues and funerary objects, plus other incredible monuments.
Al Muizz Street:

Known to date back to the 10th century AD in the heart of Old Cairo, at a close distance from Khan El Khalili Bazaar. It is filled with captivating ancient decorations and architecture.
Khan El Khalili Bazaar:

A street from the history books, constructed in 970 AD to be the golden brick road of the Middle East. It remains an active bazaar containing everything a traveler could imagine in its magical markets and shops, plus vintage cafes reflecting the classical beauty and prestige of ancient Islamic culture.
Evening:

Transfer to Cairo airport to take your flight to Hurghada and then transfer to your hotel, ending your day trip to Cairo from Hurghada by plane.
Hint:

You can share your thoughts about adding or removing any tours from your tour itinerary to accommodate your requirements and fulfill your needs.
`,
      },
    ],
    included: [
      "Domestic flight tickets from Hurghada to Cairo and return.",
      "Pick up services from your hotel in Hurghada and return. ",
      "All transfers by a private air-conditioned vehicle. ",
      "Private Egyptologist tour guide throughout the day tour.",
      "Entrance fees to all the sights in Cairo.",
      "Lunch at a Pyramid/ Nile view restaurant.",
      "Mineral water and soft drinks on board the vehicle. ",
      "All service charges and taxes.",
    ],
    excluded: [
      "Any extras not mentioned in the program.",
      "Tipping.",
      "Optional Experiences available at an additional cost.",
    ],
  },
  7: {
    title: "Tour to Luxor East and West Banks",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 Days",
    des: `
  Tour to Luxor East and West Banks

  A tour to Luxor East and West Bank is a spiritual journey through the celestial wonders of the ancient Egyptian civilization, showcasing its enduring beauty and grandeur. Marvelous Egypt Travel will offer the most fitting and satisfying service to all our honorable guests, including a skilled Egyptologist tour guide and a private A/C vehicle.

  Everyone will enjoy a private Luxor day tour to the East and West Banks to visit Luxor tourist attractions, including Luxor Temple, Karnak Temple, Valley of the Kings, Colossi of Memnon, and Queen Hatshepsut Temple. Book a vacation among the greatest archaeological treasures ever constructed in the history of ancient Egypt.
  `,
    reviews: "356 Reviews",
    priceSale: "$70",
    priceOriginal: "$70",
    rating: 5,

    tourPlans: [
      {
        title: "Day 1: Day Tour To Pyramids From Cairo Airport",
        des: `
Tour to Luxor East and West Banks
Morning:

We will pick you up from your hotel/ Nile Cruise in Luxor, joining your private tour guide to visit Luxor Highlights:
Valley of the Kings:

The magical Valley of the Kings is a time vault filled with heavenly treasures and the most enchanting artistic decorations, showcasing the heritage of the ancient rulers from the New Kingdom (1570 – 1050 BC). The Valley of the Kings holds 63 tombs of very renowned names like the great pharaoh Ramses II, Hatshepsut, Seti I, Tutankhamen, and various more.
Hatshepsut Temple:

The holy temple of Queen Hatshepsut (1507–1458 BC) was created to honor the everlasting heritage of one of the most successful pharaohs in history and the blessings of the sun god Amun. It is known as the most suitable example of classical architecture of ancient Egypt, across its huge three terraces where the beautiful festival valley was held.
Colossi of Memnon:

The magical Colossi of Memnon of Pharaoh Amenhotep III were constructed in 1350 BC to stand at the ruined mortuary temple of Amenhotep II, which was very renowned between the ancient Greeks and Romans.
Lunch:

Lunch will be served on an island, so your tour includes a boat trip on the Nile river. Then move to the East Bank to visit:
Karnak Temple:

The Karnak Temple Complex is a blessed and divine wonder known as the most selected of places. Pr-Imn house of Amon solely honors the Theban triad of Amun, Mut, and Khonsu, plus a number of other gods. The construction process of the Karnak temples complex started from the Middle Kingdom to the Greco-Roman period (2000 BC to 30 AD) on 247 acres. The most beautiful aspect of the temple is the Avenue of Sphinxes, which leads to the beautiful Luxor Temple.
Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Evening:

Finally, we drive you back to your hotel/ Nile cruise.
`,
      },
    ],
    included: [
      "Pick up service from your hotel in Luxor/ Nile Cruise and return.",
      "All transfers by a private air-conditioned vehicle. ",
      "Private Egyptologist guides during your tours. ",
      "Entrance fees to all the mentioned sights.",
      "Entrance fees to all the sights in Cairo.",
      "Lunch meal at a restaurant in Luxor",
      "Mineral water on board the vehicle during the tour ",
      "All service charges and taxes.",
    ],
    excluded: [
      "Any extras not mentioned in the program.",
      "Tipping.",
      "Optional Experiences available at an additional cost.",
    ],
  },
  8: {
    title: "Aswan Sightseeing Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 Days",
    des: "Embark on an enchanting full-day tour of Aswan, guided by a professional Egyptologist and traveling in the comfort of a private air-conditioned vehicle. This meticulously curated itinerary includes visits to some of Aswan’s most historically significant and visually stunning landmarks. Experience the monumental Aswan High Dam, the fascinating Unfinished Obelisk, and the magnificent Philae Temple. This tour provides a deep dive into the rich history and culture of the Nubian City, offering a memorable and educational experience.",
    reviews: "346 Reviews",
    priceSale: "$40",
    priceOriginal: "$40",
    rating: 5,

    tourPlans: [
      {
        title: "Day 1: Day Tour To Pyramids From Cairo Airport",
        des: `
Aswan Sightseeing Tour
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
      "Pick up service from your hotel in Aswan/ Nile Cruise and return",
      "All transfers by a private modern air-conditioned vehicle ",
      "Private Egyptologist guides during your tours",
      "Entrance fees to all the mentioned sights",
      "Lunch at a local restaurant",
      "Mineral water on board the vehicle during the tour",
      "All service charges and taxes",
    ],
    excluded: [
      "Any extras not mentioned in the program.",
      "Tipping.",
      "Optional Experiences available at an additional cost.",
    ],
  },
  9: {
    title: "3 Nights Nile River Cruise Aswan to Luxor Including Abu Simbel ",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "4 days",
    des: `

  Experience a magical 3-Night Nile River Cruise from Aswan, including a visit to the awe-inspiring Abu Simbel temples. Marvelous Egypt Travel, renowned for its exceptional services, invites you to embark on a journey through ancient Egypt’s wonders aboard a luxurious 5-star Nile cruise. Our tour offers:

      Expert Egyptologist guides.
      Premium accommodations.
      Private, air-conditioned transportation.
      An extraordinary voyage showcasing Egypt’s historical marvels.`,
    reviews: "313 Reviews",
    priceSale: "$550",
    priceOriginal: "$550",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1:Aswan",
        des: `n the morning, one of our fluent Egyptologists will pick you up from your hotel or anywhere you decide in Aswan by a modern air-conditioned vehicle to explore the best of Aswan including:
Aswan High Dam:

Created between 1960 and 1970, this marvelous structure had a significant effect on the economy and culture of Egypt by producing electricity.
The Unfinished Obelisk:

The largest known ancient obelisk in the history of ancient Egypt, created by Hatshepsut (1508-1458 BC) to complement the Lateran Obelisk at the Karnak temples complex.
Philae Temple:

Dedicated to the eternal goddess Isis of love and beauty. It was relocated to Agilkia Island as part of the UNESCO Nubia Campaign project before the completion of the Aswan High Dam in 1970.

Then we will transfer you to the 5-star deluxe Nile cruise to check in, have lunch and dinner on the cruise, and overnight on board.
Meals:

Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Day 2 Abu Simbel",
        des: `

Early breakfast, followed by a trip to Abu Simbel.
Abu Simbel Temples:

The colossal Temple of Abu Simbel is the guardian of the southern borders which were created by Ozymandias Ramses the Great (1292-1186 BC) and were established in 1200 BC to honor his win at the epic battle of Kadesh which ended in the signing of the first peace treaty in Egypt plus honor his wife Queen Nefertari the beloved of Hathor.

Return to the cruise for enjoying lunch and dinner as you sail to Kom Ombo.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Kom Ombo and Edfu",
        des: `

Enjoy your breakfast on the cruise, prepare yourself to explore Edfu and Kom Ombo Temples.
Kom Ombo Temple:

Divided into 2 temples with 2 entrances, 2 hypostyle halls, and 2 sanctuaries. Built between 180 BC and 47 BC to honor Haroeris “Horus the Elder” and Sobek the crocodile god of the Nile.
Edfu Temple:

The most preserved Greco-Roman temple in Egypt, dedicated to Horus. Built between 237 BC and 57 BC, it showcases the battle between Horus and the devil god Seth.

Enjoy lunch and dinner on the cruise as you sail towards Luxor.
Meals:

Breakfast, Lunch, Dinner
Overnight:

Onboard the Cruise
`,
      },
      {
        title: "Luxor",
        des: `

Enjoy your breakfast on the cruise, check out from the cruise and prepare yourself to explore Luxor tourist attractions with your private tour guide.
Valley of the Kings:

Explore the Valley of the Kings, the burial site for pharaohs from the 18th to the 20th dynasties (1570-1050 BC). Discover the tombs of King Ramses II, King Tutankhamun, and more.
Hatshepsut Temple:

Visit the impressive Hatshepsut Temple, built in 1479 BC by Queen Hatshepsut (1508-1458 BC), one of the best-preserved monuments in Luxor.
Colossi of Memnon:

Marvel at the Colossi of Memnon, two massive stone statues of Pharaoh Amenhotep III (1386-1349 BC).
Karnak Temple:

Conclude your journey with a visit to the Karnak Temple complex, dedicated to the Theban triad of Amun, Mut, and Khonsu. This vast religious site, built over many generations from 2000 BC to 30 BC, features the Avenue of Sphinxes and the great hypostyle hall.
Luxor Temple:

The lunar and golden marvel of Thebes Luxor temple are a living miracle that became known as the southern Sanctuary for the crowning and the rejuvenation of kings. The temple of Luxor was built in 1400 BC by Amenhotep III and Rameses II to host the Opet festival.
End of Tour:

Transfer to your desired location in Luxor, concluding your 4-day Nile cruise.
Meals:

Breakfast.
`,
      },
    ],
    included: [
      "Pickup service from Aswan and drop-off in Luxor",
      "3 Nights on a 5-star deluxe Nile cruise.",
      "Entrance fees to all included sites. ",
      "Egyptologist guide throughout the tour.",
      "All trips and transfers by modern air-conditioned vehicles",
      "Meals as specified in the itinerary",
      "All services, charges, and taxes",
    ],
    excluded: [
      "International Flights Tickets",
      "Tipping",
      "Personal Expenses",
      "Optional tours",
    ],
  },

  10: {
    title: "4 Nights Nile River Cruise Luxor to Aswan Including Abu Simbel ",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "5 days",
    des: `
  Experience the golden epic journey of a lifetime with our 4 Nights Nile River Cruise from Luxor including Abu Simbel. Marvelous Egypt Travel, the premier travel agency in Egypt, offers unparalleled services featuring the finest Egyptologist tour guides, luxurious Nile cruises, and private air-conditioned vehicles. Embark on a mesmerizing 5-day trip along the Nile River, exploring the grandeur of Ancient Egypt.
  Cruise between the heavenly cities of Luxor and Aswan, marveling at the remarkable achievements of the Pharaohs. Visit the majestic Hatshepsut Temple, the Valley of the Kings, Karnak Temple, and more. Discover Edfu and Kom Ombo temples en route to Aswan, where you will witness the must-see monumental highlights including Philae Temple and Abu Simbel Temple. Create unforgettable memories on this extraordinary journey
      `,
    reviews: "354 Reviews",
    priceSale: "$700",
    priceOriginal: "$700",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1: Arrival in Luxor and East Bank Tour",
        des: `

Upon arrival to Luxor, start your 5 days Nile cruise from Luxor to Aswan by meeting your private tour guide to discover ancient Egyptian civilization in the most famous archaeological sites along the Riverbank in Luxor East Bank like:
Karnak Temple:

Conclude your journey with a visit to the Karnak Temple complex, dedicated to the Theban triad of Amun, Mut, and Khonsu. This vast religious site, built over many generations from 2000 BC to 30 BC, features the Avenue of Sphinxes and the great hypostyle hall.
Check-in:

You will be taken to 5-star deluxe Nile cruise to check-in and have your lunch on board then stay relaxed at your cabin and by the evening, you will be taken to visit:
Luxor Temple by Night:

The lunar and golden marvel of Thebes Luxor temple are a living miracle that became known as the southern Sanctuary for the crowning and the rejuvenation of kings. The temple of Luxor was built in 1400 BC by Amenhotep III and Rameses II to host the Opet festival.

Return and overnight onboard the cruise.
Meals:

Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Day 2: West Bank Tour in Luxor",
        des: `

Enjoy your breakfast on the cruise, prepare yourself to explore West Bank in Luxor:
Valley of the Kings:

Explore the Valley of the Kings, the burial site for pharaohs from the 18th to the 20th dynasties (1570-1050 BC). Discover the tombs of King Ramses II, King Tutankhamun, and more.
Hatshepsut Temple:

Visit the impressive Hatshepsut Temple, built in 1479 BC by Queen Hatshepsut (1508-1458 BC), one of the best-preserved monuments in Luxor.
Colossi of Memnon:

Marvel at the Colossi of Memnon, two massive stone statues of Pharaoh Amenhotep III (1386-1349 BC).
Return to Cruise:

Enjoy lunch and dinner onboard and relax.
Meals:

Breakfast, Lunch, Dinner.
Sail to Edfu:

Overnight onboard.
`,
      },
      {
        title: "Day 3: Edfu and Kom Ombo Temples",
        des: `

Enjoy your breakfast on the cruise, prepare yourself to explore Edfu and Kom Ombo Temples:
Edfu Temple:

The most preserved Greco-Roman temple in Egypt, dedicated to Horus. Built between 237 BC and 57 BC, it showcases the battle between Horus and the devil god Seth.
Continue Sailing:

Reach Kom Ombo.
Kom Ombo Temple:

Divided into 2 temples with 2 entrances, 2 hypostyle halls, and 2 sanctuaries. Built between 180 BC and 47 BC to honor Haroeris “Horus the Elder” and Sobek the crocodile god of the Nile.
Return to Cruise:

Enjoy lunch and dinner onboard and relax.
Meals:

Breakfast, Lunch, Dinner.
Sail to Aswan:

Overnight onboard.
`,
      },
      {
        title: "Day 4 : Abu Simbel Temples",
        des: `

Enjoy breakfast then you will begin an early morning trip to Abu Simbel by a modern A/C vehicle, guided by your tour guide and witness:
Return to Cruise:

Enjoy lunch onboard and sail to Aswan.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Day 5 : Aswan Highlights and Departure",
        des: `

In the morning time, enjoy your breakfast then checks out before you will go for a guided trip among Aswan's monumental spots including:
Aswan High Dam:

Created between 1960 and 1970, this marvelous structure had a significant effect on the economy and culture of Egypt by producing electricity.
The Unfinished Obelisk:

The largest known ancient obelisk in the history of ancient Egypt, created by Hatshepsut (1508-1458 BC) to complement the Lateran Obelisk at the Karnak temples complex.
Philae Temple:

Dedicated to the eternal goddess Isis of love and beauty. It was relocated to Agilkia Island as part of the UNESCO Nubia Campaign project before the completion of the Aswan High Dam in 1970.
Departure:

Transfer to your hotel or preferred location in Aswan.
Meals:

Breakfast.
`,
      },
    ],
    included: [
      "Pickup service from Luxor and drop-off transfer in Aswan.",
      "Accommodation on 5-star deluxe Nile cruise for 4 nights on full board",
      "Entrance fees to all indicated sites in the itinerary",
      "Highly qualified Egyptologist tour guide during your tours.",
      "All trips and transfers by modern air-conditioned vehicles. ",
      "	Meals as indicated in the itinerary.",
      "All services, charges, and taxes.",
    ],
    excluded: [
      "Tipping",
      "Personal Expenses.",
      "Any extras not mentioned in the program",
    ],
  },
  11: {
    title: "7 Nights Nile River Cruise from Aswan ",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "8 days",
    des: "Experience a mythical journey of dreams across the immortal wonders of ancient Egypt with our 8 Days Nile cruise from Aswan. Marvelous Egypt Travel, the best travel agency in Egypt, offers unparalleled services featuring the finest Egyptologist tour guides, magical Nile Cruises, and private air-conditioned vehicles. Discover the mythical treasures of ancient Egyptian pharaohs and witness breathtaking temples and tombs such as Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, Edfu Temple, Philae Temple, and more in Luxor and Aswan. Book this golden experience on board a Nile cruise and live the holiday of your dreams.",
    reviews: "415 Reviews",
    priceSale: "$870",
    priceOriginal: "$870",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1: Aswan Attractions",
        des: `

In the morning, one of our fluent Egyptologists will pick you up from your hotel or anywhere you decide in Aswan by a modern air-conditioned vehicle to explore the best of Aswan including:
Aswan High Dam:

Created between 1960 and 1970, this marvelous structure had a significant effect on the economy and culture of Egypt by producing electricity.
The Unfinished Obelisk:

The largest known ancient obelisk in the history of ancient Egypt, created by Hatshepsut (1508-1458 BC) to complement the Lateran Obelisk at the Karnak temples complex.
Philae Temple:

Dedicated to the eternal goddess Isis of love and beauty. It was relocated to Agilkia Island as part of the UNESCO Nubia Campaign project before the completion of the Aswan High Dam in 1970.
Check-in:

Then we will transfer you to the 5-star deluxe Nile cruise to check in, have lunch and dinner on the cruise, and overnight on board.
Meals:

Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Day 2 : Kom Ombo Temple",
        des: `

Breakfast on board then start sail to Kom Ombo and once you arrive, you will join your Egyptologist by a modern A/C vehicle to visit:
Kom Ombo Temple:

Divided into 2 temples with 2 entrances, 2 hypostyle halls, and 2 sanctuaries. Built between 180 BC and 47 BC to honor Haroeris “Horus the Elder” and Sobek the crocodile god of the Nile.

Enjoy lunch and dinner on the cruise as you sail towards Edfu.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Day 3 : Free Day On the Cruise",
        des: `

Enjoy a free day on board the cruise while sailing to Luxor.
Meals:

Breakfast, Lunch, Dinner
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Day 4 :Luxor East Bank",
        des: `

Enjoy your breakfast on the cruise, prepare yourself to explore Luxor East Bank tourist attractions with your private tour guide.
Karnak Temple:

Conclude your journey with a visit to the Karnak Temple complex, dedicated to the Theban triad of Amun, Mut, and Khonsu. This vast religious site, built over many generations from 2000 BC to 30 BC, features the Avenue of Sphinxes and the great hypostyle hall.

Then back to your Nile cruise to have lunch and relax. Evening time, we will pick you up to enjoy:
Luxor Temple by Night:

The lunar and golden marvel of Thebes Luxor temple are a living miracle that became known as the southern Sanctuary for the crowning and the rejuvenation of kings. The temple of Luxor was built in 1400 BC by Amenhotep III and Rameses II to host the Opet festival.

Back to your cruise to have the dinner and spend the overnight.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Day 5 : Luxor West Bank",
        des: `

Enjoy your breakfast on the cruise, prepare yourself to explore Luxor West Bank tourist attractions with your private tour guide.
Valley of the Kings:

Explore the Valley of the Kings, the burial site for pharaohs from the 18th to the 20th dynasties (1570-1050 BC). Discover the tombs of King Ramses II, King Tutankhamun, and more.
Hatshepsut Temple:

Visit the impressive Hatshepsut Temple, built in 1479 BC by Queen Hatshepsut (1508-1458 BC), one of the best-preserved monuments in Luxor.
Colossi of Memnon:

Marvel at the Colossi of Memnon, two massive stone statues of Pharaoh Amenhotep III (1386-1349 BC).

Back to your cruise to have your lunch and dinner. Overnight in the cruise.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Day 6 :Edfu Temple",
        des: `

Early breakfast, followed by a trip to Edfu Temple:
Edfu Temple:

This well-preserved temple, dedicated to the deity Horus, was built between 237 BC and 57 BC and is believed to be on the site of Horus' battle with Set.

Return to the cruise for enjoying lunch and dinner as you sail to Aswan.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Day 7 : Abu Simbel Temples",
        des: `

Early morning, get your breakfast and we will transfer you by a private A/C car to the southwest of Aswan to discover the impressive temple of King Ramses ii:
Abu Simbel Temples:

The colossal Temple of Abu Simbel is the guardian of the southern borders which were created by Ozymandias Ramses the Great (1292-1186 BC) and were established in 1200 BC to honor his win at the epic battle of Kadesh which ended in the signing of the first peace treaty in Egypt plus honor his wife Queen Nefertari the beloved of Hathor.

Return to the cruise for enjoying lunch and dinner.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Day 8 :Departure from Aswan",
        des: `
Check-out:

After breakfast, transfer to your desired location in Aswan.
Meals:

Breakfast.
`,
      },
    ],
    included: [
      "Accommodation for 7 nights on board a 5-star cruise on a full board basis",
      "The assistance of our personnel during your trip",
      "All transfers by modern air-conditioned deluxe vehicle",
      "All Nile Cruise excursions as mentioned in the itinerary",
      "Entrance fees to all sights between Luxor and Aswan",
      "Egyptologist guide during your tour",
      "All services, charges, and taxes.",
    ],
    excluded: ["Tipping", "Personal Expenses", "Optional tours"],
  },

  12: {
    title: "7 Nights Nile River Cruise from Aswan",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "8 days",
    des: "Experience a magical travel journey across the ancient Egyptian Civilization, with 8 Days Nile cruise from Luxor. Marvelous Egypt Travel, the best travel agency in Egypt, provides exceptional services, including professional Egyptologist tour guides, enchanting Nile Cruises, and private air-conditioned vehicles. Explore the heavenly ancient Egyptian civilization in Luxor and Aswan, visiting incredible temples and tombs such as Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, Edfu Temple, Philae Temple, Abu Simbel, and more. Book this incredible adventure and uncover the exceptional heritage of ancient Egypt.",
    reviews: "124  Reviews",
    priceSale: "$870",
    priceOriginal: "$870",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1: Luxor East Bank",
        des: `n the morning, one of our fluent Egyptologists will pick you up from your hotel or anywhere you decide in Luxor by a modern air-conditioned vehicle to explore the best of Luxor East Bank including:
Karnak Temple:

Conclude your journey with a visit to the Karnak Temple complex, dedicated to the Theban triad of Amun, Mut, and Khonsu. This vast religious site, built over many generations from 2000 BC to 30 BC, features the Avenue of Sphinxes and the great hypostyle hall.
Check-in:

Then we will transfer you to the 5-star deluxe Nile cruise to check in, have lunch and relax. Evening time, we will pick you up to enjoy:
Luxor Temple by Night:

The lunar and golden marvel of Thebes Luxor temple are a living miracle that became known as the southern Sanctuary for the crowning and the rejuvenation of kings. The temple of Luxor was built in 1400 BC by Amenhotep III and Rameses II to host the Opet festival.

Back to your cruise to have the dinner and spend the overnight.
Meals:

Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Free Day On the Cruise",
        des: `

Enjoy a free day on board the cruise while sailing to Edfu.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Edfu Temple",
        des: `

Early breakfast, followed by a trip to Edfu Temple:
Edfu Temple:

This well-preserved temple, dedicated to the deity Horus, was built between 237 BC and 57 BC and is believed to be on the site of Horus' battle with Set.

Return to the cruise for enjoying lunch and dinner as you sail to Aswan.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise (Aswan late night arrival).
`,
      },
      {
        title: "Aswan Highlights",
        des: `

Enjoy your breakfast, then move to complete your 7 night Nile cruise from Luxor by a tour to Aswan Highlights where you will visit:
Aswan High Dam:

Created between 1960 and 1970, this marvelous structure had a significant effect on the economy and culture of Egypt by producing electricity.
The Unfinished Obelisk:

The largest known ancient obelisk in the history of ancient Egypt, created by Hatshepsut (1508-1458 BC) to complement the Lateran Obelisk at the Karnak temples complex.
Philae Temple:

Dedicated to the eternal goddess Isis of love and beauty. It was relocated to Agilkia Island as part of the UNESCO Nubia Campaign project before the completion of the Aswan High Dam in 1970.

Back to your cruise to have your lunch and dinner. Overnight in the cruise.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.`,
      },
      {
        title: "Abu Simbel Temples",
        des: `

Early morning, get your breakfast and we will transfer you by a private A/C car to the southwest of Aswan to discover the impressive temple of King Ramses ii:
Abu Simbel Temples:

The colossal Temple of Abu Simbel is the guardian of the southern borders which were created by Ozymandias Ramses the Great (1292-1186 BC) and were established in 1200 BC to honor his win at the epic battle of Kadesh which ended in the signing of the first peace treaty in Egypt plus honor his wife Queen Nefertari the beloved of Hathor.

Return to the cruise for enjoying lunch and dinner.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Kom Ombo Temple",
        des: `

Breakfast on board, then you will join your Egyptologist by a modern A/C vehicle to visit:
Kom Ombo Temple:

Divided into 2 temples with 2 entrances, 2 hypostyle halls, and 2 sanctuaries. Built between 180 BC and 47 BC to honor Haroeris “Horus the Elder” and Sobek the crocodile god of the Nile.

Enjoy lunch and dinner on the cruise as you continue sailing to Luxor and arrive late at night.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Luxor West Bank",
        des: `

Enjoy your breakfast on the cruise, prepare yourself to explore Luxor West Bank tourist attractions with your private tour guide.
Valley of the Kings:

Explore the Valley of the Kings, the burial site for pharaohs from the 18th to the 20th dynasties (1570-1050 BC). Discover the tombs of King Ramses II, King Tutankhamun, and more.
Hatshepsut Temple:

Visit the impressive Hatshepsut Temple, built in 1479 BC by Queen Hatshepsut (1508-1458 BC), one of the best-preserved monuments in Luxor.
Colossi of Memnon:

Marvel at the Colossi of Memnon, two massive stone statues of Pharaoh Amenhotep III (1386-1349 BC).

Back to your cruise to have your lunch and dinner. Overnight in the cruise.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Departure from Luxor",
        des: `
Check-out:

Check out after breakfast, transfer to your desired location in Luxor.
Meals:

Breakfast.
`,
      },
    ],
    included: [
      "Accommodation for 7 nights on board a 5-star cruise on a full board basis",
      "The assistance of our personnel during your trip",
      "All transfers by modern air-conditioned deluxe vehicle.",
      "All Nile Cruise excursions as mentioned in the itinerary.",
      "Entrance fees to all sights between Luxor and Aswan",
      "Egyptologist guide during your tour",
      "All services, charges, and taxes.",
    ],
    excluded: ["Tipping", "Personal Expenses.", "Optional tours."],
  },

  13: {
    title: "Tour to Cairo and Giza Pyramids from Port Said",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: "Embark on a day trip to Cairo from Port Said and immerse yourself in the timeless wonders of Egypt in a truly magical and entertaining way. Marvelous Egypt Travel, one of the leading travel agencies in Egypt, provides top-notch services, including a professional Egyptologist tour guide and a private air-conditioned vehicle. Enjoy a private excursion from Port Said to Cairo, visiting the Giza Pyramids, the Great Sphinx, and the Egyptian Museum before returning to Port Said. Turn your day trip into a captivating adventure by booking this enchanting tour that delves into the rich legacy of ancient Egypt.",
    reviews: "421 Reviews",
    priceSale: "$135",
    priceOriginal: "$135",
    rating: 5,
    tourPlans: [
      {
        title: "Tour to Cairo and Giza Pyramids from Port Said",
        des: `
Pickup from Port Said:

Our representative will pick you up from Port Said by the cruise exit door and transfer you by an air-conditioned vehicle to Cairo for a private guided tour of Cairo and the Pyramids from Port Said. The journey takes approximately 3 hours.
Giza Pyramids Complex:

Begin your tour by visiting the cosmic Giza Pyramids complex, an angelic embrace containing the ancient legacy and eternal wonders of the ancient Egyptian civilization during the Old Kingdom (2686-2134 BC), which includes:
The Great Pyramid:

The Grand Pyramid of King Khufu (2609 BC - 2584 BC) is a beacon of divinity and enlightenment, designed by Hemiunu. Standing 147 meters tall, it was constructed using 2.3 million limestone blocks, making up a total weight of six million tons. The pyramid contains several chambers, including the King’s Chamber, the Grand Hall, and the Queen’s Chamber.
The Great Sphinx:

The Mythical Sphinx is a masterpiece of divine art and architecture, showcasing the power and wisdom of Pharaoh Khafre (2558-2532 BC). Between its legs lies an extraordinary dream stele.
The Valley Temple:

This sacred temple, built in 2600 BC, was used for the mummification process of the kings and queens of the Old Kingdom, guiding them to the heavens.
The Grand Egyptian Museum

Explore the Grand Egyptian Museum, a golden portal to the ancient Egyptian creations cultivated over 5000 years of continuous innovation and vivid artistic imagination. Discover some of the greatest archaeological monuments and artifacts ever made, including the Hanging Obelisk, King Ramses II Statue, the 10 Statues of King Senusert, the Grand Staircase, statues of Ptolemaic Kings and Queens, the Victory Column of King Merneptah, the epic Royal Regalia, and the Grand Atrium and Gift Shop. VIP tickets are available for access to additional artifacts; for more information, contact us.
Lunch Time:

Enjoy lunch at a restaurant with views of the Pyramids or the Nile River.
The Egyptian Museum:

Visit the extraordinary Egyptian Museum, a house of mythical and archaeological beauty constructed in 1901 in the heart of Cairo.
Return to Port Said:

Finally, you'll be driven back to your cruise in Port Said.
`,
      },
    ],
    included: [
      "Pick up from the cruise exit door at Port Said and return",
      "All transfers by a private modern A/C vehicle.",
      "Private Egyptologist guide during your journey",
      "Mineral water on board the vehicle. ",
      "Lunch at a local restaurant during your day trip.",
      "Entrance fees for all sightseeing are mentioned.",
      "All service charges and taxes.",
    ],
    excluded: [
      "Tipping.",
      "Any extras not mentioned in the itinerary. .",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  14: {
    title: "Day Trip to Alexandria Sights from Alexandria Port",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: "Embark on a captivating day trip from Alexandria Port to explore the historical and cultural wonders of Alexandria. With Marvelous Egypt Travel’s exceptional service, including a private air-conditioned vehicle and a knowledgeable Egyptologist guide, you will experience the rich Greco-Roman heritage and unique attractions of this legendary city. Enjoy visits to the Alexandria Library, Catacombs, Pompey’s Pillar, Qaitbay Citadel, and Morsi Abu Abbas Mosque, before returning to Alexandria Port.",
    reviews: "413 Reviews",
    priceSale: "$80",
    priceOriginal: "$80",
    rating: 5,
    tourPlans: [
      {
        title: "Day Trip to Alexandria Sights from Alexandria Port",
        des: ` Pickup from Alexandria Port:

Our representative and guide will meet you at Alexandria Port and transfer you to your first destination.
Catacombs of Kom El Shoqafa:

Start your tour with the Catacombs of Kom El Shoqafa, a Roman burial site renowned for its fascinating blend of Egyptian and Roman architectural styles. This 2nd-century AD tomb is one of the Seven Wonders of the Middle Ages and provides a unique glimpse into ancient burial practices.
Pompey's Pillar:

Visit Pompey's Pillar, an impressive 25-meter (82-foot) granite column erected in 302 AD in honor of Emperor Diocletian. This monument is the only one of its kind in Egypt and is believed to hold the remains of General Pompey.
Qaitbay Citadel:

Explore the Qaitbay Citadel, a formidable fortress built in 1477 AD by Sultan Al-Ashraf Qa'it Bay. Situated on the Mediterranean coast at the site of the ancient Lighthouse of Alexandria, the citadel offers stunning views and showcases exquisite Islamic architectural design.
Lunch Time:

Enjoy a delightful lunch at a local restaurant in Alexandria, sampling local flavors and cuisine.
Alexandria Library:

Discover the Bibliotheca Alexandrina, a modern architectural marvel that pays homage to the ancient Library of Alexandria. Opened in 2002, it houses a vast collection of books, manuscripts, and artifacts reflecting Egypt's rich historical and cultural heritage.
Morsi Abu Abbas Mosque:

Visit the Morsi Abu Abbas Mosque, built in 1307 AD. This mosque is renowned for its stunning Islamic architectural design and intricate decorations, serving as inspiration for the Sheikh Zayed Mosque in Abu Dhabi.
Return to Alexandria Port:

After a day of exploration, return to Alexandria Port for drop-off.`,
      },
    ],
    included: [
      "Pick-up and drop-off at Alexandria Port. ",
      "All transfers by a private modern A/C vehicle.",
      "Private Egyptologist guide during your journey.",
      "Mineral water on board the vehicle. ",
      "Lunch at a local restaurant during your day trip.",
      "Entrance fees for all sightseeing are mentioned",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Tipping",
      "Any extras not mentioned in the itinerary",
      "Optional Experiences available at an additional cost",
    ],
  },

  15: {
    title: "Trip to Pyramids and Cairo from Sokhna Port",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `

  A Cairo Tour from Sokhna Port is a voyage of dreams through the everlasting allure and grandeur of the immortal city of Cairo. Marvelous Egypt Travel, the best travel agency in Egypt, ensures all our clients receive top-notch services, including an expert Egyptologist tour guide and a private A/C vehicle.

  During this magical tour, You will visit the iconic Giza Pyramids, the Great Sphinx, and the Egyptian Museum. After an unforgettable day of exploring ancient wonders, we will drive you back to Sokhna Port. Book this lovely day trip to experience the wonders of ancient Egypt and make each moment count.
  `,
    reviews: "131 Reviews",
    priceSale: "$135",
    priceOriginal: "$135",
    rating: 5,
    tourPlans: [
      {
        title: "Trip to Pyramids and Cairo from Sokhna Port",
        des: `
Morning:
Pickup from Sokhna Port:

Our representative will pick you up from Sokhna Port by the cruise exit door to be transferred by an air-conditioned vehicle to Cairo for a private guided tour of Cairo and the Pyramids from Sokhna Port (approximately 3 hours).
Tour of Cairo Tourist Attractions:
Giza Pyramids Complex:

The divine Giza Pyramids complex came into reality during the times of the old kingdom (2686 – 2134 BC) to showcase the eternal legacy of the ancient Egyptian royalty who were successful in immortalizing their names in the history books.
The Great Pyramid:

The Great Pyramid of Giza, built by King Khufu (2609 BC - 2584 BC), is a magical art piece that offers a heavenly gate leading to the heavens. It was constructed under the direction of Khufu's vizier Hemiunu, reaching a height of 147 m and a total weight of 6 million tons. Key chambers include the Queen’s chamber, the King’s chamber, the big void, and the grand hall.
The Great Sphinx:

The Great Sphinx, also known as Horus of the Horizon, is a giant mythical sculpture showcasing the strength and wisdom of Pharaoh Khafre (2558 BC - 2532 BC). It features the face of Khafre and the body of a lion, with the dream Steele of Thutmose IV placed between its paws in 1401 BC.
The Valley Temple:

The Valley Temple, a masterpiece of ancient art, was used for religious customs, including the mummification ritual, to ensure a successful journey to the afterlife for members of the 4th dynasty.
The Grand Egyptian Museum:

The Grand Egyptian Museum is a golden portal to 5000 years of ancient Egyptian innovation and imagination. It houses some of the greatest archaeological monuments and artifacts ever created, including the Hanging Obelisk, King Ramses II Statue, the 10 Statues of King Senusert, the Grand Staircase, statues of Ptolemaic kings and queens, the Victory Column of King Merneptah, the Royal Regalia, and the Grand Atrium and Gift Shop. For an enhanced experience, VIP tickets provide access to additional artifacts.
Lunch Time:

Lunch will be served at a Pyramid/ Nile view restaurant.
Afternoon:
The Egyptian Museum:

The Egyptian Museum, established in 1901 AD in central Cairo, displays an extraordinary collection of ancient artifacts and monuments dating back over 4000 years.
Evening:
Return to Sokhna Port:

Finally, we drive you back to Sokhna Port by the cruise door.
`,
      },
    ],
    included: [
      "Pick up from the cruise exit door at Sokhna Port and return ",
      "All transfers by a private air-conditioned vehicle ",
      "Private Egyptologist guide during your journey",
      "Mineral water on board the vehicle during the tour",
      "Lunch during your day trip at a local restaurant",
      "Entrance fees for all sightseeing are mentioned.",
      "All service charges and taxes",
    ],
    excluded: [
      "Tipping",
      "Any extras not mentioned in the itinerary",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  16: {
    title: "Day Tour from Safaga to Luxor",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `
  Embark on a miraculous journey with a day tour to Luxor from Safaga Port, where you will traverse a golden path back in time to witness the grandeur of the ancient Egyptian civilization. Marvelous Egypt Travel, renowned as the best travel agency in Egypt, provides our clients with exceptional services, including expert Egyptologist tour guides and private A/C vehicles.
  During this one-day tour from Safaga to Luxor, our guests will experience the magnificence of Upper Egypt as they explore Luxor’s renowned tourist attractions. Discover the timeless treasures of the ancient Egyptian pharaohs by visiting the Valley of the Kings, Karnak Temples, Hatshepsut Temple, and the Colossi of Memnon. After an enriching day, we will drive you back to Safaga Port.
  Experience an unforgettable holiday amidst the majestic wonders of Luxor by booking this extraordinary day trip.
  `,
    reviews: "86 Reviews",
    priceSale: "$160",
    priceOriginal: "$160",
    rating: 5,
    tourPlans: [
      {
        title: "Day Tour from Safaga to Luxor",
        des: `
Morning:
Pickup from Safaga Port:

Our representative will greet you at the cruise exit door at Safaga Port and accompany you on a scenic 3-hour drive to Luxor. Upon arrival, your day tour will begin with visits to the following:
Valley of the Kings:

During the new kingdom (1570 – 1050 BC) a magical time vault known as the Valley of the Kings was made in the heart of the sacred hill. The royal gates of the kings contain 63 tombs filled with golden artifacts and colorful decorations of the great Pharaohs such as Ramses II, Hatshepsut, Seti I, Tutankhamen, and various more.
Hatshepsut Temple:

This glorious and beautiful colossal temple was made for Queen Hatshepsut (1507–1458 BC) to be the holy of holies that came into existence in 1479 BC to honor the sun god Amun and immortalize the great heritage of Hatshepsut. The enchanting temple of Hatshepsut was carved at the rocky hills of Deir El Bahari for 15 years to become one of the most preserved architectural and archaeological constructions in the history of Egypt.
Colossi of Memnon:

The everlasting statues of Colossi of Memnon of Pharaoh Amenhotep III (1386 - 1349 BC) are giant masterpieces that were constructed in 1350 BC but reassembled various times during the Greco-Roman period. It was named for Memnon, the Greek historical figure.
Afternoon:
Lunch Time:

Enjoy a delightful lunch on a picturesque island.
Karnak Temple:

The grand Karnak temple complex is known as the most selected of places by the divine power of ancient Egypt showcasing the religious dedication and the architectural mastery of the ancient Egyptians. It was built for honoring the Theban triad of Amun, Mut, and Khonsu. The blessed Karnak temple's complex construction process came to be 2000 BC to 30 BC on 247 acres of divine lands. The enchanting Avenue of Sphinxes, hypostyle hall, and the religious are famous for being the most enchanting examples of archaeological architecture and art.
Luxor Temple:

Luxor Temple is a majestic temple complex located on the east bank of the Nile River. Built around 1400 BC, it was dedicated to the rejuvenation of kingship and was constructed by Amenhotep III and completed by Tutankhamun and Horemheb. The temple features massive pylons, a grand colonnade, and numerous statues and carvings, showcasing the grandeur of ancient Egyptian architecture and art.
Evening:
Return to Safaga Port:

Finally, we will transfer you back to Safaga Port to end your day tour from Safaga to Luxor.
`,
      },
    ],
    included: [
      "Pick up services from Safaga port to Luxor and return.",
      "All transfers by a private modern A/C vehicle. ",
      "Private Egyptologist guide during your journey. ",
      "Mineral water on board the vehicle",
      "Lunch during your tour. ",
      "Entrance fees for all sightseeing are mentioned.",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Tipping",
      "Any extras not mentioned in the itinerary.",
      "Optional Experiences available at an additional cost",
    ],
  },

  17: {
    title: "4 Days Christmas Cairo and Giza Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "4 days",
    des: "Experience a divine adventure across the immortal historical and cultural wonders of Cairo with the 4-day Cairo Christmas Egypt tour package. Provided by Marvelous Egypt Travel, this tour offers exquisite services including a private A/C vehicle and a seasoned Egyptologist tour guide. The tour covers Cairo’s most magnificent and diverse tourist attractions, including the Giza Pyramids, the Sphinx, Memphis City, Muizz Street, and the Khan El Khalili Bazaar. Make enchanting memories this Christmas with a visit to Egypt’s historic landmarks.",
    reviews: "132 Reviews",
    priceSale: "$600",
    priceOriginal: "$600",
    rating: 5,
    tourPlans: [
      {
        title: "Arrival in Cairo: ",
        des: ` Arrive at Cairo Airport, where our representative will assist with your luggage and transfer you to your hotel in a private, air-conditioned vehicle.
Dinner Cruise:

In the evening, enjoy a Dinner Cruise on the Nile River with a meal, belly dancing, folklore music, and a mesmerizing Tannoura dance.
Meals:

Dinner.
Overnight:

Cairo Hotel.
`,
      },
      {
        title: "Giza Pyramids Complex: ",
        des: ` Visit the Great Pyramid of Giza, the Great Sphinx, and the Valley Temple.
Lunch:

Enjoy a delicious Egyptian lunch.
Saqqara Step Pyramid:

Explore the pyramid complex designed by Imhotep for Pharaoh Djoser.
Memphis City:

Discover the ancient capital of Egypt and the center of worship for Ptah, the god of creation and artwork.
Meals:

Breakfast, Lunch.
Overnight:

Cairo Hotel.
`,
      },
      {
        title: "The Egyptian Museum: ",
        des: ` Explore the museum's extensive collection of ancient Egyptian artifacts.
Lunch:

Savor a delightful lunch at a local Cairo restaurant.
The Hanging Church:

Visit the ancient Coptic church built atop a Roman fortress.
National Museum of Egyptian Civilization:

View 50,000 artifacts spanning 5,000 years of Egyptian history, including 28 royal mummies.
Al Muizz Street:

Walk through the historic street filled with artifacts and goods.
Khan El Khalili Bazaar:

Shop in the historic bazaar with traditional shops, cafes, and remarkable Islamic architecture.
Meals:

Breakfast, Lunch.
Overnight:

Cairo Hotel.
`,
      },
      {
        title: "Departure:",
        des: ` After breakfast, transfer to Cairo Airport for your departure.
Meals:

Breakfast.
`,
      },
    ],
    included: [
      "Accommodation: 3 Nights accommodation in Cairo at a 5-star hotel",
      "Meals: Meals as mentioned in the itinerary.",
      "Entrance Fees: Entrance Fees to all Sites in the Itinerary. ",
      "Guided Tours: Expert Egyptologist guides in English, French, and Spanish throughout the tour",
      "Transport: All Transfers by a Private A/C Car",
      "	Additional Services:Free airport meet and greet transfer",
    ],
    excluded: [
      "Flights:International flights before and after the tour",
      "Insurance:Travel insurance is mandatory",
      "Optional Experiences: Available at an additional cost. ",
      "Egypt Visa: USD 25 per passport",
      "Tipping:Recommended. ",
      "Personal Expenses:Laundry, sauna, telephones, etc. ",
      "SIM Card:Available for purchase at Cairo International Airport. ",
    ],
  },

  18: {
    title: "6 Days Easter Cairo, Giza, Luxor, Aswan and Abu Simbel Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "6 days",
    des: "Embark on a 6-day Egypt Easter tour package that reveals the world’s greatest historical marvels. With Marvelous Egypt Travel, you will enjoy top-notch services including a private A/C vehicle, comfortable accommodations, and an experienced Egyptologist tour guide. This tour will take you through Cairo, Luxor, and Aswan, showcasing ancient Egyptian pyramids, the Great Sphinx, Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, Philae Temple, Abu Simbel Temple, and more.",
    reviews: "465 Reviews",
    priceSale: "$855",
    priceOriginal: "$855",
    rating: 5,
    tourPlans: [
      {
        title: "Arrival To Egypt Land Of Pharaohs",
        des: `
Experience:

Arrival at Cairo Airport, meet and assist by our representative. Transfer to 5-star hotel in Cairo for check-in. Enjoy a Dinner Cruise on the Nile with belly dancing and Tannoura show.
Meals:

Dinner cruise on the Nile.
Overnight:

Cairo Hotel.
`,
      },
      {
        title: "Uncover The Wealth Of Ancient Relics Of Egypt",
        des: `
Experience:

Visit Giza Pyramids Complex, The Great Pyramid, The Great Sphinx, The Valley Temple, The Grand Egyptian Museum, and The Egyptian Museum. Flight to Luxor, transfer to 5-star hotel for check-in.
Meals:

Breakfast at the hotel.
Lunch at a local restaurant in Cairo.
Overnight:

Luxor Hotel.
`,
      },
      {
        title: "Witness The Glory Of The Ancient Gems In Luxor",
        des: `
Experience:

Visit Valley of the Kings, Hatshepsut Temple, Colossi of Memnon, and Karnak Temple. Then Enjoy a boat trip on the Nile.
Meals:

Breakfast at the hotel.
Lunch on an island with a boat trip on the Nile.
Overnight:

Luxor Hotel.
`,
      },
      {
        title: "Unleash Your Spirit With The Scenic Splendors Of Aswan",
        des: `
Experience:

Train to Aswan, visit Aswan High Dam, The Unfinished Obelisk, and Philae Temple.
Meals:

Breakfast at the hotel.
Lunch at a local restaurant in Aswan.
Overnight:

Aswan Hotel.
`,
      },
      {
        title: "Witness The Grandeur Of Abu Simbel",
        des: `
Experience:

Private transfer to Abu Simbel Temples. Return to Aswan for lunch. Flight to Cairo, transfer to hotel for overnight.
Meals:

Breakfast boxes.
Lunch at a local restaurant in Aswan.
Overnight:

Cairo Hotel.
`,
      },
      {
        title: "End Of Your Egypt Easter Holiday Package",
        des: `
Experience:

Transfer to Cairo Airport for departure.
Meals:

Breakfast at the hotel`,
      },
    ],
    included: [
      "Accommodation:Accommodations in 5-star hotel in Cairo for 2 nights, a 5-star hotel in Luxor for 2 nights, and a 5-star hotel in Aswan for 1 night.",
      "Meals:Meals are included during your itinerary.",
      "Domestic Flights: Domestic flights between Cairo, Aswan, and Luxor. ",
      "Entrance Fees: Entrance fees to all sites indicated on the itinerary. ",
      "Guided Tours: Expert Egyptologist guide during your trip.",
      "Transport:All transfers by private A.C vehicles. ",
      "Additional Services: Meet and greet transfer service by our employees at the airports, and all service charges and taxes. ",
    ],
    excluded: [
      "International Airfare: International flights before and after the tour. ",
      "Insurance:Travel insurance is mandatory. ",
      "Optional Experiences: Available at an additional cost. ",
      "Egypt Visa: USD 25 per passport. ",
      "Tipping: Recommended",
      "Personal Expenses:Laundry, sauna, telephones, etc. ",
      "SIM Card:Available for purchase at Cairo International Airport. ",
    ],
  },

  19: {
    title: "8 Days Christmas Cairo and Nile Cruise Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "8 days",
    des: "Experience the divine beauty and rich history of Egypt with this 8 Days Christmas Cairo and Nile Cruise tour. This luxurious journey covers the magnificent cities of Cairo, Luxor, and Aswan, featuring private air-conditioned vehicles, exceptional accommodations, and a 5-star Nile cruise. Guided by an experienced Egyptologist, you’ll unravel the mysteries and splendors of iconic destinations while enjoying a blend of relaxation and excitement.",
    reviews: "201 Reviews",
    priceSale: "$1980",
    priceOriginal: "$1980",
    rating: 5,
    tourPlans: [
      {
        title: "Arrival in Cairo: ",
        des: ` A representative will meet you at Cairo International Airport, assist with entry formalities, and transfer you to a luxurious 5-star hotel.
Sound and Light Show:

In the evening, enjoy the spellbinding Sound and Light Show at the Giza Complex, followed by dinner at an oriental restaurant.
Meals:

Dinner.
Overnight:

Cairo Hotel.
`,
      },
      {
        title: "Giza Pyramids: ",
        des: ` Visit the Great Pyramid, the Sphinx, and the Valley Temple.
Saqqara Step Pyramid:

Explore the world's first pyramid built for Pharaoh Djoser.
Memphis City:

Discover the ancient capital of Egypt.
Flight to Luxor:

Fly to Luxor, check in to your hotel.
Meals:

Breakfast, Lunch.
Overnight:

Luxor Hotel.
`,
      },
      {
        title: "Karnak Temple: ",
        des: ` Explore this sprawling complex dedicated to the Theban triad.
Luxor Temple by Night:

Visit Luxor Temple, a haven for the crowning of kings.
Nile Cruise:

Check in, have lunch, and relax.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Valley of the Kings: ",
        des: ` Visit the tombs of ancient Egyptian pharaohs.
Colossi of Memnon:

See the two massive stone statues of Pharaoh Amenhotep III.
Hatshepsut Temple:

Explore the temple dedicated to Queen Hatshepsut.
Sail to Edfu:

Enjoy lunch and dinner onboard.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Edfu Temple: ",
        des: ` Visit the temple dedicated to Horus.
Kom Ombo Temple:

Explore the temple dedicated to Sobek and Haroeris.
Sail to Aswan:

Enjoy lunch and dinner onboard.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Aswan High Dam:",
        des: ` Visit the monumental dam.
Unfinished Obelisk:

See the ancient obelisk dedicated to Queen Hatshepsut.
Philae Temple:

Explore the temple dedicated to the goddess Isis.
Meals:

Breakfast, Lunch, Dinner.
Overnight:

Onboard the Cruise.
`,
      },
      {
        title: "Flight to Cairo: ",
        des: ` Transfer to Aswan Airport, fly to Cairo.
Egyptian Museum:

Visit the museum housing Egypt's historical treasures.
National Museum of Egyptian Civilization:

Explore this grand museum.
Hanging Church:

Visit the church with captivating decorations.
Al Muizz Street and Khan El Khalili Bazaar:

Explore the historic street and market.
Meals:

Breakfast, Lunch.
Overnight:

Cairo Hotel.
`,
      },
      {
        title: "Departure:",
        des: ` Enjoy breakfast at the hotel, then transfer to Cairo International Airport for your flight home.
Meals:

Breakfast.
`,
      },
    ],
    included: [
      "Accommodation:4 Nights accommodation on board 5-star Nile Cruise, 2 Nights Accommodation at a 5-star Hotel in Cairo, and 1 Night Accommodation at a 5-star Hotel in Luxor.",
      "Domestic Flights: Flight Tickets from Cairo to Luxor, and from Aswan to Cairo",
      "Entrance Fees:Entrance fees to all the places in the itinerary",
      "Meals:Meals as mentioned in the itinerary.",
      "Guided Tours: Expert Egyptologist guides in English, French, and Spanish throughout the whole tour",
      "Transport: Private A.C. vehicle during the whole of your tours",
      "Additional Services: Free airport meet and greet transfer, and all Service Charges and Taxes",
    ],
    excluded: [
      "International Flights:International flights before and after the tour",
      "Insurance: Travel insurance is mandatory",
      "Optional Experiences: Available at an additional cost.",
      "Egypt Visa: USD 25 per passport",
      "Tipping:Recommended",
      "Personal Expenses: Laundry, sauna, telephones, etc",
      "SIM Card: Available for purchase at Cairo International Airport.",
    ],
  },

  20: {
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
  },

  21: {
    title: "8 Days Christmas Cairo and Nile Cruise Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "8 days",
    des: "",
    reviews: "335 Reviews",
    priceSale: "$1980",
    priceOriginal: "$2475",
    rating: 5,
    tourPlans: [
      {
        title: "",
        des: "",
      },
    ],
    included: [""],
    excluded: [""],
  },
  22: {
    title:
      "8 Days Easter Cairo, Giza, Aswan, Kom Ombo, Edfu, Luxor and Hurghada Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "4 days",
    des: "",
    reviews: "365 Reviews",
    priceSale: "$1250",
    priceOriginal: "$1562",
    rating: 5,
    tourPlans: [
      {
        title: "",
        des: "",
      },
    ],
    included: [""],
    excluded: [""],
  },
  23: {
    title: "One-Day Pyramids Tour from Cairo Airport",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 Day",
    des: `Embark on a mystical quest through the history of ancient Egypt with our exclusive Pyramids tour from Cairo Airport. Marvelous Egypt Travel is proud to offer our clients the finest services, including expert Egyptologist tour guides and private A/C vehicles. Experience the wonders of ancient Egypt, including the three pyramids, the Sphinx, the Valley Temple, and Memphis City. Enjoy 24/7 customer service, seamless transportation, and professional tour guides. Book this marvelous tour and turn your dream vacation into reality.`,
    reviews: "315 Reviews",
    priceSale: "$100",
    priceOriginal: "$100",
    rating: 5,
    tourPlans: [
      {
        title: "Day Tour To Pyramids From Cairo Airport",
        des: `

Your journey begins with a pickup from Cairo Airport, followed by a transfer in a private A/C vehicle to:
Giza Pyramids Complex:

The Giza Pyramids Plateau, constructed around 2600 BC, showcases the grandeur of ancient Egypt. Explore the three pyramids of Menkaure, Khafre, and Khufu, along with six smaller pyramids, the Sphinx, and the Valley Temple.
The Great Pyramid:

The Pyramid of Khufu, built in 2580 BC, stands as the last surviving wonder of the ancient world. This monumental structure, standing 147 meters tall and weighing 5.7 million tons, features a series of inner rooms and pathways.
The Great Sphinx:

Carved from limestone in 2500 BC, the Sphinx represents Pharaoh Khafre and is the oldest monumental sculpture in the world.
The Valley Temple:

This temple, dating back to the 26th century BC, served as a site for the purification and mummification of 4th dynasty kings and queens.
The Grand Egyptian Museum:

A treasure trove of ancient Egyptian artifacts, this museum houses remarkable items such as the Hanging Obelisk, the statue of King Ramses II, statues of Ptolemaic kings and queens, and more. A VIP ticket offers access to additional artifacts.
Lunch Time:

Enjoy a delicious lunch at a local restaurant before continuing your tour.
Memphis City:

Founded in 2925 BC by Pharaoh Narmer, Memphis was the first capital of unified Egypt, under the protection of Ptah, the god of craftsmanship.

Then you will be transferred back to Cairo Airport by a private A/C vehicle.
`,
      },
    ],
    included: [
      "Pick up and drop off service from Cairo Airport",
      "All transfers by a private air-conditioned vehicle",
      "Private Egyptologist guide in your own language",
      "Mineral water on board the vehicle during the tour. ",
      "Lunch at a local restaurant.",
      "Entrance fees for all sightseeing mentioned",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the itinerary.",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },
  24: {
    title: "Day Tour to Abu Simbel from Cairo by Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: "Embark on a magical day trip to Abu Simbel from Cairo, showcasing the southern legacy of the ancient Egyptian civilization. Marvelous Egypt Travel, the best travel agency in Egypt, will provide you with an Egyptologist tour guide and a private A/C vehicle for this incredible tour. You’ll fly from Cairo to Aswan and experience the glorious treasures of Abu Simbel Temple, then return to Cairo and transfer to your hotel. Book this majestic holiday and discover the treasures of southern Egypt.",
    reviews: "325 Reviews",
    priceSale: "$385",
    priceOriginal: "$385",
    rating: 5,
    tourPlans: [
      {
        title: "Day Tour to Abu Simbel from Cairo by Plane",
        des: `
Morning:

Pickup from your hotel in Cairo and transfer to Cairo airport for your flight to Aswan. Upon arrival in Aswan, meet your private tour guide and transfer in a modern private A/C car to visit Abu Simbel temples.
Abu Simbel Temples:

The celestial Abu Simbel Temple is a majestic archaeological wonder created by Ramses the Great in 1264 BC to eternalize the golden legacy of Ozymandias, honor his beloved wife Queen Nefertari, and commemorate his triumph at the Battle of Kadesh. In the 70s, it became part of the UNESCO World Heritage Site known as the "Nubian Monuments" and is famous for hosting the sun festival on February 22 and October 22.
Lunch Time:

Return to Aswan for lunch and enjoy the marvelous beauty of the city.
Afternoon:

Catch your flight back to Cairo and transfer to your hotel, concluding your day tour to Abu Simbel from Cairo by plane.
`,
      },
    ],
    included: [
      "Flight tickets from Cairo to Aswan and return. ",
      "Entrance fees to the sights.",
      "Transfer by a private air-conditioned vehicle",
      "Private Egyptologist guide during your trip. ",
      "Mineral water on board the vehicle during the tour",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program",
      "Tipping",
      "Optional Experiences available at an additional cost.",
    ],
  },
  25: {
    title: "Day Trip to Alexandria from Cairo by Car",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: "Experience the wonders of the Greco-Roman period in the miraculous city of Alexandria. This day trip from Cairo by car will be a unique opportunity to explore the most famous Alexandria tourist attractions. Marvelous Egypt Travel, the finest travel agency in Egypt, provides the best service with a professional Egyptologist tour guide and a private A/C vehicle. Visit the Alexandria Library, the Catacombs of Kom El Shoqafa, Pompey’s Pillar, and Qaitbay Citadel. Book this magical tour and uncover the rare and exotic wonders of ancient Egypt.",
    reviews: "286 Reviews",
    priceSale: "$45",
    priceOriginal: "$45",
    rating: 5,
    tourPlans: [
      {
        title: "Day Trip to Alexandria from Cairo by Car",
        des: `
Morning:

Transfer from your hotel in Cairo to Alexandria by car with your private tour guide. Upon arrival, visit some of the top Alexandria tourist attractions:
Catacombs of Kom El Shoqafa:

A Roman burial site revealing the merging of Egyptian and Roman art and architecture. Descend below the ground to visit the tomb and Caracalla Hall.
Pompey's Pillar:

An 82-foot (25-meter) granite column built to honor Emperor Diocletian, who freed the besieged city and brought food to its starving people.
Qaitbay Citadel:

A 15th-century fortress located on the Mediterranean seacoast, established in 1477 AD by Sultan Al-Ashraf Qa'it Bay, situated in the same place as the Pharaoh's Island.
Lunch Time:

Enjoy lunch at a seafood restaurant, then continue your tour:
Alexandria Library:

A copy of every book published in the world is kept in the library, making it one of the great literary sites in the world. It also houses several exhibitions relating to the history of Egypt and a display of rare antique books.
Afternoon:

Drive back to Cairo and transfer you to your hotel.
`,
      },
    ],
    included: [
      "Pickup services from your hotel and return.",
      "All transfers by a private air-conditioned vehicle.",
      "Lunch at a local restaurant in Alexandria",
      "Entrance fees for all sightseeing mentioned",
      "Private Egyptologist guide during your trip. ",
      "Mineral water on board the vehicle during the tour. ",
      "All taxes and service charges.",
    ],
    excluded: [
      "Any extras not mentioned in the program",
      "Tipping",
      "Optional Experiences available at an additional cost",
    ],
  },
  26: {
    title: "Day Tour from Cairo to Luxor By Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Our day tour from Cairo to Luxor by plane offers a divine journey to the greatest archaeological wonders ever built, showcasing the devoted faith, artistic inspiration, and imagination of ancient Egyptian royalty. Marvelous Egypt Travel provides guests with the finest service, including a private A/C vehicle and a professional Egyptologist tour guide. This private Luxor tour from Cairo includes discovering breathtaking temples and tombs in one day trip, witnessing the majestic ruins such as Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, and Colossi of Memnon, before catching the flight back to Cairo and transferring to your hotel. Book now and explore all the immortal wonders from the heavens.`,
    reviews: "315 Reviews",
    priceSale: "$380",
    priceOriginal: "$380",
    rating: 5,
    tourPlans: [
      {
        title: "Day Tour from Cairo to Luxor By Plane",
        des: `
Morning:

Our representative will pick you up from your hotel in Cairo and transfer you to the airport for a flight to Luxor. Upon arrival, you will be met and assisted by your Egyptologist guide who will accompany you on your day tour from Cairo to Luxor by plane. Explore all the famous historical locations including:
Valley of the Kings:

The celestial Valley of the Kings is a timeless chamber found at the deepest part of the earth in the heart of a mythical hill. It contains the history and treasures of the rulers from the New Kingdom (1570 – 1050 BC), with 63 tombs of very renowned names like the great pharaoh Ramses II, Hatshepsut, Seti I, pharaoh Tutankhamen, and more.
Hatshepsut Temple:

The holy temple of Hatshepsut (1507–1458 BC) was created to honor her everlasting heritage as one of the most successful pharaohs in history and the blessings of the sun god Amun. It is famous for being the most ideal example of ancient classical architecture in Egypt.
Colossi of Memnon:

The Colossi of Memnon, constructed in 1350 BC for Pharaoh Amenhotep III, is a unique archaeological wonder. It gained fame among the ancient Greeks and Romans and contains great inscriptions that showcase his legacy.
Lunch Time:

Enjoy lunch on an island, including a boat trip on the Nile River.
Karnak Temple:

The divine Karnak Temple is a religious attraction created by angelic figures to be the most selected of places. The Pr-Imn house of Amon honors the Theban triad. The construction of the temple started in the Middle Kingdom and continued all the way to the Greco-Roman period (2055 BC to 100 AD).
Afternoon:

Finally, transfer to Luxor airport for a flight back to Cairo and then transfer to your hotel to end your day tour to Luxor from Cairo.
`,
      },
    ],
    included: [
      "Domestic flights (Cairo - Luxor) - (Luxor - Cairo) ",
      "Pick-up services from your hotel and return ",
      "Entrance fees to the mentioned historical places",
      "All transfers by a private modern air-conditioned vehicle",
      "Private tour guide during the day trip ",
      "Mineral water during your trip ",
      "Lunch meal during your day trip",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping. ",
      "Optional Experiences available at an additional cost.",
    ],
  },
  27: {
    title: "Coptic Cairo Day Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `The Coptic Cairo day tour will be a blessed adventure of dreams. Marvelous Egypt Travel will provide the most excellent service, including a professional Egyptologist tour guide and a private A/C vehicle, as expected from the best travel agency in Egypt. Guests on this Coptic Cairo day tour will enjoy the most captivating Coptic sites in Cairo City, which hold some of the most bewitching stories, information, and secrets regarding the history of Christianity in Egypt. Christianity was the main religion in Egypt before Islam, and you will find a magnificent collection of the best Coptic sites and landmarks in our suggested one-day Coptic Cairo tour. Book this magical tour and explore the Coptic treasures of Cairo.`,
    reviews: "286 Reviews",
    priceSale: "$40",
    priceOriginal: "$40",
    rating: 5,
    tourPlans: [
      {
        title: "Coptic Cairo Day Tour",
        des: `
Morning:

Our representative will pick you up to start your Coptic Cairo day tour by joining one of our exceptional tour guides who will show you some of the most fascinating Coptic sites all around Old Cairo.
The Hanging Church:

The Hanging Church, referred to as the Suspended Church, got its name since it was established on the southern gate of the Roman Fortress. It is a unique church in Old Cairo, notable for its roof, which is shaped like the Ark of Noah. It served as the residence of the Coptic Patriarch from the 7th to the 13th centuries.
Ben Ezra Synagogue:

Dating back to the 9th century, the Ben Ezra Synagogue occupies the shell of a 4th-century Christian church. It is believed to be the site where the prophet Jeremiah gathered all the Jews after the destruction of the Jerusalem Temple in the 6th century by Nebuchadnezzar. Restored in the 12th century, it holds secrets and mysteries of the North African Jewish community from the 11th to the 13th centuries.
Lunch Time:

Enjoy a lunch meal at a wonderful local restaurant before continuing your day tour.
Abu Serga Church:

Abu Serga Church is believed to be built on the spot where the Holy Family, including Mary, Jesus Christ, and Joseph, rested after their journey into Egypt. This church has great historical importance, with many patriarchs of the Coptic Church being erected there.
Virgin Mary Church:

The Virgin Mary Church, located in Haret Zuweila, is believed to be the oldest in the area, built during the 10th century, although some writings suggest it dates to the 12th century at the consecration of the New Cairo Bishop. It served as the seat of the Orthodox Pope of Alexandria from 1400 AD to 1520 AD.
Afternoon:

Finally, we will transfer you back to your hotel in Cairo/Giza in one of our private A/C vehicles to end your day tour to Cairo’s main Coptic sites.
`,
      },
    ],
    included: [
      "A lunch meal.",
      "All transfers will be in a modern A/C vehicle. ",
      "Private Egyptologist guide during your trip.",
      "Pickup and drop-off at your hotel in Cairo/Giza.",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost",
    ],
  },
  28: {
    title: "Day Trip to Islamic Cairo",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `A day trip to Islamic Cairo is a divine voyage showcasing the golden glory of the greatest civilization on earth. Marvelous Egypt Travel will provide all our clients with the most ideal services, including a private A/C vehicle and a professional Egyptologist tour guide, as expected from the best travel agency in Egypt. All our clients will witness the beauty and greatness of the best Islamic Cairo attractions. Join us on a fabulous day trip to Islamic Cairo. Your expert tour guide will take you to explore Khan El Khalili bazaar, Salah El-Din Citadel, Sultan Hassan and Ibn Tulun Mosques, and many more Old Cairo masterpieces by a deluxe air-conditioned car, then transfer you back to your hotel. Book this blessed excursion and explore all the immortal treasures of Islamic Cairo.`,
    reviews: "123 Reviews",
    priceSale: "$40",
    priceOriginal: "$40",
    rating: 5,
    tourPlans: [
      {
        title: "Day Trip to Islamic Cairo",
        des: `
Morning:

We will pick you up from your hotel in Cairo to join our professional tour guide in a private air-conditioned vehicle to visit the best historical highlights of Islamic Cairo.
Salah El Din Citadel:

Salah El-Din Citadel is one of the most prestigious military castles constructed in the Middle Ages. Its strategic location controls the cities of Cairo and Al Fustat, providing defensive importance. The Citadel was erected during the 12th century to defend Cairo against the Crusaders and served as the seat of the government during the ruling periods of the Ayyubids, Mamluks, and Ottomans.
Mohamed Ali Mosque:

Mohamed Ali Mosque proudly stands as the highest point inside Cairo Citadel. It was established by Mohammed Ali Pasha in 1830 AD, with construction continuing until his death in 1848 AD. The exterior design was inspired by the Sultan Ahmad Mosque in Istanbul, and it is one of the most significant Islamic attractions in Cairo.
Lunch Time:

Enjoy a lunch meal at a local restaurant before continuing your day tour.
Sultan Hassan Madrassa and Mosque:

Sultan Hassan Madrassa and Mosque is one of the rarest examples of early Mamluk architecture, founded between 1356 AD and 1363 AD. Built out of giant blocks of stone, it symbolizes the culmination of architectural projects during the Mamluk reign.
Al Rifai Mosque:

Another impressive Islamic monument in Cairo, Al Rifai Mosque, was founded by Khoshiar Hanim, the mother of Khedive Ismail. Construction began in 1869 AD and was completed in 1911 AD, with a 25-year hiatus from 1880 to 1905 AD. The mosque serves as the burial site for Mohamed Ali's family members.
Ibn Tulun Mosque:

The oldest and largest mosque in Cairo, Ibn Tulun Mosque, was established between 876 and 879 AD by Ahmed Ibn Tulun, commissioned by the Abbasid Caliph to govern Al Fustat. The mosque's interior design reflects the Abbasid architectural style, featuring beautifully decorated arches and a large courtyard.
Al Muizz Street:

Al Muizz Street provides a magical journey through Cairo's living miracles. This attractive cultural marvel showcases the golden street of Cairo, which dates back to the Fatimid period in the 10th century AD. It is a golden labyrinth filled with incredible monuments, artifacts, and houses.
Khan El Khalili Bazaar:

Khan El Khalili Bazaar is an ancient renowned souk in central Cairo, founded as a large trade center during the Mamluk reign. Dating back to the 14th century, the bazaar is filled with cafes and restaurants, including El Fishawy, the city's oldest café.
Afternoon:

Finally, we will drive you back to your hotel to end your day trip.
`,
      },
    ],
    included: [
      "The service of pick-up from your hotel and return. ",
      "Egyptologist tour guide during the tours",
      "A deluxe private air-conditioned vehicle throughout your trip",
      "Admission fees to all the sights listed in the itinerary.",
      "Lunch meal",
      "Bottled water on the vehicle",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program",
      "Tipping",
      "Optional Experiences available at an additional cost",
    ],
  },
  29: {
    title: "Scuba Diving Excursion in Hurghada",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `The Scuba Diving Trip from Hurghada will showcase the blessed nature of the epic Red Sea. Marvelous Egypt Travel, the best travel agency in Egypt, will provide all our clients with the best service from our private diving guide and A/C vehicle during the trip across the marine treasures of the divine Red Sea. Our guests will enjoy a magical diving trip in Hurghada, with an amazing dive in the morning and another dive in the afternoon at a different location to discover all the marine marvels located across the divine Red Sea. Book this incredible Diving Hurghada excursion and discover the magical marine treasures of the Red Sea.`,
    reviews: "254 Reviews",
    priceSale: "$30",
    priceOriginal: "$30",
    rating: 5,
    tourPlans: [
      {
        title: "Scuba Diving Excursion in Hurghada",
        des: `
Morning:

You will be transferred from your hotel for a one-day excursion on the boat with the instructor, who will provide a personal briefing followed by one dive in the morning.
Lunch Time:

Enjoy a delicious meal during the excursion.
Afternoon:

After lunch, you will have another dive at a different site to explore more marine marvels. The dives are conducted on a one-to-one basis with the instructor. The time in the water depends on the guest but should be around 30 or 40 minutes. Diving is conducted following the completion of a medical form, which we can forward to you prior to your arrival to ensure suitability.
Evening:

Finally, transfer back to your hotel.
`,
      },
    ],
    included: [
      "Pick up services from your hotel in Hurghada and return",
      "Experienced instructor on the boat.",
      "Mineral water and soft drinks.",
      "Lunch meal.",
      "All service charges and taxes",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping. ",
      "Optional Experiences available at an additional cost.",
    ],
  },
  30: {
    title: "Private Snorkeling in Hurghada",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Private snorkeling in Hurghada will be a magical experience showcasing all the celestial wonders found at the belly of the Red Sea. Marvelous Egypt Travel, the best travel agency in Egypt, will provide all our clients with the best service from our private snorkeling instructor and comfortable A/C vehicle. We will get to swim with the magical creatures of rare colorful fishes and coral reefs found on the blessed beaches of the city resort of Hurghada and enjoy their time to the fullest in the blessed Mahmya Island, Giftun Island, and the Dolphin area. Book this snorkeling excursion in the beautiful waters of Hurghada and fill every moment with thrill and beauty.`,
    reviews: "325 Reviews",
    priceSale: "$50",
    priceOriginal: "$50",
    rating: 5,
    tourPlans: [
      {
        title: "Private Snorkeling in Hurghada",
        des: `The most magical snorkeling adventure is waiting for you across the divine waters of the Red Sea. You can visit Mahmya Island OR Giftun Island OR the Dolphin area. Our representative will pick you up from your hotel for a fantastic private snorkeling trip with desert island relaxation on the beautiful Red Sea. We will do our snorkeling in different spots, full of corals and magnificent colorful fish, with a chance to swim with dolphins. Enjoy water sports activities on Giftun Island and the national park with an open buffet lunch aboard the boat. Finally, return back to the jetty and then transfer to your hotel in Hurghada.`,
      },
    ],
    included: [
      "Pick up and return service to your hotel.",
      "All transfers by a private vehicle. ",
      "Snorkeling equipment. ",
      "Lunch during tour.",
      "Professional instructor. ",
      "Mineral water and soft drinks.",
      "All service charges and taxes",
    ],
    excluded: [
      "Any extras not mentioned in the program",
      "Tipping",
      "Optional Experiences available at an additional cost.",
    ],
  },
  31: {
    title: "Hurghada Super Safari by Quads",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: "Hurghada Super Safari Trip is a majestic travel experience showcasing the natural treasures of the Egyptian Sahara and the humble nature of the Bedouin tribe. Marvelous Egypt Travel, the best travel agency in Egypt, will provide all our clients with the best service from our private safari guide and comfortable quad bikes & A/C vehicle during the trip across the treasures of the divine desert of the eastern desert. In this lovely adventure, all our clients will enjoy the most magical Hurghada Super Safari trip through a quad bike followed by a camel ride, and finally, a B.B.Q dinner then we drive you back to your hotel. Book this unique day trip and live this lovely trip between the divine treasures of Hurghada’s desert.",
    reviews: "315 Reviews",
    priceSale: "$20",
    priceOriginal: "$20",
    rating: 5,
    tourPlans: [
      {
        title: "Hurghada Super Safari by Quads",
        des: `

At high noon, all our clients will be taken by a private A/C vehicle to the quad bikes station to board one with your tour guide so you can begin your journey across the blessed sands of the eastern Sahara. Once you reach the Bedouin village, you will have a delicious BBQ dinner with Bedouin people using the awesome desert sunset as your backdrop. You will have an hour camel ride session on the sands of the desert. Then, you will be met by your Bedouin hosts and introduced to their way of life. Settle in for the evening and party with the native public while gazing upon the spectacular desert sunset, before returning to your Hurghada hotel.
Meals:

Dinner.
`,
      },
    ],
    included: [
      "Pick up from the hotel to the quad station. ",
      "Driving the quad 45 km in 2 ways.",
      "Visiting the Bedouin village. ",
      "Tour in the Bedouin village.",
      "	BBQ Dinner at the Bedouin Village.",
      "Watch the sunset",
      "Back to the hotel",
    ],
    excluded: [
      "Any extras not mentioned in the program.",
      "Tipping",
      "Optional Experiences available at an additional cost.",
    ],
  },

  32: {
    title: "Breathtaking Luxor Day Trip from Hurghada",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Luxor day trip from Hurghada will offer a golden entrance leading inside the heart of a living miracle to feel the magical touch of the gods in this majestic city of Luxor. All our guests will get to discover all the colossal wonders of the holy city of Luxor which include the Karnak temples Complex, Hatshepsut temple, Valley of the kings, and various more. With our Luxor day trip from Hurghada, our clients will get inside the city of a thousand gates and explore the ancient Egyptian architecture in its finest form showcasing the vast heritage of ancient Egyptian culture while enjoying the excellent services of a skilled tour guide and a relaxing A/C Vehicle presented from Marvelous Egypt Travel, the best travel agency in Egypt. Everyone will get a glimpse of the purest form of ancient beauty which is waiting for you, so book now and make every moment count.`,
    reviews: "286 Reviews",
    priceSale: "$75",
    priceOriginal: "$75",
    rating: 5,
    tourPlans: [
      {
        title: "Day Tour to Luxor from Hurghada",
        des: `
Morning:

You will be picked up from your hotel in Hurghada then taken by an air-conditioned car to Luxor to fully explore:
Valley of the Kings:

A portal to paradise used by the greatest kings and queens of Egypt's new kingdom (1570-1070 BC). The valley contains 63 tombs filled with amazing treasures, artifacts, statues, and phenomenal decorations, and the remains of pharaohs such as Ramses II, Amenhotep I, Hatshepsut, and Tutankhamun. The Valley of the Kings became a World Heritage site by UNESCO in 1979.
Hatshepsut Temple:

A vision from paradise known as Djeser-Djeseru "Holy of Holies," a symbol of idealism, allure, and might to one of the most successful rulers in the history of ancient Egypt, Queen Hatshepsut, dating back to 1479 BC. The design of the temple is mesmerizingly brilliant based on the style of Classical Architecture of the new kingdom.
Colossi of Memnon:

Two colossal blocks of quartzite sandstone standing at 18 m (60ft) tall and weighing 720 tons each, resembling Pharaoh Amenhotep III (1386-1350) that have traveled a long way from Cairo to Luxor to become the protectors of this great city. The colossi were destroyed by an earthquake in 27 BC and reconstructed in 199 AD then became famous during the Greco-Roman period because of The Vocal Memnon phenomenon.
Lunch Time:

You will then have your lunch before heading to:
Karnak Temple:

The location where the heavens intervened and surrounded the place with grandeur and beauty. It was known as Ipet-isu "The Most Selected of Places" & Pr-Imn "House Of Amon" when it was constructed more than 4000 years ago. It has been one of the biggest religious man-made constructions on earth for more than 1500 years and the worship center to various deities like Osiris, Ptah, and Isis but was dedicated primarily to the Theban triad which consisted of Amun, Mut, and Khnsou.

You will then end your Luxor day trip from Hurghada by transferring back to your hotel in Hurghada by a private air-conditioned car.
Hint:

You can share your thoughts about adding or removing any tours from your tour itinerary to accommodate your requirements and fulfill your needs.
`,
      },
    ],
    included: [
      "Pick up services from your hotel in Hurghada and return.",
      "All transfers by a private air-conditioned vehicle",
      "Private Egyptologist tour guide. ",
      "Entrance fees to all the mentioned sites. ",
      "Mineral water on board the vehicle during the tour",
      "Lunch meal during the day trip",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  33: {
    title: "Day Trip to Cairo from Hurghada by Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `A day trip to Cairo from Hurghada is enough to change your life as you explore ancient Egyptian history. Our guests will be taken from the magical tropical atmosphere of Hurghada to the immortal wonders of Cairo, such as the Giza Pyramids Complex, which dates back more than 4000 years to the times of gods and pharaohs. In old Cairo, you will discover a number of Islamic monuments such as the Khan El Khalili Bazaar and more. Our clients will enjoy the excellent services of Marvelous Egypt Travel, the best travel agency in Egypt, which includes a skilled tour guide and a relaxing A/C vehicle. Feel the magical spirits of the past and explore the majestic works of ancient times by booking this incredible tour.`,
    reviews: "286 Reviews",
    priceSale: "$400",
    priceOriginal: "$400",
    rating: 5,
    tourPlans: [
      {
        title: "Day Trip to Cairo from Hurghada by Plane",
        des: `
Morning:

We will transfer you from your hotel in Hurghada to Hurghada airport for a flight to Cairo. Upon arrival at Cairo airport, meet your private Egyptologist tour guide who will join you to start a private guided day trip to Cairo from Hurghada to discover all that Cairo and Giza have to offer starting with one of the seven wonders of the world:
Giza Pyramids Complex:

Where the glorious history of the ancient Egyptian civilization is remembered day after day until the end of days. The Great Giza complex consists of the three main great pyramids, six little pyramids, the great sphinx, and the valley temple.
The Great Pyramid:

The Great Pyramid of Khufu is a monument of pure greatness made to challenge time, it is the last intact structure of the seven wonders of the ancient world. Constructed in 2580 BC in 20 years using 2,300,000 pieces of limestone each weighing 2.5 tons with a workforce of about 100,000 free skilled workers, it is 147 m (481 ft) tall and remained the tallest building in history for 3800 years.
The Great Sphinx:

Known as "Hor-em-Akhet" which means "Horus of the horizon," is the immortal celestial guardian of Egypt. The sphinx is 73 m (240 ft) tall, 19 m (66 ft) wide, and has the shape of a mythical creature with the body of a lion and the head of a man, believed to be King Khafre, showcasing his power and wisdom.
The Valley Temple:

Created during Egypt's Old Kingdom (2686-2134 BC) for the mummification process, it offers valuable information about the mummification process and mortuary rituals of ancient Egypt.
The Grand Egyptian Museum:

A golden portal leading to cosmic ancient Egyptian creations of celestial intelligence cultivated across 5000 years. Discover some of the greatest archaeological monuments and artifacts ever made, including The Hanging Obelisk, King Ramses II Statue, The 10 Statues of King Senusert, The Grand staircase, Statues of Ptolemaic Kings and Queens, The Victory Column of King Merneptah, The epic Royal Regalia, and the Grand Atrium & Gift show. There is a VIP ticket for access to additional artifacts; contact us for more information.
Lunch Time:

Lunch will be served at a Pyramids/Nile view restaurant, then move to visit:
The Egyptian Museum:

A time capsule filled with the greatest ancient Egyptian artifacts dating back more than 4000 years. The museum is made from extravagant materials like gold, silver, and precious gems, and ordinary ones such as wood or stone, found in the shape of statues and funerary objects, plus other incredible monuments.
Al Muizz Street:

Known to date back to the 10th century AD in the heart of Old Cairo, at a close distance from Khan El Khalili Bazaar. It is filled with captivating ancient decorations and architecture.
Khan El Khalili Bazaar:

A street from the history books, constructed in 970 AD to be the golden brick road of the Middle East. It remains an active bazaar containing everything a traveler could imagine in its magical markets and shops, plus vintage cafes reflecting the classical beauty and prestige of ancient Islamic culture.
Evening:

Transfer to Cairo airport to take your flight to Hurghada and then transfer to your hotel, ending your day trip to Cairo from Hurghada by plane.
Hint:

You can share your thoughts about adding or removing any tours from your tour itinerary to accommodate your requirements and fulfill your needs.
`,
      },
    ],
    included: [
      "Domestic flight tickets from Hurghada to Cairo and return",
      "Pick up services from your hotel in Hurghada and return",
      "All transfers by a private air-conditioned vehicle",
      "Private Egyptologist tour guide throughout the day tour",
      "Entrance fees to all the sights in Cairo. ",
      "Lunch at a Pyramid/ Nile view restaurant. ",
      "Mineral water and soft drinks on board the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost.",
    ],
  },

  34: {
    title: "2 Days Aswan and Abu Simbel Tour from Hurghada",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `

2 Days Aswan and Abu Simbel tour from Hurghada is a magical voyage showcasing the wonders of the blessed city of Aswan. Marvelous Egypt Travel, the best travel agency in Egypt, will ensure all our guests enjoy the most efficient and relaxing service of a private A/C vehicle and a professional tour guide during their exploration tour in the mythical city of Aswan.

Book this amazing holiday and discover the golden legacy and wealth of southern Egypt.
`,
    reviews: "123 Reviews",
    priceSale: "$175",
    priceOriginal: "$175",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1",
        des: `
Morning:

We will pick you up from your hotel by a modern private A.C car to Luxor to catch the 1st class train to Aswan. Upon arrival at the Nubia country, you will join your private Egyptologist tour guide to visit Aswan tourist attractions starting at:
The High Dam:

The marvelous High Dam of Aswan came into being during the 60s and 70s to offer a new way of life by producing electricity and saving power.
The Unfinished Obelisk:

The enlightening Unfinished Obelisk was initiated by Queen Hatshepsut (1508-1458 BC) to stand as a symbol of power and grace at the golden entrance of the Karnak temples complex. It now stands at the great open-air museum displaying the skill of ancient Egyptian carvers and craftsmen.
Philae Temple:

The legendary Philae Temple is a celestial open book made of holy stone narrating the everlasting story of the “Myth of Osiris.” It was built as the last example of ancient Egyptian architecture in 280 BC through an order from King Ptolemy II. The temple was part of a rescue operation in the mid-60s and 70s known as the UNESCO Nubia Campaign project which relocated the temple to Agilkia Island where it is found today.
Lunch:

You will have your lunch at a local restaurant and check in at the 5* hotel in Aswan to spend the night.
Meals:

Lunch.
Overnight:

Aswan Hotel.
`,
      },
      {
        title: "Day 2",
        des: `
Morning:

After breakfast, you will check out from the hotel, then you will join your private tour guide to visit:
Abu Simbel Temples:

The two temples of Abu Simbel are among the most magnificent monuments in the world. They were built by Ramses II, and their significance and grandeur are unparalleled. The great temple was dedicated to Ramses II himself, while the smaller temple was dedicated to his beloved wife, Queen Nefertari.
Lunch:

You will enjoy a lunch meal at a local restaurant.
Evening:

Return to Aswan, catch the train to Luxor, and transfer by a private A.C car to Hurghada.
Meals:

Breakfast, Lunch.
`,
      },
    ],
    included: [
      "Pick up service from your hotel in Hurghada and return.",
      "Egyptologist tour guide during the tour. ",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Mineral water on board your vehicle. ",
      "One-night accommodation in Aswan at a 5-star Hotel.",
      "1 Breakfast, and 2 Lunch meals in Aswan",
      "All service charges and taxes.",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping. ",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  35: {
    title: "Tour to Luxor East and West Banks",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `

A tour to Luxor East and West Bank is a spiritual journey through the celestial wonders of the ancient Egyptian civilization, showcasing its enduring beauty and grandeur. Marvelous Egypt Travel will offer the most fitting and satisfying service to all our honorable guests, including a skilled Egyptologist tour guide and a private A/C vehicle.

Everyone will enjoy a private Luxor day tour to the East and West Banks to visit Luxor tourist attractions, including Luxor Temple, Karnak Temple, Valley of the Kings, Colossi of Memnon, and Queen Hatshepsut Temple. Book a vacation among the greatest archaeological treasures ever constructed in the history of ancient Egypt.
`,
    reviews: "254 Reviews",
    priceSale: "$70",
    priceOriginal: "$70",
    rating: 5,
    tourPlans: [
      {
        title: "Tour to Luxor East and West Banks",
        des: `
Morning:

We will pick you up from your hotel/ Nile Cruise in Luxor, joining your private tour guide to visit Luxor Highlights:
Valley of the Kings:

The magical Valley of the Kings is a time vault filled with heavenly treasures and the most enchanting artistic decorations, showcasing the heritage of the ancient rulers from the New Kingdom (1570 – 1050 BC). The Valley of the Kings holds 63 tombs of very renowned names like the great pharaoh Ramses II, Hatshepsut, Seti I, Tutankhamen, and various more.
Hatshepsut Temple:

The holy temple of Queen Hatshepsut (1507–1458 BC) was created to honor the everlasting heritage of one of the most successful pharaohs in history and the blessings of the sun god Amun. It is known as the most suitable example of classical architecture of ancient Egypt, across its huge three terraces where the beautiful festival valley was held.
Colossi of Memnon:

The magical Colossi of Memnon of Pharaoh Amenhotep III were constructed in 1350 BC to stand at the ruined mortuary temple of Amenhotep II, which was very renowned between the ancient Greeks and Romans.
Lunch:

Lunch will be served on an island, so your tour includes a boat trip on the Nile river. Then move to the East Bank to visit:
Karnak Temple:

The Karnak Temple Complex is a blessed and divine wonder known as the most selected of places. Pr-Imn house of Amon solely honors the Theban triad of Amun, Mut, and Khonsu, plus a number of other gods. The construction process of the Karnak temples complex started from the Middle Kingdom to the Greco-Roman period (2000 BC to 30 AD) on 247 acres. The most beautiful aspect of the temple is the Avenue of Sphinxes, which leads to the beautiful Luxor Temple.
Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Evening:

Finally, we drive you back to your hotel/ Nile cruise.
`,
      },
    ],
    included: [
      "Pick up service from your hotel in Luxor/ Nile Cruise and return.",
      "All transfers by a private air-conditioned vehicle",
      "Private Egyptologist guides during your tours",
      "Entrance fees to all the mentioned sights. ",
      "Lunch meal at a restaurant in Luxor. ",
      "Mineral water on board the vehicle during the tour. ",
      "All service charges and taxes.",
    ],
    excluded: [
      "Any extras not mentioned in the program.",
      "Tipping",
      "Optional Experiences available at an additional cost.",
    ],
  },

  36: {
    title: "Luxor Hot Air Balloon Ride",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `

The Luxor Hot Air Balloon ride is a journey of dreams across the heavens that reveals all the immortal archaeological milestones of the magical lands of Thebes. Marvelous Egypt Travel will offer the most ideal service and maintain the best safety measures during this heavenly adventure. Book this divine trip and enjoy a breathtaking experience in the sky of Luxor in a private hot air balloon for roughly 45 minutes where you can enjoy the sunrise over this blessed city.
`,
    reviews: "325 Reviews",
    priceSale: "$120",
    priceOriginal: "$120",
    rating: 5,
    tourPlans: [
      {
        title: "Luxor Hot Air Balloon Ride",
        des: `
Early Morning:

Our representative from Marvelous Egypt Travel will pick you up from your hotel/cruise in Luxor to the West Bank to enjoy the hot air balloon ride. You will be transferred to the marina where you can enjoy soft drinks before you take the motorboat to the West Bank. Upon arrival, you will be transferred to the take-off area where your balloon ride will begin.
Balloon Ride:

The "Balloon Ride" trip departs every day; however, advance confirmation is highly recommended. The balloon ride lasts approximately 45 minutes, offering breathtaking views of the sunrise over the largest open-air museum in the world - Luxor.
Return:

After your land, you will be picked up and transferred back to your hotel/cruise.
`,
      },
    ],
    included: [
      "Pick up service from your hotel in Luxor/Nile Cruise. ",
      "Transfer by a private air-conditioned vehicle. ",
      "45 minutes ride in a hot air balloon in the sky of Luxor. ",
      "All service charges and taxes.",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  37: {
    title: "Trip to Dandara and Abydos from Luxor",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `A trip to Dandara and Abydos is a gateway leading to one of the oldest and most preserved archaeological attractions in Upper Egypt, containing the most mythical tales and facts about the ancient Egyptian religion. Marvelous Egypt Travel will offer all travelers the finest tour in Egypt. Enjoy a private Luxor day trip to Dandara and Abydos temples while you are in Luxor, accompanied by a private Egyptologist tour guide and a private air-conditioned car. The two temples are among the most preserved temples you can visit in Egypt, so book this magical adventure and discover the glorious history of ancient Egypt.`,
    reviews: "315 Reviews",
    priceSale: "$25",
    priceOriginal: "$25",
    rating: 5,
    tourPlans: [
      {
        title: "Trip to Dandara and Abydos from Luxor",
        des: `
Morning:

Marvelous Egypt Travel representative will pick you up from your hotel/ Nile cruise in Luxor to enjoy a tour to:
Abydos Temple:

The ancient Egyptians believed that the god Osiris (Lord of the Underworld) was buried there. The temple was built by King Seti I and completed by King Ramses II, known as the Temple of Seti I. The paintings of the gods and pharaohs on the walls of the Osiris Temple at Abydos are among the most beautifully preserved in Egypt.
Lunch Time:

Enjoy your lunch at a local restaurant, then visit:
Dendara Temple:

The temple is dedicated to the deity Hathor, the goddess of love and joy. The paintings and decorations are still in very good condition, making this temple one of the most preserved temples in Egypt.
Return:

Finally, we drive you back to your hotel/ Nile Cruise.
`,
      },
    ],
    included: [
      "Pick up service from your hotel/ Nile cruise in Luxor",
      "All transfers by a private air-conditioned vehicle",
      "Private Egyptologist guide",
      "Entrance fees for all sightseeing mentioned. ",
      "Mineral water on board the vehicle during the tour",
      "All service charges and taxes",
      "1 Lunch meal during the day tour. ",
    ],
    excluded: [
      "Any extras not mentioned in the program",
      "Tipping",
      "Optional Experiences available at an additional cost",
    ],
  },

  38: {
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
  },
  39: {
    title: "Nubian Village Tour From Aswan",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a mesmerizing journey to the Nubian Village from Aswan, where you will explore the enchanting beauty and deep-rooted history of southern Egypt. This tour promises a comfortable and immersive experience, guided by a professional Egyptologist and enhanced by the convenience of private air-conditioned transportation. Discover the unique cultural heritage, colorful traditions, and artistic expressions of the Nubian people, one of the oldest civilizations in Africa.`,
    reviews: "325 Reviews",
    priceSale: "$30",
    priceOriginal: "$30",
    rating: 5,
    tourPlans: [
      {
        title: "Nubian Village Tour From Aswan",
        des: `
Morning:
Pick-Up:

Your adventure begins with a pick-up from your hotel or Nile cruise, followed by a scenic drive to the Nubian villages located on the west bank of the Nile River.
Nubian Village Exploration:

Immerse yourself in the serene and vibrant atmosphere of the Nubian villages. These villages are renowned for their simple yet captivating lifestyle, traditions, and culture. As you stroll through the village, you will witness the exquisite colorful drawings, handmade crafts, and unique jewelry that reflect the rich Nubian heritage.
Lunch:

Authentic Nubian Meal: Relish a traditional Nubian lunch, offering an authentic taste of this noble culture. Enjoy the local cuisine while soaking in the peaceful ambiance of the village.
Afternoon:
Cultural Insights:

Gain deeper insights into the customs and way of life of the three main Nubian tribes: Al-Fadiga, Arab Al-Orayqat, and Al-Konoz (also known as Al-Matoka). Explore the village's artistic expressions, which are showcased beautifully at the Nubian Museum in Aswan.
Motorboat Ride:

Enhance your experience with a delightful motorboat ride on the Nile River, providing a unique perspective of the village and its surroundings.
Evening:
Return:

After a day filled with cultural exploration and natural beauty, you will be transferred back to your hotel or Nile cruise, concluding your enchanting Nubian Village tour from Aswan.
Meals:

Lunch.
`,
      },
    ],
    included: [
      "Pick-up and return service from your hotel or Nile cruise in Aswan.",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guides during your tours. ",
      "Motorboat ride to the Nubian Village. ",
      "Lunch at a local restaurant. ",
      "Mineral water on board the vehicle during the tour. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },
  40: {
    title: "Felucca Ride on the Nile in Aswan",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Experience the timeless beauty of Aswan from a unique perspective with a Felucca Ride on the Nile. This private tour offers a serene and enchanting journey along the legendary Nile River, providing a relaxing escape and a closer look at Aswan’s most renowned landmarks. Your journey will be enhanced with comfortable services, including a private Egyptologist guide and deluxe air-conditioned transportation. Sail towards Elephantine Island, explore Kitchener Island, and marvel at the famous Botanical Gardens. Book this magical felucca ride and immerse yourself in the natural splendor of Aswan.`,
    reviews: "315 Reviews",
    priceSale: "$20",
    priceOriginal: "$20",
    rating: 5,
    tourPlans: [
      {
        title: "Felucca Ride on the Nile in Aswan",
        des: `
Morning:
Pick-Up:

Begin your adventure with a convenient pick-up from your hotel or Nile cruise in Aswan by a private, air-conditioned vehicle.
Felucca Ride:

Embark on a memorable one-hour felucca ride along the majestic Nile River. Your personal Egyptologist guide will accompany you, sharing insights about the historical significance and beauty of the landmarks you will encounter.
Felucca Sailing Highlights:
Elephantine Island:

Sail towards Elephantine Island, an ancient trade center and a stunning example of natural beauty. Learn about its historical importance and enjoy the serene views.
Kitchener Island:

Continue your journey to Kitchener Island, a place of rest for Lord Kitchener's campaign during their wars in Sudan. The island's rich history and scenic views make it a highlight of the trip.
Botanical Gardens:

Conclude your sailing adventure by passing the famous Botanical Gardens. Marvel at the diverse plant species and the tranquil ambiance of this lush garden.
Return:

After your delightful felucca ride, you will be transferred back to your hotel or Nile cruise in Aswan, bringing your serene and picturesque tour to an end.
`,
      },
    ],
    included: [
      "Pick up service from your hotel in Aswan/ Nile Cruise and return",
      "Transfers by a deluxe air-conditioned vehicle. ",
      "Felucca ride for one hour. ",
      "Bottled water on the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost",
    ],
  },

  41: {
    title: "Luxor Day Tour from Aswan",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a Luxor day tour from Aswan, a magical journey that unveils Egypt’s most immortal treasures radiating divine glory and bliss. With Marvelous Egypt Travel, the best travel agency in Egypt, you will experience top-notch services, including a private Egyptologist tour guide and a comfortable A/C vehicle. This guided tour will take you to Luxor’s most significant historical landmarks, such as the Valley of the Kings, Hatshepsut Temple, Karnak Temple, and the Colossi of Memnon. Conclude your adventure with a return trip to your hotel. Book this majestic journey and uncover the blessed wonders of Luxor.`,
    reviews: "315 Reviews",
    priceSale: "$95",
    priceOriginal: "$95",
    rating: 5,
    tourPlans: [
      {
        title: "Luxor Day Tour from Aswan",
        des: `
Morning:
Transfer to Luxor:

Begin your day with a transfer from your hotel in Aswan to the train station to catch the 1st class train to Luxor. Upon arrival, you will be greeted by your private Egyptologist tour guide.
Exploration Highlights:
Valley of the Kings:

Discover the burial ground of the proud golden rulers of the Eighteenth, Nineteenth, and Twentieth Dynasties of the New Kingdom (1550 – 1070 BC). The Valley of the Kings houses 63 tombs of some of Egypt's most famous Pharaohs and nobles, chosen for its mythological significance and the rejuvenating powers associated with its location.
Hatshepsut Temple:

Explore the magnificent legacy of Queen Hatshepsut (1473–1458 BC) at her temple, constructed by Senenmut, the main priest of Amun. The temple, located opposite Karnak Temple, features three levels of magical decorations showcasing the history and achievements of this great ruler.
Colossi of Memnon:

Marvel at the brilliant quartzite sandstone statues created by Amenhotep III in 1350 BC. These statues were erected to guard the heritage of one of Egypt’s most significant builders and are adorned with 107 inscriptions from the Roman era, depicting the Greek mythological tale of King Memnon, his wife Tiye, and his mother Mutemwiya, as well as the god of the Nile, Hapi.
Lunch:

Enjoy a delicious lunch at a local restaurant in Luxor before continuing your tour.
Afternoon:
Karnak Temple:

Visit the grand Karnak Temple Complex, dedicated to the Theban triad of Aman-Ra, Montu, and Mut. Constructed from 2055 BC to 100 AD, it is the largest religious complex ever built, showcasing the finest examples of ancient Egyptian architecture, such as the Hypostyle Hall and the Avenue of Sphinxes.
Luxor Temple:

Conclude your tour with a visit to Luxor Temple, located on the east bank of the Nile. Built by Amenhotep III and completed by Tutankhamun and Horemheb, the temple was further added to by Ramses II. It was a center of the festival of Opet, which celebrated the annual inundation of the Nile, ensuring fertility and prosperity for the land.
Transfer Back to Aswan:

After an enriching day in Luxor, catch the 1st class train back to Aswan and return to your hotel, concluding your Luxor day tour from Aswan.
Meals:

Lunch.
`,
      },
    ],
    included: [
      "Pick-up services from your hotel in Aswan and return",
      "1st class train ticket from Aswan to Luxor and return. ",
      "Private Egyptologist guides during your tours. ",
      "Entrance fees to all the mentioned sights. ",
      "	Lunch meal during the day trip.",
      "Mineral water on board the vehicle during the tour",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost.",
    ],
  },

  42: {
    title: "Day Trip from Aswan to Edfu and Kom Ombo Temples",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a captivating day trip from Aswan to the ancient temples of Edfu and Kom Ombo. This journey will take you along the divine Nile river banks, exploring the beauty, art, and history of ancient Egyptian civilization. With Marvelous Egypt Travel, the most trusted travel agency in Egypt, you will experience top-notch services including a professional tour guide and a private A/C vehicle. This tour offers an unforgettable adventure through the mesmerizing lands of Aswan, with visits to two of Egypt’s most significant temples. Book this magical day trip and witness the eternal wonders of Edfu and Kom Ombo.`,
    reviews: "456 Reviews",
    priceSale: "$50",
    priceOriginal: "$50",
    rating: 5,
    tourPlans: [
      {
        title: "Day Trip from Aswan to Edfu and Kom Ombo Temples",
        des: `
Morning:
Pickup and Transfer:

Begin your day with a pick-up from your hotel or Nile cruise in Aswan by your private Egyptologist guide. You will travel in a comfortable air-conditioned vehicle to Kom Ombo Temple.
Explore Kom Ombo Temple:

Located on high grounds overlooking the Nile, Kom Ombo Temple is unique due to its double entrance. Each entrance is dedicated to a different divinity: "Haroeris" with his falcon head and "Sobek" with his crocodile head. Discover the fascinating history and dual nature of this ancient temple.
Lunch at a Local Restaurant:

Enjoy a delicious lunch at a local restaurant.
Afternoon:
Cross the Nile to Edfu:

After lunch, cross the Nile to visit Edfu Temple.
Explore Edfu Temple:

Edfu Temple is considered the best-preserved cult temple in Egypt. According to ancient Egyptian mythology, it is the place where the falcon-headed god Horus avenged his father Osiris's murder by killing Seth. Marvel at the grandeur and historical significance of this remarkable temple.
Transfer Back to Aswan:

After your tour of Edfu Temple, you will be driven back to your hotel or Nile cruise in Aswan, concluding your day trip.
Meals:

Lunch.
`,
      },
    ],
    included: [
      "Pick up service from your hotel in Aswan/ Nile Cruise and return",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guides during your tours. ",
      "Entrance fees to all the mentioned sights.",
      "Lunch at a local restaurant. ",
      "Mineral water on board the vehicle during the tour. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping. ",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  43: {
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
  },

  44: {
    title: "Cairo Day Trip from El Gouna By Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on an extraordinary journey from El Gouna to the heart of Cairo, where the timeless wonders of ancient Egypt await you. This Cairo Day Trip by plane, arranged by Marvelous Egypt Travel, offers unparalleled service with a professional Egyptologist tour guide and a private A/C vehicle. Visit the iconic Pyramids of Giza, the enigmatic Great Sphinx, the historical Egyptian Museum, and experience the vibrant atmosphere of Khan El Khalili Bazaar. Discover the essence of Cairo’s historical grandeur and cultural richness in a single day and return to El Gouna filled with unforgettable memories.`,
    reviews: "000 Reviews",
    priceSale: "$420",
    priceOriginal: "$420",
    rating: 5,
    tourPlans: [
      {
        title: "Cairo Day Trip from El Gouna By Plane",
        des: `
Morning:
Pick-Up and Transfer:

Begin your adventure with a transfer from your hotel in El Gouna to Hurghada airport for your flight to Cairo.
Arrival in Cairo:

Upon arrival at Cairo airport, meet your private tour guide who will accompany you throughout the day.
Explore the Giza Pyramids Complex:

Discover the colossal art of the ancient Egyptians, including the three main pyramids, six little pyramids, the Great Sphinx, and the Valley Temple.
The Great Pyramid:

Marvel at the Great Pyramid of Pharaoh Khufu, the last surviving wonder of the ancient world, standing tall at 147 meters with its intricate chambers.
The Great Sphinx:

Gaze upon the Great Sphinx, a magnificent limestone statue with the body of a lion and the head of Pharaoh Khafre, symbolizing wisdom and power.
The Valley Temple:

Visit the Valley Temple, a mortuary temple used for the mummification process of 4th dynasty pharaohs before their burial in the pyramids.
Discover the Grand Egyptian Museum:

Explore the latest addition to Egypt's rich cultural heritage, home to a vast collection of artifacts, including the Hanging Obelisk, the King Ramses II Statue, the 10 Statues of King Senusert, and more. (Note: A VIP ticket is available for additional access to exclusive artifacts.)
Lunch at a Pyramid/Nile View Restaurant:

Enjoy a delightful lunch with stunning views of the Pyramids or the Nile.
Afternoon:
Visit the Egyptian Museum:

Tour the historic Egyptian Museum, showcasing an extensive collection of ancient Egyptian artifacts, located in the heart of Cairo since 1901 AD.
Stroll Al Muizz Street:

Wander along Al-Muizz Street, established in the 10th century AD, reflecting the golden era of Islamic Egypt and leading to the vibrant Khan El Khalili Bazaar.
Explore Khan El Khalili Bazaar:

Experience the bustling atmosphere of Khan El Khalili Bazaar, established between 1382 and 1389 AD, offering a plethora of unique artifacts and exquisite Islamic architecture.
Evening:
Transfer to Cairo Airport:

Conclude your day with a transfer to Cairo Airport for your return flight to Hurghada.
Return to Your Hotel:

Upon arrival in Hurghada, you will be transferred back to your hotel in El Gouna, ending your Cairo day trip.
Meals:

Lunch.
Flight:

From Hurghada to Cairo and Return.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in El Gouna and return. ",
      "Domestic flight tickets from Hurghada to Cairo and return. ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour.",
      "Entrance fees to all the mentioned sights. ",
      "Lunch at a Pyramid/Nile view restaurant. ",
      "Mineral water and soft drinks onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping. ",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  45: {
    title: "Luxor Day Trip from El Gouna",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on an unforgettable day tour from El Gouna to the ancient city of Luxor, known as the “world’s greatest open-air museum.” With Marvelous Egypt Travel, the best travel agency in Egypt, you will receive exceptional service from an experienced Egyptologist tour guide and a private A/C vehicle. Discover the marvels of the Valley of the Kings, the magnificent Hatshepsut Temple, the impressive Colossi of Memnon, and the grand Karnak Temple. Enjoy a memorable holiday experience exploring the treasures of Luxor and its rich historical heritage. Book this incredible day trip and make your time in Luxor unforgettable.`,
    reviews: "322 Reviews",
    priceSale: "$80",
    priceOriginal: "$80",
    rating: 5,
    tourPlans: [
      {
        title: "Luxor Day Trip from El Gouna",
        des: `
Morning:
Pick-Up and Transfer:

Begin your adventure with a transfer from your hotel in El Gouna by a private A/C vehicle. Upon arrival in Luxor, start your day trip by exploring Luxor's most famous tourist attractions.
Visit the Valley of the Kings:

Explore the Valley of the Kings, located on the west bank of the Nile, within the Theban Necropolis. It houses 63 royal tombs of the Pharaohs from the 18th, 19th, and 20th dynasties of the New Kingdom (1570–1050 BC), including those of Ramses the Great, Hatshepsut, Seti I, and Tutankhamun. The valley is one of the most famous archaeological sites on earth and became a World Heritage Site in 1979.
Explore Hatshepsut Temple:

Visit the beautiful temple of Hatshepsut, carved by hand into the great mountain hills of Deir El Bahari. This temple, built in 1479 BC, honors the creator sun god Amun and showcases the magnificent heritage of one of Egypt's most successful pharaohs, Hatshepsut. It is one of the best-preserved architectural monuments in the world.
View the Colossi of Memnon:

Admire the majestic Colossi of Memnon, two massive stone statues of Pharaoh Amenhotep III, built in 1350 BC. These statues have withstood the test of time and were famous during the Greco-Roman period for their vocal phenomenon. The statues are decorated with inscriptions that tell the history of Amenhotep III, his family, and the god Hapi.
Enjoy Lunch:

Have lunch on an island, which includes a boat trip on the Nile River.
Afternoon:
Discover Karnak Temple:

Visit the Karnak Temple complex, the largest religious complex in the world, built between 2000 BC and 30 BC. Dedicated to the Theban triad of Amun, Mut, and Khonsu, it features the Avenue of Sphinxes, the Hypostyle Hall, and a collection of carvings, paintings, and many more. This temple complex is a testament to the religious dedication of the ancient Egyptians.
Explore Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Evening:
Return to El Gouna:

After exploring the wonders of Luxor, we will drive you back by a private air-conditioned vehicle to your hotel, ending your Luxor day trip from El Gouna.
Meals:

Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in El Gouna and return. ",
      "Lunch meal during the day trip. ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights. ",
      "Boat ride on the Nile River. ",
      "Mineral water onboard the vehicle. ",
      "	All service charges and taxes.",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  46: {
    title: "2 Days Aswan and Abu Simbel Tour from El Gouna",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a splendid two-day tour from El Gouna to the majestic attractions of Aswan and Abu Simbel, showcasing the timeless wonders of southern Egypt. Marvelous Egypt Travel, the best travel agency in Egypt, ensures a comfortable and enriching experience with private A/C vehicles and professional tour guides. This tour will take you to explore Aswan’s top tourist attractions, including the High Dam, the Unfinished Obelisk, and Philae Temple, with an overnight stay at a 5-star hotel in Aswan. The next day, visit the awe-inspiring temples of Abu Simbel. Book this tour to witness the grandeur of ancient Egypt.`,
    reviews: "360 Reviews",
    priceSale: "$215",
    priceOriginal: "$215",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1 Aswan",
        des: `
Pick-Up and Transfer:

You will be picked up from your hotel in El Gouna by a private A/C vehicle and transferred to Luxor to catch the first-class train to Aswan. Upon arrival, you will start your Aswan tour with your private tour guide.
Visit the Aswan High Dam:

Built in the 1960s and 1970s, the Aswan High Dam is one of the largest embankment dams in the world. It plays a crucial role in the economy and culture of Egypt.
Explore the Unfinished Obelisk:

This is the largest known obelisk from ancient Egypt, commissioned by Queen Hatshepsut (1508-1458 BC). The obelisk showcases the carving techniques of the ancient Egyptians and is now an open-air museum.
Lunch Time:

Enjoy lunch at a local restaurant in Aswan.
Discover Philae Temple:

Dedicated to the goddess Isis, Philae Temple was built in 280 BC during the reign of Ptolemy II. It was relocated to Agilkia Island by UNESCO to save it from the rising waters of the Nile.
Check-in:

Transfer to a 5-star hotel in Aswan for an overnight stay.
Meals:

Lunch.
Overnight:

Aswan Hotel.
`,
      },
      {
        title: "Day 2 Abu Simbel",
        des: `
Early Morning:

Enjoy breakfast as you prepare for an early start.
Visit the Abu Simbel Temples:

These temples are part of the UNESCO World Heritage Site known as the "Nubian Monuments." The temples, built by Pharaoh Ramses the Great in 1200 BC, honor Ptah, Amun, Ra, and commemorate Ramses' victory at the Battle of Kadesh and his devotion to Queen Nefertari.
Lunch Time:

Return to Aswan for lunch at a local restaurant.
Return to El Gouna:

Catch the train to Luxor and then transfer back to your hotel in El Gouna, concluding your two-day tour.
Meals:

Breakfast, Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in El Gouna and return. ",
      "2 lunch meals in Aswan. ",
      "All transfers by a private modern air-conditioned vehicle.",
      "Private Egyptologist guide during your tour.",
      "Entrance fees to all the mentioned sights. ",
      "One-night accommodation in Aswan at a 5-star Hotel. ",
      "	Train tickets from Luxor to Aswan and return.",
      "Mineral water and soft drinks onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost",
    ],
  },

  47: {
    title: "Day Trip from Marsa Alam to Cairo by Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a fantastic day trip from Marsa Alam to Cairo by plane, and explore the archaeological marvels of ancient Egyptian civilization. Marvelous Egypt Travel, the best travel agency in Egypt, ensures top-notch services with a private A/C vehicle and a professional Egyptologist tour guide. This day trip includes visits to the iconic Giza Pyramids, the Great Sphinx, the Valley Temple, the Grand Egyptian Museum, Al Muizz Street, and the vibrant Khan El Khalili Bazaar. Book this tour and dive into the rich history and culture of Egypt.`,
    reviews: "348 Reviews",
    priceSale: "$280",
    priceOriginal: "$280",
    rating: 5,
    tourPlans: [
      {
        title: "Day Trip from Marsa Alam to Cairo by Plane",
        des: `
Pick-Up and Transfer to Airport:

You will be transferred from your hotel in Marsa Alam to Marsa Alam airport to catch your flight to Cairo. Upon arrival, meet your private tour guide to start your day trip.
Arrival in Cairo:

Upon arrival at Cairo airport, meet your private tour guide who will accompany you throughout the day.
Explore the Giza Pyramids Complex:

Discover the colossal art of the ancient Egyptians, including the three main pyramids, six little pyramids, the Great Sphinx, and the Valley Temple.
The Great Pyramid:

Marvel at the Great Pyramid of Pharaoh Khufu, the last surviving wonder of the ancient world, standing tall at 147 meters with its intricate chambers.
The Great Sphinx:

Gaze upon the Great Sphinx, a magnificent limestone statue with the body of a lion and the head of Pharaoh Khafre, symbolizing wisdom and power.
The Valley Temple:

Visit the Valley Temple, a mortuary temple used for the mummification process of 4th dynasty pharaohs before their burial in the pyramids.
Discover the Grand Egyptian Museum:

Explore the latest addition to Egypt's rich cultural heritage, home to a vast collection of artifacts, including the Hanging Obelisk, the King Ramses II Statue, the 10 Statues of King Senusert, and more. (Note: A VIP ticket is available for additional access to exclusive artifacts.)
Lunch at a Pyramid/Nile View Restaurant:

Enjoy a delightful lunch with stunning views of the Pyramids or the Nile.
Stroll Al Muizz Street:

Wander along Al-Muizz Street, established in the 10th century AD, reflecting the golden era of Islamic Egypt and leading to the vibrant Khan El Khalili Bazaar.
Shop at Khan El Khalili Bazaar:

Experience the bustling atmosphere of Khan El Khalili Bazaar, established between 1382 and 1389 AD, offering a plethora of unique artifacts and exquisite Islamic architecture.
Transfer to Cairo Airport:

Catch your flight from Cairo to Hurghada and transfer back to your hotel in Marsa Alam by a private A/C car, concluding your memorable day trip.
Meals:

Lunch.
Flight:

From Marsa Alam to Cairo and From Cairo to Hurghada.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Marsa Alam and return.",
      "Flight ticket (Marsa Alam/Cairo - Cairo/Hurghada) ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour.",
      "Entrance fees to all the mentioned sights. ",
      "Lunch at a Pyramid/Nile view restaurant. ",
      "Mineral water and soft drinks onboard the vehicle. ",
      "All service charges and taxes",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  48: {
    title: "One Day Trip from Marsa Alam to Luxor",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Experience a magical one-day trip from Marsa Alam to Luxor and uncover the ancient treasures of Thebes. Marvelous Egypt Travel, the best travel agency in Egypt, offers exceptional services including a private A/C vehicle and an expert Egyptologist tour guide. This private tour allows you to follow the footsteps of the Pharaohs and explore the timeless wonders of the Nile Valley, including Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, and the Colossi of Memnon. Book now to capture unforgettable moments and have “A Trip To Remember.`,
    reviews: "226 Reviews",
    priceSale: "$150",
    priceOriginal: "$150",
    rating: 5,
    tourPlans: [
      {
        title: "One Day Trip from Marsa Alam to Luxor",
        des: `
Pick-Up and Transfer:

You will be picked up from your hotel in Marsa Alam by a private A/C vehicle for a luxurious trip to the ancient city of Luxor. Accompanied by your private tour guide, you will explore the following historical sites:
Explore the Valley of the Kings:

This sacred site on the west bank of the Nile opposite Luxor is a golden history book buried deep within a sacred hill. Home to 63 royal tombs of the greatest Pharaohs of the 18th, 19th, and 20th dynasties of the New Kingdom (1570–1050 BC), including Ramses II, Hatshepsut, Seti I, and Tutankhamen. The valley gained global fame with the discovery of Tutankhamen's tomb, making it one of the most famous archaeological sites on earth. It was declared a World Heritage Site in 1979, along with the entire Theban Necropolis.
Visit Hatshepsut Temple:

This beautiful temple, known as the "Holy of Holies," was constructed over 15 years on the golden rock hills of Deir El Bahari in 1479 BC. Built to honor the sun god Amun and immortalize the legacy of Queen Hatshepsut, one of the most successful pharaohs in ancient Egyptian history, it is the most preserved example of classical ancient Egyptian architecture.
Admire the Colossi of Memnon:

These two grand statues of Pharaoh Amenhotep III (1386 - 1349 BC) were built in 1350 BC to guard the entrance of his long-faded temple. The statues underwent numerous renovations and became known for their Vocal Phenomenon at dawn during the Greco-Roman period. The Colossi are adorned with mystical decorations depicting Amenhotep III's history, family, and the Nile god Hapi.
Lunch Time:

Enjoy a delicious lunch on an island, accompanied by a scenic boat trip on the Nile River. After lunch, you will continue your guided tour to visit:
Discover Karnak Temple:

This colossal temple complex, covering 247 acres, was built between 2000 BC and 30 BC during the Middle Kingdom to the Greco-Roman period. It served as the main religious center for worshipping the Theban triad of Amun, Mut, and Khonsu for over 1500 years. The complex features the Avenue of Sphinxes, the grand Hypostyle Hall, and numerous carvings, paintings, and shrines dedicated to various gods.
Explore Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Return to Marsa Alam:

You will be transferred back to your hotel in Marsa Alam by a private air-conditioned vehicle, concluding your enriching day trip from Marsa Alam to Luxor.
Meals:

Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Marsa Alam and return. ",
      "Lunch meal during your day tour. ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights. ",
      "Boat ride in the Nile River.",
      "Mineral water onboard the vehicle. ",
      "All service charges and taxes.",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  49: {
    title: "2 Days Aswan and Abu Simbel Trip from Marsa Alam",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a captivating two-day tour from Marsa Alam to Aswan and Abu Simbel to witness the extraordinary legacy of ancient Egyptian civilization. Marvelous Egypt Travel, the best travel agency in Egypt, guarantees top-notch service with a private A/C vehicle and a professional tour guide. Explore the most famous attractions in Aswan, including the High Dam, the Unfinished Obelisk, and Philae Temple. On the second day, marvel at the illuminating heritage of Southern Egypt at the Two Temples of Abu Simbel. Book now to experience the eternal glory of ancient Egypt come to life.`,
    reviews: "315 Reviews",
    priceSale: "$350",
    priceOriginal: "$350",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1 Aswan",
        des: `
Pick-Up and Transfer:

Start your Aswan and Abu Simbel tour from Marsa Alam with a pick-up from your hotel by a private A/C vehicle to Aswan. Upon arrival, join your Egyptologist tour guide to explore the ancient Egyptian civilization by visiting Aswan's tourist attractions:
Visit the Aswan High Dam:

Built in the 1960s and 1970s, the Aswan High Dam is one of the largest embankment dams in the world. It plays a crucial role in the economy and culture of Egypt.
Explore the Unfinished Obelisk:

This is the largest known obelisk from ancient Egypt, commissioned by Queen Hatshepsut (1508-1458 BC). The obelisk showcases the carving techniques of the ancient Egyptians and is now an open-air museum.
Lunch Time:

Enjoy lunch at a local restaurant in Aswan.
Discover Philae Temple:

Dedicated to the goddess Isis, Philae Temple was built in 280 BC during the reign of Ptolemy II. It was relocated to Agilkia Island by UNESCO to save it from the rising waters of the Nile.
Check-in:

Transfer to a 5-star hotel in Aswan for an overnight stay.
Meals:

Lunch.
Overnight:

Aswan Hotel.
`,
      },
      {
        title: "Day 2 Abu Simbel",
        des: `
Early Morning:

Enjoy breakfast as you prepare for an early start.
Visit the Abu Simbel Temples:

These temples are part of the UNESCO World Heritage Site known as the "Nubian Monuments." The temples, built by Pharaoh Ramses the Great in 1200 BC, honor Ptah, Amun, Ra, and commemorate Ramses' victory at the Battle of Kadesh and his devotion to Queen Nefertari.
Lunch Time:

Return to Aswan for lunch at a local restaurant.
Return to Marsa Alam:

Conclude your trip with a transfer back to your hotel in Marsa Alam by a private A/C vehicle.
Meals:

Breakfast, Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Marsa Alam and return.",
      "2 lunch meals in Aswan. ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights. ",
      "One-night accommodation in Aswan at a 5-star Hotel. ",
      "Mineral water and soft drinks onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping.",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  50: {
    title: "Full-Day Tour to Cairo and Pyramids from Makadi Bay by Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a full-day tour to Cairo and Pyramids from Makadi Bay by plane and witness the timeless wonders of Egypt. Marvelous Egypt Travel offers the most satisfying service with a professional Egyptologist tour guide and a private A/C Vehicle. Explore the historical and cultural treasures of Cairo, including the Giza Pyramids, Khan El Khalili Bazaar, and more. Book this extraordinary tour and experience the vacation of a lifetime.`,
    reviews: "348 Reviews",
    priceSale: "$410",
    priceOriginal: "$410",
    rating: 5,
    tourPlans: [
      {
        title: "Full-Day Tour to Cairo and Pyramids from Makadi Bay by Plane",
        des: `
Morning:
Pick-Up and Transfer:

Begin your magical tour with a pick-up from your hotel in Makadi Bay. Transfer to Hurghada International Airport by an air-conditioned car to catch your flight to Cairo.
Arrival in Cairo:

Upon arrival, meet your tour guide and start exploring the oldest wonders in history.
Explore the Giza Pyramids Complex:

Discover the colossal art of the ancient Egyptians, including the three main pyramids, six little pyramids, the Great Sphinx, and the Valley Temple.
The Great Pyramid:

Marvel at the Great Pyramid of Pharaoh Khufu, the last surviving wonder of the ancient world, standing tall at 147 meters with its intricate chambers.
The Great Sphinx:

Gaze upon the Great Sphinx, a magnificent limestone statue with the body of a lion and the head of Pharaoh Khafre, symbolizing wisdom and power.
The Valley Temple:

Visit the Valley Temple, a mortuary temple used for the mummification process of 4th dynasty pharaohs before their burial in the pyramids.
Discover the Grand Egyptian Museum:

Explore the latest addition to Egypt's rich cultural heritage, home to a vast collection of artifacts, including the Hanging Obelisk, the King Ramses II Statue, the 10 Statues of King Senusert, and more. (Note: A VIP ticket is available for additional access to exclusive artifacts.)
Lunch at a Pyramid/Nile View Restaurant:

Enjoy a delightful lunch with stunning views of the Pyramids or the Nile.
Afternoon:
Visit the Egyptian Museum:

Tour the historic Egyptian Museum, showcasing an extensive collection of ancient Egyptian artifacts, located in the heart of Cairo since 1901 AD.
Stroll Al Muizz Street:

Wander along Al-Muizz Street, established in the 10th century AD, reflecting the golden era of Islamic Egypt and leading to the vibrant Khan El Khalili Bazaar.
Explore Khan El Khalili Bazaar:

Experience the bustling atmosphere of Khan El Khalili Bazaar, established between 1382 and 1389 AD, offering a plethora of unique artifacts and exquisite Islamic architecture.
Evening:
Transfer to Cairo Airport:

Conclude your day with a transfer to Cairo Airport for your return flight to Hurghada.
Return to Your Hotel:

Transfer back to your hotel in Makadi Bay.
Meals:

Lunch.
Flight:

From Hurghada to Cairo and Return.
`,
      },
    ],
    included: [
      "Meet and Greet service by our employees at the airports. ",
      "Domestic Flight tickets from Hurghada to Cairo and return. ",
      "All transfers by a private modern air-conditioned vehicle.",
      "Private Egyptologist guide during your tour.",
      "Entrance fees to all the mentioned sights. ",
      "Lunch at a Pyramid/Nile view restaurant. ",
      "Mineral water onboard the vehicle. ",
      "All service charges and taxes",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  51: {
    title: "Full-Day Tour to Luxor from Makadi Bay",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: "Embark on a magical day trip to Luxor from Makadi Bay and explore the immortal blessings of Egypt, radiating divine glory and bliss. Marvelous Egypt Travel, the best travel agency in Egypt, offers top-notch services including an expert Egyptologist tour guide and a private A/C Vehicle. Witness the ancient class, glory, and glamour of Luxor’s landmarks such as the Valley of the Kings, Hatshepsut Temple, Karnak Temple, and the Colossi of Memnon. This excursion provides a glimpse into life 4000 years ago, showcasing the immortal heritage and culture of the ancient Egyptians. Book this enchanting tour and live an adventure of dreams.",
    reviews: "226 Reviews",
    priceSale: "$80",
    priceOriginal: "$80",
    rating: 5,
    tourPlans: [
      {
        title: "Full-Day Tour to Luxor from Makadi Bay",
        des: `
Pick-Up and Transfer:

Start your day trip with a transfer from your hotel in Makadi Bay to Luxor in a private A/C car. Upon arrival, meet your tour guide who will escort you on your private day trip to Luxor to discover ancient Egyptian gems.
Explore the Valley of the Kings:

This sacred site on the west bank of the Nile opposite Luxor is a golden history book buried deep within a sacred hill. Home to 63 royal tombs of the greatest Pharaohs of the 18th, 19th, and 20th dynasties of the New Kingdom (1570–1050 BC), including Ramses II, Hatshepsut, Seti I, and Tutankhamen. The valley gained global fame with the discovery of Tutankhamen's tomb, making it one of the most famous archaeological sites on earth. It was declared a World Heritage Site in 1979, along with the entire Theban Necropolis.
Visit Hatshepsut Temple:

This beautiful temple, known as the "Holy of Holies," was constructed over 15 years on the golden rock hills of Deir El Bahari in 1479 BC. Built to honor the sun god Amun and immortalize the legacy of Queen Hatshepsut, one of the most successful pharaohs in ancient Egyptian history, it is the most preserved example of classical ancient Egyptian architecture.
Admire the Colossi of Memnon:

These two grand statues of Pharaoh Amenhotep III (1386 - 1349 BC) were built in 1350 BC to guard the entrance of his long-faded temple. The statues underwent numerous renovations and became known for their Vocal Phenomenon at dawn during the Greco-Roman period. The Colossi are adorned with mystical decorations depicting Amenhotep III's history, family, and the Nile god Hapi.
Lunch Time:

Enjoy a delicious lunch on an island, accompanied by a scenic boat trip on the Nile River. After lunch, you will continue your guided tour to visit:
Discover Karnak Temple:

This colossal temple complex, covering 247 acres, was built between 2000 BC and 30 BC during the Middle Kingdom to the Greco-Roman period. It served as the main religious center for worshipping the Theban triad of Amun, Mut, and Khonsu for over 1500 years. The complex features the Avenue of Sphinxes, the grand Hypostyle Hall, and numerous carvings, paintings, and shrines dedicated to various gods.
Explore Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Return to Makadi Bay:

Conclude your Luxor day tour by transferring back to your hotel in Makadi Bay in a private air-conditioned car.
Meals:

Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Makadi Bay and return.",
      "Lunch meal during your day tour.",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights. ",
      "Mineral water onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost.",
    ],
  },

  52: {
    title: "Makadi Bay Excursion to Aswan and Abu Simbel in Two Days Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "2 days",
    des: `The Makadi Bay excursion to Aswan & Abu Simbel over two days showcases the extraordinary legacy of the ancient Egyptian Civilization, brimming with glory and magnificence. Marvelous Egypt Travel, the top travel agency in Egypt, ensures guests receive excellent service, including a private A/C vehicle and a professional tour guide during their holiday tour in the legendary lands of Southern Egypt. Witness ancient visions of class and glory in Upper Egypt, including the Unfinished Obelisk and the majestic Philae Temple in Aswan, and the grand Abu Simbel temples at the southern border of Egypt. This tour offers a journey into the true meaning of ageless allure, allowing you to explore the pride of southern Egypt in full comfort and relaxation. Book this enchanting tour and dive into the beauty and history of Aswan and Abu Simbel.`,
    reviews: "315 Reviews",
    priceSale: "$185",
    priceOriginal: "$185",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1 Aswan",
        des: `
Pick-Up and Transfer:

Begin your journey with a transfer from your hotel in Makadi Bay to Luxor in a private A/C vehicle. Board the 1st class train to Aswan. Upon arrival, meet your private Egyptologist tour guide and start your exploration.
Visit the Aswan High Dam:

Built in the 1960s and 1970s, the Aswan High Dam is one of the largest embankment dams in the world. It plays a crucial role in the economy and culture of Egypt.
Explore the Unfinished Obelisk:

This is the largest known obelisk from ancient Egypt, commissioned by Queen Hatshepsut (1508-1458 BC). The obelisk showcases the carving techniques of the ancient Egyptians and is now an open-air museum.
Lunch Time:

Enjoy lunch at a local restaurant in Aswan.
Discover Philae Temple:

Dedicated to the goddess Isis, Philae Temple was built in 280 BC during the reign of Ptolemy II. It was relocated to Agilkia Island by UNESCO to save it from the rising waters of the Nile.
Check-in:

Transfer to a 5-star hotel in Aswan for an overnight stay.
Meals:

Lunch.
Overnight:

Aswan Hotel.
`,
      },
      {
        title: "Day 2 Abu Simbel",
        des: `
Early Morning:

Enjoy breakfast as you prepare for an early start.
Visit the Abu Simbel Temples:

These temples are part of the UNESCO World Heritage Site known as the "Nubian Monuments." The temples, built by Pharaoh Ramses the Great in 1200 BC, honor Ptah, Amun, Ra, and commemorate Ramses' victory at the Battle of Kadesh and his devotion to Queen Nefertari.
Lunch Time:

Return to Aswan for lunch before boarding the 1st class train back to Luxor.
Return to Makadi Bay:

Transfer to your hotel, ending the Makadi Bay excursion to Aswan and Abu Simbel in two days.
Meals:

Breakfast, Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Makadi Bay and return. ",
      "2 lunch meals in Aswan.",
      "All transfers by a private modern air-conditioned vehicle",
      "Private Egyptologist guide during your tour.",
      "Entrance fees to all the mentioned sights. ",
      "One-night accommodation in Aswan at a 5-star Hotel. ",
      "1st class Train tickets from Luxor to Aswan and return. ",
      "Mineral water and soft drinks onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  53: {
    title: "Cairo Tour from Sharm El Sheikh by Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a thrilling journey from Sharm El Sheikh to Cairo by plane and explore the historical and cultural milestones of the greatest city on earth. Marvelous Egypt Travel provides an enriching experience with a professional Egyptologist tour guide and a private A/C vehicle during your tour. This one-day excursion offers a chance to discover the ancient Egyptian civilization at the Giza Pyramids, explore the Egyptian Museum’s treasures, and experience the vibrant Khan El Khalili Bazaar. Book this unforgettable day trip to Cairo and immerse yourself in its magical allure.`,
    reviews: "464 Reviews",
    priceSale: "$420",
    priceOriginal: "$420",
    rating: 5,
    tourPlans: [
      {
        title: "Cairo Tour from Sharm El Sheikh by Plane",
        des: `
Morning:
Pick-Up and Transfer:

Start your journey with a transfer from your hotel in Sharm El Sheikh to the airport for your flight to Cairo. Upon arrival, meet your private Egyptologist guide and begin your Cairo tour.
Arrival in Cairo:

Upon arrival at Cairo airport, meet your private tour guide who will accompany you throughout the day.
Explore the Giza Pyramids Complex:

Discover the colossal art of the ancient Egyptians, including the three main pyramids, six little pyramids, the Great Sphinx, and the Valley Temple.
The Great Pyramid:

Marvel at the Great Pyramid of Pharaoh Khufu, the last surviving wonder of the ancient world, standing tall at 147 meters with its intricate chambers.
The Great Sphinx:

Gaze upon the Great Sphinx, a magnificent limestone statue with the body of a lion and the head of Pharaoh Khafre, symbolizing wisdom and power.
The Valley Temple:

Visit the Valley Temple, a mortuary temple used for the mummification process of 4th dynasty pharaohs before their burial in the pyramids.
Discover the Grand Egyptian Museum:

Explore the latest addition to Egypt's rich cultural heritage, home to a vast collection of artifacts, including the Hanging Obelisk, the King Ramses II Statue, the 10 Statues of King Senusert, and more. (Note: A VIP ticket is available for additional access to exclusive artifacts.)
Lunch at a Pyramid/Nile View Restaurant:

Enjoy a delightful lunch with stunning views of the Pyramids or the Nile.
Afternoon:
Visit the Egyptian Museum:

Tour the historic Egyptian Museum, showcasing an extensive collection of ancient Egyptian artifacts, located in the heart of Cairo since 1901 AD.
Stroll Al Muizz Street:

Wander along Al-Muizz Street, established in the 10th century AD, reflecting the golden era of Islamic Egypt and leading to the vibrant Khan El Khalili Bazaar.
Explore Khan El Khalili Bazaar:

Experience the bustling atmosphere of Khan El Khalili Bazaar, established between 1382 and 1389 AD, offering a plethora of unique artifacts and exquisite Islamic architecture.
Evening:
Transfer to Cairo Airport:

Transfer to Cairo airport for your flight back to Sharm El Sheikh.
Return to Your Hotel:

Upon arrival in Sharm El Sheikh, you will be transferred back to your hotel in Sharm El Sheikh, ending your Cairo day trip.
Meals:

Lunch.
Flight:

From Sharm to Cairo and Return.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Sharm and return",
      "Flight tickets from Sharm to Cairo and return.",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights.",
      "Lunch at a Pyramid/Nile view restaurant. ",
      "Mineral water onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  54: {
    title: "Luxor Day Trip from Sharm El Sheikh by Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Experience the majestic beauty of Luxor with a one-day trip from Sharm El Sheikh by plane. Marvelous Egypt Travel, renowned as the best travel agency in Egypt, will provide an unforgettable journey with a professional Egyptologist tour guide and a private air-conditioned vehicle. This tour offers a unique opportunity to explore the ancient Egyptian civilization by visiting the Valley of the Kings, Karnak Temple, Queen Hatshepsut Temple, and the Colossi of Memnon. Book this fantastic day trip and create timeless memories in the legendary city of Luxor.`,
    reviews: "322 Reviews",
    priceSale: "$695",
    priceOriginal: "$000",
    rating: 5,
    tourPlans: [
      {
        title: "Luxor Day Trip from Sharm El Sheikh by Plane",
        des: `
Pick-Up and Transfer:

Your representative will pick you up from your hotel in Sharm El Sheikh to catch your flight to Cairo, followed by a direct flight to Luxor. Upon arrival, meet your Egyptologist guide and start your private tour of Luxor's attractions.
Explore the Valley of the Kings:

This sacred site on the west bank of the Nile opposite Luxor is a golden history book buried deep within a sacred hill. Home to 63 royal tombs of the greatest Pharaohs of the 18th, 19th, and 20th dynasties of the New Kingdom (1570–1050 BC), including Ramses II, Hatshepsut, Seti I, and Tutankhamen. The valley gained global fame with the discovery of Tutankhamen's tomb, making it one of the most famous archaeological sites on earth. It was declared a World Heritage Site in 1979, along with the entire Theban Necropolis.
Visit Hatshepsut Temple:

This beautiful temple, known as the "Holy of Holies," was constructed over 15 years on the golden rock hills of Deir El Bahari in 1479 BC. Built to honor the sun god Amun and immortalize the legacy of Queen Hatshepsut, one of the most successful pharaohs in ancient Egyptian history, it is the most preserved example of classical ancient Egyptian architecture.
Admire the Colossi of Memnon:

These two grand statues of Pharaoh Amenhotep III (1386 - 1349 BC) were built in 1350 BC to guard the entrance of his long-faded temple. The statues underwent numerous renovations and became known for their Vocal Phenomenon at dawn during the Greco-Roman period. The Colossi are adorned with mystical decorations depicting Amenhotep III's history, family, and the Nile god Hapi.
Lunch Time:

Enjoy a delicious lunch on an island, accompanied by a scenic boat trip on the Nile River. After lunch, you will continue your guided tour to visit:
Discover Karnak Temple:

This colossal temple complex, covering 247 acres, was built between 2000 BC and 30 BC during the Middle Kingdom to the Greco-Roman period. It served as the main religious center for worshipping the Theban triad of Amun, Mut, and Khonsu for over 1500 years. The complex features the Avenue of Sphinxes, the grand Hypostyle Hall, and numerous carvings, paintings, and shrines dedicated to various gods.
Explore Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Sharm El Sheikh

Transfer to Luxor Airport for your flight to Cairo, then catch your direct flight back to Sharm El Sheikh. Upon arrival, you will be transferred to your hotel, concluding your Luxor day trip.
Meals:

Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Sharm El Sheikh and return.",
      "Domestic flight tickets from Sharm to Cairo/ from Cairo to Luxor/ from Luxor to Cairo/ from Cairo to Sharm. ",
      "All transfers by a private modern air-conditioned vehicle.",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights. ",
      "Lunch meal during the tour. ",
      "Water and soft drinks onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  55: {
    title: "Overnight Trip to Cairo and Luxor from Sharm by Flight",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "2 days",
    des: `Embark on a majestic two-day tour from Sharm El Sheikh to Cairo and Luxor by flight. Witness the timeless wonders of ancient Egypt, exploring Cairo’s Giza Pyramids and Egyptian Museum, followed by Luxor’s Karnak Temple, Valley of the Kings, and Hatshepsut Temple. Marvelous Egypt Travel, the best travel agency in Egypt, ensures top-notch service with experienced Egyptologist guides and private air-conditioned vehicles. Book this incredible excursion to live the adventure of your wildest dreams.`,
    reviews: "360 Reviews",
    priceSale: "$840",
    priceOriginal: "$840",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1 Cairo",
        des: `
Pick-Up and Transfer:

Your representative will pick you up from your hotel in Sharm El Sheikh in a private air-conditioned vehicle for your flight to Cairo. Upon arrival, meet your Egyptologist guide to explore Cairo's attractions.
Arrival in Cairo:

Upon arrival at Cairo airport, meet your private tour guide who will accompany you throughout the day.
Explore the Giza Pyramids Complex:

Discover the colossal art of the ancient Egyptians, including the three main pyramids, six little pyramids, the Great Sphinx, and the Valley Temple.
The Great Pyramid:

Marvel at the Great Pyramid of Pharaoh Khufu, the last surviving wonder of the ancient world, standing tall at 147 meters with its intricate chambers.
The Great Sphinx:

Gaze upon the Great Sphinx, a magnificent limestone statue with the body of a lion and the head of Pharaoh Khafre, symbolizing wisdom and power.
The Valley Temple:

Visit the Valley Temple, a mortuary temple used for the mummification process of 4th dynasty pharaohs before their burial in the pyramids.
Discover the Grand Egyptian Museum:

Explore the latest addition to Egypt's rich cultural heritage, home to a vast collection of artifacts, including the Hanging Obelisk, the King Ramses II Statue, the 10 Statues of King Senusert, and more. (Note: A VIP ticket is available for additional access to exclusive artifacts.)
Lunch at a Pyramid/Nile View Restaurant:

Enjoy a delightful lunch with stunning views of the Pyramids or the Nile.
Visit the Egyptian Museum:

Tour the historic Egyptian Museum, showcasing an extensive collection of ancient Egyptian artifacts, located in the heart of Cairo since 1901 AD.
Transfer to Cairo Airport:

You will be driven to Cairo Airport for your flight to Luxor. Upon arrival, transfer to a 5-star hotel for an overnight stay.
Meals:

Lunch.
Overnight:

Luxor Hotel.
Flight:

From Sharm to Cairo and From Cairo to Luxor.
`,
      },
      {
        title: "Day 2 Luxor",
        des: `
Morning:

Enjoy breakfast at your hotel, then your representative will pick you up from your hotel in a private air-conditioned vehicle to explore Luxor's attractions.
Explore the Valley of the Kings:

This sacred site on the west bank of the Nile opposite Luxor is a golden history book buried deep within a sacred hill. Home to 63 royal tombs of the greatest Pharaohs of the 18th, 19th, and 20th dynasties of the New Kingdom (1570–1050 BC), including Ramses II, Hatshepsut, Seti I, and Tutankhamen. The valley gained global fame with the discovery of Tutankhamen's tomb, making it one of the most famous archaeological sites on earth. It was declared a World Heritage Site in 1979, along with the entire Theban Necropolis.
Visit Hatshepsut Temple:

This beautiful temple, known as the "Holy of Holies," was constructed over 15 years on the golden rock hills of Deir El Bahari in 1479 BC. Built to honor the sun god Amun and immortalize the legacy of Queen Hatshepsut, one of the most successful pharaohs in ancient Egyptian history, it is the most preserved example of classical ancient Egyptian architecture.
Admire the Colossi of Memnon:

These two grand statues of Pharaoh Amenhotep III (1386 - 1349 BC) were built in 1350 BC to guard the entrance of his long-faded temple. The statues underwent numerous renovations and became known for their Vocal Phenomenon at dawn during the Greco-Roman period. The Colossi are adorned with mystical decorations depicting Amenhotep III's history, family, and the Nile god Hapi.
Lunch Time:

Enjoy a delicious lunch on an island, accompanied by a scenic boat trip on the Nile River. After lunch, you will continue your guided tour to visit:
Discover Karnak Temple:

This colossal temple complex, covering 247 acres, was built between 2000 BC and 30 BC during the Middle Kingdom to the Greco-Roman period. It served as the main religious center for worshipping the Theban triad of Amun, Mut, and Khonsu for over 1500 years. The complex features the Avenue of Sphinxes, the grand Hypostyle Hall, and numerous carvings, paintings, and shrines dedicated to various gods.
Explore Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Transfer:

Transfer to Luxor airport for your flight to Cairo, then catch your direct flight back to Sharm El Sheikh. Upon arrival, your representative will transfer you to your hotel in Sharm.
Meals:

Breakfast, Lunch.
Flight:

From Luxor to Cairo and From Cairo to Sharm.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Sharm El Sheikh and return. ",
      "Domestic flight tickets from Sharm to Cairo/ Cairo to Luxor/ Luxor to Cairo/ Cairo to Sharm. ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights. ",
      "One night accommodation at a 5-star hotel in Luxor. ",
      "2 Lunch meals during tours in Cairo and Luxor. ",
      "Mineral water and soft drinks onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost.",
    ],
  },

  56: {
    title: "Cairo Day Trip from Port Ghalib by Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Experience the golden heritage of ancient Egypt with a full-day trip from Port Ghalib to Cairo by plane. Marvelous Egypt Travel, the premier travel agency in Egypt, offers exceptional service with private A/C vehicles and professional Egyptologist tour guides. This tour covers iconic monuments such as the Giza Pyramids, the Great Sphinx, the Grand Egyptian Museum, and Khan El Khalili Bazaar, reflecting the Pharaonic and Islamic heritage of Egypt. Book this incredible excursion and have the adventure of a lifetime.`,
    reviews: "321  Reviews",
    priceSale: "$450",
    priceOriginal: "$450",
    rating: 5,
    tourPlans: [
      {
        title: "Cairo Day Trip from Port Ghalib by Plane",
        des: `
Morning:
Pick-Up and Transfer:

Your representative will pick you up from your hotel in Port Ghalib to Marsa Alam airport for your flight to Cairo. Upon arrival, meet your private tour guide and begin exploring Cairo's attractions.
Arrival in Cairo:

Upon arrival at Cairo airport, meet your private tour guide who will accompany you throughout the day.
Explore the Giza Pyramids Complex:

Discover the colossal art of the ancient Egyptians, including the three main pyramids, six little pyramids, the Great Sphinx, and the Valley Temple.
The Great Pyramid:

Marvel at the Great Pyramid of Pharaoh Khufu, the last surviving wonder of the ancient world, standing tall at 147 meters with its intricate chambers.
The Great Sphinx:

Gaze upon the Great Sphinx, a magnificent limestone statue with the body of a lion and the head of Pharaoh Khafre, symbolizing wisdom and power.
The Valley Temple:

Visit the Valley Temple, a mortuary temple used for the mummification process of 4th dynasty pharaohs before their burial in the pyramids.
Discover the Grand Egyptian Museum:

Explore the latest addition to Egypt's rich cultural heritage, home to a vast collection of artifacts, including the Hanging Obelisk, the King Ramses II Statue, the 10 Statues of King Senusert, and more. (Note: A VIP ticket is available for additional access to exclusive artifacts.)
Lunch at a Pyramid/Nile View Restaurant:

Enjoy a delightful lunch with stunning views of the Pyramids or the Nile.
Afternoon:
Visit the Egyptian Museum:

Tour the historic Egyptian Museum, showcasing an extensive collection of ancient Egyptian artifacts, located in the heart of Cairo since 1901 AD.
Stroll Al Muizz Street:

Wander along Al-Muizz Street, established in the 10th century AD, reflecting the golden era of Islamic Egypt and leading to the vibrant Khan El Khalili Bazaar.
Explore Khan El Khalili Bazaar:

Experience the bustling atmosphere of Khan El Khalili Bazaar, established between 1382 and 1389 AD, offering a plethora of unique artifacts and exquisite Islamic architecture.
Evening:
Transfer to Cairo Airport:

Head to Cairo airport to fly to Hurghada.
Return to Your Hotel:

Transfer to your hotel in Port Ghalib.
Meals:

Lunch.
Flight:

From Marsa Alam to Cairo and From Cairo to Hurghada.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Port Ghalib and return. ",
      "Domestic flight tickets: (Marsa Alam/ Cairo) and (Cairo/ Hurghada). ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour.",
      "Entrance fees to all the mentioned sights.",
      "Lunch at a Pyramid/Nile view restaurant. ",
      "Mineral water and soft drinks onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program.",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  57: {
    title: "Full Day Tour to Luxor from Port Ghalib",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a breathtaking full-day tour to Luxor from Port Ghalib and immerse yourself in the golden journey across the legendary city of Luxor, known as Thebes in ancient times. Marvelous Egypt Travel, the premier travel agency in Egypt, offers top-notch services including a professional Egyptologist tour guide and private A/C vehicle. Discover the finest examples of ancient Egyptian architecture, including the Hatshepsut Temple, the Valley of the Kings, and the Karnak Temple complex. Book this magical excursion and create delightful memories of a lifetime.`,
    reviews: "642 Reviews",
    priceSale: "$105",
    priceOriginal: "$105",
    rating: 5,
    tourPlans: [
      {
        title: "Full Day Tour to Luxor from Port Ghalib",
        des: `
Pick-Up and Transfer:

Early morning pickup from your hotel in Port Ghalib. Travel by air-conditioned car to Luxor.
Explore the Valley of the Kings:

This sacred site on the west bank of the Nile opposite Luxor is a golden history book buried deep within a sacred hill. Home to 63 royal tombs of the greatest Pharaohs of the 18th, 19th, and 20th dynasties of the New Kingdom (1570–1050 BC), including Ramses II, Hatshepsut, Seti I, and Tutankhamen. The valley gained global fame with the discovery of Tutankhamen's tomb, making it one of the most famous archaeological sites on earth. It was declared a World Heritage Site in 1979, along with the entire Theban Necropolis.
Visit Hatshepsut Temple:

This beautiful temple, known as the "Holy of Holies," was constructed over 15 years on the golden rock hills of Deir El Bahari in 1479 BC. Built to honor the sun god Amun and immortalize the legacy of Queen Hatshepsut, one of the most successful pharaohs in ancient Egyptian history, it is the most preserved example of classical ancient Egyptian architecture.
Admire the Colossi of Memnon:

These two grand statues of Pharaoh Amenhotep III (1386 - 1349 BC) were built in 1350 BC to guard the entrance of his long-faded temple. The statues underwent numerous renovations and became known for their Vocal Phenomenon at dawn during the Greco-Roman period. The Colossi are adorned with mystical decorations depicting Amenhotep III's history, family, and the Nile god Hapi.
Lunch Time:

Enjoy a delicious lunch on an island, accompanied by a scenic boat trip on the Nile River. After lunch, you will continue your guided tour to visit:
Discover Karnak Temple:

This colossal temple complex, covering 247 acres, was built between 2000 BC and 30 BC during the Middle Kingdom to the Greco-Roman period. It served as the main religious center for worshipping the Theban triad of Amun, Mut, and Khonsu for over 1500 years. The complex features the Avenue of Sphinxes, the grand Hypostyle Hall, and numerous carvings, paintings, and shrines dedicated to various gods.
Explore Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Return to Port Ghalib:

Transfer back to your hotel in Port Ghalib by an air-conditioned vehicle.
Meals:

Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Port Ghalib and return. ",
      "Lunch meal during your day tour. ",
      "All transfers by a private modern air-conditioned vehicle.",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights. ",
      "Mineral water onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  58: {
    title: "Port Ghalib to Luxor and Abu Simbel in Two Days",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "2 days",
    des: `Experience the ultimate chance to witness the greatest archaeological wonders on earth with this special two-day tour from Port Ghalib to Luxor and Abu Simbel. Marvelous Egypt Travel, the best travel agency in Egypt, provides ideal services including a private A/C Vehicle, relaxing accommodations, and a skilled Egyptologist tour guide. Uncover the mystical secrets of ancient Egyptian culture through visits to the Karnak Temple complex, the Valley of the Kings, Hatshepsut Temple, and the majestic Abu Simbel Temples. Book your ticket to ancient times and live the wonders of ancient history.`,
    reviews: "456 Reviews",
    priceSale: "$250",
    priceOriginal: "$250",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1 Luxor",
        des: `
Pick-Up and Transfer:

Pickup from your hotel in Port Ghalib by an A/C vehicle to Luxor.
Explore the Valley of the Kings:

This sacred site on the west bank of the Nile opposite Luxor is a golden history book buried deep within a sacred hill. Home to 63 royal tombs of the greatest Pharaohs of the 18th, 19th, and 20th dynasties of the New Kingdom (1570–1050 BC), including Ramses II, Hatshepsut, Seti I, and Tutankhamen. The valley gained global fame with the discovery of Tutankhamen's tomb, making it one of the most famous archaeological sites on earth. It was declared a World Heritage Site in 1979, along with the entire Theban Necropolis.
Visit Hatshepsut Temple:

This beautiful temple, known as the "Holy of Holies," was constructed over 15 years on the golden rock hills of Deir El Bahari in 1479 BC. Built to honor the sun god Amun and immortalize the legacy of Queen Hatshepsut, one of the most successful pharaohs in ancient Egyptian history, it is the most preserved example of classical ancient Egyptian architecture.
Admire the Colossi of Memnon:

These two grand statues of Pharaoh Amenhotep III (1386 - 1349 BC) were built in 1350 BC to guard the entrance of his long-faded temple. The statues underwent numerous renovations and became known for their Vocal Phenomenon at dawn during the Greco-Roman period. The Colossi are adorned with mystical decorations depicting Amenhotep III's history, family, and the Nile god Hapi.
Lunch Time:

Enjoy a meal at an oriental Nile view restaurant.
Discover Karnak Temple:

This colossal temple complex, covering 247 acres, was built between 2000 BC and 30 BC during the Middle Kingdom to the Greco-Roman period. It served as the main religious center for worshipping the Theban triad of Amun, Mut, and Khonsu for over 1500 years. The complex features the Avenue of Sphinxes, the grand Hypostyle Hall, and numerous carvings, paintings, and shrines dedicated to various gods.
Explore Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Evening:

Transfer to the train station to catch the 1st class train to Aswan. Upon arrival, transfer to your hotel in Aswan for the overnight stay.
Meals:

Lunch.
Overnight:

Aswan Hotel.
`,
      },
      {
        title: "Day 2 Abu Simbel",
        des: `
Early Morning:

Enjoy breakfast as you prepare for an early start.
Visit the Abu Simbel Temples:

These temples are part of the UNESCO World Heritage Site known as the "Nubian Monuments." The temples, built by Pharaoh Ramses the Great in 1200 BC, honor Ptah, Amun, Ra, and commemorate Ramses' victory at the Battle of Kadesh and his devotion to Queen Nefertari.
Lunch Time:

Return to Aswan for lunch at a local restaurant.
Afternoon:

Catch the train back to Luxor and then drive back to your hotel in Port Ghalib, concluding your two-day tour.
Meals:

Breakfast, Lunch.
`,
      },
    ],
    included: [
      "1st class train tickets from Luxor to Aswan and return. ",
      "1-night accommodation at a 5-star hotel in Aswan. ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights.",
      "Bottled water during your trip. ",
      "Pickup services from your hotel and return. ",
      "Two lunch meals. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  59: {
    title: "Cairo Day Tour from Soma Bay by Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a marvelous quest to explore the immortal treasures of ancient Egypt with a Cairo day tour from Soma Bay by plane. The excellent travel agency Marvelous Egypt Travel offers clients the best services, including a private A/C Vehicle and a professional Egyptologist tour guide. Experience a magical holiday where you will witness timeless entities filled with enchanting collections of ancient wonders. Explore colossal constructions and attractions such as the Giza Pyramids, the Great Sphinx, Khan El Khalili Bazaar, and more, showcasing over 5000 years of Egyptian civilization. Book this incredible excursion and live a magical adventure across time.`,
    reviews: "246 Reviews",
    priceSale: "$430",
    priceOriginal: "$430",
    rating: 5,
    tourPlans: [
      {
        title: "Cairo Day Tour from Soma Bay by Plane",
        des: `
Morning:
Pick-Up and Transfer:

Head to Hurghada Airport from Soma Bay to catch your flight to Cairo.
Arrival in Cairo:

Upon landing, meet your tour guide and begin your journey.
Explore the Giza Pyramids Complex:

Discover the colossal art of the ancient Egyptians, including the three main pyramids, six little pyramids, the Great Sphinx, and the Valley Temple.
The Great Pyramid:

Marvel at the Great Pyramid of Pharaoh Khufu, the last surviving wonder of the ancient world, standing tall at 147 meters with its intricate chambers.
The Great Sphinx:

Gaze upon the Great Sphinx, a magnificent limestone statue with the body of a lion and the head of Pharaoh Khafre, symbolizing wisdom and power.
The Valley Temple:

Visit the Valley Temple, a mortuary temple used for the mummification process of 4th dynasty pharaohs before their burial in the pyramids.
Discover the Grand Egyptian Museum:

Explore the latest addition to Egypt's rich cultural heritage, home to a vast collection of artifacts, including the Hanging Obelisk, the King Ramses II Statue, the 10 Statues of King Senusert, and more. (Note: A VIP ticket is available for additional access to exclusive artifacts.)
Lunch at a Pyramid/Nile View Restaurant:

Enjoy a delightful lunch with stunning views of the Pyramids or the Nile.
Afternoon:
Visit the Egyptian Museum:

Tour the historic Egyptian Museum, showcasing an extensive collection of ancient Egyptian artifacts, located in the heart of Cairo since 1901 AD.
Stroll Al Muizz Street:

Wander along Al-Muizz Street, established in the 10th century AD, reflecting the golden era of Islamic Egypt and leading to the vibrant Khan El Khalili Bazaar.
Explore Khan El Khalili Bazaar:

Experience the bustling atmosphere of Khan El Khalili Bazaar, established between 1382 and 1389 AD, offering a plethora of unique artifacts and exquisite Islamic architecture.
Evening:
Transfer to Cairo Airport:

Return to Cairo Airport, catch the flight to Hurghada.
Return to Your Hotel:

Head back to your hotel in Soma Bay, concluding your day trip.
Meals:

Lunch.
Flight:

From Hurghada to Cairo and Return.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Soma bay and return. ",
      "Domestic flight tickets.",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour.",
      "Entrance fees to all the mentioned sights. ",
      "Lunch at a Pyramid/Nile view restaurant. ",
      "Mineral water onboard the vehicle. ",
      "All service charges and taxes.",
    ],
    excluded: [
      "Any extras not mentioned in the program.",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  60: {
    title: "Full Day Tour to Luxor from Soma Bay",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a miraculous adventure exploring the epic wonders of Thebes with a full-day tour to Luxor from Soma Bay. Marvelous Egypt Travel, renowned as the best travel agency in Egypt, provides exceptional services, including a professional Egyptologist tour guide and a private A/C Vehicle. Guests will explore a third of the world’s monuments in a single day within Luxor, the golden city. Discover rare constructions and artifacts like the Hatshepsut Temple, the Valley of the Kings, and the Karnak Temple complex. Experience the legacy of a 5000-year-old civilization and enjoy an unforgettable day where the magic of ancient times shines brightly. Book this golden excursion to witness the wonders of Egypt.`,
    reviews: "513 Reviews",
    priceSale: "$80",
    priceOriginal: "$80",
    rating: 5,
    tourPlans: [
      {
        title: "Full Day Tour to Luxor from Soma Bay",
        des: `
Pick-Up and Transfer:

Begin your journey by driving from your Soma Bay hotel in an air-conditioned car to Luxor to explore:
Explore the Valley of the Kings:

This sacred site on the west bank of the Nile opposite Luxor is a golden history book buried deep within a sacred hill. Home to 63 royal tombs of the greatest Pharaohs of the 18th, 19th, and 20th dynasties of the New Kingdom (1570–1050 BC), including Ramses II, Hatshepsut, Seti I, and Tutankhamen. The valley gained global fame with the discovery of Tutankhamen's tomb, making it one of the most famous archaeological sites on earth. It was declared a World Heritage Site in 1979, along with the entire Theban Necropolis.
Visit Hatshepsut Temple:

This beautiful temple, known as the "Holy of Holies," was constructed over 15 years on the golden rock hills of Deir El Bahari in 1479 BC. Built to honor the sun god Amun and immortalize the legacy of Queen Hatshepsut, one of the most successful pharaohs in ancient Egyptian history, it is the most preserved example of classical ancient Egyptian architecture.
Admire the Colossi of Memnon:

These two grand statues of Pharaoh Amenhotep III (1386 - 1349 BC) were built in 1350 BC to guard the entrance of his long-faded temple. The statues underwent numerous renovations and became known for their Vocal Phenomenon at dawn during the Greco-Roman period. The Colossi are adorned with mystical decorations depicting Amenhotep III's history, family, and the Nile god Hapi.
Lunch Time:

Enjoy a delicious lunch on an island, accompanied by a scenic boat trip on the Nile River. After lunch, you will continue your guided tour to visit:
Discover Karnak Temple:

This colossal temple complex, covering 247 acres, was built between 2000 BC and 30 BC during the Middle Kingdom to the Greco-Roman period. It served as the main religious center for worshipping the Theban triad of Amun, Mut, and Khonsu for over 1500 years. The complex features the Avenue of Sphinxes, the grand Hypostyle Hall, and numerous carvings, paintings, and shrines dedicated to various gods.
Explore Luxor Temple:

The Luxor Temple, the southern Sanctuary, was created to be a center of celebration and admiration. Built in 1400 BC, it is dedicated to the Theban triad of Amun, Mut, and Khonsu and to host the Opet festival for the rejuvenation of kingship. It became part of the UNESCO World Heritage site in 1979.
Return to Soma Bay:

End your day tour by returning to your hotel in Soma Bay in a private A.C car.
Meals:

Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Soma Bay and return.",
      "Lunch meal during your day tour. ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights. ",
      "Mineral water onboard the vehicle. ",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost.",
    ],
  },

  61: {
    title: "2 Days Aswan and Abu Simbel Trip from Soma Bay",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `Embark on a 2-day journey from Soma Bay to the legendary lands of Southern Egypt, shedding light on the extraordinary heritage of ancient Egyptian civilization. With Marvelous Egypt Travel, the best travel agency in Egypt, guests will enjoy excellent service, including a private A/C vehicle and a professional tour guide. This tour covers distant destinations and showcases wonders created with pure skill and beauty for honoring religious beliefs. Visit the beautiful Philae Temple, the High Dam, the Unfinished Obelisk, and the legendary Two Temples of Abu Simbel. Book this magical two-day tour from Soma Bay to Aswan & Abu Simbel and witness the enchanting constructions of ancient Egypt.`,
    reviews: "315 Reviews",
    priceSale: "$220",
    priceOriginal: "$220",
    rating: 5,
    tourPlans: [
      {
        title: "Day 1 Aswan",
        des: `
Pick-Up and Transfer:

Pick up from your hotel by a private modern A.C car to catch a 1st class train to Aswan. Upon arrival, meet your private professional tour guide and begin your tour:
Visit the Aswan High Dam:

Built in the 1960s and 1970s, the Aswan High Dam is one of the largest embankment dams in the world. It plays a crucial role in the economy and culture of Egypt.
Explore the Unfinished Obelisk:

This is the largest known obelisk from ancient Egypt, commissioned by Queen Hatshepsut (1508-1458 BC). The obelisk showcases the carving techniques of the ancient Egyptians and is now an open-air museum.
Lunch Time:

Enjoy lunch at a local restaurant in Aswan.
Discover Philae Temple:

Dedicated to the goddess Isis, Philae Temple was built in 280 BC during the reign of Ptolemy II. It was relocated to Agilkia Island by UNESCO to save it from the rising waters of the Nile.
Check-in:

Transfer to a 5-star hotel in Aswan for an overnight stay.
Meals:

Lunch.
Overnight:

Aswan Hotel.
`,
      },
      {
        title: "Day 2 Abu Simbel",
        des: `
Early Morning:

Enjoy breakfast as you prepare for an early start.
Visit the Abu Simbel Temples:

These temples are part of the UNESCO World Heritage Site known as the "Nubian Monuments." The temples, built by Pharaoh Ramses the Great in 1200 BC, honor Ptah, Amun, Ra, and commemorate Ramses' victory at the Battle of Kadesh and his devotion to Queen Nefertari.
Lunch Time:

Return to Aswan for lunch at a local restaurant.
Evening:

Catch a train to Luxor, then transfer by a private car to your hotel in Soma Bay, concluding your two-day trip from Soma Bay to Aswan and Abu Simbel.
Meals:

Breakfast, Lunch.
`,
      },
    ],
    included: [
      "Pick-up service from your hotel in Soma Bay and return. ",
      "2 lunch meals in Aswan. ",
      "All transfers by a private modern air-conditioned vehicle. ",
      "Private Egyptologist guide during your tour. ",
      "Entrance fees to all the mentioned sights. ",
      "One-night accommodation in Aswan at a 5-star Hotel. ",
      "Train tickets from Luxor to Aswan and return. ",
      "Mineral water and soft drinks onboard the vehicle.",
      "All service charges and taxes. ",
    ],
    excluded: [
      "Any extras not mentioned in the program. ",
      "Tipping",
      "Optional Experiences available at an additional cost. ",
    ],
  },

  62: {
    title: "Amazing Full-Day Tour from Safaga to Luxor",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des: `

Embark on a miraculous journey with a day tour to Luxor from Safaga Port, where you will traverse a golden path back in time to witness the grandeur of the ancient Egyptian civilization. Marvelous Egypt Travel, renowned as the best travel agency in Egypt, provides our clients with exceptional services, including expert Egyptologist tour guides and private A/C vehicles.

During this one-day tour from Safaga to Luxor, our guests will experience the magnificence of Upper Egypt as they explore Luxor’s renowned tourist attractions. Discover the timeless treasures of the ancient Egyptian pharaohs by visiting the Valley of the Kings, Karnak Temples, Hatshepsut Temple, and the Colossi of Memnon. After an enriching day, we will drive you back to Safaga Port.

Experience an unforgettable holiday amidst the majestic wonders of Luxor by booking this extraordinary day trip.
`,
    reviews: "453 Reviews",
    priceSale: "$160",
    priceOriginal: "$160",
    rating: 5,
    tourPlans: [
      {
        title: "Day Tour from Safaga to Luxor",
        des: `
Morning:
Pickup from Safaga Port:

Our representative will greet you at the cruise exit door at Safaga Port and accompany you on a scenic 3-hour drive to Luxor. Upon arrival, your day tour will begin with visits to the following:
Valley of the Kings:

During the new kingdom (1570 – 1050 BC) a magical time vault known as the Valley of the Kings was made in the heart of the sacred hill. The royal gates of the kings contain 63 tombs filled with golden artifacts and colorful decorations of the great Pharaohs such as Ramses II, Hatshepsut, Seti I, Tutankhamen, and various more.
Hatshepsut Temple:

This glorious and beautiful colossal temple was made for Queen Hatshepsut (1507–1458 BC) to be the holy of holies that came into existence in 1479 BC to honor the sun god Amun and immortalize the great heritage of Hatshepsut. The enchanting temple of Hatshepsut was carved at the rocky hills of Deir El Bahari for 15 years to become one of the most preserved architectural and archaeological constructions in the history of Egypt.
Colossi of Memnon:

The everlasting statues of Colossi of Memnon of Pharaoh Amenhotep III (1386 - 1349 BC) are giant masterpieces that were constructed in 1350 BC but reassembled various times during the Greco-Roman period. It was named for Memnon, the Greek historical figure.
Afternoon:
Lunch Time:

Enjoy a delightful lunch on a picturesque island.
Karnak Temple:

The grand Karnak temple complex is known as the most selected of places by the divine power of ancient Egypt showcasing the religious dedication and the architectural mastery of the ancient Egyptians. It was built for honoring the Theban triad of Amun, Mut, and Khonsu. The blessed Karnak temple's complex construction process came to be 2000 BC to 30 BC on 247 acres of divine lands. The enchanting Avenue of Sphinxes, hypostyle hall, and the religious are famous for being the most enchanting examples of archaeological architecture and art.
Luxor Temple:

Luxor Temple is a majestic temple complex located on the east bank of the Nile River. Built around 1400 BC, it was dedicated to the rejuvenation of kingship and was constructed by Amenhotep III and completed by Tutankhamun and Horemheb. The temple features massive pylons, a grand colonnade, and numerous statues and carvings, showcasing the grandeur of ancient Egyptian architecture and art.
Evening:
Return to Safaga Port:

Finally, we will transfer you back to Safaga Port to end your day tour from Safaga to Luxor.
`,
      },
    ],
    included: [
      "Pick up services from Safaga port to Luxor and return. ",
      "All transfers by a private modern A/C vehicle.",
      "Private Egyptologist guide during your journey. ",
      "Mineral water on board the vehicle. ",
      "Lunch during your tour. ",
      "Entrance fees for all sightseeing are mentioned.",
      "All service charges and taxes."
    ],
    excluded: [
      "Tipping",
      "Any extras not mentioned in the itinerary. ",
      "Optional Experiences available at an additional cost. "
    ],
  },

  63: {
      title:"Tour to Dandara and Abydos Temples from Safaga Port",
      maxGuests: "Unlimited",
      location: "Egypt",
      left: "1 days",
      des: `

Embark on a tour to Dandara and Abydos Temples from Safaga Port and uncover the rarest, oldest, and most sacred wonders of the ancient Egyptian civilization. Marvelous Egypt Travel, the best travel agency in Egypt, offers travelers an exceptional experience with the finest tours and top-notch service.

Enjoy a private day tour to Dandara and Abydos Temples, accompanied by a private Egyptologist tour guide and a private air-conditioned car. Witness the history behind the Dandara Temple, dedicated to Goddess Hathor, the deity of love, beauty, and maturity. Explore the Abydos Temple, dedicated to God Osiris, the deity of the underworld. After an enlightening day, we will drive you back to Safaga Port.

Book this incredible tour to discover the wonders and treasures of Upper Egypt.
`,
      reviews: "423 Reviews",
      priceSale: "$80",
      priceOriginal: "$80",
      rating: 5,
      tourPlans: [
        {
          title: "Tour to Dandara and Abydos Temples from Safaga Port",
          des: `
Morning:
Pickup from Safaga Port:

Our representative will pick you up from Safaga Port to discover two of the most preserved temples.
Abydos Temple:

The gateway of Osiris and the Memorial Temple of Seti I. Abydos temple was built between the first Dynasty all the way to the 30th. It is famous for containing the Abydos King List, a chronological list of Pharaohs from Menes all the way to Ramses I.
Afternoon:
Lunch Time:

Enjoy your lunch at a local restaurant.
Dendera Temple:

The Divine Dendera temples are a complex dedicated to Hathor, the goddess of love and joy. The construction process of the temple complex started in 2250 BC and continued until 343 BC to house a number of great constructions such as the beautiful Hathor temple. It is famous for containing the Dendera Zodiac, the Dendera light, and many more enchanting paintings and decorations which make this temple one of the most preserved temples in all of Egypt.
Evening:
Return to Safaga Port:

Finally, we will transfer you back to end your Dendera and Abydos tour from Safaga port.
`,
        },

      ],
      included: [
        "Pick up services from Safaga port to Luxor and return. ",
        "All transfers by a private modern A/C vehicle. ",
        "Private Egyptologist guide during your journey. ",
        "Mineral water on board the vehicle. ",
        "Lunch during your tour. ",
        "Entrance fees for all sightseeing are mentioned.",
        "All service charges and taxes. "
      ],
      excluded: [
        "Tipping",
        "Any extras not mentioned in the itinerary. ",
        "Optional Experiences available at an additional cost. "
      ],
    },

  64: {
      title:"2 Days Cairo and Luxor Tour from Safaga Port",
      maxGuests: "Unlimited",
      location: "Egypt",
      left: "2 days",
      des: `

Experience the Amazing Two-Day Tour from Safaga to Cairo and Luxor, a journey of everlasting bliss that showcases the remarkable wonders of ancient Egyptian civilization. Marvelous Egypt Travel, the premier travel agency in Egypt, ensures an exceptional experience with top-notch services, including expert Egyptologist tour guides and private A/C vehicles.

Over two unforgettable days, you will explore the stunning landmarks in both Cairo and Luxor. Begin with a tour of the Pyramids of Giza, the Egyptian Museum, and other iconic sites in Cairo. Then, fly to Luxor to immerse yourself in the rich mythology of ancient Egypt, visiting breathtaking temples and tombs such as Karnak, the Temple of Queen Hatshepsut, the Valley of the Kings, and more. After your adventure, we will drive you back to Safaga.

Book this incredible excursion and embark on the adventure of a lifetime.
`,
      reviews: "213 Reviews",
      priceSale: "$490",
      priceOriginal: "$490",
      rating: 5,
      tourPlans: [
        {
          title: "Day 1: Cairo",
          des: `
Morning:
Pickup from Safaga Port:

Our representative will pick you up from Safaga Port and transfer you to Hurghada airport for a flight to Cairo.
Giza Pyramids Complex:

- The Great Pyramid: The eternal Great Pyramid, built in 2570 BC by King Khufu, is an immortal archaeological wonder.
- The Great Sphinx: Carved from a single piece of limestone, it reflects the legacy of King Khafre.
- The Valley Temple: Created in 2600 BC, this temple was used for royal mummifications.
The Grand Egyptian Museum:

Explore celestial ancient Egyptian creations and some of the greatest archaeological artifacts ever made, including the Hanging Obelisk, King Ramses II Statue, and the Grand Atrium and Gift Show.
Lunch:

Served at a restaurant with views of the Pyramids or Nile.
The Egyptian Museum:

Opened in 1901, this museum houses some of the greatest monuments and artifacts in history.
Evening:
Flight to Luxor:

You will be driven to Cairo airport for a flight to Luxor.
Overnight in Luxor:

Transfer to a 5-star hotel in Luxor for overnight accommodation.
Meals:

Lunch.
Flight:

From Hurghada to Cairo and From Cairo to Luxor.
Overnight:

Luxor Hotel.
`,
        },
        {
          title: "Day 2: Luxor",
          des: `
Morning:

Enjoy your breakfast at the hotel, then your day tour will begin with visits to the following:
Valley of the Kings:

During the new kingdom (1570 – 1050 BC) a magical time vault known as the Valley of the Kings was made in the heart of the sacred hill. The royal gates of the kings contain 63 tombs filled with golden artifacts and colorful decorations of the great Pharaohs such as Ramses II, Hatshepsut, Seti I, Tutankhamen, and various more.
Hatshepsut Temple:

This glorious and beautiful colossal temple was made for Queen Hatshepsut (1507–1458 BC) to be the holy of holies that came into existence in 1479 BC to honor the sun god Amun and immortalize the great heritage of Hatshepsut. The enchanting temple of Hatshepsut was carved at the rocky hills of Deir El Bahari for 15 years to become one of the most preserved architectural and archaeological constructions in the history of Egypt.
Colossi of Memnon:

The everlasting statues of Colossi of Memnon of Pharaoh Amenhotep III (1386 - 1349 BC) are giant masterpieces that were constructed in 1350 BC but reassembled various times during the Greco-Roman period. It was named for Memnon, the Greek historical figure.
Afternoon:
Lunch Time:

Enjoy lunch on an island, with a boat trip on the Nile River.
Karnak Temple:

The grand Karnak temple complex is known as the most selected of places by the divine power of ancient Egypt showcasing the religious dedication and the architectural mastery of the ancient Egyptians. It was built for honoring the Theban triad of Amun, Mut, and Khonsu. The blessed Karnak temple's complex construction process came to be 2000 BC to 30 BC on 247 acres of divine lands. The enchanting Avenue of Sphinxes, hypostyle hall, and the religious are famous for being the most enchanting examples of archaeological architecture and art.
Luxor Temple:

Luxor Temple is a majestic temple complex located on the east bank of the Nile River. Built around 1400 BC, it was dedicated to the rejuvenation of kingship and was constructed by Amenhotep III and completed by Tutankhamun and Horemheb. The temple features massive pylons, a grand colonnade, and numerous statues and carvings, showcasing the grandeur of ancient Egyptian architecture and art.
Evening:
Return to Safaga Port:

We will transfer you back by a private A/C vehicle to Safaga port.
Meals:

Breakfast, Lunch.
`,
        },

      ],
      included: [
        "Flight tickets from Hurghada to Cairo and Cairo to Luxor",
        "One Night Accommodation in Luxor at a 5-star Hotel",
        "Pick up services from Safaga Port and return ",
        "All transfers by a private modern A/C vehicle ",
        "Private Egyptologist guides during your trip ",
        "Mineral water on board the vehicles during your tours ",
        "2 Lunch meals during the day trips ",
        "Entrance fees for all sightseeing mentioned ",
        "All service charges and taxes "
      ],
      excluded: [
        "Tipping",
        "Any extras not mentioned in the itinerary ",
        "Optional Experiences available at an additional cost "
      ],
    },

  65: {
      title: "Scuba Diving from Safaga Port",
      maxGuests: "Unlimited",
      location: "Egypt",
      left: "1 days",
      des: `

A Scuba Diving Trip from Safaga Port offers an illuminating aquatic path leading to the marine treasures of the Red Sea. Marvelous Egypt Travel, the premier travel agency in Egypt, ensures our clients receive top-notch service with a private diving guide and A/C vehicle during this incredible excursion across the enchanting marine gems of the Red Sea.

Guests will enjoy a magical diving trip from Safaga Port, experiencing an amazing dive in the morning and another in the afternoon at a different location. This allows everyone to explore the beautiful and divine wonders of the Red Sea fully. Book this fantastic Diving Safaga Port excursion and embark on a magical adventure worthy of remembering.
`,
      reviews: "456 Reviews",
      priceSale: "$50",
      priceOriginal: "$50",
      rating: 5,
      tourPlans: [
        {
          title: "Scuba Diving from Safaga Port",
          des: `
Morning:
Pickup from Safaga Port:

You will be transferred from your cruise in Safaga Port to the diving boat.
Briefing:

The instructor will give a personal briefing to prepare you for your diving experience.
First Dive:

Conduct your first dive in the morning with the instructor. The dive is conducted on a one-to-one basis, and the time in the water is around 30 - 40 minutes, depending on the guest.
Lunch:

Enjoy a delicious lunch on the boat, accompanied by mineral water and soft drinks.
Afternoon:
Second Dive:

Experience another dive in the afternoon at a different site to explore more of the Red Sea’s beautiful and divine wonders.
Return to Safaga Port:

After the diving sessions, you will be transferred back to Safaga Port to end your diving excursion.
`,
        },

      ],
      included: [
        "Pick up services from Safaga Port and return. ",
        "All transfers by a private modern A/C vehicle. ",
        "Experienced Instructor on the boat.",
        "Mineral water and soft drinks. ",
        "Lunch meal onboard the boat. ",
        "All service charges and taxes."
      ],
      excluded: [
        "Tipping",
        "Any extras not mentioned in the itinerary. ",
        "Optional Experiences available at an additional cost. "
      ],
    },

  66: {
      title:"Snorkeling Trip from Safaga Port",
      maxGuests: "Unlimited",
      location: "Egypt",
      left: "1 days",
      des: `

A Snorkeling Trip from Safaga Port will showcase the majestic and divine wonders of the beautiful Red Sea. The infinite marine treasures and aquatic wonders of the blessed Red Sea offer a mystical opportunity to embark on a magical adventure filled with magnificence and bliss. Marvelous Egypt Travel, the premier travel agency in Egypt, ensures all our clients receive the finest service, including a private snorkeling instructor and a comfortable A/C vehicle.

Guests will have the chance to snorkel at various spots in the Red Sea, encountering the magical creatures, rare colorful fish, and vibrant coral reefs found along the heavenly beaches. After a day of underwater exploration, we will drive you back to Safaga Port. Book this amazing snorkeling excursion and cast your eyes on the majestic tropical beauty of the Red Sea.
`,
      reviews: "562 Reviews",
      priceSale: "$30",
      priceOriginal: "$30",
      rating: 5,
      tourPlans: [
        {
          title: "Snorkeling Trip from Safaga Port",
          des: `
Morning:
Pickup from Safaga Port:

You will be transferred from your cruise at Safaga Port to the snorkeling boat.
First Snorkeling Spot:

Enjoy snorkeling in different spots full of corals and magnificent colorful fish with a chance to swim with dolphins.
Lunch:

Enjoy an open buffet lunch aboard the snorkeling cruise, accompanied by mineral water and soft drinks.
Afternoon:
Second Snorkeling Spot:

Continue snorkeling and enjoying the water sports activities on the Island and the national park.
Sunset:

Watch the breathtaking sunset over the Red Sea.
Return to Safaga Port:

After the snorkeling sessions, you will be transferred back to Safaga Port to end your snorkeling excursion.
`,
        },

      ],
      included: [
        "Pick up services from Safaga port and return. ",
        "All transfers by a private modern A/C vehicle. ",
        "Snorkeling equipment. ",
        "Lunch aboard the snorkeling cruise.",
        "Snorkeling instructor. ",
        "Mineral water and soft drinks. ",
        "All service charges and taxes. "
      ],
      excluded: [
        "Tipping. ",
        "Any extras not mentioned in the itinerary. ",
        "Optional Experiences available at an additional cost. "
      ],
    },

  67: {
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
        "All service charges and taxes."
      ],
      excluded: [
        "Tipping",
        "Any extras not mentioned in the itinerary. ",
        "Optional Experiences available at an additional cost. "
      ],
    },

  68: {
      title:"Trip to Pyramids and Cairo from Sokhna Port",
      maxGuests: "Unlimited",
      location: "Egypt",
      left: "1 days",
      des: `

A Cairo Tour from Sokhna Port is a voyage of dreams through the everlasting allure and grandeur of the immortal city of Cairo. Marvelous Egypt Travel, the best travel agency in Egypt, ensures all our clients receive top-notch services, including an expert Egyptologist tour guide and a private A/C vehicle.

During this magical tour, You will visit the iconic Giza Pyramids, the Great Sphinx, and the Egyptian Museum. After an unforgettable day of exploring ancient wonders, we will drive you back to Sokhna Port. Book this lovely day trip to experience the wonders of ancient Egypt and make each moment count.
`,
      reviews: "246 Reviews",
      priceSale: "$135",
      priceOriginal: "$135",
      rating: 5,
      tourPlans: [
        {
          title: "Trip to Pyramids and Cairo from Sokhna Port",
          des: `
Morning:
Pickup from Sokhna Port:

Our representative will pick you up from Sokhna Port by the cruise exit door to be transferred by an air-conditioned vehicle to Cairo for a private guided tour of Cairo and the Pyramids from Sokhna Port (approximately 3 hours).
Tour of Cairo Tourist Attractions:
Giza Pyramids Complex:

The divine Giza Pyramids complex came into reality during the times of the old kingdom (2686 – 2134 BC) to showcase the eternal legacy of the ancient Egyptian royalty who were successful in immortalizing their names in the history books.
The Great Pyramid:

The Great Pyramid of Giza, built by King Khufu (2609 BC - 2584 BC), is a magical art piece that offers a heavenly gate leading to the heavens. It was constructed under the direction of Khufu's vizier Hemiunu, reaching a height of 147 m and a total weight of 6 million tons. Key chambers include the Queen’s chamber, the King’s chamber, the big void, and the grand hall.
The Great Sphinx:

The Great Sphinx, also known as Horus of the Horizon, is a giant mythical sculpture showcasing the strength and wisdom of Pharaoh Khafre (2558 BC - 2532 BC). It features the face of Khafre and the body of a lion, with the dream Steele of Thutmose IV placed between its paws in 1401 BC.
The Valley Temple:

The Valley Temple, a masterpiece of ancient art, was used for religious customs, including the mummification ritual, to ensure a successful journey to the afterlife for members of the 4th dynasty.
The Grand Egyptian Museum:

The Grand Egyptian Museum is a golden portal to 5000 years of ancient Egyptian innovation and imagination. It houses some of the greatest archaeological monuments and artifacts ever created, including the Hanging Obelisk, King Ramses II Statue, the 10 Statues of King Senusert, the Grand Staircase, statues of Ptolemaic kings and queens, the Victory Column of King Merneptah, the Royal Regalia, and the Grand Atrium and Gift Shop. For an enhanced experience, VIP tickets provide access to additional artifacts.
Lunch Time:

Lunch will be served at a Pyramid/ Nile view restaurant.
Afternoon:
The Egyptian Museum:

The Egyptian Museum, established in 1901 AD in central Cairo, displays an extraordinary collection of ancient artifacts and monuments dating back over 4000 years.
Evening:
Return to Sokhna Port:

Finally, we drive you back to Sokhna Port by the cruise door.
`,
        },

      ],
      included: [
        "Pick up from the cruise exit door at Sokhna Port and return ",
        "All transfers by a private air-conditioned vehicle ",
        "Private Egyptologist guide during your journey. ",
        "Mineral water on board the vehicle during the tour ",
        "Lunch during your day trip at a local restaurant ",
        "Entrance fees for all sightseeing are mentioned. ",
        "All service charges and taxes."
      ],
      excluded: [
        "Tipping",
        "Any extras not mentioned in the itinerary.",
        "Optional Experiences available at an additional cost. "
      ],
    },

  69: {
      title:"Two Days Trip to Cairo From Sokhna Port",
      maxGuests: "Unlimited",
      location: "Egypt",
      left: "2 days",
      des: `Embark on a two-day adventure from Sokhna Port to Cairo, and experience the trip of a lifetime as you explore some of the most magnificent wonders and artifacts in human history. Marvelous Egypt Travel ensures our clients receive exceptional service, including a private air-conditioned vehicle and a professional Egyptologist tour guide. Enjoy a personalized tour of Egypt’s capital over two days, visiting iconic landmarks such as the Giza Pyramids, the Sphinx, and the Step Pyramid. After a comfortable overnight stay at a 5-star hotel, the journey continues with visits to the Egyptian Museum, Salah El Din Citadel, Mohamed Ali Mosque, Khan El Khalili Bazaar, and Muizz Street. Enhance your Cairo experience and create unforgettable memories by booking this captivating tour that beautifully showcases the history of ancient Egypt.`,
      reviews: "513 Reviews",
      priceSale: "$245",
      priceOriginal: "$245",
      rating: 5,
      tourPlans: [
        {
          title: "Tour of Giza Tourist Attractions",
          des: `
Morning:
Pickup from Sokhna Port:

Our representative will meet you at Sokhna Port and escort you through your 2 days trip to Cairo from Sokhna Port. Drive to Cairo for approximately 3 hours by an air-conditioned vehicle joining your private tour guide to visit:
The Great Pyramid:

The everlasting miracle of King Khufu (2609 BC - 2584 BC) was made to touch the skies. It was architected by the royal main vizier of Khufu, “Hemiunu,” to have a total height of 147 m tall using 2.3 million limestone blocks weighing a total of 6 million tons. The main chambers within the great pyramid include the Queen’s chamber, the King’s chamber, the big void, the grand hall, and many more.
The Great Sphinx:

The immortal symbol of power and wisdom, the great Sphinx, also known as Horus of the Horizon, holds the spirit of Pharaoh Khafre (2558 BC - 2532 BC). It stands watch, protecting the everlasting wonders of ancient Egypt. Between the legs of the sphinx is the epic Dream Steele of Thutmose IV, added in 1401 BC.
The Valley Temple:

The enchanting Valley Temple is a giant masterpiece of art made to perform religious customs, such as the Mummification ritual, to ensure passage through the gate of paradise. All the members of the 4th dynasty were prepared for their burial rituals in this great temple.
The Grand Egyptian Museum:

The Grand Egyptian Museum is a golden portal leading to cosmic ancient Egyptian creations of celestial intelligence that were cultivated across 5000 years of continuous innovation and vivid artistic imagination. Discover some of the greatest archaeological monuments and artifacts ever made, including the Hanging Obelisk, King Ramses II Statue, the 10 Statues of King Senusert, the Grand Staircase, statues of Ptolemaic kings and queens, the Victory Column of King Merneptah, the epic Royal Regalia, and the Grand Atrium and Gift Shop. For an enhanced experience, VIP tickets provide access to additional artifacts.
Lunch Time:

Enjoy lunch at a local restaurant.
Afternoon:
Saqqara Step Pyramid:

The Primal Saqqara Step Pyramid is a magical experience that launched the golden era of pyramid construction. It was designed by the worldly famous Imhotep to have six steps standing at a height of 62 m during the reign of King Djoser (2649 BC - 2611 BC).
Evening:
Overnight:

Finally, transfer to a 5-star hotel in Cairo for the overnight.
Meals:

Lunch.
`,
        },{
          title:"Tour of Cairo Tourist Attractions",
          des:`
Morning:

Check out after breakfast, then join your private tour guide to visit Cairo tourist attractions including:
The Egyptian Museum:

The golden treasure house known as the Egyptian Museum was constructed in the heart of Cairo in 1901 AD to preserve and display the most majestic collection of ancient artifacts and monuments ever created in the history of ancient Egypt.
Lunch Time:

Lunch will be served at a local restaurant in Cairo.
Afternoon:
Salah El Din Citadel:

The powerful Cairo Citadel is a magical fortress found on the highest ground of Cairo, overlooking the epic landscape. It was constructed from 1176 to 1182 AD and is filled with many great works of art and architecture, including several museums and mosques.
Mohamed Ali Mosque:

The glorious Mosque of Mohamed Ali, built between 1830 and 1848 AD inside the great citadel of Cairo, is known as the "Alabaster Mosque" because its walls are made out of pure alabaster taken from the great pyramids of Giza. It is an example of Ottoman architecture.
The National Museum of Egyptian Civilization:

The National Museum of Egyptian Civilization (NMEC) opened in 2020, displaying a collection of the oldest and most magical artifacts and monuments. The museum includes the Hall of Mummies, which contains 28 royal kings and queens from ancient Egypt.
Al Muizz Street:

The cultural street of Al-Muizz, dating back to the 10th century AD, is in the heart of Cairo, near the mesmerizing Khan El Khalili bazaar. This street is filled with fun cafes and authentic cultural gatherings.
Khan El Khalili Bazaar:

The historic and vibrant Khan El Khalili Bazaar, established between 1382 and 1389 AD, offers a memorable shopping experience with a wide array of traditional Egyptian goods.
Evening:
Return to Sokhna Port:

Finally, we will drive back to Sokhna Port to board your ship.
Meals:

Breakfast, Lunch
`,
        }

      ],
      included: [
        "Pick up from your cruise exit at Sokhna Port and return. ",
        "All transfers by a private modern A/C vehicle. ",
        "Private Egyptologist guide during the 2-day tours.",
        "Accommodation in Cairo at 5-star Hotel. ",
        "Mineral water on board the vehicle during the tour. ",
        "2 Lunch meals during your tours. ",
        "Shopping tours in Cairo. ",
        "Entrance fees for all sightseeing are mentioned. ",
        "All service charges and taxes. "
      ],
      excluded: [
        "Tipping",
        "Any extras not mentioned in the itinerary. ",
        "Optional Experiences available at an additional cost. "
      ],
    },

  70: {
      title: "Two Days Trip to Cairo and Luxor from Sokhna Port",
      maxGuests: "Unlimited",
      location: "Egypt",
      left: "2 days",
      des: `Experience the golden legacy of ancient Egyptian civilization with our 2-day trip to Cairo and Luxor from Sokhna Port. With Marvelous Egypt Travel, expect exceptional services, including a private air-conditioned vehicle and a professional Egyptologist tour guide. This adventure covers the finest and most famous tourist attractions in Cairo and Luxor, including the Karnak Temple, the Valley of the Kings, Queen Hatshepsut’s Temple in Luxor, the Giza Pyramids, the Great Sphinx, and the Egyptian Museum in Cairo. Book this incredible two-day adventure and explore the magical wonders of Egypt.`,
      reviews: "465 Reviews",
      priceSale: "$430",
      priceOriginal: "$430",
      rating: 5,
      tourPlans: [
        {
          title: "Day 1 Luxor",
          des: `
Pickup from Sokhna Port:

Our representative will pick you up from your Cruise in Sokhna Port and transfer you to Cairo airport to fly to Luxor. Upon arrival at Luxor, you'll meet your tour guide and a private air-conditioned vehicle.
Valley of the Kings:

Discover the hidden artistic architecture in the underground Valley of the Kings with 63 royal tombs from the New Kingdom (1570 – 1050 BC).
Hatshepsut Temple:

Explore the holy temple of Queen Hatshepsut (1507–1458 BC), showcasing her legacy as one of Egypt's most successful rulers.
Colossi of Memnon:

Visit the colossal statues of Pharaoh Amenhotep III (1386 - 1349 BC) known for their incredible vocal sounds during the Greco-Roman Period.
Lunch Time:

Enjoy lunch on an island, including a boat trip on the Nile River.
Karnak Temple:

Visit the Karnak Temple Complex, the largest religious capital on earth, honoring the Theban triad of Amun, Mut, and Khonsu.
Luxor Temple:

Luxor Temple is a majestic temple complex located on the east bank of the Nile River. Built around 1400 BC, it was dedicated to the rejuvenation of kingship and was constructed by Amenhotep III and completed by Tutankhamun and Horemheb. The temple features massive pylons, a grand colonnade, and numerous statues and carvings, showcasing the grandeur of ancient Egyptian architecture and art.
Overnight:

Transfer to a 5-star hotel for the overnight stay.
Meals:

Lunch.
Flight:

From Cairo to Luxor.
Overnight:

Luxor Hotel.
`,
        },
        {
          title:"Day 2 Cairo",
          des:`
Breakfast and Checkout:

After breakfast, check-out from the hotel and catch the flight to Cairo.
Giza Pyramids Complex:

Visit the Giza Pyramids complex, built by the kings of the 4th dynasty during the Old Kingdom (2686 – 2134 BC).
The Great Pyramid:

Marvel at the Great Pyramid of Giza, built for Pharaoh Khufu (2609 BC - 2584 BC), standing 147 meters tall.
The Great Sphinx:

Admire the Great Sphinx, a symbol of Pharaoh Khafre (2558 BC - 2532 BC), with the body of a lion and the face of Khafre.
The Valley Temple:

Explore the Valley Temple, a granite mortuary temple from the 4th dynasty used for the mummification process.
The Grand Egyptian Museum:

Discover ancient Egyptian creations at the Grand Egyptian Museum, featuring artifacts like the Hanging Obelisk and King Ramses II Statue.
Lunch Time:

Lunch will be served at a Pyramids/Nile view restaurant.
The Egyptian Museum:

Visit the Egyptian Museum in Cairo, showcasing some of the greatest monuments and artifacts from ancient Egypt.
Return to Sokhna Port:

In the evening, transfer back to Sokhna Port by a private air-conditioned vehicle.
Meals:

Breakfast, Lunch.
Flight:

From Luxor to Cairo.
`
        }

      ],
      included: [
        "Pick up from your cruise exit at Sokhna Port and return. ",
        "All transfers by a private modern A/C vehicle.",
        "Private Egyptologist guide during the 2-day tours. ",
        "One Night Accommodation in Luxor at 5-star Hotel. ",
        "Flight tickets from Cairo to Luxor and return. ",
        "2 Lunch meals during your tours. ",
        "Mineral water on board the vehicles during the tours.",
        "Entrance fees for all sightseeing are mentioned. ",
        "All service charges and taxes. "
      ],
      excluded: [
        "Tipping",
        "Any extras not mentioned in the itinerary. ",
        "Optional Experiences available at an additional cost. "
      ],
    },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },

  // 00: {
  //     title:
  //       "",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "",
  //     reviews: "000 Reviews",
  //     priceSale: "$000",
  //     priceOriginal: "$000",
  //     rating: 5,
  //     tourPlans: [
  //       {
  //         title: "",
  //         des: "",
  //       },

  //     ],
  //     included: [
  //       ""
  //     ],
  //     excluded: [
  //       ""
  //     ],
  //   },
};

// Tour js Templete
// 00: {
//     title:
//       "",
//     maxGuests: "Unlimited",
//     location: "Egypt",
//     left: "1 days",
//     des: "",
//     reviews: "000 Reviews",
//     priceSale: "$000",
//     priceOriginal: "$000",
//     rating: 5,
//     tourPlans: [
//       {
//         title: "",
//         des: "",
//       },

//     ],
//     included: [
//       ""
//     ],
//     excluded: [
//       ""
//     ],
//   },
// /Tour js Templete

const tour = tourDetails[tourId];

if (tour) {
  const descriptionWrap = document.querySelector("#des");

  // Handle Description
  if (tour.des.length === 0) {
    descriptionWrap.style.display = "none";
  } else {
    descriptionWrap.innerHTML = `
        <div class="description-wrap mb-40">
            <span class="description">Description:</span>
            <p class="des">${tour.des}</p>
        </div>
    `;
  }

  // Render Excluded Items
  document.querySelector("#excluded").innerHTML = `
      <div class="col-md-6">
        <ul class="listing-clude">
          ${tour.excluded
            .map(
              (item) => `
              <li class="flex-three" style="width: 193%;">
                <img style="height: 1.3rem; width: auto; margin-right: 1rem;" src="./assets/images/confidence_icons/Wrong.png" alt="Not Excluded">
                <p style="font-size: 14px;">${item}</p>
              </li>
            `
            )
            .join("")}
        </ul>
      </div>
  `;

  // Render Included Items
  document.querySelector("#Included").innerHTML = `
    <div class="col-md-6">
      <ul class="listing-clude">
        ${tour.included
          .map(
            (item) => `
            <li class="flex-three" style="width: 193%;">
              <i class="icon-Vector-7"></i>
              <p style="font-size: 14px;">${item}</p>
            </li>
          `
          )
          .join("")}
      </ul>
    </div>
  `;

  // Handle Tour Plan Section
  const tourPlanningContainer = document.querySelector("#tour_planing");

  if (tour.tourPlans && tour.tourPlans.length > 0) {
    tour.tourPlans.forEach((plan, index) => {
      const planHTML = `
        <div  class="tour-planing-section flex">
          <div class="number-box flex-five">${(index + 1)
            .toString()
            .padStart(2, "0")}</div>
          <div class="content-box">
            <h5 class="title">${plan.title}</h5>
            <p class="des">${plan.des}</p>
          </div>
        </div>
      `;
      tourPlanningContainer.innerHTML += planHTML;
    });
  } else {
    tourPlanningContainer.innerHTML =
      "<p>No tour plans available at the moment.</p>";
  }

  // Inner Heading and Tour Info
  document.querySelector(".inner-heading-wrap").innerHTML = `
    <div class="inner-heading">
      <span class="feature">Featured</span>
      <h2 class="title">${tour.title}</h2>
      <ul class="flex-three list-wrap-heading">
        <li class="flex-three">
          <i class="icon-user"></i>
          <span>Max Guests: ${tour.maxGuests}</span>
        </li>
        <li class="flex-three">
          <i class="icon-18"></i>
          <span>${tour.location}</span>
        </li>
        <div class="icons flex-three">
          <i style="color:green;margin-right:1rem" class="icon-time-left"></i>
          <span>${tour.left}</span>
        </div>
      </ul>
    </div>
    <div class="inner-price">
      <div class="flex-three">
        <div class="start">
          ${generateStars(tour.rating)}
        </div>
        <span class="review">(${tour.reviews})</span>
      </div>
      <p class="price-sale text-main">
        ${tour.priceSale} <span class="price">${tour.priceOriginal}</span>
      </p>
    </div>
  `;
} else {
  document.querySelector(".inner-heading-wrap").innerHTML = `
    <h3 class="title">404 Content Not Found To report, contact us on +201278859768</h3>
  `;
}

function generateStars(rating) {
  let starsHtml = "";
  for (let i = 0; i < rating; i++) {
    starsHtml += '<i class="icon-Star"></i>';
  }
  return starsHtml;
}

//

function goToChat() {
  window.open("https://wa.me/+201143328885");
}
function goToTripadvisorSite() {
  window.open(
    "https://www.tripadvisor.com/Attraction_Review-g294201-d2149513-Reviews-Marvelous_Egypt_Travel-Cairo_Cairo_Governorate.html"
  );
}

let copyRight = (() => {
  let CopyRightElement = document.querySelectorAll(".copy-right");
  console.log(CopyRightElement);
  let d = new Date();
  let Year = d.getFullYear();
  CopyRightElement.innerHTML = `Copyright 2007-${Year} Marvelous Egypt Travel All Rights Reserved`;
})();
