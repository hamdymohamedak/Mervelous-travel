// الحصول على المعرف من الـ URL
const params = new URLSearchParams(window.location.search);
const tourId = params.get("id"); // مثلا id=1

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
    title:"Private Snorkeling in Hurghada",
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
      "All service charges and taxes"
    ],
    excluded: [
      "Any extras not mentioned in the program",
      "Tipping",
      "Optional Experiences available at an additional cost."
    ],
  },







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
    <h2 class="title">لم يتم العثور على تفاصيل الجولة.</h2>
  `;
}

// دالة لتوليد النجوم بناءً على التقييم
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
  let d = new Date();
  let Year = d.getFullYear();
  CopyRightElement.innerHTML = `Copyright 2007-${Year} Marvelous Egypt Travel All Rights Reserved`;
})();
