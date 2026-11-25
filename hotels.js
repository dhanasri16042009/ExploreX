
document.addEventListener("DOMContentLoaded", function () {

  const hotels = [
    {
      name: "Mountain View Retreat",
      location: "Switzerland",
      price: "Demo estimate: $120 / night",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      description: "A scenic stay surrounded by beautiful mountain views."
    },
    {
      name: "Tokyo City Stay",
      location: "Japan",
      price: "Demo estimate: $95 / night",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6",
      description: "A comfortable city stay for exploring Tokyo."
    },
    {
      name: "Italian Garden Hotel",
      location: "Italy",
      price: "Demo estimate: $110 / night",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description: "Relax in a charming hotel with a garden atmosphere."
    },
    {
      name: "Tropical Beach Resort",
      location: "Maldives",
      price: "Demo estimate: $180 / night",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description: "Enjoy a relaxing tropical island experience."
    },
    {
      name: "Paris Boutique Stay",
      location: "France",
      price: "Demo estimate: $130 / night",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      description: "Explore Paris from a stylish city accommodation."
    },
    {
      name: "Kerala Nature Resort",
      location: "India",
      price: "Demo estimate: ₹4,000 / night",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description: "Discover peaceful surroundings and green landscapes."
    }
  ];

  const section = document.createElement("section");
  section.id = "hotel-discovery";

  section.innerHTML = `
    <style>
      #hotel-discovery {
        padding: 65px 6%;
        background: #080d1b;
        color: white;
        font-family: Arial, sans-serif;
      }

      #hotel-discovery .hotel-heading {
        text-align: center;
        margin-bottom: 30px;
      }

      #hotel-discovery .hotel-heading h2 {
        font-size: 32px;
        margin-bottom: 10px;
      }

      #hotel-discovery .hotel-heading p {
        color: #b8c0d5;
      }

      #hotel-search {
        display: block;
        width: min(500px, 100%);
        margin: 25px auto;
        padding: 14px;
        border-radius: 10px;
        border: 1px solid #6251a8;
        background: #151e32;
        color: white;
        font-size: 15px;
      }

      #hotel-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(250px, 1fr));
        gap: 24px;
        max-width: 1200px;
        margin: auto;
      }

      .hotel-card {
        background: #151e32;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid #303b55;
        transition: transform .3s ease;
      }

      .hotel-card:hover {
        transform: translateY(-7px);
      }

      .hotel-card img {
        width: 100%;
        height: 180px;
        object-fit: cover;
      }

      .hotel-info {
        padding: 17px;
      }

      .hotel-info h3 {
        margin: 0 0 8px;
      }

      .hotel-info p {
        color: #c3cbe0;
        font-size: 14px;
        line-height: 1.5;
      }

      .hotel-rating {
        color: #fbbf24;
      }

      .hotel-button {
        width: 100%;
        padding: 11px;
        border: none;
        border-radius: 8px;
        background: linear-gradient(135deg,#7c3aed,#2563eb);
        color: white;
        cursor: pointer;
        font-weight: bold;
      }

      #hotel-empty {
        text-align: center;
        color: #c3cbe0;
        grid-column: 1 / -1;
      }
    </style>

    <div class="hotel-heading">
      <h2>🏨 Discover Amazing Hotels</h2>
      <p>Explore accommodation ideas around the world</p>
    </div>

    <input
      type="search"
      id="hotel-search"
      placeholder="Search hotels or destinations..."
      aria-label="Search hotels or destinations"
    />

    <div id="hotel-grid"></div>
  `;

  // Insert before the footer, or at the end if there is no footer.
  const footer = document.querySelector("footer");

  if (footer) {
    document.body.insertBefore(section, footer);
  } else {
    document.body.appendChild(section);
  }

  const hotelGrid = section.querySelector("#hotel-grid");
  const searchInput = section.querySelector("#hotel-search");

  function renderHotels(searchTerm = "") {
    hotelGrid.innerHTML = "";

    const filteredHotels = hotels.filter(function (hotel) {
      return (
        hotel.name.toLowerCase().includes(searchTerm) ||
        hotel.location.toLowerCase().includes(searchTerm)
      );
    });

    if (filteredHotels.length === 0) {
      hotelGrid.innerHTML =
        '<p id="hotel-empty">No matching hotels found.</p>';
      return;
    }

    filteredHotels.forEach(function (hotel) {
      const card = document.createElement("article");
      card.className = "hotel-card";

      const image = document.createElement("img");
      image.src = hotel.image;
      image.alt = hotel.name;
      image.loading = "lazy";

      const info = document.createElement("div");
      info.className = "hotel-info";

      const title = document.createElement("h3");
      title.textContent = hotel.name;

      const location = document.createElement("p");
      location.textContent = "📍 " + hotel.location;

      const description = document.createElement("p");
      description.textContent = hotel.description;

      const price = document.createElement("p");
      price.textContent = hotel.price;

      const rating = document.createElement("p");
      rating.className = "hotel-rating";
      rating.textContent = "⭐ Demo rating: " + hotel.rating;

      const button = document.createElement("button");
      button.className = "hotel-button";
      button.textContent = "View Hotel Information";

      button.addEventListener("click", function () {
        alert(
          hotel.name + "\n" +
          hotel.location + "\n\n" +
          "This is a sample listing. Verify hotel details, " +
          "availability and contact information before booking."
        );
      });

      info.append(
        title,
        location,
        description,
        price,
        rating,
        button
      );

      card.append(image, info);
      hotelGrid.appendChild(card);
    });
  }

  searchInput.addEventListener("input", function () {
    renderHotels(searchInput.value.trim().toLowerCase());
  });

  renderHotels();

  console.log("ExploreX Hotel Discovery Loaded!");

});
