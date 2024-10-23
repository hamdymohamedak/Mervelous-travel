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
    reviews: "365 Reviews",
    priceSale: "$1250",
    priceOriginal: "$1562",
    rating: 5,
  },
};

// عرض التفاصيل بناءً على المعرف (ID)
const tour = tourDetails[tourId];

if (tour) {
  // إعداد القيم في صفحة الجولة بشكل مباشر
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
