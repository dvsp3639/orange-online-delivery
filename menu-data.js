// Menu data - using var instead of const to avoid redeclaration issues

// Categories configuration
var categories = [
    {
        id: "recommended",
        name: "Recommended",
        icon: "fas fa-star",
        displayOrder: 1
    },
    {
        id: "rice-biryani",
        name: "Rice & Biryani",
        icon: "fas fa-utensil-spoon",
        displayOrder: 2,
        subcategories: [
            { id: "veg", name: "Veg Rice & Biryani" },
            { id: "chicken", name: "Chicken Biryani" }
        ]
    },
    {
        id: "starters",
        name: "Starters",
        icon: "fas fa-drumstick-bite",
        displayOrder: 3,
        subcategories: [
            { id: "chicken", name: "Chicken Starters" }
        ]
    },
    {
        id: "chicken",
        name: "Chicken Specials",
        icon: "fas fa-drumstick-bite",
        displayOrder: 4
    },
    {
        id: "soups",
        name: "Soups",
        icon: "fas fa-bowl-hot",
        displayOrder: 5
    },
    {
        id: "fried-rice-noodles",
        name: "Fried Rice & Noodles",
        icon: "fas fa-utensils",
        displayOrder: 6
    },
    {
        id: "main-course",
        name: "Main Course",
        icon: "fas fa-utensils",
        displayOrder: 7
    },
    {
        id: "tandoori",
        name: "Tandoori",
        icon: "fas fa-fire",
        displayOrder: 8
    },
    {
        id: "breads",
        name: "Breads",
        icon: "fas fa-bread-slice",
        displayOrder: 9
    },
    {
        id: "desserts",
        name: "Desserts & Ice Creams",
        icon: "fas fa-ice-cream",
        displayOrder: 10
    },
    {
        id: "drinks-juices",
        name: "Drinks & Juices",
        icon: "fas fa-glass-whiskey",
        displayOrder: 11
    }
];

