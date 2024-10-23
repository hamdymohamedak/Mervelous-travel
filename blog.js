// الحصول على المعرف من الـ URL
const params = new URLSearchParams(window.location.search);
const blogId = params.get('id'); // مثلا id=1

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
                text: "The Avenue of Sphinxes: A ceremonial road lined with sphinx statues that once connected Luxor Temple to Karnak Temple."
            },
            {
                title: "Karnak Temple: A Sacred City",
                text: "The Colonnade of Amenhotep III: A magnificent hall with towering columns and intricate carvings depicting religious rituals and festivals."
            },
            {
                title: "asd Features of Karnak Temple",
                text: "asd Hypostyle Hall: A grand hall filled with massive columns, each intricately decorated with hieroglyphics and reliefs."
            },
            {
                title: "The Sound and Light Show",
                text: "For a truly magical experience, attend the Sound and Light Show at Karnak Temple. As night falls, the temple complex is illuminated with colorful lights, and the history of the temple is narrated, bringing the ancient stones to life."
            },
            {
                title: "Conclusion",
                text: "Luxor and Karnak Temples are more than just historical sites; they are gateways to understanding the spiritual and cultural heritage of ancient Egypt. The grandeur of these temples, combined with their intricate carvings and imposing structures, makes them a must-visit for anyone interested in Egypt’s rich history. Plan your visit today and immerse yourself in the ancient splendor of Luxor and Karnak Temples."
            }
        ],
        quote: {
            text: "Your time is limited, so don’t waste it living someone else’s life.",
            author: "John Mehedii"
        }
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
                title:"Luxor: The World’s Greatest Open-Air Museum",
                text:"Starting your cruise in Luxor, you’ll be greeted by a city that is often referred to as the world’s greatest open-air museum. Luxor is home to the magnificent Luxor Temple and the sprawling Karnak Temple complex. These ancient sites are adorned with colossal statues, towering columns, and intricate hieroglyphics that tell the stories of Egypt’s powerful pharaohs and gods."
            },
            {
                title:"The Valley of the Kings",
                text:"A short distance from Luxor lies the Valley of the Kings, a royal burial ground that houses the tombs of Egypt’s most illustrious pharaohs, including the famous tomb of Tutankhamun. The elaborate tombs, filled with treasures and adorned with vivid wall paintings, provide a fascinating insight into the beliefs and burial practices of ancient Egyptians."
            },
            {
                title:"Edfu and Kom Ombo Temples",
                text:"As you sail further along the Nile, you’ll encounter the well-preserved Temple of Horus at Edfu, dedicated to the falcon-headed god Horus. This temple is a prime example of ancient Egyptian architecture and religious devotion. Another highlight is the Kom Ombo Temple, uniquely dedicated to two gods: Sobek, the crocodile god, and Horus, the falcon-headed god. The temple’s symmetrical design and fascinating reliefs make it a must-visit."
            },{
                title:"Aswan: Gateway to Nubia",
                text:"Your journey culminates in Aswan, a city known for its picturesque beauty and rich Nubian heritage. Here, you can visit the impressive Aswan High Dam, the ancient Philae Temple dedicated to the goddess Isis, and the unique Nubian villages that offer a glimpse into the region’s distinct culture and traditions.",
            },{
                title:"Relaxation and Luxury on Board",
                text:"A Nile River cruise is not just about exploring ancient sites; it’s also about relaxation and luxury. Most cruise ships offer comfortable cabins, delicious cuisine, and a range of amenities to ensure a pleasant journey. Enjoy the scenic views of the Nile’s lush riverbanks, vibrant sunsets, and the tranquility of sailing through Egypt’s heartland"
            },{
                title:"Conclusion",
                text:"A Nile River cruise is an unforgettable way to experience the wonders of ancient Egypt while enjoying the comfort and luxury of modern travel. From the monumental temples of Luxor and Aswan to the serene beauty of the river itself, this journey offers a perfect blend of history, culture, and relaxation. Book your Nile River cruise today and sail through the annals of history."
            }
        ],
        quote: {
            text: "Adventure awaits those who seek the unknown.",
            author: "Sarah Carter"
        }
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
                title:"Exploring the Great Pyramid of Khufu",
                text:"The Great Pyramid of Khufu, also known as the Pyramid of Cheops, is the largest and oldest of the three pyramids at Giza. Standing at a staggering height of 146.6 meters (481 feet), it was the tallest man-made structure in the world for over 3,800 years. Built as a tomb for the Pharaoh Khufu, this pyramid is a testament to the advanced engineering and architectural skills of the ancient Egyptians."
            },
            {
                title:"Marveling at the Pyramid of Khafre",
                text:"The Pyramid of Khafre, the second-largest pyramid at Giza, is slightly smaller than the Great Pyramid but equally impressive. It is distinguished by its original limestone casing at the apex, giving it a unique appearance. The pyramid was built for Pharaoh Khafre, and it is often associated with the Great Sphinx, which stands guard nearby."
            },
            {
                title:"Uncovering the Secrets of the Pyramid of Menkaure",
                text:"The Pyramid of Menkaure, the smallest of the three main pyramids, is no less significant. Built for Pharaoh Menkaure, it stands at 65 meters (213 feet) and is known for its intricate design and the statues found within its complex. The pyramid’s relatively smaller size does not diminish its historical and architectural importance."
            },{
                title:"The Enigmatic Sphinx",
                text:"No visit to the Pyramids of Giza is complete without witnessing the Great Sphinx. This massive limestone statue with the body of a lion and the head of a pharaoh (believed to be Khafre) has stood the test of time and continues to be a symbol of ancient Egypt’s grandeur. The Sphinx’s purpose and origin remain subjects of debate and intrigue among historians and archaeologists.",
            },{
                title:"Conclusion",
                text:"The Pyramids of Giza offer a glimpse into the extraordinary achievements of ancient Egyptian civilization. From the sheer scale of the Great Pyramid to the mysteries of the Sphinx, these timeless wonders provide an unforgettable experience for all who visit. Embark on a journey through history and discover the magic of the Pyramids of Giza for yourself."
            }
        ],
        quote: {
            text: "Adventure awaits those who seek the unknown.",
            author: "Sarah Carter"
        }
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
                title:"The Treasures of Tutankhamun",
                text:"One of the most famous exhibits in the Egyptian Museum is the collection of treasures from the tomb of Tutankhamun. Discovered by Howard Carter in 1922, these artifacts include the iconic golden death mask, exquisite jewelry, and intricately crafted funerary items. The sheer opulence and craftsmanship of these treasures provide a glimpse into the wealth and artistry of ancient Egypt"
            },
            {
                title:"The Royal Mummies Room",
                text:"The Royal Mummies Room is a fascinating section of the museum where visitors can view the preserved remains of some of Egypt’s most powerful pharaohs, including Ramses II and Hatshepsut. These mummies offer valuable insights into the embalming techniques and burial practices of ancient Egyptians, as well as the physical characteristics of the pharaohs."
            },
            {
                title:"Artifacts from Everyday Life",
                text:"In addition to royal treasures, the Egyptian Museum houses a vast array of artifacts that shed light on the daily lives of ancient Egyptians. From pottery and tools to furniture and clothing, these items reveal the ingenuity and resourcefulness of a civilization that thrived thousands of years ago."
            },{
                title:"Statues and Stelae",
                text:"The museum’s extensive collection of statues and stelae showcases the artistic and religious traditions of ancient Egypt. Highlights include the statues of Pharaoh Amenhotep III and his wife, Queen Tiye, as well as the stunning stela of Merneptah, which contains one of the earliest references to Israel.",
            },{
                title:"The Rosetta Stone",
                text:"Although the original Rosetta Stone is housed in the British Museum, the Egyptian Museum has an impressive replica of this crucial artifact. The Rosetta Stone was instrumental in deciphering Egyptian hieroglyphics, unlocking the secrets of this ancient language and enabling a deeper understanding of Egypt’s history and culture."
            },{
                title:"New Grand Egyptian Museum",
                text:"While the Egyptian Museum in Tahrir Square remains a significant cultural landmark, Egypt is set to open the new Grand Egyptian Museum (GEM) near the Giza Pyramids. This state-of-the-art facility will house many of the artifacts currently on display, offering an enhanced visitor experience with modern exhibits and interactive displays."
            },
            {
                title:"Conclusion",
                text:"The Egyptian Museum is a gateway to the wonders of ancient Egypt, offering a comprehensive and awe-inspiring collection of artifacts that span millennia. From the treasures of Tutankhamun to the everyday items of ordinary Egyptians, the museum provides a profound understanding of a civilization that has shaped human history. Plan your visit to the Egyptian Museum and step back in time to explore the fascinating world of the pharaohs."
            }
        ],
        quote: {
            text: "Adventure awaits those who seek the unknown.",
            author: "Sarah Carter"
        }
    }
};

