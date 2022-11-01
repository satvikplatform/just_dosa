const data = [
    {
        name:"Masala Dosa",
        id:1,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/masala-sin-picture-id481750586?k=20&m=481750586&s=612x612&w=0&h=AXxjrkuW8W1hZ7tHeAAU-sjonGSERN7_kEO7JwJn6t0=",
        price:75,
        rating:4.0
    },
        {
        name:"Rava Dosa",
        id:2,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/dosa-is-basically-a-south-indian-dish-which-is-crepe-or-thin-crispy-picture-id1333484570?k=20&m=1333484570&s=612x612&w=0&h=jPQRm4gHrVEdkKoOfvJONOoDULtm4D2oRIiPgozCPeA=",
        price:90,
        rating:4.2
    },
        {
        name:"Mixed Veg Dosa",
        id:3,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/uttapam-picture-id1303720260?k=20&m=1303720260&s=612x612&w=0&h=ME3-9vn7cY6XFplq7cIE7AIROONpoF0g0u9XricTewo=",
        price:127,
        rating:4.5
    },  
    {
        name:"Plain Dosa",
        id:4,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/indian-dosa-picture-id465099502?k=20&m=465099502&s=612x612&w=0&h=Q_jE6y8UwAqtd4APylquxli4qQ1ebA-IQLIfauYGnEw=",
        price:42,
        rating:3.8
    },
        {
        name:"Set Dosa",
        id:5,
        quantity:"qty 3",
        image:"https://media.istockphoto.com/photos/kodo-millet-pancakes-pancake-made-with-a-fermented-batter-of-kodo-picture-id1328118627?k=20&m=1328118627&s=612x612&w=0&h=hmSl-wWht3PGfUaKDG0nI9cFiOMPmz_zJ_V21-Iiqms=",
        price:67,
        rating:3.5
    },
        {
        name:"Mixed Carrot Dosa",
        id:6,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/dosa-and-chutney-picture-id480640488?k=20&m=480640488&s=612x612&w=0&h=a38af5pZz7wj6CqEtdqQ9223jCFyYAJDaQnloFt8TCc=",
        price:100,
        rating:4.0
    },  
    {
        name:"Cone Dosa",
        id:7,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/dosa-south-indian-breakfast-in-cone-shape-picture-id510159030?k=20&m=510159030&s=612x612&w=0&h=08UenvjfucNy-9gtGGrOmcYULQhBxJ8SnlTLpWlxTZ4=",
        price:82,
        rating:4.2
    },
        {
        name:"Mustard Flavored Dosa",
        id:8,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/crispy-pancake-made-of-fermented-whole-grain-finger-millet-batter-picture-id1319648667?k=20&m=1319648667&s=612x612&w=0&h=4dat7lbmnnmXWJj0-mYNUAgFwh09LkdjHGRHrfflOXk=",
        price:133,
        rating:4.3
    },  
    {
        name:"Red Chutney Dosa",
        id:9,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/open-masala-dosa-is-a-favorite-south-indian-vegetarian-food-prepared-picture-id1295610717?k=20&m=1295610717&s=612x612&w=0&h=0Y9pV8cB9v9NugsNo36-RAZavCsVQfEH3_apAu7ObS8=",
        price:80,
        rating:4.0
    },
        {
        name:"Special Rava Dosa",
        id:10,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/rava-dosa-picture-id492226300?k=20&m=492226300&s=612x612&w=0&h=-D56fvyNkCytYTQ4w_tAbJMFufkKZnn_8KKx8MlNaIA=",
        price:135,
        rating:3.9
    },  
    {
        name:"Mixed Veg Egg Dosa",
        id:11,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/popular-indian-street-food-dosa-picture-id1356730992?k=20&m=1356730992&s=612x612&w=0&h=9kcxzVeVWANl1HG4CwLqdwON88ru-WKYlaEri1lz6I4=",
        price:143,
        rating:5.0
    },  
    {
        name:"Carrot Tomato Dosa",
        id:12,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/onion-tomato-carrot-uthappam-picture-id489256880?k=20&m=489256880&s=612x612&w=0&h=C9hsZ0HyIZoT8HZrmqNCjEmqR3cB2PXM0Z0hnYhCMKs=",
        price:119,
        rating:4.8
    },  
    {
        name:"Finger Millet Dosa",
        id:13,
        quantity:"qty 2",
        image:"https://media.istockphoto.com/photos/closeup-of-indian-traditional-dish-ragi-roti-made-with-finger-millet-picture-id1324229344?k=20&m=1324229344&s=612x612&w=0&h=-Zr24659YVs1XuI7IhCpM6pS-S0_g23QOcHcrvNwA24=",
        price:167,
        rating:3.2
    },  
    {
        name:"Idli Dosa",
        quantity:"qty 3",
        id:14,
        image:"https://media.istockphoto.com/photos/south-indian-food-uttapam-or-ooththappam-or-uthappa-picture-id666845498?k=20&m=666845498&s=612x612&w=0&h=BJ0A48gKh3LVNMTXkzM2ibzTNGGsoUcup6yNhggOPjI=",
        price:135,
        rating:4.0
    },  
    {
        name:"Egg Tamarind Dosa",
        id:15,
        quantity:"qty 2",
        image:"https://media.istockphoto.com/photos/kodo-millet-pancakes-served-with-egg-roast-pancake-is-made-with-a-picture-id1328118640?k=20&m=1328118640&s=612x612&w=0&h=gyNtt4m-QCNxBi-5Y0mHWslxTlf-3vFhiIT7y0GI5ZM=",
        price:150,
        rating:4.2
    },  
    {
        name:"Cutlet Onion Dosa",
        id:16,
        quantity:"qty 1",
        image:"https://media.istockphoto.com/photos/jini-dosa-picture-id1157427822?k=20&m=1157427822&s=612x612&w=0&h=yagfcko35Wt4fbPVcxFFB9ifGfupoqsKhedFtNs7uKA=",
        price:140,
        rating:4.2
    },  
];

let ratingToHigh = [...data];
ratingToHigh.sort((a,b) => {return a.rating - b.rating});

let ratingToLow = [...data];
ratingToLow.sort((a,b) => {return b.rating - a.rating});

let priceToHigh = [...data];
priceToHigh.sort((a,b) => {return a.price - b.price});

let priceToLow = [...data];
priceToLow.sort((a,b) => {return b.price - a.price});


export  {data, ratingToHigh, ratingToLow, priceToHigh, priceToLow};