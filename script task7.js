// Task-7



/*Task-1 Use this API:
https://fakestoreapi.com/products
Requirements:
Fetch all products.
Convert response using .json().
Display:
Product title
Price
Category
Use map() to create a new array containing only:
title
price
Use filter() to find products with price greater than $100.
Use find() to find the first product in the "electronics" category.
Use reduce() to calculate the total price.
Use sort() to arrange products from highest price to lowest.
Handle API errors using .catch().
Display a completion message using .finally(). */

// let urlAPI = "https://fakestoreapi.com/products";

// fetch(urlAPI)
// .then((data) =>{
//     if (!data.ok){
//         throw new Error(`HTTP Error!!! Status : ${data.status}`);
//     }
//     return data.json();
// })
// .then((products)=>{
//     // Display: Product title, Price, Category
//     console.log("All Products :");
//     products.forEach((product)=>{
//         console.log(`Title : ${product.title} | Price : ${product.price} | Category : ${product.category}`);
//     });
// // Use map() to create a new array containing only:
// let latestData = products.map((product)=>({
//     title : product.title,
//     price : product.price,
// }));
// console.log("map() function : ", latestData);
// // Use filter() to find products with price greater than $100.
//  let priceGreater = products.filter((product)=>product.price > 100);
//  console.log("Products Over $100 :" , priceGreater);
// // Use find() to find the first product in the "electronics" category.
// let firstEle = products.find((product)=>product.category === "electronics");
// console.log("First Electronic Product :", firstEle);
// // Use reduce() to calculate the total price.
// let totalPrice = products.reduce((acc,product)=> acc + product.price,0);
// console.log("Total Price :" + "$",totalPrice)

// // Use sort() to arrange products from highest price to lowest.
// let sortedPriceDes = [...products].sort((a,b)=> b.price-a.price);
// console.log("Products from highest to lowest :",sortedPriceDes);
// })
// .catch((error)=>{
//     console.log("Error Fetching :",error.message);
// })
// .finally(()=> {
//     console.log("Successfully Completed");
// });


/*  Task 2 — Product Category Dashboard
Use:
https://fakestoreapi.com/products
Create a console-based dashboard.
Expected output:
===== PRODUCT DASHBOARD =====

Total Products: 20

Electronics: 6
Jewelery: 4
Men's Clothing: 6
Women's Clothing: 4

Highest Price: $999.99
Lowest Price: $5.99
Average Price: $XXX
Students must use:
fetch()
map()
filter()
reduce()
sort()
Functions
Template literals */

// let apiUrl = "https://fakestoreapi.com/products";
// // Function to calculate category counts using filter()
// function getCount (products,categoryName){
//     return products.filter((product)=> product.category.toLowerCase()==categoryName.toLowerCase()).length;
// }
// // Function to calculate the average price using map() and reduce()
// function calculateAvgPrice(products) {
//   let prices = products.map((product)=>product.price);
//   let sum = prices.reduce((acc, price)=>acc+price, 0);
//   return (sum / prices.length);
// }
// // Function to get sorted prices (lowest to highest) using map() and sort()
// function getSortPrices(products) {
//   return products
//     .map((product)=>product.price)
//     .sort((a,b)=>a-b);
// }
// // Using function to render the formatted dashboard using template literals :-
// function dashboard(products){
//     let sortPri = getSortPrices(products);
//     let lowPrice = sortPri[0];
//     let highPrice = sortPri[sortPri.length - 1];
//     let avgPrice = calculateAvgPrice(products);
//     let electronicsCount = getCount(products, "electronics");
//     let jeweleryCount = getCount(products, "jewelery");
//     let mensCount = getCount(products,"men's clothing");
//     let womenCount = getCount(products,"women's clothing");
//     console.log(`====  PRODUCT DASHBOARD  ====
//      Total Products : ${products.length}   
//      Electronics : ${electronicsCount}
//      Jewelery : ${jeweleryCount}
//      Men's Clothing : ${mensCount}
//      Women's Clothing : ${womenCount}
//      Highest Price : $${highPrice}
//      Lowest Price : $${lowPrice}
//      Average Price : $${avgPrice}
//         `);
// }

