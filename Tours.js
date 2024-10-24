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
        title: "Day 1: Arrival in Cairo",
        des: "Arrive at Cairo International Airport where you'll be greeted by our team and transferred to your hotel. Enjoy the rest of the day at leisure before a welcome dinner at a local restaurant.",
      },
      {
        title: "Day 2: Explore the Pyramids of Giza",
        des: "After breakfast, start your day with a visit to the world-famous Pyramids of Giza and the Sphinx, followed by a tour of the Egyptian Museum. Enjoy lunch at a local restaurant.",
      },
      {
        title: "Day 3: Old Cairo & Nile Cruise",
        des: "Today, visit Old Cairo, including the Hanging Church and Ben Ezra Synagogue. In the evening, experience a delightful dinner cruise on the Nile with live entertainment.",
      },
      {
        title: "Day 4: Departure",
        des: "After breakfast, enjoy some free time before being transferred to the airport for your departure flight.",
      },
    ],
    included: [
      "Accommodation: 3 nights in Cairo. ",
      "Meals: 3 Breakfasts, 2 Lunches, 1 Dinner Cruise Meal. ",
      " Guided Tours:  Expert Egyptologist guides in English, French, and Spanish. ",
      "Transport: Private air-conditioned vehicle. ",
      "Entrance Fees for all sites listed",
      "Entrance Fees: Included for all sites listed in the itinerary.  ",
      "Additional Services: Free airport meet and greet transfer.  ",
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
        title: "Day 1: Awan",
        des: `

In the morning, one of our fluent Egyptologists will pick you up from your hotel or anywhere you decide in Aswan by a modern air-conditioned vehicle to explore the best of Aswan including:
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
        title: "Day 2: Abu Simbel",
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
        title: "Day 3: Kom Ombo and Edfu",
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
        title:"Day 4 :",
        des:`
Luxor

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
`
      }
    ],
    included: [
      "Pickup service from Aswan and drop-off in Luxor ",
      "3 Nights on a 5-star deluxe Nile cruise. ",
      "Entrance fees to all included sites.",
      "Egyptologist guide throughout the tour",
      "All trips and transfers by modern air-conditioned vehicles",
      "Meals as specified in the itinerary",
      "All services, charges, and taxes.",
    ],
    excluded: [
      "International Flights Tickets. ",
      "Tipping",
      "Personal Expenses.",
      "Optional tours",
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
          title: "Day 1:Arrival in Luxor and East Bank Tour",
          des: "Upon arrival to Luxor, start your 5 days Nile cruise from Luxor to Aswan by meeting your private tour guide to discover ancient Egyptian civilization in the most famous archaeological sites along the Riverbank in Luxor East Bank like: Karnak Temple: Conclude your journey with a visit to the Karnak Temple complex, dedicated to the Theban triad of Amun, Mut, and Khonsu. This vast religious site, built over many generations from 2000 BC to 30 BC, features the Avenue of Sphinxes and the great hypostyle hall. Check-in:You will be taken to 5-star deluxe Nile cruise to check-in and have your lunch on board then stay relaxed at your cabin and by the evening, you will be taken to visit:Luxor Temple by Night:The lunar and golden marvel of Thebes Luxor temple are a living miracle that became known as the southern Sanctuary for the crowning and the rejuvenation of kings. The temple of Luxor was built in 1400 BC by Amenhotep III and Rameses II to host the Opet festival.Return and overnight onboard the cruise. Meals: Lunch, Dinner. Overnight: Onboard the Cruise.",
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
          title: "Day 4: Abu Simbel Temples",
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
          title:"Aswan Highlights and Departure",
          des:`

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
        }
      ],
      included: [
        "Pickup service from Luxor and drop-off transfer in Aswan. ",
        "Accommodation on 5-star deluxe Nile cruise for 4 nights on full board. ",
        "Entrance fees to all indicated sites in the itinerary. ",
        "Highly qualified Egyptologist tour guide during your tours.",
        "All trips and transfers by modern air-conditioned vehicles. ",
        "Meals as indicated in the itinerary.",
        "All service charges and taxes. ",
      ],
      excluded: [
        "Tipping",
        "Personal Expenses",
        "Any extras not mentioned in the program",
        " Egypt Visa:  Egypt Entry Visa (USD 25 per passport)",
      ],
    },
  //   12: {
  //     title: "7 Nights Nile River Cruise from Luxor ",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "8 days",
  //     des: "Experience a magical travel journey across the ancient Egyptian Civilization, with 8 Days Nile cruise from Luxor. Marvelous Egypt Travel, the best travel agency in Egypt, provides exceptional services, including professional Egyptologist tour guides, enchanting Nile Cruises, and private air-conditioned vehicles. Explore the heavenly ancient Egyptian civilization in Luxor and Aswan, visiting incredible temples and tombs such as Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, Edfu Temple, Philae Temple, Abu Simbel, and more. Book this incredible adventure and uncover the exceptional heritage of ancient Egypt.",
  //     reviews: "124  Reviews",
  //     priceSale: "$870",
  //     priceOriginal: "$870",
  //     rating: 5,
  //   },
  //   13: {
  //     title: "Tour to Cairo and Giza Pyramids from Port Said",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "Embark on a day trip to Cairo from Port Said and immerse yourself in the timeless wonders of Egypt in a truly magical and entertaining way. Marvelous Egypt Travel, one of the leading travel agencies in Egypt, provides top-notch services, including a professional Egyptologist tour guide and a private air-conditioned vehicle. Enjoy a private excursion from Port Said to Cairo, visiting the Giza Pyramids, the Great Sphinx, and the Egyptian Museum before returning to Port Said. Turn your day trip into a captivating adventure by booking this enchanting tour that delves into the rich legacy of ancient Egypt.",
  //     reviews: "421 Reviews",
  //     priceSale: "$135",
  //     priceOriginal: "$135",
  //     rating: 5,
  //   },
  //   14: {
  //     title: "Day Trip to Alexandria Sights from Alexandria Port",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: "Embark on a captivating day trip from Alexandria Port to explore the historical and cultural wonders of Alexandria. With Marvelous Egypt Travel’s exceptional service, including a private air-conditioned vehicle and a knowledgeable Egyptologist guide, you will experience the rich Greco-Roman heritage and unique attractions of this legendary city. Enjoy visits to the Alexandria Library, Catacombs, Pompey’s Pillar, Qaitbay Citadel, and Morsi Abu Abbas Mosque, before returning to Alexandria Port.",
  //     reviews: "413 Reviews",
  //     priceSale: "$80",
  //     priceOriginal: "$80",
  //     rating: 5,
  //   },
  //   15: {
  //     title: "Trip to Pyramids and Cairo from Sokhna Port",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: `

  // A Cairo Tour from Sokhna Port is a voyage of dreams through the everlasting allure and grandeur of the immortal city of Cairo. Marvelous Egypt Travel, the best travel agency in Egypt, ensures all our clients receive top-notch services, including an expert Egyptologist tour guide and a private A/C vehicle.

  // During this magical tour, You will visit the iconic Giza Pyramids, the Great Sphinx, and the Egyptian Museum. After an unforgettable day of exploring ancient wonders, we will drive you back to Sokhna Port. Book this lovely day trip to experience the wonders of ancient Egypt and make each moment count.
  // `,
  //     reviews: "131 Reviews",
  //     priceSale: "$135",
  //     priceOriginal: "$135",
  //     rating: 5,
  //   },
  //   16: {
  //     title: "Day Tour from Safaga to Luxor",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "1 days",
  //     des: `
  // Embark on a miraculous journey with a day tour to Luxor from Safaga Port, where you will traverse a golden path back in time to witness the grandeur of the ancient Egyptian civilization. Marvelous Egypt Travel, renowned as the best travel agency in Egypt, provides our clients with exceptional services, including expert Egyptologist tour guides and private A/C vehicles.
  // During this one-day tour from Safaga to Luxor, our guests will experience the magnificence of Upper Egypt as they explore Luxor’s renowned tourist attractions. Discover the timeless treasures of the ancient Egyptian pharaohs by visiting the Valley of the Kings, Karnak Temples, Hatshepsut Temple, and the Colossi of Memnon. After an enriching day, we will drive you back to Safaga Port.
  // Experience an unforgettable holiday amidst the majestic wonders of Luxor by booking this extraordinary day trip.
  // `,
  //     reviews: "86 Reviews",
  //     priceSale: "$160",
  //     priceOriginal: "$160",
  //     rating: 5,
  //   },
  //   17: {
  //     title: "4 Days Christmas Cairo and Giza Tour",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "4 days",
  //     des: "Experience a divine adventure across the immortal historical and cultural wonders of Cairo with the 4-day Cairo Christmas Egypt tour package. Provided by Marvelous Egypt Travel, this tour offers exquisite services including a private A/C vehicle and a seasoned Egyptologist tour guide. The tour covers Cairo’s most magnificent and diverse tourist attractions, including the Giza Pyramids, the Sphinx, Memphis City, Muizz Street, and the Khan El Khalili Bazaar. Make enchanting memories this Christmas with a visit to Egypt’s historic landmarks.",
  //     reviews: "132 Reviews",
  //     priceSale: "$600",
  //     priceOriginal: "$600",
  //     rating: 5,
  //   },
  //   18: {
  //     title: "6 Days Easter Cairo, Giza, Luxor, Aswan and Abu Simbel Tour",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "6 days",
  //     des: "Embark on a 6-day Egypt Easter tour package that reveals the world’s greatest historical marvels. With Marvelous Egypt Travel, you will enjoy top-notch services including a private A/C vehicle, comfortable accommodations, and an experienced Egyptologist tour guide. This tour will take you through Cairo, Luxor, and Aswan, showcasing ancient Egyptian pyramids, the Great Sphinx, Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, Philae Temple, Abu Simbel Temple, and more.",
  //     reviews: "465 Reviews",
  //     priceSale: "$855",
  //     priceOriginal: "$855",
  //     rating: 5,
  //   },
  //   19: {
  //     title: "8 Days Christmas Cairo and Nile Cruise Tour",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "8 days",
  //     des: "Experience the divine beauty and rich history of Egypt with this 8 Days Christmas Cairo and Nile Cruise tour. This luxurious journey covers the magnificent cities of Cairo, Luxor, and Aswan, featuring private air-conditioned vehicles, exceptional accommodations, and a 5-star Nile cruise. Guided by an experienced Egyptologist, you’ll unravel the mysteries and splendors of iconic destinations while enjoying a blend of relaxation and excitement.",
  //     reviews: "201 Reviews",
  //     priceSale: "$1980",
  //     priceOriginal: "$1980",
  //     rating: 5,
  //   },
  //   20: {
  //     title: "9 Days Cairo, Giza, Luxor, Aswan, and Hurghada Tour",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "9 days",
  //     des: "Embark on a captivating journey through Egypt with our 9-day tour package. This fully guided tour offers a perfect blend of history, culture, and adventure, featuring luxury Nile cruises, iconic temples, and the serene beaches of Hurghada. Perfect for families and groups, our tours are tailored to provide an unforgettable Egyptian experience.",
  //     reviews: "222 Reviews",
  //     priceSale: "$988",
  //     priceOriginal: "$988",
  //     rating: 5,
  //   },
  //   21: {
  //     title: "8 Days Christmas Cairo and Nile Cruise Tour",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "8 days",
  //     des: "",
  //     reviews: "335 Reviews",
  //     priceSale: "$1980",
  //     priceOriginal: "$2475",
  //     rating: 5,
  //   },
  //   22: {
  //     title:
  //       "8 Days Easter Cairo, Giza, Aswan, Kom Ombo, Edfu, Luxor and Hurghada Tour",
  //     maxGuests: "Unlimited",
  //     location: "Egypt",
  //     left: "4 days",
  //     des: "",
  //     reviews: "365 Reviews",
  //     priceSale: "$1250",
  //     priceOriginal: "$1562",
  //     rating: 5,
  //   },
};

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
  let CopyRightElement = document.querySelector(".copy-right");
  let d = new Date();
  let Year = d.getFullYear();
  CopyRightElement.innerHTML = `Copyright 2007-${Year} Marvelous Egypt Travel All Rights Reserved`;
})();
