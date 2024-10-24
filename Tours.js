// الحصول على المعرف من الـ URL
const params = new URLSearchParams(window.location.search);
const tourId = params.get("id"); // مثلا id=1

// بيانات الجولات (يمكنك إضافة المزيد من الجولات هنا)
const tourDetails = {
  1: {
    title: "Cairo Tour Packages",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "4 Days",
    des:"Embark on an unforgettable 4-day journey through Cairo and Giza with our exclusive tour package. Experience the perfect blend of ancient wonders and vibrant culture. This private tour, guided by expert Egyptologists, is ideal for solo travelers, couples, and families looking to explore the heart of Egypt.",
    reviews: "246 Reviews",
    priceSale: "$345",
    priceOriginal: "$345",
    rating: 5,
  },
  2: {
    title: "Essential Egypt",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "5 Days",
    des:"Embark on a journey through time with our 5 Days Cairo, Luxor and Abu Simbel Tour Package. This tour captures the essence of Egypt’s magnificent history and culture, offering a blend of ancient wonders and modern comfort. From the pyramids of Giza to the temples of Luxor and the grandeur of Abu Simbel, this package provides an unforgettable adventure. Marvelous Egypt Travel ensures exceptional service with professional Egyptologist guides, luxurious accommodations, and private A/C transportation, making it the ideal choice for exploring Egypt.",
    reviews: "362 Reviews",
    priceSale: "$770",
    priceOriginal: "$770",
    rating: 5,
  },
  3: {
    title: "Cairo, Giza, Luxor & Aswan Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "5 Days",
    des:"Embark on a mesmerizing journey through ancient Egypt with the 8 Days Cairo, Giza, Luxor, and Aswan Adventure Tour. This 8-day package, operated by Marvelous Tours, takes you from Cairo to Aswan, exploring iconic sites and offering an unforgettable Nile cruise experience.",
    reviews: "302 Reviews",
    priceSale: "$888",
    priceOriginal: "$888",
    rating: 5,
  },
  4: {
    title: "Cleopatra Egypt Tour Package",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "12 Days",
    des:"Embark on a luxurious 12-day journey through Egypt with Marvelous Egypt Travel. Immerse yourself in the ancient splendors and modern comforts of Egypt, guided by professional Egyptologists and transported in private, air-conditioned vehicles. This exceptional tour covers the most iconic landmarks from Cairo to Aswan, Luxor, and Hurghada",
    reviews: "188 Reviews",
    priceSale: "$1530",
    priceOriginal: "$1530",
    rating: 5,
  },
  5: {
    title: "One-Day Pyramids Tour from Cairo Airport",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 Days",
    des:"Embark on a mystical quest through the history of ancient Egypt with our exclusive Pyramids tour from Cairo Airport. Marvelous Egypt Travel is proud to offer our clients the finest services, including expert Egyptologist tour guides and private A/C vehicles. Experience the wonders of ancient Egypt, including the three pyramids, the Sphinx, the Valley Temple, and Memphis City. Enjoy 24/7 customer service, seamless transportation, and professional tour guides. Book this marvelous tour and turn your dream vacation into reality.",
    reviews: "135  Reviews",
    priceSale: "$100",
    priceOriginal: "$100",
    rating: 5,
  },
  6: {
    title: "Day Trip to Cairo from Hurghada by Plane",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 Days",
    des:"A day trip to Cairo from Hurghada is enough to change your life as you explore ancient Egyptian history. Our guests will be taken from the magical tropical atmosphere of Hurghada to the immortal wonders of Cairo, such as the Giza Pyramids Complex, which dates back more than 4000 years to the times of gods and pharaohs. In old Cairo, you will discover a number of Islamic monuments such as the Khan El Khalili Bazaar and more. Our clients will enjoy the excellent services of Marvelous Egypt Travel, the best travel agency in Egypt, which includes a skilled tour guide and a relaxing A/C vehicle. Feel the magical spirits of the past and explore the majestic works of ancient times by booking this incredible tour.",
    reviews: "154   Reviews",
    priceSale: "$400",
    priceOriginal: "$400",
    rating: 5,
  },
  7: {
    title: "Tour to Luxor East and West Banks",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 Days",
    des:`
Tour to Luxor East and West Banks

A tour to Luxor East and West Bank is a spiritual journey through the celestial wonders of the ancient Egyptian civilization, showcasing its enduring beauty and grandeur. Marvelous Egypt Travel will offer the most fitting and satisfying service to all our honorable guests, including a skilled Egyptologist tour guide and a private A/C vehicle.

Everyone will enjoy a private Luxor day tour to the East and West Banks to visit Luxor tourist attractions, including Luxor Temple, Karnak Temple, Valley of the Kings, Colossi of Memnon, and Queen Hatshepsut Temple. Book a vacation among the greatest archaeological treasures ever constructed in the history of ancient Egypt.
`,
    reviews: "356 Reviews",
    priceSale: "$70",
    priceOriginal: "$70",
    rating: 5,
  },
  8: {
    title: "Aswan Sightseeing Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 Days",
    des:"Embark on an enchanting full-day tour of Aswan, guided by a professional Egyptologist and traveling in the comfort of a private air-conditioned vehicle. This meticulously curated itinerary includes visits to some of Aswan’s most historically significant and visually stunning landmarks. Experience the monumental Aswan High Dam, the fascinating Unfinished Obelisk, and the magnificent Philae Temple. This tour provides a deep dive into the rich history and culture of the Nubian City, offering a memorable and educational experience.",
    reviews: "346 Reviews",
    priceSale: "$40",
    priceOriginal: "$40",
    rating: 5,
  },
  9: {
    title: "3 Nights Nile River Cruise Aswan to Luxor Including Abu Simbel ",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "4 days",
    des:`

Experience a magical 3-Night Nile River Cruise from Aswan, including a visit to the awe-inspiring Abu Simbel temples. Marvelous Egypt Travel, renowned for its exceptional services, invites you to embark on a journey through ancient Egypt’s wonders aboard a luxurious 5-star Nile cruise. Our tour offers:

    Expert Egyptologist guides.
    Premium accommodations.
    Private, air-conditioned transportation.
    An extraordinary voyage showcasing Egypt’s historical marvels.`,
    reviews: "313 Reviews",
    priceSale: "$550",
    priceOriginal: "$550",
    rating: 5,
  },
  10: {
    title: "4 Nights Nile River Cruise Luxor to Aswan Including Abu Simbel ",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "5 days",
    des:`
Experience the golden epic journey of a lifetime with our 4 Nights Nile River Cruise from Luxor including Abu Simbel. Marvelous Egypt Travel, the premier travel agency in Egypt, offers unparalleled services featuring the finest Egyptologist tour guides, luxurious Nile cruises, and private air-conditioned vehicles. Embark on a mesmerizing 5-day trip along the Nile River, exploring the grandeur of Ancient Egypt.
Cruise between the heavenly cities of Luxor and Aswan, marveling at the remarkable achievements of the Pharaohs. Visit the majestic Hatshepsut Temple, the Valley of the Kings, Karnak Temple, and more. Discover Edfu and Kom Ombo temples en route to Aswan, where you will witness the must-see monumental highlights including Philae Temple and Abu Simbel Temple. Create unforgettable memories on this extraordinary journey
    `,
    reviews: "354 Reviews",
    priceSale: "$700",
    priceOriginal: "$700",
    rating: 5,
  },
  11: {
    title: "7 Nights Nile River Cruise from Aswan ",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "8 days",
    des:"Experience a mythical journey of dreams across the immortal wonders of ancient Egypt with our 8 Days Nile cruise from Aswan. Marvelous Egypt Travel, the best travel agency in Egypt, offers unparalleled services featuring the finest Egyptologist tour guides, magical Nile Cruises, and private air-conditioned vehicles. Discover the mythical treasures of ancient Egyptian pharaohs and witness breathtaking temples and tombs such as Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, Edfu Temple, Philae Temple, and more in Luxor and Aswan. Book this golden experience on board a Nile cruise and live the holiday of your dreams.",
    reviews: "415 Reviews",
    priceSale: "$870",
    priceOriginal: "$870",
    rating: 5,
  },
  12: {
    title: "7 Nights Nile River Cruise from Luxor ",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "8 days",
    des:"Experience a magical travel journey across the ancient Egyptian Civilization, with 8 Days Nile cruise from Luxor. Marvelous Egypt Travel, the best travel agency in Egypt, provides exceptional services, including professional Egyptologist tour guides, enchanting Nile Cruises, and private air-conditioned vehicles. Explore the heavenly ancient Egyptian civilization in Luxor and Aswan, visiting incredible temples and tombs such as Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, Edfu Temple, Philae Temple, Abu Simbel, and more. Book this incredible adventure and uncover the exceptional heritage of ancient Egypt.",
    reviews: "124  Reviews",
    priceSale: "$870",
    priceOriginal: "$870",
    rating: 5,
  },
  13: {
    title: "Tour to Cairo and Giza Pyramids from Port Said",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des:"Embark on a day trip to Cairo from Port Said and immerse yourself in the timeless wonders of Egypt in a truly magical and entertaining way. Marvelous Egypt Travel, one of the leading travel agencies in Egypt, provides top-notch services, including a professional Egyptologist tour guide and a private air-conditioned vehicle. Enjoy a private excursion from Port Said to Cairo, visiting the Giza Pyramids, the Great Sphinx, and the Egyptian Museum before returning to Port Said. Turn your day trip into a captivating adventure by booking this enchanting tour that delves into the rich legacy of ancient Egypt.",
    reviews: "421 Reviews",
    priceSale: "$135",
    priceOriginal: "$135",
    rating: 5,
  },
  14: {
    title: "Day Trip to Alexandria Sights from Alexandria Port",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des:"Embark on a captivating day trip from Alexandria Port to explore the historical and cultural wonders of Alexandria. With Marvelous Egypt Travel’s exceptional service, including a private air-conditioned vehicle and a knowledgeable Egyptologist guide, you will experience the rich Greco-Roman heritage and unique attractions of this legendary city. Enjoy visits to the Alexandria Library, Catacombs, Pompey’s Pillar, Qaitbay Citadel, and Morsi Abu Abbas Mosque, before returning to Alexandria Port.",
    reviews: "413 Reviews",
    priceSale: "$80",
    priceOriginal: "$80",
    rating: 5,
  },
  15: {
    title: "Trip to Pyramids and Cairo from Sokhna Port",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des:`

A Cairo Tour from Sokhna Port is a voyage of dreams through the everlasting allure and grandeur of the immortal city of Cairo. Marvelous Egypt Travel, the best travel agency in Egypt, ensures all our clients receive top-notch services, including an expert Egyptologist tour guide and a private A/C vehicle.

During this magical tour, You will visit the iconic Giza Pyramids, the Great Sphinx, and the Egyptian Museum. After an unforgettable day of exploring ancient wonders, we will drive you back to Sokhna Port. Book this lovely day trip to experience the wonders of ancient Egypt and make each moment count.
`,
    reviews: "131 Reviews",
    priceSale: "$135",
    priceOriginal: "$135",
    rating: 5,
  },
  16: {
    title: "Day Tour from Safaga to Luxor",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "1 days",
    des:`
Embark on a miraculous journey with a day tour to Luxor from Safaga Port, where you will traverse a golden path back in time to witness the grandeur of the ancient Egyptian civilization. Marvelous Egypt Travel, renowned as the best travel agency in Egypt, provides our clients with exceptional services, including expert Egyptologist tour guides and private A/C vehicles.
During this one-day tour from Safaga to Luxor, our guests will experience the magnificence of Upper Egypt as they explore Luxor’s renowned tourist attractions. Discover the timeless treasures of the ancient Egyptian pharaohs by visiting the Valley of the Kings, Karnak Temples, Hatshepsut Temple, and the Colossi of Memnon. After an enriching day, we will drive you back to Safaga Port.
Experience an unforgettable holiday amidst the majestic wonders of Luxor by booking this extraordinary day trip.
`,
    reviews: "86 Reviews",
    priceSale: "$160",
    priceOriginal: "$160",
    rating: 5,
  },
  17: {
    title: "4 Days Christmas Cairo and Giza Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "4 days",
    des:"Experience a divine adventure across the immortal historical and cultural wonders of Cairo with the 4-day Cairo Christmas Egypt tour package. Provided by Marvelous Egypt Travel, this tour offers exquisite services including a private A/C vehicle and a seasoned Egyptologist tour guide. The tour covers Cairo’s most magnificent and diverse tourist attractions, including the Giza Pyramids, the Sphinx, Memphis City, Muizz Street, and the Khan El Khalili Bazaar. Make enchanting memories this Christmas with a visit to Egypt’s historic landmarks.",
    reviews: "132 Reviews",
    priceSale: "$600",
    priceOriginal: "$600",
    rating: 5,
  },
  18: {
    title: "6 Days Easter Cairo, Giza, Luxor, Aswan and Abu Simbel Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "6 days",
    des:"Embark on a 6-day Egypt Easter tour package that reveals the world’s greatest historical marvels. With Marvelous Egypt Travel, you will enjoy top-notch services including a private A/C vehicle, comfortable accommodations, and an experienced Egyptologist tour guide. This tour will take you through Cairo, Luxor, and Aswan, showcasing ancient Egyptian pyramids, the Great Sphinx, Karnak Temple, Queen Hatshepsut Temple, Valley of the Kings, Philae Temple, Abu Simbel Temple, and more.",
    reviews: "465 Reviews",
    priceSale: "$855",
    priceOriginal: "$855",
    rating: 5,
  },
  19: {
    title: "8 Days Christmas Cairo and Nile Cruise Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "8 days",
    des:"Experience the divine beauty and rich history of Egypt with this 8 Days Christmas Cairo and Nile Cruise tour. This luxurious journey covers the magnificent cities of Cairo, Luxor, and Aswan, featuring private air-conditioned vehicles, exceptional accommodations, and a 5-star Nile cruise. Guided by an experienced Egyptologist, you’ll unravel the mysteries and splendors of iconic destinations while enjoying a blend of relaxation and excitement.",
    reviews: "201 Reviews",
    priceSale: "$1980",
    priceOriginal: "$1980",
    rating: 5,
  },
  20: {
    title: "9 Days Cairo, Giza, Luxor, Aswan, and Hurghada Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "9 days",
    des:"Embark on a captivating journey through Egypt with our 9-day tour package. This fully guided tour offers a perfect blend of history, culture, and adventure, featuring luxury Nile cruises, iconic temples, and the serene beaches of Hurghada. Perfect for families and groups, our tours are tailored to provide an unforgettable Egyptian experience.",
    reviews: "222 Reviews",
    priceSale: "$988",
    priceOriginal: "$988",
    rating: 5,
  },
  21: {
    title: "8 Days Christmas Cairo and Nile Cruise Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "8 days",
    des:"",
    reviews: "335 Reviews",
    priceSale: "$1980",
    priceOriginal: "$2475",
    rating: 5,
  },
  22: {
    title:
      "8 Days Easter Cairo, Giza, Aswan, Kom Ombo, Edfu, Luxor and Hurghada Tour",
    maxGuests: "Unlimited",
    location: "Egypt",
    left: "4 days",
    des:"",
    reviews: "365 Reviews",
    priceSale: "$1250",
    priceOriginal: "$1562",
    rating: 5,
  },
};

// عرض التفاصيل بناءً على المعرف (ID)
const tour = tourDetails[tourId];

if (tour) {

  const descriptionWrap = document.querySelector("#des");
  if (tour.des.length === 0) {
    descriptionWrap.style.display = "none";
} else {
    descriptionWrap.innerHTML = `
        <div style="" class="description-wrap mb-40">
            <span class="description">Description:</span>
            <p class="des">
            ${tour.des}
            </p>
        </div>
    `;
}

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
