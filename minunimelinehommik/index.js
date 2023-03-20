// const response = fetch('./dummy.json').then(response => response.json()).then(({ ctRoot }) => {
//     const res = ctRoot.filter((person) => person.verified == true)
//     console.log(res)
// })


//

/* (async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json();
    console.log(data)
})(); */

// async function getProductsData() {
//     const response = await fetch('https://dummyjson.com/products');
//     const {products} = await response.json();
//     console.log(products);
    
//     return products;
// }

// getProductsData();

/* https://dummyjson.com/products/categories */

async function getProductsCategories() {
    //syncib andmed leheküljele
    const response = await fetch('https://dummyjson.com/products/categories');
    //ootab, et kõik andmed ära laeksid
    const data = await response.json();
    //sama mis eelmine, lihtsalt url on tehtud "response.json"iks
    console.log(data)
    //console logib data

    return data;
    //lõpetab funktsiooni ning tagastab "data"
}
getProductsCategories();
//käivitab koodi

async function createCategoryButtons() {
    //Tee UI button elemente sama palju kui on kategooriaid
    const categories = await getProductsCategories();   
    
    const categoryList = document.querySelector('.category-list');

    categories.forEach(category => {
        //võtab iga kategooria ja loopib seda
        const button = document.createElement('button');
        //loob elemedi nimega "button"
        button.classList.add('category-button');
        //lisab classi "category-button"
        button.innerText = category;
        //
        categoryList.append(button);
        //sisestab string objektid "buttonist"
    });
}

createCategoryButtons();
//käivitab koodi    

async function createProducts() {
    const products = await getProductsCategories();

    const productTableBodyElement = document.querySelector('.table-body')

    products.forEach((product) => {
        //loopib igat producti
        const tableRow = document.createElement('tr');
        //loob elemendi "tr"

        const content = `
        //loob elemendi ning selle back ticki sisse saab kirjutada otse fronti HTMLi

        <tr>
            <td>${product.id}</td>
            <td>
                <img src="${product.thumbnail}" alt="${product.title}" />
            </td>
            <td>${product.title}</td>
            <td>${product.rating}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.discount}</td>
        </tr>
    `
    //lisab listi productid

        
        tableRow.innerHTML = content;
        //returnib tableRow HTML contentina ning teeb selle võrdeliseks "content"iga
        productTableBodyElement.append(tableRow);
        //sisestab kõik tableRow elemendid stringidena
    })
}
