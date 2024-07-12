// slider

const sliderImages = [
    "./images/slider-1.jpg",
    "./images/slider-2.jpg",
    "./images/slider-3.jpg",
    "./images/slider-4.jpg"
];

var slider = document.getElementById('slide');
var numb = 0;
setInterval(() =>
{
    numb = (numb + 1) % sliderImages.length;
    slider.src = sliderImages[numb];
}, 2000);



// card show in card container

var cardContainer = document.getElementById('card-cont')

for (const product of productData) {
    cardContainer.innerHTML += `
    <div class="card">
                <img src="${product.image}" alt="Product Image">
                <div class="card-content">
                    <div class="product-title">${product.title}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-price">${product.price}</div>
                    <div class="product-rating">
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="product-rating-count">${product.rating.count}</div>
                    </div>
                </div>
                <div class="product-add-to-card">Add to Cart</div>
            </div>
    `
}


// Add unique category item in category list
var categoryList = document.getElementById('category-list')
var uniqueCategory = []
let i = 1
for (const x of productData) {
    if (!uniqueCategory.includes(x.category)) {
        categoryList.innerHTML += `<a class="category-item" id="category-item-${i}" href="">${x.category}</a>`
        uniqueCategory.push(x.category)
    }
    i++
}


// Add event listeners to category items
var categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        var selectedCategory = this.textContent;
        filterProductsByCategory(selectedCategory);
    });
});


// Function to filter and display products by category
function filterProductsByCategory(category) {
    cardContainer.innerHTML = ''; // Clear existing cards
    for (const product of productData) {
        if (product.category === category) {
            cardContainer.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="Product Image">
                <div class="card-content">
                    <div class="product-title">${product.title}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-price">${product.price}</div>
                    <div class="product-rating">
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="product-rating-count">${product.rating.count}</div>
                    </div>
                </div>
                <div class="product-add-to-card">Add to Cart</div>
            </div>
            `;
        }
    }
}

