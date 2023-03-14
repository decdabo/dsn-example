import { Services } from './services/services.js';
import allEndpoints from './services/endpoints.js';
const portfolioWrapper = document.getElementById('portfolio-wrapper');

window.addEventListener('load' , async() => {
  const services = new Services();
  try {
    const portfolioData = await services.Get(allEndpoints.PORTFOLIO);
    portfolioWrapper.innerHTML = '';

    portfolioData.forEach( data => {
      const child = document.createElement('div');
      child.className = "col-md-4 col-sm-6";
      child.innerHTML = `
        <div class="box-work">
          <div class="work-preview">
            <img src=${data.imageUrl} alt="">
            <div class="hover">
              <div class="link-btns">
                <a href=${data.imageUrl}" title="pic 02" class="galery-item" ><i class="fa fa-search-plus"></i></a>
                <a href=${data.link} target="_blank"><i class="fa fa-link"></i></a>
              </div>
              <a href=${data.link} target="_blank" class="project-title">${data.title}</a>
            </div>
          </div>
        </div>
      `
      portfolioWrapper.appendChild(child);
    })
  } catch (error) {
    console.log(error)
  }
});
