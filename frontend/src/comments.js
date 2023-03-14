import { Services } from './services/services.js';
import allEndpoints from './services/endpoints.js';
const indicatorsWrapper = document.getElementById('comments-carousel-indicators');
const carouselItemsWrapper = document.getElementById('comments-carousel-items-wrapper');

window.addEventListener('load' , async() => {
  const services = new Services();
  try {
      const commentsData = await services.Get(allEndpoints.COMMENTS);
      indicatorsWrapper.innerHTML = '';
      carouselItemsWrapper.innerHTML = '';

      let newIndicators = "";
      commentsData.forEach((comment, index) => {
        newIndicators = newIndicators + `<li data-target="#carousel-example-generic" data-slide-to=${index} class=${index === 0 && 'active'}></li>`
        const newCarouselItem = document.createElement('div'); 
        newCarouselItem.className = `item ${index === 0 && 'active'}`;
        newCarouselItem.innerHTML = `
          <div class="box-testimonial">
            <img src="assets/theme/images/people/comment_placeholder.jpg" alt="" class="img-profile">
            <h4 class="color-dark text-capitalize no-margin-top line-dash-bottom">${comment.short_comment}</h4>
            <p>${comment.description}</p>
            <p><a href="#"><img src="assets/theme/images/patner/2.png" alt="" class="img-logo-client"></a></p>
            <p class="font-alt no-margin color-dark">${comment.name}</p>
          </div>
        `;
        carouselItemsWrapper.appendChild(newCarouselItem);
      })
      indicatorsWrapper.innerHTML = newIndicators;
  } catch (error) {
    console.log(error);
  }
});