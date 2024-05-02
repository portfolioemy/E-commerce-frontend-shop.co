function starsCard(starsCount){
    const starsList=[];
    for (let i = 0; i < starsCount; i++) {
        starsList.push('<i class="fas fa-star"></i>');

    }
    return `
    <div class="stars">
    ${starsList.join("")}
    </div>`;
}