
document.addEventListener("DOMContentLoaded", function () {

  const guides = [
    {
      name: "Arun Kumar",
      destination: "Tamil Nadu, India",
      languages: "Tamil, English",
      specialty: "Heritage and Temple Tours",
      experience: "Local guide profile",
      emoji: "🧑‍🏫"
    },
    {
      name: "Priya Sharma",
      destination: "Rajasthan, India",
      languages: "Hindi, English",
      specialty: "Palaces and Cultural Tours",
      experience: "Local guide profile",
      emoji: "👩‍🏫"
    },
    {
      name: "Yuki Tanaka",
      destination: "Tokyo, Japan",
      languages: "Japanese, English",
      specialty: "City and Cultural Tours",
      experience: "Local guide profile",
      emoji: "🧑‍💼"
    },
    {
      name: "Marco Rossi",
      destination: "Rome, Italy",
      languages: "Italian, English",
      specialty: "History and Architecture",
      experience: "Local guide profile",
      emoji: "🧑‍💼"
    },
    {
      name: "Aisha Khan",
      destination: "Dubai, UAE",
      languages: "Arabic, English, Hindi",
      specialty: "City and Shopping Tours",
      experience: "Local guide profile",
      emoji: "👩‍💼"
    },
    {
      name: "Sophie Martin",
      destination: "Paris, France",
      languages: "French, English",
      specialty: "Art and Museum Tours",
      experience: "Local guide profile",
      emoji: "👩‍🏫"
    }
  ];

  const section = document.createElement("section");
  section.id = "explorex-guides";

  section.innerHTML = `
    <style>
      #explorex-guides {
        padding: 70px 6%;
        background: #080d1b;
        color: white;
        font-family: Arial, sans-serif;
      }

      #explorex-guides .guide-heading {
        text-align: center;
        margin-bottom: 30px;
      }

      #explorex-guides .guide-heading h2 {
        font-size: 32px;
        margin-bottom: 10px;
      }

      #explorex-guides .guide-heading p {
        color: #b8c0d5;
      }

      #guide-search {
        display: block;
        width: min(500px, 100%);
        margin: 25px auto;
        padding: 14px;
        border-radius: 10px;
        border: 1px solid #6251a8;
        background: #151e32;
        color: white;
      }

      #guide-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(240px, 1fr));
        gap: 22px;
        max-width: 1200px;
        margin: auto;
      }

      .guide-card {
        background: #151e32;
        padding: 24px;
        text-align: center;
        border-radius: 16px;
        border: 1px solid #303b55;
        transition: transform .3s ease;
      }

      .guide-card:hover {
        transform: translateY(-7px);
      }

      .guide-avatar {
        width: 75px;
        height: 75px;
        margin: auto auto 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: linear-gradient(135deg,#7c3aed,#2563eb);
        font-size: 36px;
      }

      .guide-card h3 {
        margin: 10px 0;
      }

      .guide-card p {
        color: #c3cbe0;
        font-size: 14px;
        line-height: 1.6;
      }

      .guide-contact {
        width: 100%;
        padding: 11px;
        margin-top: 12px;
        border: none;
        border-radius: 8px;
        background: linear-gradient(135deg,#7c3aed,#2563eb);
        color: white;
        cursor: pointer;
      }

      #guide-empty {
        grid-column: 1 / -1;
        text-align: center;
        color: #c3cbe0;
      }
    </style>

    <div class="guide-heading">
      <h2>🧭 Find Your Local Tour Guide</h2>
      <p>Discover destinations with local knowledge and language support.</p>
    </div>

    <input
      type="search"
      id="guide-search"
      placeholder="Search by destination or language..."
      aria-label="Search tourist guides"
    />

    <div id="guide-grid"></div>
  `;

  const footer = document.querySelector("footer");

  if (footer) {
    document.body.insertBefore(section, footer);
  } else {
    document.body.appendChild(section);
  }

  const guideGrid = section.querySelector("#guide-grid");
  const searchInput = section.querySelector("#guide-search");

  function renderGuides(searchTerm = "") {
    guideGrid.innerHTML = "";

    const filteredGuides = guides.filter(function (guide) {
      return (
        guide.name.toLowerCase().includes(searchTerm) ||
        guide.destination.toLowerCase().includes(searchTerm) ||
        guide.languages.toLowerCase().includes(searchTerm) ||
        guide.specialty.toLowerCase().includes(searchTerm)
      );
    });

    if (filteredGuides.length === 0) {
      guideGrid.innerHTML =
        '<p id="guide-empty">No matching guides found.</p>';
      return;
    }

    filteredGuides.forEach(function (guide) {
      const card = document.createElement("article");
      card.className = "guide-card";

      const avatar = document.createElement("div");
      avatar.className = "guide-avatar";
      avatar.textContent = guide.emoji;

      const name = document.createElement("h3");
      name.textContent = guide.name;

      const destination = document.createElement("p");
      destination.textContent = "📍 " + guide.destination;

      const languages = document.createElement("p");
      languages.textContent = "🗣️ " + guide.languages;

      const specialty = document.createElement("p");
      specialty.textContent = "🎯 " + guide.specialty;

      const experience = document.createElement("p");
      experience.textContent = guide.experience;

      const button = document.createElement("button");
      button.className = "guide-contact";
      button.textContent = "Guide Information";

      button.addEventListener("click", function () {
        alert(
          guide.name + "\n" +
          guide.destination + "\n" +
          "Languages: " + guide.languages + "\n\n" +
          "This is a sample profile, not a verified guide. " +
          "Contact details and availability are not connected yet."
        );
      });

      card.append(
        avatar,
        name,
        destination,
        languages,
        specialty,
        experience,
        button
      );

      guideGrid.appendChild(card);
    });
  }

  searchInput.addEventListener("input", function () {
    renderGuides(searchInput.value.trim().toLowerCase());
  });

  renderGuides();

  console.log("ExploreX Tourist Guides Loaded!");

});