// Get the blog ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const selectedBlogId = urlParams.get('id'); // e.g., id=1

const blog = blogDetails[selectedBlogId];

if (blog) {
    document.getElementById('blog-title').textContent = blog.title;
    document.getElementById('blog-image').src = blog.image;
    document.getElementById('blog-date').textContent = blog.date;
    document.getElementById('blog-comments').textContent = blog.comments;
    document.getElementById('blog-read-time').textContent = blog.readTime;
    document.getElementById('blog-content').textContent = blog.content;

    // Populate details section
    const details = blog.details;
    const detailsList = document.querySelector('.icon-listing'); // Assuming this class is used for the list

    details.forEach((detail) => {
        // Create a new list item
        const listItem = document.createElement('li');
        
        // Create a title
        const title = document.createElement('h2');
        title.style.fontSize = '1.4rem';
        title.textContent = detail.title;

        // Create a paragraph
        const paragraph = document.createElement('p');
        paragraph.style.lineHeight = '2';
        paragraph.textContent = detail.text;

        // Append title and paragraph to the list item
        listItem.appendChild(title);
        listItem.appendChild(paragraph);

        // Append the list item to the details list
        detailsList.appendChild(listItem);
    });
} else {
    document.getElementById('blog-content').textContent = "لم يتم العثور على تفاصيل المدونة.";
}
