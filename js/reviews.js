/**
 * Created by odin on 06.10.15.
 */
(function () {
    var starsClassName = {
        '1': 'review-rating-one',
        '2': 'review-rating-two',
        '3': 'review-rating-three',
        '4': 'review-rating-four',
        '5': 'review-rating-five',
    };

    document.querySelector('.reviews-filter').classList.add('invisible');

    var oTemplate = document.getElementById('review-template');
    var oReviewsContainer = document.querySelector('.reviews-list');
    var reviewFragment = document.createDocumentFragment();

    reviews.forEach(function (review, i) {
        var newReview = oTemplate.content.children[0].cloneNode(true);
        newReview.querySelector('img').src = review.author.picture;
        newReview.querySelector('img').alt = review.author.name;
        newReview.querySelector('img').title = review.author.name;
        //newReview.querySelector('.review-rating').textContent=review.rating;
        newReview.querySelector('.review-rating').classList.add(starsClassName[review['rating']]);
        newReview.querySelector('.review-text').textContent = review['description'];

        reviewFragment.appendChild(newReview);
      if (!review.author.picture) {
      } else {
        var reviewBackground = new Image();
        reviewBackground.src = review.author.picture;

        reviewBackground.onload = function () {
          newReview.style.backgroundImage = review.author.picture;
          newReview.style.backgroundSize = '124px 124px';
          var sp1 = reviewBackground;
          var sp2 = oTemplate.content.children[0].querySelector('img');
          var parentDiv= sp2.parentNode;
          parentDiv.replaceChild(sp1, sp2);
        }

        reviewBackground.onerror = function (evt) {
          newReview.classList.add('review-load-failure');
        }
      }


    });
    oReviewsContainer.appendChild(reviewFragment);
    document.querySelector('.reviews-filter').classList.remove('invisible');

})()


