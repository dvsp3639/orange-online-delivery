// Menu data - using var instead of const to avoid redeclaration issues
var menuItems = [
    // Recommended items
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
    }
];