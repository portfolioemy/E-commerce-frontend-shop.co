function ProductListCard(container, title, items) {
  container.innerHTML = `<h2>${title}</h2>
      <div class="arrivals-items">
      </div>
      <button class="view-all">View All</button>`
  items.forEach((item) =>
    ProductCard(container.querySelector(".arrivals-items"), item)
  );
}
const items = [
  {
    img: "./assets/images/image 7.png",
    name: "T-SHIRT WITH TAPE DETAILS",
    price: "$120",
  },
  {
    img: "./assets/images/Frame 33.png",
    name: "SKINNY FIT JEANS",
    price: "$240",
    realPrice: "$260",
    reduction: "-20%",
  },
  {
    img: "./assets/images/Frame 34.png",
    name: "CHECKERED SHIRT",
    price: "$120",
  },
  {
    img: "./assets/images/Frame 38.png",
    name: "SLEEVE STRIPED T-SHIRT",
    price: "$120",
  },
];
const topSellingItems = [
  {
    img: "assets/images/image 7.png",
    name: "VERTICAL STRIPED SHIRT",
    price: "$212",
    realPrice: "$260",
    reduction: "-20%",
  },
  {
    img: "assets/images/image 8.png",
    name: "COURAGE GRAPHIC T-SHIRT",
    price: "$240",
    realPrice: "$260",
    reduction: "-20%",
  },
  {
    img: "assets/images/image 9.png",
    name: "LOOSE FIT BERMUDA SHORTS",
    price: "$120",
  },
  {
    img: "assets/images/image 10.png",
    name: "FADED SKINNY JEANS",
    price: "$120",
  },
];