function getHeader() {
  const navigationElements = [
    { name: 'Shop', link: '#', subNav: [{ name: 'shop1', link: '#' }] },
    { name: 'On Sale', link: '#' },
    { name: 'New Arrivals', link: '#' },
    { name: 'Brands', link: '#' },
  ];

  document.body.innerHTML = `
    <header>
    <div class="logoContainer">
        <div class="burger-menu" onclick="toggleMenu()">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="menu-items">
          ${navigationElements.map((item) => `<a href="${item.link}">${item.name}</a>`).join('')}
        </div>
        <div class="logo">SHOP.CO</div>
    </div>
      <nav class="main-nav">
        <ul>
          ${navigationElements.map((item) => `<li><a href="${item.link}" class="${item?.subNav?.length > 0 ? 'dropbtn' : ''}">${item.name}</a></li>`).join('')}
        </ul>
      </nav>
      <div id="search">
        <i class="fas fa-search search-icon icon"></i>
        <input
          type="text"
          id="input"
          name="searchBox"
          placeholder="Search For Products"
        />
      </div>
      <div class="icon-container">
      
      <div id="searchMobile">
      <div onclick="toggleSearch()">
      <i class="fas fa-search search-icon icon" ></i>
      </div>
      <input
        type="text"
        id="inputMobile"
        name="searchBox"
        placeholder="Search For Products"
      />
    </div>
        <div class="cart">
          <a href="#">
            <i class="fa fa-shopping-cart icon"></i>
          </a>
        </div>
        <div class="account">
          <a href="#">
            <i class="fa-regular fa-circle-user icon"></i>
          </a>
        </div>
      </div>
    </header>`;

  
}
function toggleMenu() {
  document.querySelector('.burger-menu').classList.toggle('active');
  document.querySelector('.menu-items').classList.toggle('active');
}function toggleSearch() {
  document.querySelector('#inputMobile').classList.toggle('active');
  document.querySelector('#searchMobile').classList.toggle('active');
  document.querySelector('.icon-container').classList.toggle('active');
}
