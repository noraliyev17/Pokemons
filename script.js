"use strict"



const createElement=(tagName , className ,content)=>{
    const div=document.createElement(tagName);
    div.setAttribute('class', className);
    div.innerHTML = `${content}`;
    return div
}

const $ = (name) => {
    return document.querySelector(name)
}

console.log(pokemons);

pokemons.forEach((e)=>{
    const card=createElement('div', 'card',
     `
    
        <img src="${e.img} " alt="rasm" class="card_img">
        <h2 class="id">${e.id}</h2>
        <div class="card_body">
        <h1 class="card_title">${e.name} </h1>
        <ul class="card_ul">
                <li class="kg"> ${e.height}</li>
                <h4>${e.weight}</h4>
               
            </ul>
        </div>
        
    
    `);

    console.log(card);
    
    $(".cards_poc").appendChild(card);
})

// console.log($('.cards_poc'));