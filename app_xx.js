const menu = [
   {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price:15.59,
    img:'./images/item-1.jpeg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolore ullam ipsam suscipit!'
   },
   {
    id: 2,
    title: "dinner double",
    category: "dinner",
    price:25.69,
    img:'./images/item-2.jpeg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolore ullam ipsam suscipit!'
   },
   {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price:35.49,
    img:'./images/item-3.jpeg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolore ullam ipsam suscipit!'
   },
   {
    id: 4,
    title: "cheese sandwich",
    category: "breakfast",
    price:45.99,
    img:'./images/my-1.jpg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolore ullam ipsam suscipit!'
   },
   {
    id: 5,
    title: "chocolate ice-cream",
    category: "dessert",
    price:55.49,
    img:'./images/my-2.jpg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolore ullam ipsam suscipit!'
   },
   {
    id: 6,
    title: "cheeseburger",
    category: "lunch",
    price:65.49,
    img:'./images/my-3.jpg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolore ullam ipsam suscipit!'
   },

];

const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];


const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('btn-container');

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) => {
        return `
        <article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>`
      
    });
    console.log('displayMenu', displayMenu);
    displayMenu = displayMenu.join('');
    console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
});



const displayBtn = (btn) => {
    let displayBtn = btn.map( (button) => {
        return `
         <button type="button" class="filter-btn" data-id="all">${button.category1}</button>
        <button type="button" class="filter-btn" data-id="breakfast">
        ${button.category2}
        </button>
        <button type="button" class="filter-btn" data-id="lunch">${button.category3}</button>
        <button type="button" class="filter-btn" data-id="shakes">
        ${button.category4}
        </button>
        <button type="button" class="filter-btn" data-id="dinner">${button.category5}</button>
        `
    });
    console.log('displayBtn', displayBtn);
    displayBtn = displayBtn.join('');
    console.log('displayBtn after join', displayBtn);
    btnContainer.innerHTML = displayBtn;
}

window.addEventListener('DOMContentLoaded', () => {
    displayBtn(btn);
});

