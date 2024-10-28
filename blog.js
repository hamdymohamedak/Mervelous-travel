// الحصول على المعرف من الـ URL
const params = new URLSearchParams(window.location.search);
const blogId = params.get("id"); // مثلا id=1

// بيانات المدونات (أضف بيانات المدونات الخاصة بك هنا)
const blogDetails = {
  1: {
    title: "Unearth Ancient Secrets in Luxor and Karnak Temples",
    image: "./assets/images/Blog_images/img1.jpeg",
    date: "02 Apr 2021",
    comments: "Comments (03)",
    readTime: "3 min Read",
    content: `
            Luxor and Karnak Temples are two of Egypt’s most significant and well-preserved ancient sites, offering a
            profound insight into the grandeur of the New Kingdom. Located on the east bank of the Nile River, these
            temples are a testament to the architectural brilliance and religious fervor of ancient Egypt. In this blog,
            we’ll delve into the history, significance, and must-see features of Luxor and Karnak Temples.
        `,
    details: [
      {
        title: "Luxor Temple: A Divine Sanctuary",
        text: "The Avenue of Sphinxes: A ceremonial road lined with sphinx statues that once connected Luxor Temple to Karnak Temple.",
      },
      {
        title: "Karnak Temple: A Sacred City",
        text: "The Colonnade of Amenhotep III: A magnificent hall with towering columns and intricate carvings depicting religious rituals and festivals.",
      },
      {
        title: "asd Features of Karnak Temple",
        text: "asd Hypostyle Hall: A grand hall filled with massive columns, each intricately decorated with hieroglyphics and reliefs.",
      },
      {
        title: "The Sound and Light Show",
        text: "For a truly magical experience, attend the Sound and Light Show at Karnak Temple. As night falls, the temple complex is illuminated with colorful lights, and the history of the temple is narrated, bringing the ancient stones to life.",
      },
      {
        title: "Conclusion",
        text: "Luxor and Karnak Temples are more than just historical sites; they are gateways to understanding the spiritual and cultural heritage of ancient Egypt. The grandeur of these temples, combined with their intricate carvings and imposing structures, makes them a must-visit for anyone interested in Egypt’s rich history. Plan your visit today and immerse yourself in the ancient splendor of Luxor and Karnak Temples.",
      },
    ],
    quote: {
      text: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "John Mehedii",
    },
  },
  2: {
    title: "Sail Through History on a Nile River Cruise",
    image: "./assets/images/Blog_images/img2.jpg",
    date: "10 May 2021",
    comments: "Comments (05)",
    readTime: "5 min Read",
    content: `A Nile River cruise is a quintessential Egyptian experience, offering a unique and leisurely way to explore the country’s rich history and stunning landscapes. As the lifeblood of Egypt, the Nile River has witnessed the rise and fall of ancient civilizations, and today it continues to be a gateway to some of the most remarkable historical sites in the world. In this blog, we’ll take you on a journey through the highlights of a Nile River cruise.`,
    details: [
      {
        title: "Luxor: The World’s Greatest Open-Air Museum",
        text: "Starting your cruise in Luxor, you’ll be greeted by a city that is often referred to as the world’s greatest open-air museum. Luxor is home to the magnificent Luxor Temple and the sprawling Karnak Temple complex. These ancient sites are adorned with colossal statues, towering columns, and intricate hieroglyphics that tell the stories of Egypt’s powerful pharaohs and gods.",
      },
      {
        title: "The Valley of the Kings",
        text: "A short distance from Luxor lies the Valley of the Kings, a royal burial ground that houses the tombs of Egypt’s most illustrious pharaohs, including the famous tomb of Tutankhamun. The elaborate tombs, filled with treasures and adorned with vivid wall paintings, provide a fascinating insight into the beliefs and burial practices of ancient Egyptians.",
      },
      {
        title: "Edfu and Kom Ombo Temples",
        text: "As you sail further along the Nile, you’ll encounter the well-preserved Temple of Horus at Edfu, dedicated to the falcon-headed god Horus. This temple is a prime example of ancient Egyptian architecture and religious devotion. Another highlight is the Kom Ombo Temple, uniquely dedicated to two gods: Sobek, the crocodile god, and Horus, the falcon-headed god. The temple’s symmetrical design and fascinating reliefs make it a must-visit.",
      },
      {
        title: "Aswan: Gateway to Nubia",
        text: "Your journey culminates in Aswan, a city known for its picturesque beauty and rich Nubian heritage. Here, you can visit the impressive Aswan High Dam, the ancient Philae Temple dedicated to the goddess Isis, and the unique Nubian villages that offer a glimpse into the region’s distinct culture and traditions.",
      },
      {
        title: "Relaxation and Luxury on Board",
        text: "A Nile River cruise is not just about exploring ancient sites; it’s also about relaxation and luxury. Most cruise ships offer comfortable cabins, delicious cuisine, and a range of amenities to ensure a pleasant journey. Enjoy the scenic views of the Nile’s lush riverbanks, vibrant sunsets, and the tranquility of sailing through Egypt’s heartland",
      },
      {
        title: "Conclusion",
        text: "A Nile River cruise is an unforgettable way to experience the wonders of ancient Egypt while enjoying the comfort and luxury of modern travel. From the monumental temples of Luxor and Aswan to the serene beauty of the river itself, this journey offers a perfect blend of history, culture, and relaxation. Book your Nile River cruise today and sail through the annals of history.",
      },
    ],
    quote: {
      text: "Adventure awaits those who seek the unknown.",
      author: "Sarah Carter",
    },
  },
  3: {
    title: "Discover the Timeless Wonders of the Pyramids of Giza",
    image: "./assets/images/Blog_images/img3.jpg",
    date: "10 May 2021",
    comments: "Comments (05)",
    readTime: "5 min Read",
    content: `The Pyramids of Giza are one of the most iconic landmarks in the world, symbolizing the grandeur and mystery of ancient Egypt. These ancient structures, built over 4,500 years ago, continue to captivate the imagination of visitors from around the globe. In this blog, we’ll explore the fascinating history, architectural marvels, and intriguing secrets of the Pyramids of Giza.`,
    details: [
      {
        title: "Exploring the Great Pyramid of Khufu",
        text: "The Great Pyramid of Khufu, also known as the Pyramid of Cheops, is the largest and oldest of the three pyramids at Giza. Standing at a staggering height of 146.6 meters (481 feet), it was the tallest man-made structure in the world for over 3,800 years. Built as a tomb for the Pharaoh Khufu, this pyramid is a testament to the advanced engineering and architectural skills of the ancient Egyptians.",
      },
      {
        title: "Marveling at the Pyramid of Khafre",
        text: "The Pyramid of Khafre, the second-largest pyramid at Giza, is slightly smaller than the Great Pyramid but equally impressive. It is distinguished by its original limestone casing at the apex, giving it a unique appearance. The pyramid was built for Pharaoh Khafre, and it is often associated with the Great Sphinx, which stands guard nearby.",
      },
      {
        title: "Uncovering the Secrets of the Pyramid of Menkaure",
        text: "The Pyramid of Menkaure, the smallest of the three main pyramids, is no less significant. Built for Pharaoh Menkaure, it stands at 65 meters (213 feet) and is known for its intricate design and the statues found within its complex. The pyramid’s relatively smaller size does not diminish its historical and architectural importance.",
      },
      {
        title: "The Enigmatic Sphinx",
        text: "No visit to the Pyramids of Giza is complete without witnessing the Great Sphinx. This massive limestone statue with the body of a lion and the head of a pharaoh (believed to be Khafre) has stood the test of time and continues to be a symbol of ancient Egypt’s grandeur. The Sphinx’s purpose and origin remain subjects of debate and intrigue among historians and archaeologists.",
      },
      {
        title: "Conclusion",
        text: "The Pyramids of Giza offer a glimpse into the extraordinary achievements of ancient Egyptian civilization. From the sheer scale of the Great Pyramid to the mysteries of the Sphinx, these timeless wonders provide an unforgettable experience for all who visit. Embark on a journey through history and discover the magic of the Pyramids of Giza for yourself.",
      },
    ],
    quote: {
      text: "Adventure awaits those who seek the unknown.",
      author: "Sarah Carter",
    },
  },
  4: {
    title: "Step Back in Time at the Egyptian Museum",
    image: "./assets/images/Blog_images/img4.jpeg",
    date: "10 May 2021",
    comments: "Comments (05)",
    readTime: "5 min Read",
    content: `The Egyptian Museum in Cairo is a treasure trove of ancient artifacts and relics that offer a captivating glimpse into Egypt’s illustrious past. Home to the world’s most extensive collection of Pharaonic antiquities, the museum is a must-visit for history enthusiasts and anyone fascinated by ancient civilizations. In this blog, we’ll explore the highlights and significance of the Egyptian Museum.`,
    details: [
      {
        title: "The Treasures of Tutankhamun",
        text: "One of the most famous exhibits in the Egyptian Museum is the collection of treasures from the tomb of Tutankhamun. Discovered by Howard Carter in 1922, these artifacts include the iconic golden death mask, exquisite jewelry, and intricately crafted funerary items. The sheer opulence and craftsmanship of these treasures provide a glimpse into the wealth and artistry of ancient Egypt",
      },
      {
        title: "The Royal Mummies Room",
        text: "The Royal Mummies Room is a fascinating section of the museum where visitors can view the preserved remains of some of Egypt’s most powerful pharaohs, including Ramses II and Hatshepsut. These mummies offer valuable insights into the embalming techniques and burial practices of ancient Egyptians, as well as the physical characteristics of the pharaohs.",
      },
      {
        title: "Artifacts from Everyday Life",
        text: "In addition to royal treasures, the Egyptian Museum houses a vast array of artifacts that shed light on the daily lives of ancient Egyptians. From pottery and tools to furniture and clothing, these items reveal the ingenuity and resourcefulness of a civilization that thrived thousands of years ago.",
      },
      {
        title: "Statues and Stelae",
        text: "The museum’s extensive collection of statues and stelae showcases the artistic and religious traditions of ancient Egypt. Highlights include the statues of Pharaoh Amenhotep III and his wife, Queen Tiye, as well as the stunning stela of Merneptah, which contains one of the earliest references to Israel.",
      },
      {
        title: "The Rosetta Stone",
        text: "Although the original Rosetta Stone is housed in the British Museum, the Egyptian Museum has an impressive replica of this crucial artifact. The Rosetta Stone was instrumental in deciphering Egyptian hieroglyphics, unlocking the secrets of this ancient language and enabling a deeper understanding of Egypt’s history and culture.",
      },
      {
        title: "New Grand Egyptian Museum",
        text: "While the Egyptian Museum in Tahrir Square remains a significant cultural landmark, Egypt is set to open the new Grand Egyptian Museum (GEM) near the Giza Pyramids. This state-of-the-art facility will house many of the artifacts currently on display, offering an enhanced visitor experience with modern exhibits and interactive displays.",
      },
      {
        title: "Conclusion",
        text: "The Egyptian Museum is a gateway to the wonders of ancient Egypt, offering a comprehensive and awe-inspiring collection of artifacts that span millennia. From the treasures of Tutankhamun to the everyday items of ordinary Egyptians, the museum provides a profound understanding of a civilization that has shaped human history. Plan your visit to the Egyptian Museum and step back in time to explore the fascinating world of the pharaohs.",
      },
    ],
    quote: {
      text: "Adventure awaits those who seek the unknown.",
      author: "Sarah Carter",
    },
  },
  5: {
    title: "Savor the Flavors of Egyptian Cuisine",
    image: "./assets/images/Blog_images/img5.jpeg",
    date: "10 May 2021",
    comments: "Comments (05)",
    readTime: "5 min Read",
    content: `Egyptian cuisine is a rich tapestry of flavors, textures, and aromas that reflect the country’s diverse cultural heritage. From hearty street food to sumptuous traditional dishes, Egyptian food is sure to tantalize your taste buds and offer a culinary adventure like no other. In this blog, we’ll explore some of the most iconic and delicious dishes that you must try when visiting Egypt.`,
    details: [
      {
        title: "Koshari: Egypt’s National Dish",
        text: "Koshari, often considered Egypt’s national dish, is a hearty and flavorful mix of rice, lentils, pasta, and chickpeas, topped with a spicy tomato sauce and crispy fried onions. This delicious combination of ingredients is both filling and satisfying, making it a popular choice for locals and tourists alike.",
      },
      {
        title: "Ful Medames: A Breakfast Favorite",
        text: "Ful Medames is a traditional Egyptian breakfast dish made from slow-cooked fava beans, seasoned with garlic, lemon juice, and olive oil. Often served with warm pita bread, fresh vegetables, and sometimes a boiled egg, ful medames is a nutritious and delicious way to start your day.",
      },
      {
        title: "Molokhia: A Green Delight",
        text: "Molokhia, also known as jute mallow, is a leafy green vegetable that is finely chopped and cooked into a thick, flavorful soup. Often served with rice and meat (usually chicken or rabbit), molokhia is a staple in Egyptian households and a must-try for anyone looking to experience authentic Egyptian cuisine.",
      },
      {
        title: "Mahshi: Stuffed Vegetables",
        text: "Mahshi refers to a variety of vegetables, such as bell peppers, zucchini, and vine leaves, stuffed with a mixture of rice, herbs, and spices. These stuffed vegetables are then cooked in a tomato-based sauce, resulting in a delicious and aromatic dish that is perfect for vegetarians and meat-eaters alike.",
      },
      {
        title: "Kofta: Grilled Perfection",
        text: "Kofta is a popular Egyptian dish consisting of minced meat (usually beef or lamb) mixed with herbs and spices, shaped into skewers, and grilled to perfection. Often served with rice, salad, and tahini sauce, kofta is a flavorful and satisfying dish that showcases the best of Egyptian grilling techniques.",
      },
      {
        title: "Sweet Treats: Basbousa and Konafa",
        text: "No exploration of Egyptian cuisine would be complete without indulging in some traditional sweets. Basbousa is a semolina cake soaked in sweet syrup, often garnished with almonds or coconut. Konafa, on the other hand, is a dessert made from thin strands of dough (kataifi) filled with a creamy cheese or nut mixture, then baked to a golden brown and soaked in syrup. Both of these desserts are deliciously sweet and perfect for satisfying your sweet tooth.",
      },
      {
        title: "Street Food Delights",
        text: "Egyptian street food offers a variety of delicious and affordable options for those on the go. Try a falafel (ta’ameya) sandwich, made from ground fava beans and herbs, or a shawarma wrap, filled with succulent marinated meat and fresh vegetables. These street food staples are perfect for a quick and tasty meal.",
      },
      {
        title: "Conclusion",
        text: "Egyptian cuisine is a delightful journey through flavors and traditions that will leave you craving more. From the hearty koshari to the sweet delights of basbousa and konafa, each dish tells a story of Egypt’s rich culinary heritage. Be sure to savor these delicious dishes and experience the authentic tastes of Egypt during your visit.",
      },
    ],
    quote: {
      text: "Adventure awaits those who seek the unknown.",
      author: "Sarah Carter",
    },
  },
  6: {
    title: "Dive into the Red Sea’s Underwater Paradise",
    image: "./assets/images/Blog_images/img6.jpeg",
    date: "10 May 2021",
    comments: "Comments (05)",
    readTime: "5 min Read",
    content: `The Red Sea is renowned for its crystal-clear waters, vibrant coral reefs, and diverse marine life, making it one of the world’s premier diving and snorkeling destinations. Whether you are an experienced diver or a first-time snorkeler, the underwater wonders of the Red Sea promise an unforgettable adventure. In this blog, we’ll explore the top diving and snorkeling spots along the Red Sea coast.`,
    details: [
      {
        title: "Sharm El Sheikh: A Diver’s Haven",
        text: "Sharm El Sheikh, located on the southern tip of the Sinai Peninsula, is a world-famous diving destination. The region is home to numerous dive sites, each offering unique underwater experiences.",
      },
      {
        title: "Top Dive Sites in Sharm El Sheikh",
        text: "Ras Mohammed National Park: Known for its stunning coral reefs, steep drop-offs, and diverse marine life, including barracudas, jackfish, and even hammerhead sharks. Thistlegorm Wreck: A British ship sunk during World War II, now a fascinating underwater museum teeming with marine life and historical artifacts. Jackson Reef: Part of the Tiran Island group, this reef is famous for its vibrant corals and frequent sightings of large pelagic species like manta rays and sharks.",
      },
      {
        title: "Hurghada: Gateway to the Red Sea",
        text: "Hurghada, situated on the western shore of the Red Sea, offers a plethora of diving and snorkeling opportunities. Its calm, clear waters are ideal for beginners and experienced divers alike."
      },
      {
        title: "Top Dive Sites in Hurghada",
        text: `
    Giftun Island: A protected marine park known for its pristine reefs and abundant fish species, making it perfect for snorkeling and diving.
    El Mina Wreck: An Egyptian minesweeper that now serves as a popular wreck dive site, attracting a variety of marine life.
    Fanadir Reef: A series of coral gardens and walls teeming with colorful fish, moray eels, and the occasional octopus.

.`,
      },
      {
        title: "Marsa Alam: An Undiscovered Gem",
        text: "Marsa Alam, located further south along the Red Sea coast, is gaining popularity among diving enthusiasts for its untouched reefs and diverse marine ecosystems.",
      },
      {
        title: "Top Dive Sites in Marsa Alam",
        text: `Elphinstone Reef: A world-renowned dive site famous for its dramatic walls, strong currents, and encounters with oceanic white-tip sharks.
Dolphin House (Sha’ab Samadai): A horseshoe-shaped reef that is home to a friendly pod of spinner dolphins, making it a fantastic spot for snorkeling.
Abu Dabbab: Known for its resident population of dugongs (sea cows) and green sea turtles, offering a unique diving experience.`
      },
      {
        title: "Conclusion",
        text: "The Red Sea’s underwater paradise is a haven for divers and snorkelers seeking adventure and natural beauty. From the vibrant reefs of Sharm El Sheikh and Hurghada to the unspoiled waters of Marsa Alam, the Red Sea offers an array of marine experiences that will leave you mesmerized. Dive into the clear blue waters and discover the aquatic treasures of the Red Sea today.",
      },
    ],
    quote: {
      text: "Adventure awaits those who seek the unknown.",
      author: "Sarah Carter",
    },
  },
  7: {
    title: "Relax and Rejuvenate in the Oasis of Siwa",
    image: "./assets/images/Blog_images/img7.jpg",
    date: "10 May 2021",
    comments: "Comments (05)",
    readTime: "5 min Read",
    content: `Siwa Oasis, located in the western desert of Egypt, is a tranquil and picturesque retreat that offers a unique blend of natural beauty, rich history, and vibrant culture. Known for its hot springs, salt lakes, and lush palm groves, Siwa is the perfect destination for those seeking relaxation and rejuvenation away from the hustle and bustle of city life. In this blog, we’ll explore the top attractions and experiences that make Siwa Oasis a must-visit destination.`,
    details: [
      {
        title: "The Healing Springs of Siwa",
        text: "Siwa Oasis is renowned for its numerous hot springs, which are believed to have therapeutic properties. Cleopatra’s Spring, also known as Ain Juba, is one of the most famous and popular springs in Siwa. Legend has it that Cleopatra herself bathed in this spring, and today visitors can enjoy a refreshing dip in its clear, mineral-rich waters. Another notable spring is the Fatnas Spring, located on the edge of a picturesque palm grove, offering a serene and scenic spot for relaxation.",
      },
      {
        title: "The Salt Lakes of Siwa",
        text: "The salt lakes of Siwa are a unique and breathtaking feature of the oasis. The high salt concentration in these lakes makes the water incredibly buoyant, allowing visitors to float effortlessly on the surface. The most famous of these lakes is Lake Siwa, known for its stunning turquoise waters and serene surroundings. A visit to the salt lakes is a truly unique experience that combines natural beauty with therapeutic benefits.",
      },
      {
        title: "Exploring the Ancient Fortress of Shali",
        text: "The ancient fortress of Shali is a must-visit historical site in Siwa. Built in the 13th century from kershef (a mixture of salt and mud), this fortress once served as the central hub of Siwan life. Although much of it has been weathered by time, the ruins of Shali still stand as a testament to the oasis’s rich history. Climb to the top of the fortress for panoramic views of the oasis and the surrounding desert"
      },
      {
        title: "The Temple of the Oracle of Amun",
        text: `


        The Temple of the Oracle of Amun is another significant historical site in Siwa. This ancient temple was once a center of prophecy and pilgrimage, visited by notable figures such as Alexander the Great. The temple ruins, situated on a hilltop, offer stunning views of the surrounding landscape and provide a fascinating glimpse into the religious practices of ancient Egypt.

.`,
      },
      {
        title: "Siwan Culture and Traditions",
        text: "Siwa Oasis is home to a unique Berber culture that has remained largely untouched by modern influences. The Siwan people are known for their distinctive language, traditional crafts, and vibrant festivals. Visitors can explore the local markets to find beautifully crafted jewelry, textiles, and pottery, or attend a traditional Siwan wedding to experience the lively music and dance that are integral to Siwan culture.",
      },
      {
        title: "Eco-Lodges and Sustainable Tourism",
        text: `Siwa Oasis is also known for its commitment to sustainable tourism. Many eco-lodges in the area offer accommodation that blends harmoniously with the natural environment and supports the local community. These lodges provide a peaceful and authentic experience, allowing visitors to connect with nature and the unique culture of Siwa.`
      },
      {
        title: "Conclusion",
        text: "Siwa Oasis is a hidden gem that offers a perfect blend of relaxation, adventure, and cultural exploration. From its healing springs and salt lakes to its ancient ruins and vibrant traditions, Siwa provides a unique and unforgettable experience for every traveler. Escape to Siwa Oasis and discover the magic of this tranquil retreat.",
      },
    ],
    quote: {
      text: "Adventure awaits those who seek the unknown.",
      author: "Sarah Carter",
    },
  },
  8: {
    title: "Discover the Mystical Beauty of Abu Simbel Temples",
    image: "./assets/images/Blog_images/img8.jpeg",
    date: "10 May 2021",
    comments: "Comments (05)",
    readTime: "5 min Read",
    content: `The Abu Simbel Temples are among the most impressive and awe-inspiring monuments of ancient Egypt. Carved into a mountainside by Pharaoh Ramses II, these temples are a testament to the grandeur and ingenuity of ancient Egyptian engineering and artistry. In this blog, we’ll delve into the history, significance, and breathtaking features of the Abu Simbel Temples.`,
    details: [
      {
        title: "The Great Temple of Ramses II",
        text: "The Great Temple of Ramses II, also known as the Sun Temple of Ramses II, is the larger of the two temples at Abu Simbel. This monumental structure is dedicated to the gods Amun, Ra-Horakhty, and Ptah, as well as to Ramses II himself. The facade of the temple is adorned with four colossal statues of Ramses II, each standing at 20 meters (66 feet) tall. These imposing statues are a striking testament to the pharaoh’s power and divine status.",
      },
      {
        title: "Interior of the Great Temple",
        text: "The interior of the Great Temple is equally impressive, featuring a series of halls and chambers adorned with intricate carvings and reliefs. The most notable feature is the Hypostyle Hall, supported by eight massive pillars, each depicting Ramses II as the god Osiris. The walls of the temple are covered with scenes of the pharaoh’s military victories, religious rituals, and divine interactions, offering a fascinating glimpse into the life and reign of Ramses II.",
      },
      {
        title: "The Sun Festival Phenomenon",
        text: "One of the most remarkable aspects of the Great Temple is the Sun Festival phenomenon. Twice a year, on February 22 and October 22, the rising sun aligns perfectly with the temple’s entrance, illuminating the statues of Ramses II, Amun, and Ra-Horakhty in the sanctuary. This extraordinary event is a testament to the ancient Egyptians’ advanced understanding of astronomy and architecture"
      },
      {
        title: "The Small Temple of Nefertari",
        text: `


        Adjacent to the Great Temple is the Small Temple, dedicated to Ramses II’s beloved wife, Queen Nefertari, and the goddess Hathor. The facade of the Small Temple features six statues, four of Ramses II and two of Nefertari, each standing at 10 meters (33 feet) tall. This temple is one of the few in Egypt dedicated to a queen, highlighting the significance of Nefertari in Ramses II’s reign.

.`,
      },
      {
        title: "Interior of the Small Temple",
        text: "The interior of the Small Temple is decorated with beautifully preserved reliefs and paintings that depict Nefertari in the presence of the gods and participating in religious rituals. The temple’s design and artwork reflect the queen’s esteemed status and the pharaoh’s devotion to her.",
      },
      {
        title: "The Relocation of Abu Simbel",
        text: `In the 1960s, the construction of the Aswan High Dam threatened to submerge the Abu Simbel Temples under the rising waters of Lake Nasser. In a remarkable feat of modern engineering, an international effort led by UNESCO successfully relocated the temples to higher ground, preserving them for future generations. This monumental project involved cutting the temples into large blocks and reassembling them at their new location, maintaining their original orientation and alignment.`
      },
      {
        title: "Conclusion",
        text: "The Abu Simbel Temples are a testament to the artistic and engineering prowess of ancient Egypt. From the colossal statues of Ramses II to the intricate carvings of the temple interiors, these monuments offer a captivating glimpse into the grandeur of Egypt’s past. Witness the mystical beauty of the Abu Simbel Temples and experience the wonder of one of the world’s greatest architectural achievements.",
      },
    ],
    quote: {
      text: "Adventure awaits those who seek the unknown.",
      author: "Sarah Carter",
    },
  },
  9: {
    title: "Wander Through the Bustling Markets of Cairo",
    image: "./assets/images/Blog_images/img9.jpeg",
    date: "10 May 2021",
    comments: "Comments (05)",
    readTime: "5 min Read",
    content: `Cairo, the vibrant capital of Egypt, is a city that never sleeps, and its bustling markets are a testament to its lively and dynamic spirit. From traditional bazaars to modern souks, Cairo’s markets offer a sensory overload of sights, sounds, and scents that reflect the city’s rich cultural heritage. In this blog, we’ll take you on a journey through some of the most famous and fascinating markets in Cairo.`,
    details: [
      {
        title: "Khan El Khalili Bazaar: A Historic Treasure Trove",
        text: "Khan El Khalili is one of the oldest and most famous bazaars in the Middle East, dating back to the 14th century. Located in the heart of Islamic Cairo, this historic market is a labyrinth of narrow alleys and bustling stalls, offering a treasure trove of goods and souvenirs.",
      },
      {
        title: "What to Buy at Khan El Khalili",
        text: `
        

    Traditional Crafts: Browse through a wide array of handcrafted items, including brassware, lanterns, and intricately designed jewelry.
    Spices and Herbs: The market is filled with stalls selling a variety of aromatic spices, herbs, and traditional Egyptian teas.
    Textiles and Clothing: Discover beautiful fabrics, scarves, and traditional Egyptian clothing such as galabeyas and embroidered dresses.


        `,
      },
      {
        title: "Experiencing the Atmosphere",
        text: "Wandering through Khan El Khalili, you’ll encounter the lively atmosphere of haggling vendors, the scent of incense, and the vibrant colors of the goods on display. Don’t miss the chance to visit the historic Al-Fishawi Café, a favorite spot for locals and tourists alike, where you can enjoy a cup of traditional mint tea and soak in the ambiance of the bazaar."
      },
      {
        title: "Souq Al Gomaa: The Friday Market",
        text: `


For a more eclectic and adventurous market experience, head to Souq Al Gomaa, also known as the Friday Market. Located in the Sayyida Zeinab district, this sprawling market takes place every Friday and offers an astonishing variety of goods, both new and second-hand.
.`,
      },
      {
        title: "What to Expect at Souq Al Gomaa",
        text: `
        

    Antiques and Curios: Discover hidden gems and unique antiques, from vintage furniture to quirky collectibles.
    Household Items: Browse through an array of household goods, electronics, and tools at bargain prices.
    Pets and Livestock: The market also features a section dedicated to pets and livestock, where you can find everything from birds to goats.


        `,
      },
      {
        title: "Tips for Visiting Souq Al Gomaa",
        text: `Be prepared for a bustling and chaotic atmosphere, and be ready to haggle for the best deals. It’s a good idea to visit early in the morning to avoid the crowds and secure the best finds`
      },
      {
        title: "Street Markets and Local Souks",
        text: "In addition to the famous bazaars, Cairo is home to numerous street markets and local souks that offer a more intimate shopping experience. Explore the markets in neighborhoods like Zamalek, Maadi, and Heliopolis to discover fresh produce, local delicacies, and handmade crafts."
      },
      {
        title: "Exploring Cairo's Food Markets",
        text: "Cairo’s food markets are a feast for the senses, offering a variety of fresh produce, spices, and traditional Egyptian snacks. The Attaba Market is one such market where you can find everything from fresh fruits and vegetables to spices and nuts. Be sure to sample some local treats like freshly baked bread, falafel, and koshari as you explore."
      },
      {
        title: "Conclusion",
        text: "The markets of Cairo are a vibrant reflection of the city’s rich cultural tapestry and offer an unforgettable shopping experience. Whether you’re searching for traditional crafts, unique antiques, or delicious local delicacies, Cairo’s markets have something for everyone. Immerse yourself in the bustling atmosphere and discover the treasures of Cairo’s markets on your next visit."
      },
    ],
    quote: {
      text: "Adventure awaits those who seek the unknown.",
      author: "Sarah Carter",
    },
  },
};

