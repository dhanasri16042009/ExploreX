
window.exploreXDestinations = [
  {
    id: 1,
    name: "Switzerland",
    country: "Europe",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    description: "Explore beautiful mountains, lakes and scenic villages.",
    bestTime: "June - September",
    category: "Nature"
  },
  {
    id: 2,
    name: "Japan",
    country: "Asia",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    description: "Discover Japanese culture, technology and traditions.",
    bestTime: "March - May",
    category: "Culture"
  },
  {
    id: 3,
    name: "Italy",
    country: "Europe",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    description: "Experience historic cities, art and delicious food.",
    bestTime: "April - June",
    category: "History"
  },
  {
    id: 4,
    name: "Maldives",
    country: "Asia",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    description: "Enjoy tropical islands and beautiful beaches.",
    bestTime: "November - April",
    category: "Beach"
  },
  {
    id: 5,
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "Visit famous landmarks, museums and cafés.",
    bestTime: "April - June",
    category: "City"
  },
  {
    id: 6,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Explore tropical nature, temples and beaches.",
    bestTime: "April - October",
    category: "Nature"
  },
  {
    id: 7,
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    description: "Discover modern architecture and desert adventures.",
    bestTime: "November - March",
    category: "City"
  },
  {
    id: 8,
    name: "New York",
    country: "USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    description: "Explore famous city landmarks and entertainment.",
    bestTime: "April - June",
    category: "City"
  },
  {
    id: 9,
    name: "Kerala",
    country: "India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    description: "Experience backwaters, green landscapes and local food.",
    bestTime: "October - March",
    category: "Nature"
  },
  {
    id: 10,
    name: "Rajasthan",
    country: "India",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    description: "Discover forts, palaces and colourful traditions.",
    bestTime: "October - March",
    category: "Culture"
  }
];

window.getExploreXDestination = function (id) {
  return window.exploreXDestinations.find(
    destination => destination.id === Number(id)
  );
};
