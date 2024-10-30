const params = new URLSearchParams(window.location.search);
const tourId = params.get("id");

const destinationDetails = {
    1: {
        title: "Cairo Adventure",
        intro: "Explore the heart of Egypt.",
        description: `Embark on an unforgettable journey through Cairo, where ancient history meets vibrant culture. Marvel at the awe-inspiring Pyramids of Giza, stroll through the bustling streets of Islamic Cairo, and immerse yourself in the rich heritage of the Egyptian Museum. Experience the city's unique blend of old and new, from traditional markets to modern cafes. Cairo offers a captivating adventure that promises to leave lasting memories.`,
        images: [
            "./assets/images/Cairo_Images/img (3).webp",
            "./assets/images/Cairo_Images/img9.jpeg"
        ],
        cover_image: "./assets/images/Blog_images/pexels-helgampallares-11039757.jpg",
        highlights: [
            "View the City asdasd",
            "Hiking in the forest",
            "Discover the famous viewpoint 'The Lark'",
            "Sunset on the cruise"
        ],
        secoundDes: `Cairo is a city that never sleeps, filled with life and energy. Its streets are alive with the sounds of bustling markets, vibrant street art, and the aroma of delicious local cuisine. This dynamic metropolis offers a unique blend of historical landmarks and contemporary attractions, making it a must-visit destination for travelers seeking both adventure and culture. Experience the warmth of Egyptian hospitality as you explore the city's hidden gems and iconic sites.`,
        Municipalities:`Cairo, the sprawling capital of Egypt, is a vibrant metropolis where history and modernity coexist. It is home to iconic landmarks such as the Great Pyramids of Giza, the Sphinx, and the Egyptian Museum, showcasing ancient treasures that tell the story of one of the world's oldest civilizations. The city is characterized by its bustling streets, rich cultural heritage, and warm hospitality. Explore the narrow alleyways of Islamic Cairo, where traditional markets, or souks, offer a kaleidoscope of colors, scents, and sounds. From the historic architecture of the Al-Azhar Mosque to the lively atmosphere of Tahrir Square, Cairo is a city that captivates the imagination and invites exploration.`
    },
};

if (destinationDetails[tourId]) {
    const tour = destinationDetails[tourId];
    document.querySelector(".title").textContent = tour.title;
    document.querySelector(".des_intro").textContent = tour.intro;
    document.querySelector(".des").textContent = tour.description;
    document.querySelector("#secoundDes").textContent = tour.secoundDes;
    document.querySelector("#MunicipalitiesDes").textContent = tour.Municipalities;

    // Set the cover image
    const coverImageElement = document.querySelector(".cover_img");
    coverImageElement.src = tour.cover_image;
    coverImageElement.alt = "Cover image";

    const imageContainer = document.querySelector(".image-wrap");
    imageContainer.innerHTML = ""; // Clear existing images
    tour.images.forEach(imageSrc => {
        const imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        imgElement.alt = "Tour image";
        imgElement.style.height = "20rem";
        imgElement.style.width = "auto";
        imgElement.style.objectFit = "cover";
        imageContainer.appendChild(imgElement);
    });

    const highlightList = document.querySelector(".listing-des");
    highlightList.innerHTML = ""; // Clear existing highlights
    tour.highlights.forEach(highlight => {
        const li = document.createElement("li");
        li.textContent = highlight;
        highlightList.appendChild(li);
    });
} else {
    console.error("Tour not found!");
}
