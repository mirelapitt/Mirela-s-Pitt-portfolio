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
      open.addEventListener('click', ()=> {
        const popup = document.createElement('div');
        popup.className = 'pop';
        const main = document.createElement('div');
        main.className = 'main';
        popup.innerHTML = `<section class="background_color" id="works">
        <section class="container1">
          <div class="work_card">
            <div class="Pics">
              <img class="img_desk" src="./images_desk/Snapshoot_Portfolio.jpg" alt="basketball-illustration" />
              <img class="img_mobi" src="./images_mobile/Snapshoot-icon.jpg" alt="man with dark hair" />
            </div>
        
            <div class="desk_side_info">
              <div class="tonic">
                <h2>Tonic</h2>
              </div>
              <br />
        
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
        
              <div class="content_paragraph">
                <p>
                  A daily selection of privately personalized reads; no accounts
                  or sign-ups required.
                </p>
              </div>
        
              <div class="desk_paragraph">
                <p>
                  A daily selection of privately personalized reads; no accounts
                  or sign-ups required.
                </p>
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
              </div>
        
              <button class="see_project">Close</button>
              <div class="active" id="overlay"></div> `;

              main.appendChild(popup);
              body.appendChild(main);  
      });