// fetch(apiUrl)
// .then((data) =>{
//     if (!data.ok){
//         throw new Error(`HTTP Error!!! Status : ${data.status}`);
//     }
//     return data.json();
// })
// .then((products)=>{
//     dashboard(products);
// })
// .catch((error)=>{
//     console.log(`Error Dashboard : ${error.message}`);
// });


/*  Task 3 — User & Post API
Use these APIs:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
Requirements:
Fetch users.
Display all user names.
Display user name + email.
Find the user with ID 5.
Filter users from a particular city.
Fetch posts.
Display posts written by user ID 1.
Count how many posts user ID 1 has created.
Find the first post with more than 50 characters in the title.  */

// let usersUrl = "https://jsonplaceholder.typicode.com/users";
// let postsUrl = "https://jsonplaceholder.typicode.com/posts";
// // Fetch Users and process requirements
// fetch(usersUrl).then((data)=>{
//     if(!data.ok){
//         throw new Error(`Users HTTP Error!!! Status : ${data.status}`);
//     }
//     return data.json();
// })
// .then((users)=>{
//     console.log("   Users API   :");
//     // Display all user names
//     console.log(" All Users Names :    ");
//     users.forEach((user) => console.log(user.name));
//     // Display user name + email
//     console.log("User Name | Email :");
//     users.forEach((user)=> console.log(`${user.name} : ${user.email}`));
//     // Find the user with ID 5
//     console.log("Find the ID 5 :");
//     let userWith5 = users.find((user)=> user.id === 5);
//     console.log("User ID 5 :",userWith5);
//     // Filter users from a particular city
//     let filCity = "Wisokyburgh";
//     let userCity = users.filter((user)=> user.address.city === filCity);
//     console.log(`Users In ${filCity}`,userCity);   
// })
// .catch((error) => console.log("Error users :", error.message));
// // Now, fetch Posts and process requirements
// fetch(postsUrl)
// .then((data)=>{
//     if(!data.ok){
//         throw new Error(`Posts HTTP error !!!  Status : ${data.status}`);
//     }
//     return data.json();
// })
// .then((posts)=>{
//     console.log("POSTS API");
//     // Display posts written by user ID 1
//     let postCounUser1 = posts.filter((post)=>post.userId === 1);
//     console.log("Posts By UserId 1 :",postCounUser1);
//     // Count how many posts user ID 1 has created
//     let postCountUserid1 = postCounUser1.length;
//     console.log("Total Posts Created By UserID 1 :",postCountUserid1);
//     // Find the first post with more than 50 characters in the title
//     let firstPost = posts.find((post)=>post.title.length>50);
//     console.log("First Post with title greaterthan 50 characters",firstPost);
// })
// .catch((error) => console.log("Error Posts :",error.message));


/*  Task 4 — API + Search
Use:
https://fakestoreapi.com/products
Ask the user:
Enter product category:
Example:
electronics
Then display only products belonging to that category.
Also ask:
Enter maximum price:
Example:
500
Display products matching both conditions:
Category = electronics
Price <= 500
Concepts: prompt(), fetch(), filter(), conditions, functions.  */

