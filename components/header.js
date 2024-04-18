function getHeader(){

const navigationElements=[
    {name:'shop',link:'#',subNav:[{name:'shop1',link:'#'}]},
    {name:'On Sale',link:'#'},
    {name:'New Arrivals',link:'#'},
    {name:'Brands',link:'#'},
]

    document.body.innerHTML=`
    <header>
    <div class="logo">SHOP.CO</div>
    <nav>
      <ul>
      ${navigationElements.map((item)=>`<li><a href="${item.link}" class="${item?.subNav?.length>0?'dropbtn':''}">${item.name}</a></li>`).join('')}
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
  </header>`
}