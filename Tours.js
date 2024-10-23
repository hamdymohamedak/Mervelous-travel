// الحصول على المعرف من الـ URL
const params = new URLSearchParams(window.location.search);
const tourId = params.get("id"); // مثلا id=1

// بيانات الجولات (يمكنك إضافة المزيد من الجولات هنا)
const tourDetails = {
  1: {
    title: "Cairo Tour Packages",
    maxGuests: "Unlimited",
    location: "Egypt",
    reviews: "246 Reviews",
    priceSale: "$345",
    priceOriginal: "$345",
    rating: 5,
  },
  2: {
    title: "Essential Egypt",
    maxGuests: "Unlimited",
    location: "Egypt",
    reviews: "125 Reviews",
    priceSale: "$770",
    priceOriginal: "$700",
    rating: 4,
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