// Get the blog ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const selectedBlogId = urlParams.get("id"); // e.g., id=1

const blog = blogDetails[selectedBlogId];

if (blog) {
  document.getElementById("blog-title").textContent = blog.title;
  document.getElementById("blog-image").src = blog.image;
  document.getElementById("blog-date").textContent = blog.date;
  document.getElementById("blog-comments").textContent = blog.comments;
  document.getElementById("blog-read-time").textContent = blog.readTime;
  document.getElementById("blog-content").textContent = blog.content;

  // Populate details section
  const details = blog.details;
  const detailsList = document.querySelector(".icon-listing"); // Assuming this class is used for the list

  details.forEach((detail) => {
    // Create a new list item
    const listItem = document.createElement("li");

    // Create a title
    const title = document.createElement("h2");
    title.style.fontSize = "1.4rem";
    title.textContent = detail.title;

    // Create a paragraph
    const paragraph = document.createElement("p");
    paragraph.style.lineHeight = "2";
    paragraph.textContent = detail.text;

    // Append title and paragraph to the list item
    listItem.appendChild(title);
    listItem.appendChild(paragraph);

    // Append the list item to the details list
    detailsList.appendChild(listItem);
  });
} else {
  document.getElementById("blog-content").textContent =
    "Content Not Found";
}




// Footer CopyRight
let copyRight = (()=>{
  let CopyRightElement = document.querySelector(".copy-right")
  let d = new Date()
  let Year = d.getFullYear();
  CopyRightElement.innerHTML = `Copyright 2007-${Year} Marvelous Egypt Travel All Rights Reserved`
})();