// let apiUrl = "https://fakestoreapi.com/products";
// // Function to get user inputs using prompt()
// function getUser(){
//     let category = prompt("Enter Product Category : (e.g:- electronics, jewelery, men's clothing, women's clothing) ");
//     let maxPrice = prompt("Enter Maximum Price: (e.g:- 500)");
//     return {
//         category : category ? category.trim().toLocaleLowerCase() : "",
//         maxPrice : maxPrice !== null && maxPrice !== ""? parseFloat(maxPrice) : NaN,
//     };
// }
// // Function to filter by category only
// function filterCat(products,category){
//     return products.filter(
//         (product)=> product.category.toLowerCase() === category
//     );
// }
// // Function to filter by both category AND maximum price
// function filterCategoryAndPrice(products,category,maxPrice){
//     return products.filter(
//         (product) =>
//             product.category.toLowerCase() === category && product.price <= maxPrice
//     );
// }
// // Function to display matching products in the console
// function displayproducts(title,list){
//     console.log(`\n=== ${title} (${list.length}found) ===`);
//     if (list.length === 0){
//         console.log("No matching products found");
//         return;
//     }
//     list.forEach((p)=>{
//         console.log(`- [${p.category}] ${p.title} | $${p.price}`);
//     });
// }
// // Main controller function to fetch data and run the search
// function productSearch(){
//     let {category,maxPrice} = getUser();
//     if(!category || isNaN(maxPrice)){
//         console.log("invalid input!!! Please Provide both category & Number price Limit :");
//         return;
//     }
//     fetch(apiUrl)
//     .then((res)=>{
//         if(!res.ok){
//             throw new Error(`HTTP Error!!! Status : ${res.status}`);
//         }
//         return res.json();
//     })
//     .then((products)=>{
//         //chech category match only
//         let categoryMatches = filterCat(products,category);
//         displayproducts(`Products in "${category}"`, categoryMatches);
// // category match AND Price <= maxPrice
//         let comMatches = filterCategoryAndPrice(products,category,maxPrice);
//         displayproducts(
//             `Products in "${category}" under $${maxPrice}`,
//             comMatches
//         );
//     })
//     .catch((error)=>{
//         console.error("Error fetching products:",error.message);
//     });
// }
// productSearch();
  

/*  Task 5 — API Shopping Cart
Use:
https://fakestoreapi.com/products
Fetch the products and create a shopping cart.
The student should:
Display available products.
Select products using their IDs.
Add selected products to an array.
Calculate cart total using reduce().
Apply discount:
Above $100 → 10%
Above $200 → 20%
Display final amount.
Example:
===== CART =====

Product 1: Laptop
Price: $999

Product 2: Mouse
Price: $50

Total: $1049
Discount: 20%
Final Amount: $839.20  */

// let apiUrl = "https://fakestoreapi.com/products";
// // Display available products
// function displayAvProducts(products){
//     console.log("Available Products :");
//     products.forEach((product)=>{
//         console.log(`[ID : ${product.id}] ${product.title} - $${product.price}`);
//     });
// }
// // Add selected products to cart by IDs
// function addCart(products, selectedIds){
//     let cart = [];
//     selectedIds.forEach((id)=>{
//         let item = products.find((product)=> product.id === id);
//         if(item){
//             cart.push(item);
//         }else{
//             console.warn(`Product With ID ${id} not found`);
//         }
//     });

//     return cart;
// }
//     // now calculate discount percentage based on cart total
//     function calDiscRate(total){
//         if(total > 200) return 0.20;
//         if(total > 100) return 0.10;
//         return 0;
//     }

//     // now, render Cart receipt and calculations
//     function renderReceipt(cart){
//         console.log("CART");
//         if (cart.length === 0){
//             console.log("Your cart is empty");
//             return;
//         }
//         // Display each item in cart
//         cart.forEach((item,index)=>{
//         console.log(`\nProduct ${index + 1}: ${item.title}\n Price : $${item.price}`);
//         })
//         // calculate total using reduce()
//         let total = cart.reduce((acc,item)=> acc + item.price,0);
//         // Discount rules :-
//         let discountRate = calDiscRate(total);
//         let disountAmount = total * discountRate;
//         let finalAmount = total - disountAmount;

