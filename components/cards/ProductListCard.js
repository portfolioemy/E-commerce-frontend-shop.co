

function ProductListCard(container,title,items){
      container.innerHTML=`<h2>${title}</h2>
      <div class="arrivals-items">
      </div>
      <button class="view-all">View All</button>`
      items.forEach((item) =>
        ProductCard(container.querySelector(".arrivals-items"), item)
      );
}