// Menu items
var menuItems = [
    // Recommended items (existing + new)
    {
        id: 1,
        name: "Sp. Cashewnut/ Mushroom Biryani",
        price: 450,
        description: "Special Kaju Nut Curry Biryani: A sumptuous fusion of fragrant rice with cashews and mushrooms",
        category: "recommended",
        customizable: true,
        recommended: true,
        isActive: true
    },
    {
        id: 2,
        name: "Chicken Jumbo Biryani",
        price: 770,
        description: "Serves - 4, Aromatic basmati rice cooked with succulent chicken pieces and traditional spices",
        category: "recommended",
        recommended: true,
        isActive: true
    },
    {
        id: 3,
        name: "Rambo Spicy Biryani",
        price: 420,
        description: "Chef's Special Rambo Spicy Biryani: Enjoy two succulent leg pieces with special spices",
        category: "recommended",
        customizable: true,
        recommended: true,
        isActive: true
    },
    {
        id: 4,
        name: "Orange Double Special Chicken Biryani",
        price: 520,
        description: "Our restaurant's special Orange Double Special Biryani includes special marination with orange zest",
        category: "recommended",
        recommended: true,
        isActive: true
    },
    // New recommended items from CSV
    {
        id: 1001,
        name: "Paneer Butter Masala",
        price: 290,
        description: "",
        category: "recommended",
        customizable: true,
        recommended: true,
        isActive: true
    },
    {
        id: 1002,
        name: "Butter Chicken B/l",
        price: 275.7,
        description: "Boneless Butter Chicken",
        category: "recommended",
        customizable: true,
        recommended: true,
        isActive: true
    },
    {
        id: 1003,
        name: "Tandoori Chicken Full",
        price: 503.83,
        description: "Tandoori Chicken (full)",
        category: "recommended",
        recommended: true,
        isActive: true
    },
    {
        id: 1004,
        name: "Chicken Manchurian",
        price: 264.85,
        description: "",
        category: "recommended",
        recommended: true,
        isActive: true
    },
    
    // Veg Rice & Biryani
    {
        id: 5,
        name: "Special Cashewnut Biryani",
        price: 450,
        description: "Special Kaju Nut Curry Biryani: A sumptuous fusion of fragrant rice with cashews",
        category: "rice-biryani",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 6,
        name: "Natukodi Biryani",
        price: 420,
        description: "Traditional village-style biryani with authentic spices and fresh herbs",
        category: "rice-biryani",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 7,
        name: "Special Paneer Biryani",
        price: 360,
        description: "Enjoy our Special Biryani, a mild blend of rice, served with soft paneer cubes and aromatic spices",
        category: "rice-biryani",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 8,
        name: "Special Mushrooms Biryani",
        price: 330,
        description: "Enjoy our Mushroom Biryani, a mild blend of rice, served with fresh mushrooms and herbs",
        category: "rice-biryani",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    
    // Chicken Biryani
    {
        id: 9,
        name: "Special Mutton Biryani",
        price: 550,
        description: "Special Mutton Curry Biryani: A tantalizing dish featuring succulent mutton pieces with aromatic rice",
        category: "rice-biryani",
        subcategory: "chicken",
        isActive: true
    },
    {
        id: 10,
        name: "Chicken Rambo Biryani",
        price: 410,
        description: "Serves-2, 2 Leg pieces with semi wet gravy+1 boiled egg, perfectly spiced and flavorful",
        category: "rice-biryani",
        subcategory: "chicken",
        customizable: true,
        isActive: true
    },
    
    // Chicken Starters
    {
        id: 11,
        name: "Mogalai Chicken",
        price: 319,
        description: "Crispy Chicken: Juicy, tender chicken coated in a perfectly spiced batter with Mogalai flavors",
        category: "starters",
        subcategory: "chicken",
        isActive: true
    },
    {
        id: 12,
        name: "Stick Chicken",
        price: 319,
        description: "Chicken pieces on skewers with special marinade, grilled to perfection",
        category: "starters",
        subcategory: "chicken",
        isActive: true
    },
    {
        id: 13,
        name: "Honey Lemon Chicken",
        price: 319,
        description: "Sweet and tangy chicken with honey lemon glaze, a perfect balance of flavors",
        category: "starters",
        subcategory: "chicken",
        isActive: true
    },
    {
        id: 14,
        name: "Hong Kong Chicken",
        price: 319,
        description: "Chinese-style chicken with authentic Hong Kong flavors, crispy and delicious",
        category: "starters",
        subcategory: "chicken",
        isActive: true
    },
    
    // Chicken Specials
    {
        id: 15,
        name: "Dragon Chicken",
        price: 320,
        description: "Spicy dragon-style chicken with fiery sauces and crisp vegetables",
        category: "chicken",
        isActive: true
    },
    {
        id: 16,
        name: "Crispy Chicken",
        price: 320,
        description: "Juicy, tender chicken coated in a perfectly crispy batter, served with dipping sauce",
        category: "chicken",
        isActive: true
    },
    {
        id: 17,
        name: "Cashew Nut Chicken",
        price: 399,
        description: "Chicken cooked with cashew nuts in a rich gravy, a delightful combination",
        category: "chicken",
        isActive: true
    },
    {
        id: 18,
        name: "Chicken Drumsticks",
        price: 341,
        description: "Juicy chicken drumsticks with special seasoning, grilled to perfection",
        category: "chicken",
        isActive: true
    },
    
    // Soups (from CSV)
    {
        id: 101,
        name: "Veg Sweet Corn Soup",
        price: 113.63,
        description: "",
        category: "soups",
        customizable: true,
        isActive: true
    },
    {
        id: 102,
        name: "Veg Manchow Soup",
        price: 125,
        description: "",
        category: "soups",
        customizable: true,
        isActive: true
    },
    {
        id: 103,
        name: "Chicken Soup",
        price: 124.49,
        description: "",
        category: "soups",
        customizable: true,
        isActive: true
    },
    {
        id: 104,
        name: "Chicken Corn Soup",
        price: 124.49,
        description: "",
        category: "soups",
        customizable: true,
        isActive: true
    },
    
    // Starters Veg (from CSV)
    {
        id: 201,
        name: "Veg Manchurian",
        price: 189.66,
        description: "",
        category: "starters",
        isActive: true
    },
    {
        id: 202,
        name: "Paneer Chilly",
        price: 285,
        description: "",
        category: "starters",
        customizable: true,
        isActive: true
    },
    {
        id: 203,
        name: "Paneer Manchurian",
        price: 285,
        description: "",
        category: "starters",
        customizable: true,
        isActive: true
    },
    {
        id: 204,
        name: "Mushroom Chilly",
        price: 243.98,
        description: "",
        category: "starters",
        customizable: true,
        isActive: true
    },
    
    // Fried Rice & Noodles (from CSV)
    {
        id: 301,
        name: "Veg Fried Rice",
        price: 200.53,
        description: "Veg Fried Rice: A delicious dish made with cooked rice stir-fried with mixed vegetables, such as carrots, peas, and bell peppers, along with soy sauce and other seasonings, offering a flavorful and satisfying meal.",
        category: "fried-rice-noodles",
        isActive: true
    },
    {
        id: 302,
        name: "Special Veg Fried Rice",
        price: 222.26,
        description: "Special Veg Fried Rice: A flavorful dish made with fragrant fried rice mixed with assorted vegetables and special seasonings, offering a delightful and satisfying vegetarian meal.",
        category: "fried-rice-noodles",
        customizable: true,
        isActive: true
    },
    {
        id: 303,
        name: "Chicken Fried Rice",
        price: 285.7,
        description: "",
        category: "fried-rice-noodles",
        isActive: true
    },
    {
        id: 304,
        name: "Special Chicken Fried Rice",
        price: 339.15,
        description: "Restaurant recommended",
        category: "fried-rice-noodles",
        customizable: true,
        isActive: true
    },
    
    // Breads (from CSV)
    {
        id: 401,
        name: "Roti",
        price: 60,
        description: "Roti single without curry",
        category: "breads",
        isActive: true
    },
    {
        id: 402,
        name: "Butter Roti",
        price: 75,
        description: "",
        category: "breads",
        customizable: true,
        isActive: true
    },
    {
        id: 403,
        name: "Plain Naan",
        price: 65,
        description: "",
        category: "breads",
        customizable: true,
        isActive: true
    },
    {
        id: 404,
        name: "Butter Naan",
        price: 75,
        description: "Butter Naan single with out curry",
        category: "breads",
        isActive: true
    },
    
    // Tandoori (from CSV)
    {
        id: 501,
        name: "Tandoori Chicken (full)",
        price: 503.83,
        description: "",
        category: "tandoori",
        customizable: true,
        isActive: true
    },
    {
        id: 502,
        name: "Tandoori Chicken (Half)",
        price: 286.57,
        description: "",
        category: "tandoori",
        customizable: true,
        isActive: true
    },
    {
        id: 503,
        name: "Chicken Tikka",
        price: 297.43,
        description: "",
        category: "tandoori",
        customizable: true,
        isActive: true
    },
    
    // Main Course Veg (from CSV)
    {
        id: 601,
        name: "Tomato Curry",
        price: 167.94,
        description: "",
        category: "main-course",
        customizable: true,
        isActive: true
    },
    {
        id: 602,
        name: "Palak Paneer",
        price: 299,
        description: "",
        category: "main-course",
        customizable: true,
        isActive: true
    },
    {
        id: 603,
        name: "Paneer Butter Masala",
        price: 290,
        description: "",
        category: "main-course",
        customizable: true,
        isActive: true
    },
    {
        id: 604,
        name: "Cashewnut Curry",
        price: 360,
        description: "",
        category: "main-course",
        customizable: true,
        isActive: true
    },
    
    // Main Course Non-Veg (from CSV)
    {
        id: 701,
        name: "Egg Masala Curry",
        price: 168.81,
        description: "",
        category: "main-course",
        customizable: true,
        isActive: true
    },
    {
        id: 702,
        name: "Chicken Curry Bones",
        price: 253.98,
        description: "",
        category: "main-course",
        customizable: true,
        isActive: true
    },
    {
        id: 703,
        name: "Boneless Chicken Curry",
        price: 275.7,
        description: "",
        category: "main-course",
        customizable: true,
        isActive: true
    },
    {
        id: 704,
        name: "Boneless Butter Chicken",
        price: 275.7,
        description: "",
        category: "main-course",
        customizable: true,
        isActive: true
    },
    {
        id: 705,
        name: "Mutton Masala",
        price: 330.89,
        description: "",
        category: "main-course",
        customizable: true,
        isActive: true
    },
    
    // Rice & Biryani Additional (from CSV)
    {
        id: 801,
        name: "Veg Pulav",
        price: 315,
        description: "Veg pulav: A vibrant Indian rice dish cooked with assorted vegetables and aromatic spices, delivering a symphony of flavors.",
        category: "rice-biryani",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 802,
        name: "Plain Biryani Rice",
        price: 200.53,
        description: "",
        category: "rice-biryani",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 803,
        name: "Special Veg Biryani",
        price: 290,
        description: "Veg Biryani: A delightful Indian rice dish, brimming with a colorful assortment of veggies, aromatic spices, and bursting flavors.",
        category: "rice-biryani",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 804,
        name: "Chicken Dum Biryani",
        price: 340,
        description: "Chicken Dum Biryani: Fragrant rice layered with marinated, tender chicken pieces, cooked slowly to perfection, and conveniently packed in a 1000ml box for freshness and flavor.",
        category: "rice-biryani",
        subcategory: "chicken",
        isActive: true
    },
    {
        id: 805,
        name: "Chicken Fry Biryani",
        price: 383.9,
        description: "Chicken Fry Biryani: A tantalizing dish featuring fried chicken pieces served with aromatic biryani rice, creating a flavorful and satisfying meal.",
        category: "rice-biryani",
        subcategory: "chicken",
        isActive: true
    },
    {
        id: 806,
        name: "Special Chicken Biryani",
        price: 360,
        description: "Special Chicken Curry Biryani: A delectable fusion dish combining fragrant biryani rice with succulent chicken curry, creating a flavorful and satisfying meal.",
        category: "rice-biryani",
        subcategory: "chicken",
        customizable: true,
        isActive: true
    },
    {
        id: 807,
        name: "Mutton Dum Biryani",
        price: 434.5,
        description: "Mutton Dum Biryani: A classic Indian dish made with tender mutton pieces marinated in spices, layered with fragrant basmati rice, and slow-cooked to perfection, offering a rich and aromatic culinary experience.",
        category: "rice-biryani",
        subcategory: "chicken",
        customizable: true,
        isActive: true
    },
    
    // Desserts & Ice Creams (from CSV)
    {
        id: 901,
        name: "Butter Scotch Ice Cream",
        price: 100,
        description: "",
        category: "desserts",
        customizable: true,
        isActive: true
    },
    {
        id: 902,
        name: "Vanila Ice Cream",
        price: 80,
        description: "",
        category: "desserts",
        customizable: true,
        isActive: true
    },
    {
        id: 903,
        name: "Chocolate Ice Cream",
        price: 100,
        description: "",
        category: "desserts",
        customizable: true,
        isActive: true
    },
    {
        id: 904,
        name: "Gulab Jamun With Ice Cream",
        price: 70,
        description: "Gulab Jamun with Ice Cream: A heavenly dessert pairing of soft, syrup-soaked gulab jamuns served with creamy, cold ice cream.",
        category: "desserts",
        isActive: true
    },
    
    // Drinks & Juices (from CSV)
    {
        id: 1001,
        name: "Water Bottle 1l Plain",
        price: 28.6,
        description: "mineral water bottle 1l",
        category: "drinks-juices",
        customizable: true,
        isActive: true
    },
    {
        id: 1002,
        name: "Sprite 600 Ml",
        price: 59.32,
        description: "",
        category: "drinks-juices",
        customizable: true,
        isActive: true
    },
    {
        id: 1003,
        name: "Coke 600ml",
        price: 59.32,
        description: "",
        category: "drinks-juices",
        customizable: true,
        isActive: true
    },
    {
        id: 1004,
        name: "Sweet Lassi",
        price: 70.17,
        description: "",
        category: "drinks-juices",
        customizable: true,
        isActive: true
    },
    {
        id: 1005,
        name: "Carrot Milkshake",
        price: 115,
        description: "",
        category: "drinks-juices",
        customizable: true,
        isActive: true
    },
    {
        id: 1006,
        name: "Banana Milkshake",
        price: 80,
        description: "",
        category: "drinks-juices",
        customizable: true,
        isActive: true
    },
    {
        id: 1007,
        name: "Apple Milkshake",
        price: 90,
        description: "",
        category: "drinks-juices",
        customizable: true,
        isActive: true
    }
];