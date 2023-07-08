const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");
const searchResultPopup = document.getElementById("searchResultPopup");
const popupSearchResult = document.getElementById("popupSearchResult");
const suggestionsList = document.getElementById("suggestionsList");
const closePopup = document.querySelector("#searchResultPopup .close");

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

searchInput.addEventListener("input", handleInput);
closePopup.addEventListener("click", closePopupWindow);

function performSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let matchingProducts = [];

  for (let i = 0; i < productList.children.length; i++) {
    const productItem = productList.children[i];
    const productName = productItem.dataset.name.toLowerCase();
   

    if (productName.includes(searchTerm)) {
      productItem.style.display = "none";
      matchingProducts.push(productItem.dataset);
    } else {
      productItem.style.display = "none";
    }
  }

  popupSearchResult.innerHTML = "";

  if (searchTerm === "") {
    popupSearchResult.textContent = "";
  } else if (matchingProducts.length > 0) {
    for (let i = 0; i < matchingProducts.length; i++) {
      const productCard = document.createElement("div");
      productCard.classList.add("card");

      const productImage = document.createElement("img");
      productImage.src = matchingProducts[i].image;
      productImage.alt = matchingProducts[i].name;

      const productName = document.createElement("p");
      productName.textContent = matchingProducts[i].name;
      productName.style.fontSize = '13px';
      productName.style.fontWeight = '600';

      const producttime = document.createElement("p");
      producttime.textContent ="Thời gian : " + matchingProducts[i].time;
      producttime.style.fontSize = '12px';
      producttime.style.color = 'grey';
      const producthotel = document.createElement("p");
      producthotel.textContent ="Khách sạn : " + matchingProducts[i].hotel;
      producthotel.style.fontSize = '12px';
      producthotel.style.color = 'grey';
      const productPrice = document.createElement("p");
      productPrice.textContent = "Giá tour: " + matchingProducts[i].price;
      productPrice.style.color = 'orangered';
      productCard.appendChild(productImage);
      productCard.appendChild(productName);
      productCard.appendChild(producttime);
      productCard.appendChild(producthotel);
      productCard.appendChild(productPrice);
      popupSearchResult.appendChild(productCard);
    }
  } else {
    popupSearchResult.textContent = "Không có sản phẩm phù hợp.";
  }

  searchResultPopup.style.display = "block";
}

function handleInput() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const suggestions = getSuggestions(searchTerm);

  suggestionsList.innerHTML = "";

  if (searchTerm !== "") {
    for (let i = 0; i < suggestions.length; i++) {
      const suggestionItem = document.createElement("li");
      suggestionItem.textContent = suggestions[i];
      suggestionItem.classList.add("suggestion");
      suggestionItem.addEventListener("click", () => {
        searchInput.value = suggestions[i];
        suggestionsList.innerHTML = "";
        performSearch();
      });
      suggestionsList.appendChild(suggestionItem);
    }
    suggestionsList.style.display = "block";
  } else {
    suggestionsList.style.display = "none";
  }
}

function getSuggestions(searchTerm) {
  const suggestions = ["Đà Nẵng - Hội An", "Hà Nội - Bái Đính - Tràng An", "Huế", "Phú Quốc", "Quảng Nam", "Hà Giang", "Đà Lạt", "Sài Gòn - Vũng Tàu"];
  return suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm)
  );
}

function closePopupWindow() {
  searchResultPopup.style.display = "none";
}

