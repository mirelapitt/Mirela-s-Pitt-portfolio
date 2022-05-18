// get menu icon element
const hamburger = document.querySelector('.ham');
const navMenu = document.querySelector('.navmenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// get the bars of the hamburger menu

const portfolio = document.querySelector('.portfolio-link');
const aboutUs = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');

const close = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
};

portfolio.addEventListener('click', () => {
  close();
});

aboutUs.addEventListener('click', () => {
  close();
});

contactLink.addEventListener('click', () => {
  close();
});

// Get the details of the projects cards

const body = document.querySelector('body')
const section = document.createElement('section')
body.append(section);

const open = document.querySelector('.see_project');
open.addEventListener('click', () => {
  const popup = document.createElement('div');
  popup.className = 'pop';
  const main = document.createElement('div');
  main.className = 'main';
  popup.innerHTML = `
        <section id="works">
        <section class="modal_container1">

              <div class="modal-header">
                <h2>Tonic</h2>
                <button class="close-button">&times;</button>
              </div>
              <ul class="first_list">
                <li>CANOPY</li>
                <li>Back End Dev</li>
                <li>2015</li>
              </ul>
  
              <ul class="desk_list">
                <li>CANOPY</li>
                <li>Back End Dev</li>
                <li>2015</li>
              </ul>

            <div class="Pics">
              <img class="img_desk img_modal" src="./images_desk/Snapshoot_Portfolio.jpg" alt="basketball-illustration" />
              <img class="img_mobi" src="./images_mobile/Snapshoot-icon.jpg" alt="man with dark hair" />
            </div>
</br>
           <div class="side_modal_container">
           <div class="modaltext_side_info">
              <div class="content_paragraph modal_paragraph">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
                </p>
              </div>
  
              <div class="desk_paragraph modal_paragraph">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
                </p>
              </div>
            </div>

            
              <div class="tech_list1">
                <ul class="list">
                  <li>
                    <a href="">
                      <img src="./images_mobile/htmltag.jpg" alt="html" />
                    </a>
                  </li>
  
                  <li>
                    <a href="">
                      <img src="./images_mobile/csstag.jpg" alt="css" />
                    </a>
                  </li>
  
                  <li>
                    <a href="">
                      <img src="./images_mobile/jstag.jpg" alt="js" />
                    </a>
                  </li>

                </ul>

                <ul class="list modal_desk_tag">
                <li>
                  <a href="">
                     <img src="./modal_img/github_tag.jpg" alt="github tag" />
                  </a>
                  </li>
                  
                  <li>
                  <a href="">
                     <img src="./modal_img/ruby_tag.jpg" alt="github tag" />
                  </a>
                  </li>

                  <li>
                  <a href="">
                     <img src="./modal_img/bootstraps_tag.jpg" alt="github tag" />
                  </a>
                  </li>
                </ul>


                <button class="see_project modal_seeProject">See live<img class="icon_img" src="./modal_img/Icon.jpg"></button>
                <button class="see_project modal_seeProject">See source<img class="icon_img" src="./modal_img/Vector.jpg"></button>

              </div>
              
              </div>
            </div>
          </div>
          </div>
        </section>`;

  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.close-button');
  close.addEventListener('click', () => {
    body.removeChild(main);
  })
});

