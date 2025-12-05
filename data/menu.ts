export type MenuItem = {
    name: string;
    description?: string;
    price?: string;
    tags?: string[];
    image?: string;
};

export type MenuCategory = {
    title: string;
    note?: string;
    items: MenuItem[];
    isByob?: boolean;
    byobOptions?: {
        category: string;
        items: string[];
    }[];
};

export const menuData: MenuCategory[] = [
    {
        title: "Shares / Sides",
        note: "Upgrade to a smaller version of one of our specialty shares for 2.25",
        items: [
            {
                name: "Four Cheese Mac-n-Cheese",
                description: "Cheddar, Parmesan, Gouda and Smoked Swiss",
                price: "6 for 1 / 12 for Table",
            },
            {
                name: "Garlic Parm Fries",
                description:
                    "Seasoned fries tossed in garlic butter, finished with parmesan cheese",
                price: "4.50 / 9",
                image: "/parm-fries.png",
            },
            {
                name: "White Truffle Fries",
                description:
                    "Seasoned fries tossed in truffle oil, finished with goat cheese and herbs",
                price: "5.75 / 11.50",
            },
            {
                name: "Brussel Sprout Stir-Fry",
                description:
                    "Roasted brussel sprouts with a spicy onion mix finished with teriyaki sauce",
                price: "5 / 10",
            },
            {
                name: "Sweet Potato Tots",
                price: "3.75 / 7.50",
            },
            {
                name: "Seasonal Vegetables",
                description: "as available",
                price: "3.75 / 7.50",
            },
        ],
    },
    {
        title: "Starters",
        items: [
            {
                name: "Beer Battered Cheese Curds",
                description:
                    "Lightly battered and fried, served with House-made Marinara",
                price: "12",
                image: "/placeholder-food.jpg",
            },
            {
                name: "Brickhouse Onions",
                description:
                    "A “brick” of onions fried golden and served with a spicy remoulade",
                price: "half 7 / full 13",
            },
            {
                name: "Bavarian Pretzel",
                description: "Pretzel served with IPA mustard sauce and warm cheese sauce",
                price: "12",
            },
            {
                name: "Bacon Wrapped Jalapeno Poppers",
                description: "Served with a Raspberry Chipotle sauce",
                price: "13",
            },
            {
                name: "Cave Man “Wings”",
                description:
                    "Our twist on wings “Drummies” in our signature wing sauce: Chipotle BBQ, OMG, Garlic Parmesan, Thai Peanut & Jelly, Teriyaki, Buffalo, Dill Pickle (dry rub), Sweet & Sour, Hot Honey",
                price: "12",
            },
            {
                name: "Flight of Bacon",
                description:
                    "Five varieties of bacon, 10 pieces total. House-made bacon, pork belly, pepper bacon, brown sugar candied bacon, and apple wood smoked bacon.",
                price: "15",
            },
            {
                name: "Crab Rangoon Nachos",
                description:
                    "Fried wonton chips, creamy crab rangoon filling, shredded lettuce, shredded cheddar and sweet & sour hot honey",
                price: "14.75",
            },
            {
                name: "Loaded BBQ Pulled Pork Nachos",
                description:
                    "House-made chips, queso cheese, Beer Cheese, BBQ pulled pork, shredded lettuce, Black bean corn salsa, sour cream and Jalapenos",
                price: "13",
            },
            {
                name: "Wild Mushroom Spinach and Artichoke Dip",
                description:
                    "House-made wild mushroom spinach artichoke dip served with freshly made chips",
                price: "11",
            },
            {
                name: "Cap’n Crunch Chicken Sliders",
                description:
                    "Breaded in Cap’n Crunch cereal served on King’s Hawiian slider buns with lettuce, tomato, and choice of sauce: Thai Peanut, Mayo or Chipotle BBQ",
                price: "14",
            },
            {
                name: "Pulled Pork Sliders",
                description:
                    "Two King’s Hawiian slider buns with Chipotle BBQ pulled pork and fried onions",
                price: "12",
            },
        ],
    },
    {
        title: "Not-Burgers",
        items: [
            {
                name: "BLT",
                description: "House-made bacon, tomato, arugula and chipotle mayo",
                price: "11",
            },
            {
                name: "Mediterranean Pesto Chicken",
                description:
                    "Chicken breast served on a Tomato Herb Focaccia bread. Topped with pesto mayo, roasted cherry tomatoes, marinated artichoke hearts, arugula and mozzarella cheese",
                price: "14.50",
            },
            {
                name: "Chipotle Fish or Pulled Pork Tacos",
                description:
                    "Chipotle Marinated fish or Chipotle pulled pork served with shredded lettuce, Black Bean corn relish and southwest sauce.",
                price: "2 for 11 / 3 for 13",
            },
            {
                name: "Classic Grilled Cheese",
                description:
                    "Choice of three cheeses. Add tomatoes 50¢ and bacon 1.00",
                price: "8",
            },
        ],
    },
    {
        title: "Soups & Salads",
        items: [
            {
                name: "Three Cheese and Lager",
                description: "Gouda, cheddar, smoked swiss and house-made bacon",
                price: "6.50",
            },
            {
                name: "Brickhouse Chili",
                description: "Spicy! Finished with onions, sour cream and cheddar cheese",
                price: "7",
            },
            {
                name: "Cheese-Z Chili",
                description:
                    "An employee favorite… The perfect blend of our Chili and Three Cheese Soup topped with bacon and cheddar cheese",
                price: "7",
            },
            {
                name: "Handmade Soup of the Moment",
                description: "Soup of the day",
                price: "6.50",
            },
            {
                name: "House Salad",
                description:
                    "Blended lettuce, Cucumbers, Tomatoes, Croutons, Red Onions, Cheese and Choice of Dressing – Add Chicken for 4",
                price: "12",
            },
            {
                name: "B.L.T Wedge Salad",
                description:
                    "Iceberg Wedges, Bleu Cheese Crumbles, Bacon Bits, Red Onions, and Tomatoes. Served with Bleu Cheese Dressing",
                price: "12",
            },
            {
                name: "Santa Fe Salad",
                description:
                    "Salad mix, avocado, black-bean corn salsa, tomato wedges and avocado poblano Ranch dressing – Add chicken for 4",
                price: "13",
            },
            {
                name: "Golden Berry and Cucumber Salad",
                description:
                    "Mixed greens tossed with Quinoa, Golden Berries, cucumber, candied walnuts and red onions. Topped with smoked Swiss, gouda, balsamic drizzle and lemon poppyseed dressing.",
                price: "15",
            },
        ],
    },
    {
        title: "Craft Burgers",
        note: "All burgers served with beer fries. Substitution: All-natural marinated chicken breast, or Impossible Vegan patty 3.50",
        items: [
            {
                name: "The Classic",
                description:
                    "Two All Beef Patties served with your choice of Cheese, Lettuce, Tomato and Red Onion",
                price: "12.50",
                image: "/placeholder-food.jpg",
            },
            {
                name: "Patty Melt",
                description:
                    "Two all-beef patties served with cheddar, swiss, Jameson Bacon Jam, Secret Sauce and IPA caramelized onions",
                price: "14",
            },
            {
                name: "A Bit of Heat",
                description:
                    "Two All Beef Patties served with Caribbean Red Jack, Jalapeño Poppers, Sriracha Aioli and Lettuce",
                price: "14",
            },
            {
                name: "The BrickHouse",
                description:
                    "Two all-beef patties served with gouda, caramelized onions, steak sauce, lettuce and tomato",
                price: "15.25",
                image: "/placeholder-food.jpg",
            },
            {
                name: "Bacon Cheese",
                description:
                    "Two all-beef patties served with gouda, cheddar, house-made bacon, lettuce and topped with chipotle mayo",
                price: "14",
            },
            {
                name: "Black + Bleu",
                description:
                    "Two blackened all-beef patties served with Bleu Cheese dressing, bacon, lettuce, sauteed mushrooms, caramelized onions and Bleu Cheese",
                price: "15",
            },
            {
                name: "Egg-celent",
                description:
                    "Two all-beef patties and a fried egg served with house-made bacon, sweet onion hash, cheddar, lettuce, sweet and spicy maple sauce",
                price: "15.25",
            },
            {
                name: "Impossible Vegan Burger",
                description:
                    "One all Vegan (plant based) patty served on a Dairy Free Bun with lettuce, tomato and vegan spicy mayo",
                price: "15.75",
            },
            {
                name: "Widow Maker",
                description:
                    "Spicy! Two all-beef patties, Caribbean Red Jack, fresh sliced jalapeños and OMG sauce",
                price: "13.50",
            },
            {
                name: "Cali-Bian",
                description:
                    "Two all-beef patties, house-made bacon served with garlic-thyme aioli, jalapeño-avocado sauce, salted chips, lettuce and tomato",
                price: "14",
            },
            {
                name: "Elk El Jefe Burger",
                description:
                    "Elk patty served with Caribbean Red Pepper Jack cheese, Avocado Poblano Ranch sauce, black bean corn salsa, jalapeño popper, lettuce and avocado",
                price: "16.50",
            },
            {
                name: "Crab Rangoon Burger",
                description:
                    "Two all-beef patties served with creamy crab rangoon filling, fried wonton, sweet & sour hot honey, and lettuce",
                price: "16",
            },
            {
                name: "Blueberry Bison Burger",
                description:
                    "Bison patty served with house-made bacon, Arugula, Gouda Cheese and blueberry compote",
                price: "16.50",
            },
            {
                name: "The Mac-n-Cheezy",
                description:
                    "One all-beef patty served with BBQ, house-made bacon, pan-fried cheddar Mac-n-Cheese topped with lettuce and tomato",
                price: "14",
            },
        ],
    },
    {
        title: "Build Your Own Burger",
        isByob: true,
        items: [
            {
                name: "B.Y.O.B",
                description:
                    "Build Your Own Burger! Choose one cheese and up to six ingredients",
                price: "16.50",
            },
        ],
        byobOptions: [
            {
                category: "Cheese",
                items: [
                    "Cheddar",
                    "Provolone",
                    "Smoked Swiss",
                    "Caribbean Red Jack",
                    "Gouda",
                    "Cheese Curds",
                    "White Cheese Sauce",
                    "Goat Cheese",
                    "Mozzarella",
                    "Blue Cheese",
                    "Jalapeño Poppers",
                    "Beer Cheese",
                ],
            },
            {
                category: "Meats",
                items: [
                    "Burger of the month",
                    "House-Made Bacon",
                    "Egg",
                    "Pork Belly",
                    "Pepper Bacon",
                    "Brown Sugar Candied Bacon",
                    "Apple Wood Smoked Bacon",
                    "Jameson Bacon Jam",
                ],
            },
            {
                category: "Garden",
                items: [
                    "Lettuce",
                    "Tomato",
                    "Onions",
                    "Mushrooms",
                    "Caramelized Onions",
                    "Avocado",
                    "Fried Crispy Onions",
                    "Arugula",
                    "Fresh Sliced Jalapeños",
                    "Salted Chips",
                ],
            },
            {
                category: "Sauces",
                items: [
                    "A-1",
                    "Teriyaki",
                    "IPA Mustard",
                    "Chipotle BBQ",
                    "Marinara",
                    "Remoulade",
                    "Sriracha Aioli",
                    "Chipotle Mayo",
                    "Jalapeño-Avocado Sauce",
                    "OMG Sauce",
                    "Thai Peanut Sauce",
                    "Garlic-Thyme Aioli",
                    "Garlic Parmesan",
                    "Avocado Poblano Ranch",
                    "Sweet & Sour",
                    "Hot Honey",
                ],
            },
        ],
    },
    {
        title: "Sweets",
        items: [
            {
                name: "Brown Butter Cake",
                description:
                    "Warm Brown Butter Cake topped with fire roasted apples, Vanilla Bean ice cream and Carmel Sauce",
                price: "8",
            },
            {
                name: "Classic Shakes & Malts",
                description:
                    "Chocolate, Vanilla, Strawberry, Salted Caramel or Maple Bacon",
                price: "7",
            },
        ],
    },
];

export const disclaimers = [
    "WE PROUDLY SUPPORT OUR LOCAL VENDORS: OTTO’S MEATS, LAACKS CHEESE, QUAKER BAKERY, AND ALL THE FRIENDLY BREWERS OUT THERE",
    "*All buns can be substituted for a fresh baked gluten free bun",
    "*In compliance with food code 3-603.11: Wisconsin Food and Safety Agencies, advise that eating raw or undercooked meat, poultry, seafood or eggs poses a health risk to everyone",
    "Printed menu prices in restaurant take precedence over any online pricing or offers.",
];
