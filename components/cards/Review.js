const reviewItems = [
    {
        stars: 5,
        reviewer: "Sarah M.",
        reviewText:
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
        stars: 2,
        reviewer: "James L.",
        reviewText:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
        stars: 3,
        reviewer: "Mooen",
        reviewText:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
        stars: 4,
        reviewer: "Alex K.",
        reviewText:
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
]
function reviewCard(container){

    const reviewList=reviewItems.map( (review) =>
    `<div class="review-container">
        ${starsCard(review.stars)}
      <div class="reviewer">
        <h4>${review.reviewer}</h4>
        <div class="checkmark"><i class="fa-solid fa-check"></i></div>
      </div>
      <p>${review.reviewText}</p>
    </div>
  </div>
`) 
container.innerHTML=reviewList.join("");
    
}