//         console.log(`Total : $${total}`);
//         console.log(`Discount : ${(discountRate * 100)}%`);
//         console.log(`Final Amount : $${finalAmount}`);
//     }
// fetch(apiUrl)
// .then((data) => {
//     if (!data.ok){
//         throw new Error(`HTTP error!!! Status : ${data.status}`);
//      }
//      return data.json()
// })
//     .then((products) => {
//         // Display catalog :-
//         displayAvProducts(products);
//         // Select product IDs to add to the cart
//         let selectIds = [2,4];
//         let cart = addCart(products,selectIds);
//         // calculate and display cart summary :-
//         renderReceipt(cart);
//     })
//     .catch((error)=>{
//         console.log("Cart Error",error.message);
//     });


/*  Task 6 — FakeStore Product Report
https://fakestoreapi.com/products
Create a complete product report.
Students must implement:
1. Fetch API
fetch(apiLink)
2. Convert response
response.json()
3. Display all products
Use:
forEach()
4. Create product names array
Use:
map()
5. Filter expensive products
price > 100
Use:
filter()
6. Find electronics product
Use:
find()
7. Calculate total price
Use:
reduce()
8. Check products
Use:
some()
every()
9. Sort
Highest price → lowest price.
10. Error handling
Use:
.catch()
.finally()
Expected final output
========== PRODUCT REPORT ==========

Total Products: 20

Product Names:
- Fjallraven Backpack
- Mens Casual Premium Slim Fit T-Shirts
- Mens Cotton Jacket
...

Products Above $100:
...

Electronics Product:
...

Total Product Value:
$XXXX

Any Product Above $500:
true

All Products Above $1:
true

Highest → Lowest:
...  */

// let apiUrl = "https://fakestoreapi.com/products";
// fetch(apiUrl)
//   .then((data)=>{
//     if (!data.ok){
//       throw new Error(`HTTP error!!! Status: ${data.status}`);
//     }
//     return data.json();
//   })
//   .then((products) => {
//     console.log("========== PRODUCT REPORT ==========");

//     // Display all products using forEach()
//     console.log(`Total Products: ${products.length}`);
//     console.log("All Products (forEach)");
//     products.forEach((product) => {
//       console.log(`-${product.title} ($${product.price})`);
//     });

//     // Create product names array using map()
//     let productNames = products.map((product) => product.title);
//     console.log("Product Names:");
//     productNames.forEach((name) => console.log(`- ${name}`));

//     //  Filter expensive products (price > 100) using filter()
//     const expProducts = products.filter((product) => product.price > 100);
//     console.log("Products Above $100:");
//     expProducts.forEach((item) => {
//       console.log(`- ${item.title} ($${item.price})`);
//     });

//     //  Find electronics product using find()
//     let eleProd = products.find(
//       (product) => product.category.toLowerCase() === "electronics"
//     );
//     console.log("Electronics Product :");
//     console.log(`- ${eleProd.title} ($${eleProd.price})`);

//     // Calculate total price using reduce()
//     let totalProductValue = products.reduce(
//       (acc, product) => acc + product.price,
//       0
//     );
//     console.log(`Total Product Value:$${totalProductValue}`);

//     //  Check products using some() and every()
//     let productAbv500 = products.some((product) => product.price>500);
//     console.log(`Any Product Above $500:${productAbv500}`);

//     const allAbove1 = products.every((product) => product.price > 1);
//     console.log(`All Products Above $1:${allAbove1}`);

//     // Sort highest price -> lowest price ([...products] prevents mutating original array)
//     let sortByPrice = [...products].sort((a, b) => b.price-a.price);
//     console.log("Highest → Lowest:");
//     sortByPrice.forEach((item) => {
//       console.log(`- $${item.price} | ${item.title}`);
//     });
//   })
//   //  Error handling using .catch() and .finally()
//   .catch((error) => {
//     console.error("Report Error:", error.message);
//   })
//   .finally(() => {
//     console.log("END OF REPORT");
//   });