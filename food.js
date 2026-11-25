
document.addEventListener("DOMContentLoaded", function () {

  const foods = [
    {
      name: "Dosa",
      country: "India",
      type: "South Indian",
      description: "A crispy rice and lentil crepe served with chutneys.",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
    },
    {
      name: "Biryani",
      country: "India",
      type: "Indian",
      description: "A fragrant rice dish prepared with aromatic spices.",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c"
    },
    {
      name: "Sushi",
      country: "Japan",
      type: "Asian",
      description: "A traditional Japanese dish made with seasoned rice.",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
    },
    {
      name: "Pizza",
      country: "Italy",
      type: "European",
      description: "A famous Italian dish with a variety of toppings.",
      image: "https://images.unsplash.com/photo- pizza"
    },
    {
      name: "Tacos",
      country: "Mexico",
      type: "Street Food",
      description: "A popular Mexican dish served in folded tortillas.",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b"
    },
    {
      name: "Croissant",
      country: "France",
      type: "Bakery",
      description: "A buttery, flaky French pastry.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a"
    },
    {
      name: "Pad Thai",
      country: "Thailand",
      type: "Asian",
      description: "A popular Thai stir-fried noodle dish.",
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e"
    },
    {
      name: "Falafel",
      country: "Middle East",
      type: "Street Food",
      description: "A traditional dish made from seasoned chickpeas.",
      image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb8"
    },
    {
      name: "Puttu",
      country: "Kerala, India",
      type: "South Indian",
      description: "A steamed rice and coconut dish enjoyed in Kerala.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
    },
    {
      name: "Pancakes",
      country: "USA",
      type: "Breakfast",
      description: "Soft breakfast pancakes often served with toppings.",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93"
    }
  ];

  const section = document.createElement("section");
  section.id = "explorex-food";

  section.innerHTML = `
    <style>
      #explorex-food {
        padding: 65px 6%;
        background: #0b1120;
        color: white;
        font-family: Arial, sans-serif;
      }

      #explorex-food .food-heading {
        text-align: center;
        margin-bottom: 30px;
      }

      #explorex-food .food-heading h2 {
        font-size: 32px;
        margin-bottom: 10px;
      }

      #explorex-food .food-heading p {
        color: #b8c0d5;
      }

      #food-search {
        display: block;
        width: min(500px, 100%);
        margin: 20px auto;
        padding: 14px;
        border-radius: 10px;
        border: 1px solid #6251a8;
        background: #151e32;
        color: white;
      }

      #food-filters {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        margin: 25px 0;
      }

      #food-filters button {
        padding: 9px 16px;
        border: 1px solid #8061d8;
        border-radius: 20px;
        background: transparent;
        color: white;
        cursor: pointer;
      }

      #food-filters button.active {
        background: #6d28d9;
      }

      #food-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(230px, 1fr));
        gap: 22px;
        max-width: 1200px;
        margin: auto;
      }

      .food-card {
        background: #151e32;
        border: 1px solid #303b55;
        border-radius: 15px;
        overflow: hidden;
        transition: transform .3s ease;
      }

      .food-card:hover {
        transform: translateY(-7px);
      }

      .food-card img {
        width: 100%;
        height: 175px;
        object-fit: cover;
      }

      .food-info {
        padding: 16px;
      }

      .food-info h3 {
        margin: 0 0 8px;
      }

      .food-info p {
        color: #c3cbe0;
        font-size: 14px;
        line-height: 1.5;
      }

      .food-category {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 15px;
        background: #38266a;
        color: #ddd6fe;
        font-size: 12px;
      }

      #food-empty {
        text-align: center;
        color: #c3cbe0;
        grid-column: 1 / -1;
      }
    </style>

    <div class="food-heading">
      <h2>🍜 Taste the World</h2>
      <p>Discover traditional food and local cuisines around the globe.</p>
    </div>

    <input
      type="search"
      id="food-search"
      placeholder="Search food or country..."
      aria-label="Search food or country"
    />

    <div id="food-filters">
      <button class="active" data-category="All">All</button>
      <button data-category="South Indian">South Indian</button>
      <button data-category="Asian">Asian</button>
      <button data-category="European">European</button>
      <button data-category="Street Food">Street Food</button>
      <button data-category="Breakfast">Breakfast</button>
      <button data-category="Bakery">Bakery</button>
    </div>

    <div id="food-grid"></div>
  `;

  const footer = document.querySelector("footer");

  if (footer) {
    document.body.insertBefore(section, footer);
  } else {
    document.body.appendChild(section);
  }

  const foodGrid = section.querySelector("#food-grid");
  const searchInput = section.querySelector("#food-search");
  const filterButtons = section.querySelectorAll(
    "#food-filters button"
  );

  let selectedCategory = "All";

  function renderFoods() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredFoods = foods.filter(function (food) {
      const matchesSearch =
        food.name.toLowerCase().includes(searchTerm) ||
        food.country.toLowerCase().includes(searchTerm) ||
        food.type.toLowerCase().includes(searchTerm);

      const matchesCategory =
        selectedCategory === "All" ||
        food.type === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    foodGrid.innerHTML = "";

    if (filteredFoods.length === 0) {
      foodGrid.innerHTML =
        '<p id="food-empty">No matching food found. Try another search!</p>';
      return;
    }

    filteredFoods.forEach(function (food) {
      const card = document.createElement("article");
      card.className = "food-card";

      const image = document.createElement("img");
      image.src = food.image;
      image.alt = food.name;
      image.loading = "lazy";

      const info = document.createElement("div");
      info.className = "food-info";

      const name = document.createElement("h3");
      name.textContent = food.name;

      const country = document.createElement("p");
      country.textContent = "📍 " + food.country;

      const description = document.createElement("p");
      description.textContent = food.description;

      const category = document.createElement("span");
      category.className = "food-category";
      category.textContent = food.type;

      info.append(name, country, description, category);
      card.append(image, info);
      foodGrid.appendChild(card);
    });
  }

  searchInput.addEventListener("input", renderFoods);

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectedCategory = button.dataset.category;

      filterButtons.forEach(function (item) {
        item.classList.remove("active");
      });

      button.classList.add("active");
      renderFoods();
    });
  });

  renderFoods();

  console.log("ExploreX Food Finder Loaded!");

});
