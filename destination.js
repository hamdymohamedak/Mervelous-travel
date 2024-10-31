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
            "View the City",
            "Hiking in the forest",
            "Discover the famous viewpoint 'The Lark'",
            "Sunset on the cruise"
        ],
        secoundDes: `Cairo is a city that never sleeps, filled with life and energy. Its streets are alive with the sounds of bustling markets, vibrant street art, and the aroma of delicious local cuisine. This dynamic metropolis offers a unique blend of historical landmarks and contemporary attractions, making it a must-visit destination for travelers seeking both adventure and culture. Experience the warmth of Egyptian hospitality as you explore the city's hidden gems and iconic sites.`,
        Municipalities:`Cairo, the sprawling capital of Egypt, is a vibrant metropolis where history and modernity coexist. It is home to iconic landmarks such as the Great Pyramids of Giza, the Sphinx, and the Egyptian Museum, showcasing ancient treasures that tell the story of one of the world's oldest civilizations. The city is characterized by its bustling streets, rich cultural heritage, and warm hospitality. Explore the narrow alleyways of Islamic Cairo, where traditional markets, or souks, offer a kaleidoscope of colors, scents, and sounds. From the historic architecture of the Al-Azhar Mosque to the lively atmosphere of Tahrir Square, Cairo is a city that captivates the imagination and invites exploration.`
    },

    2: {
        title: "Alexandria  Adventure",
        intro: "Discover Egypt’s Coastal Gem",
        description: `Nestled along the Mediterranean coast, Alexandria is a city that beautifully combines history, romance, and vibrant urban life. Founded by Alexander the Great, this storied city was once a center of ancient knowledge and home to the Great Library of Alexandria. Today, visitors can explore iconic sites like the stunning Qaitbay Citadel, built on the ruins of the fabled Lighthouse of Alexandria, and the ancient Catacombs of Kom El Shoqafa, one of the Seven Wonders of the Middle Ages.

Alexandria’s seaside charm offers more than just history. Stroll along the Corniche to enjoy breathtaking sea views, visit the grand Alexandria Library (Bibliotheca Alexandrina), or relax on the beaches dotted along the coast. With its unique blend of Greek, Roman, and Egyptian heritage, this city captivates travelers with its enchanting atmosphere, rich history, and warm Mediterranean breezes.`,
        images: [
            "./assets/images/Giza_Images/GUEST-43.jpeg",
            "./assets/images/Cairo_Images/img60.JPG"
        ],
        cover_image: "./assets/images/Destinations_Images/Alex_1_11zon.jpg",
        highlights: [
            "Explore the Mediterranean coast",
            "Stroll along the historic Corniche",
            "Visit the ancient Qaitbay Citadel",
            "Discover the Bibliotheca Alexandrina"
        ],
        secoundDes: `Alexandria, Egypt’s charming coastal city, blends history with a laid-back Mediterranean atmosphere. Once home to the Great Library of Alexandria, the city holds a legacy of knowledge, culture, and art. From bustling seaside promenades to ancient ruins, Alexandria invites travelers to experience its unique spirit and warm hospitality, offering a mix of iconic landmarks and leisurely relaxation along the sea.`,
        Municipalities: `Founded by Alexander the Great, Alexandria boasts a rich history, combining Egyptian, Greek, and Roman influences. Discover the fascinating Catacombs of Kom El Shoqafa, stroll through the beautiful Montaza Gardens, or take in the views at the Qaitbay Citadel, which stands where the legendary Lighthouse of Alexandria once guided sailors. The city’s scenic Corniche is perfect for a leisurely walk by the sea, while the Bibliotheca Alexandrina serves as a modern tribute to the ancient library. Alexandria’s diverse heritage, Mediterranean cuisine, and scenic beauty make it a captivating destination for every traveler.`
    },
    3: {
        title: "Luxor Adventure",
        intro: "Uncover the Heart of Ancient Egypt",
        description: `Set along the Nile River, Luxor is often called the "world's greatest open-air museum" due to its incredible concentration of ancient monuments. This city, once known as Thebes, was the capital of ancient Egypt and remains a treasure trove of history. Visitors can explore the Valley of the Kings, where the tomb of Tutankhamun was discovered, and the stunning Temple of Karnak, a vast complex with towering columns and intricate carvings.
        
        Beyond its ancient wonders, Luxor offers a glimpse into traditional Egyptian life along the Nile. Sail on a felucca boat, visit local markets, or enjoy the sunset views from the banks of the river. With its rich heritage, Luxor is a must-visit destination for anyone interested in Egypt's ancient history, culture, and breathtaking landscapes.`,
        images: [
            "./assets/images/Luxor_Images/img14.webp",
            "./assets/images/Luxor_Images/img16.webp"
        ],
        cover_image: "./assets/images/Luxor_Images/img3.webp",
        highlights: [
            "Explore the Valley of the Kings",
            "Marvel at the Temple of Karnak",
            "Sail along the Nile on a traditional felucca",
            "Discover the Colossi of Memnon"
        ],
        secoundDes: `Luxor, often regarded as Egypt’s ancient capital, is a city filled with historic grandeur and awe-inspiring monuments. It’s home to some of Egypt’s most famous landmarks, including the Temple of Luxor and the Valley of the Queens. The city seamlessly blends ancient history with the charm of Nile-side life, offering travelers both captivating sights and tranquil landscapes.`,
        Municipalities: `Once the great capital of the New Kingdom, Luxor boasts an impressive legacy of Egyptian history. The Valley of the Kings holds the tombs of pharaohs, including that of Tutankhamun, while the Temples of Karnak and Luxor offer breathtaking examples of ancient Egyptian architecture and art. Luxor’s vibrant culture, stunning views along the Nile, and remarkable monuments make it an unforgettable destination for all who visit.`        
    },
    4: {
        title: "Aswan Adventure",
        intro: "Experience the Serenity of Egypt's Southern Jewel",
        description: `Situated along the Nile River, Aswan is known for its tranquil atmosphere, stunning river views, and unique blend of Nubian and Egyptian cultures. This city, often regarded as the gateway to Nubia, is home to remarkable temples, beautiful islands, and a warm, welcoming ambiance. Visitors can marvel at the iconic Philae Temple, dedicated to the goddess Isis, and the impressive Aswan High Dam, a modern engineering feat that shaped Egypt's water resources.
    
    Aswan offers more than ancient wonders. Explore the vibrant Nubian villages with their colorful houses, sail to Elephantine Island, or enjoy a peaceful felucca ride at sunset. Aswan’s picturesque landscapes and rich heritage make it a serene destination for travelers seeking both culture and relaxation.`,
        images: [
            "./assets/images/Aswan_Images/François Henry Christolhomme (2).jpeg",
            "./assets/images/Aswan_Images/img4.webp"
        ],
        cover_image: "./assets/images/Aswan_Images/aswancover.jpg",
        highlights: [
            "Visit the Philae Temple",
            "See the Aswan High Dam",
            "Sail along the Nile to Elephantine Island",
            "Explore the Nubian villages"
        ],
        secoundDes: `Aswan, with its beautiful river views and laid-back atmosphere, is a city that celebrates Egypt’s Nubian heritage. Home to historic temples and charming islands, Aswan invites travelers to experience both cultural discoveries and peaceful moments along the Nile.`,
        Municipalities: `Aswan offers a unique blend of history and tranquility. Explore the Temple of Philae, a stunning island temple dedicated to Isis, visit the Nubian Museum to understand the region’s heritage, or stroll through the botanical gardens on Kitchener's Island. The city’s warm climate, friendly people, and natural beauty make Aswan a memorable stop for any Egypt traveler.`
    },
    5: {
        title: "Hurghada Adventure",
        intro: "Dive into the Red Sea Paradise",
        description: `Located on the shores of the Red Sea, Hurghada is a world-renowned beach destination celebrated for its crystal-clear waters, vibrant coral reefs, and thriving marine life. Originally a small fishing village, Hurghada has transformed into a bustling resort town where visitors can dive, snorkel, and explore underwater treasures or simply relax on sandy beaches under the Egyptian sun.
    
    Hurghada offers more than just beaches. Discover the colorful Souks in the old town of El Dahar, explore the desert on a thrilling safari, or enjoy a sunset cruise. With its warm climate and a range of water sports and activities, Hurghada is an ideal destination for relaxation, adventure, and experiencing Egypt's coastal beauty.`,
        images: [
            "./assets/images/Activeties (1).jpeg",
            "./assets/images/Cairo_Images/img10.jpeg"
        ],
        cover_image: "./assets/images/hurghada.jpg",
        highlights: [
            "Snorkel in the Red Sea",
            "Explore vibrant coral reefs",
            "Enjoy a desert safari adventure",
            "Relax on pristine beaches"
        ],
        secoundDes: `Hurghada, with its serene beaches and turquoise waters, is the perfect escape for beach lovers and adventure seekers alike. Its coral reefs and marine life attract divers from around the world, while the town’s lively atmosphere and beautiful resorts make it a top coastal destination.`,
        Municipalities: `Hurghada offers a blend of excitement and relaxation. From diving and snorkeling in the crystal-clear Red Sea to exploring the desert landscapes, Hurghada is a paradise for nature enthusiasts. Visit the Marina Boulevard for dining and nightlife, or take a boat trip to the nearby Giftun Islands for an unforgettable Red Sea experience. With warm weather year-round, Hurghada’s beauty and diverse activities make it a must-visit for all travelers.`
    } ,
    6: {
        title: "Sharm El Sheikh Adventure",
        intro: "Experience Egypt's Coastal Oasis",
        description: `Situated on the Sinai Peninsula along the Red Sea, Sharm El Sheikh is one of Egypt’s premier destinations for relaxation, adventure, and stunning natural beauty. Known for its clear blue waters, colorful coral reefs, and vibrant marine life, Sharm El Sheikh is a paradise for divers and snorkelers from around the world. Beyond the beach, this resort town offers a unique blend of luxury, culture, and adventure.
    
    Visitors can explore Ras Mohammed National Park, a protected area renowned for its extraordinary coral reefs, or take a thrilling desert safari by quad bike. At night, the bustling Naama Bay offers a lively scene with restaurants, cafes, and entertainment. Whether you seek underwater wonders, desert excursions, or relaxation by the sea, Sharm El Sheikh is a captivating destination that promises unforgettable experiences.`,
        images: [
            "./assets/images/Cairo_Images/img10.jpeg",
            "./assets/images/Cairo_Images/img (1).webp"
        ],
        cover_image: "./assets/images/sharm_cover_11zon.jpg",
        highlights: [
            "Snorkel or dive in the Red Sea",
            "Explore Ras Mohammed National Park",
            "Enjoy a quad bike desert safari",
            "Relax at Naama Bay's vibrant beaches"
        ],
        secoundDes: `Sharm El Sheikh, with its pristine waters and luxurious resorts, is a paradise for travelers seeking both excitement and relaxation. Known for its world-class diving spots and vibrant nightlife, Sharm El Sheikh seamlessly blends natural beauty with modern comfort.`,
        Municipalities: `Sharm El Sheikh offers an incredible range of experiences, from the marine life of the Red Sea to the scenic deserts of the Sinai Peninsula. Dive at the famous Blue Hole, visit the lively markets of Old Sharm, or unwind at the luxurious resorts along the coast. With its perfect mix of nature and adventure, Sharm El Sheikh is an essential stop for anyone exploring Egypt's coastal charm.`
    }
     
      
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
        // imgElement.style.width = "auto";
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
