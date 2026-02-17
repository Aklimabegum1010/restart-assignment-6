const loadTrendingProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    // console.log(data)

    displayTrending(data)

}



const showDetails = async (id) => {
    const res= await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()

document.getElementById("fullTitle").innerText = product.title
    
    document.getElementById("fullDescription").innerText = product.description
    document.getElementById("price").innerText = product.price
    document.getElementById("rating").innerText = product.rating.rate
    document.getElementById("addToCart").innerText = "Add to Cart"

    document.getElementById("my_modal_5").showModal()



}





const loadCategories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories")
    const data = await res.json()
    // console.log(data)

    const container = document.getElementById("category-container")

    const allBtn = document.createElement("button")
    allBtn.innerText = "All"
    allBtn.className = "btn btn-outline"
    allBtn.onclick = () => loadAllProducts()
    container.appendChild(allBtn)

    data.forEach(category => {
        const btn = document.createElement("button")
        btn.innerText = category
        btn.className = "btn btn-outline"
        btn.onclick = () => loadCategoryProducts(category)
        container.appendChild(btn)
    })


}


const showHome = () => {
    document.getElementById("banner-section").classList.remove("hidden")
    document.getElementById("trending-section").classList.remove("hidden")
    document.getElementById("features-section").classList.remove("hidden")
    document.getElementById("products-section").classList.add("hidden")
}

const showProducts = () => {
    document.getElementById("banner-section").classList.add("hidden")
    document.getElementById("trending-section").classList.add("hidden")
    document.getElementById("features-section").classList.add("hidden")
    document.getElementById("products-section").classList.remove("hidden")


}


const loadAllProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()


    displayAllProducts(data)

}


const loadCategoryProducts = async (category) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await res.json()
    displayAllProducts(data)
}



const displayAllProducts = (products) => {


    const sorted = products.sort(
        (a, b) => b.rating.rate - a.rating.rate
    )

    const topProducts = sorted.slice(0, 3)




    const container = document.getElementById("products-container")
    container.innerHTML = ""

    products.forEach(product => {

        const div = document.createElement("div")

        div.innerHTML = `
        <div class="card bg-base-100 w-80 shadow-md mx-auto mt-20">
            <figure class="h-48 flex items-center justify-center">
                <img src="${product.image}" class="h-full object-contain"/>
            </figure>
            



<div class = "flex justify-between w-11/12">
<div class="py-5">
      <p class=" rounded-full p-1 bg-sky-200 text-primary font-semibold">${product.category
            }</p>
    </div>
    <div class="flex gap-1 py-5 ">
      <p><i class="fa-solid fa-star text-yellow-400"></i> ${product.rating.rate}</p>
      <p> ${product.rating.count}</p>
    </div>
</div>

            <div class="card-body">
                <h2 class="card-title">
                    ${product.title.slice(0, 30)}
                </h2>

                <p class="font-bold">$ ${product.price}</p>

                <div class="card-actions justify-between">
                    <button class="btn btn-outline" onclick="showDetails(${product.id})"><i class="fa-regular fa-eye"></i> Details</button>
                    <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                </div>
            </div>
        </div>
        `

        container.appendChild(div)


    })
}


const displayTrending = (products) => {
    // console.log(products)

    const sorted = products.sort(
        (a, b) => b.rating.rate - a.rating.rate
    )

    const topProducts = sorted.slice(0, 3)

    const container = document.getElementById("trending-container")

    container.innerHTML = ""

    topProducts.forEach(product => {
        const div = document.createElement("div")

        div.innerHTML = `

  <div class="card bg-base-100 w-96 shadow-sm">
  <figure class="h-48 flex items-center justify-center">
          <img src="${product.image}"
               class="h-full object-contain" />
        </figure>

<div class="flex justify-between w-11/12 ">
    <div class="py-5">
      <p class=" rounded-full p-1 bg-sky-200 text-primary font-semibold">${product.category
            }</p>
    </div>
    <div class="flex gap-1 py-5 ">
      <p><i class="fa-solid fa-star text-yellow-400"></i> ${product.rating.rate}</p>
      <p> ${product.rating.count}</p>
    </div>
  </div>


        
  <div class="card-body">
    <h2 class="card-title">
      ${product.title.slice(0, 40)}
      
    </h2>
    
    <p class="font-bold"><i class="fa-solid fa-dollar-sign"></i> ${product.price}</p>
    
    <div class=" card-actions justify-between">
      <button class="btn btn-md btn-outline" onclick="showDetails(${product.id})">
           <i class="fa-regular fa-eye"></i>   Details
            </button>
      <button class="btn btn-md btn-primary">
             <i class="fa-solid fa-cart-shopping"></i> Add
            </button>
    </div>
  </div>

  
</div>

`;

        container.appendChild(div)


    })

}



loadTrendingProducts()
loadCategories()


