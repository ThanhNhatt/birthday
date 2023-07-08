  // Kiểm tra xem Local Storage có sẵn hay không
  if (localStorage.getItem('cartItems')) {
    // Nếu có, lấy dữ liệu từ Local Storage và thêm vào giỏ hàng
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const listCart = document.querySelector('.listCart');
    
    cartItems.forEach(item => {
        const itemNew = document.createElement('div');
        itemNew.classList.add('cart-item');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.style.width = '150px';
        itemImage.style.height = '88px';
        itemImage.alt = item.name;
        itemNew.appendChild(itemImage);
        
        const itemDetails = document.createElement('div');

      const itemName = document.createElement('h3');
      itemName.textContent = item.name;
      itemName.style.paddingLeft = '10px';
      itemDetails.appendChild(itemName);

      const itemPrice = document.createElement('p');
      itemPrice.textContent = `${item.price}`;
      itemPrice.style.paddingLeft = '10px';
      itemPrice.style.color = 'orangered';
      itemDetails.appendChild(itemPrice);

      itemNew.appendChild(itemDetails);
                  
      const itemremovepay = document.createElement('div');
        const removeButtonNew = document.createElement('button');
        removeButtonNew.classList.add('remove');
        removeButtonNew.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"/></svg>`;
        removeButtonNew.addEventListener('click', () => {
            itemNew.parentNode.removeChild(itemNew);
            updateLocalStorage(); // Cập nhật Local Storage sau khi xóa sản phẩm
        });
        itemremovepay.appendChild(removeButtonNew);
        

        const payButtonNew = document.createElement('button');
        payButtonNew.classList.add('pay');
        payButtonNew.innerHTML = `Pay`;
      
        itemremovepay.appendChild(payButtonNew);

        itemNew.appendChild( itemremovepay);





        listCart.appendChild(itemNew);
    });
}

const itemList = document.querySelectorAll('.list .item');
const openCartButton = document.querySelector('.open-cart');
const cartContainer = document.querySelector('.cart');
const closeButton = document.querySelector('.close-button');

itemList.forEach(item => {
    const addButton = item.querySelector('.add');

    addButton.addEventListener('click', () => {
        const itemNew = item.cloneNode(true);
        const addButtonNew = itemNew.querySelector('.add');
        const removeButtonNew = itemNew.querySelector('.remove');
        const payButtonNew = itemNew.querySelector('.pay');
        const itemImage = itemNew.querySelector('img');
        const itemDetails = itemNew.querySelector('.details');

        addButtonNew.style.display = 'none';
        removeButtonNew.style.display = 'block';
        payButtonNew.style.display = 'block';
        itemImage.classList.remove('external');
        itemImage.classList.add('internal');
        itemImage.style.display = 'block';
        itemDetails.style.display = 'block';

        removeButtonNew.addEventListener('click', () => {
            itemNew.parentNode.removeChild(itemNew);
            updateLocalStorage(); // Cập nhật Local Storage sau khi xóa sản phẩm
        });

        itemNew.classList.add('cart-item');

        document.querySelector('.listCart').appendChild(itemNew);

        updateLocalStorage(); // Cập nhật Local Storage sau khi thêm sản phẩm
    });
});

function updateLocalStorage() {
    const cartItems = [];
    const cartItemElements = document.querySelectorAll('.cart-item');

    cartItemElements.forEach(item => {
        const itemName = item.querySelector('h3').textContent;
        const itemPrice = item.querySelector('p').textContent;
        const itemImage = item.querySelector('img').src;

        cartItems.push({ name: itemName, price: itemPrice, image: itemImage });
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

openCartButton.addEventListener('click', () => {
    cartContainer.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    cartContainer.style.display = 'none';
});