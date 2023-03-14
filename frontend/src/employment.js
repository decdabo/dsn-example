import { Services } from './services/services.js';
import allEndpoints from './services/endpoints.js';
const employmentsWrapper = document.getElementById("employment-list-container");

window.addEventListener('load', async() => {
  const services = new Services();
  try {
    const employmentsData = await services.Get(allEndpoints.EMPLOYMENT)
    const employmentsContainer = document.createElement('ul');
    employmentsContainer.className = "list-unstyled clearfix";
    
    employmentsWrapper.innerHTML = ''
    employmentsData.forEach((work, index) => {
      const jobItem = document.createElement('li');
      jobItem.innerHTML = `
        <div class="ic"><i class="fa fa-briefcase"></i></div>
        <div class="number font-alt">0${index+1}</div>
        <div class="desc">
          <h5 class="text-uppercase color-dark text-bold">${work.work_done}</h5>
          <p class="font-alt color-dark">${work.company}</p>
          <p>${work.description}</p>
          <p class="font-alt color-dark">${work.schedule}</p>
        </div>
      `;
      employmentsContainer.appendChild(jobItem)
    })

    employmentsWrapper.appendChild(employmentsContainer);
  } catch (error) { 
    console.log(error)
  }
})
