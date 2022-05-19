const projects = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featuredImage: './modal_img/modal_nature.jpg',
    technologies: ['html', 'Ruby and rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    id: 2,
    name: 'Multi-Post Stores',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featuredImage: './images_desk/Snapshoot_Portfolio2.jpg',
    technologies: ['html', 'Ruby and rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    id: 3,
    name: 'Facebook 360',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featuredImage: './images_desk/Snapshoot_Portfolio3.jpg',
    technologies: ['html', 'Ruby and rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    id: 4,
    name: 'Uber Navigator',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featuredImage: './images_desk/Snapshoot_Portfolio4.jpg',
    technologies: ['html', 'css', 'javascript', 'Ruby and rails'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
];

// Tonic Modal Details
const openTonicModal = document.querySelector('#open-tonic-modal');
const tonicModalContainer = document.querySelector('.tonic-modal-container');
const closeTonicModal = document.querySelector('#tonic-modal-close');

openTonicModal.addEventListener('click', (e) => {
  const tonic = projects.find((project) => project.id === parseInt(e.currentTarget.dataset.id, 10));
  const {
    name: projectName,
    description: projectDescription,
    featuredImage: projectFeaturedImage,
    technologies: projectTechnologies,
    stacks: projectStacks,
  } = tonic;
  const [canopy, backend, year] = projectStacks;
  const [html, css, js, ruby] = projectTechnologies;
  document.querySelector('.tonic-title').textContent = projectName;
  document.querySelector('.tonic-stack1').textContent = canopy.toUpperCase();
  document.querySelector('.tonic-stack2').textContent = backend;
  document.querySelector('.tonic-stack3').textContent = year;
  document.querySelector('.tonic-description').textContent = projectDescription;
  document.querySelector('.tonic-image').src = projectFeaturedImage;
  document.querySelector('.tonic-html').textContent = html;
  document.querySelector('.tonic-css').textContent = css;
  document.querySelector('.tonic-javascript').textContent = js;
  document.querySelector('.tonic-ruby').textContent = ruby;

  tonicModalContainer.classList.add('show');
});

closeTonicModal.addEventListener('click', () => {
  tonicModalContainer.classList.remove('show');
});

// Multipost-Store Modal Details
const openMultipostModal = document.querySelector('#open-multipost-modal');
const multipostModalContainer = document.querySelector('.multipost-modal-container');
const closeMultipostModal = document.querySelector('#multipost-modal-close');

openMultipostModal.addEventListener('click', (e) => {
  const multi = projects.find((project) => project.id === parseInt(e.currentTarget.dataset.id, 10));
  const {
    name: projectName,
    description: projectDescription,
    featuredImage: projectFeaturedImage,
    technologies: projectTechnologies,
    stacks: projectStacks,
  } = multi;
  const [canopy, backend, year] = projectStacks;
  const [html, css, js, ruby] = projectTechnologies;
  document.querySelector('.multipost-title').textContent = projectName;
  document.querySelector('.multipost-stack1').textContent = canopy.toUpperCase();
  document.querySelector('.multipost-stack2').textContent = backend;
  document.querySelector('.multipost-stack3').textContent = year;
  document.querySelector('.multipost-description').textContent = projectDescription;
  document.querySelector('.multipost-image').src = projectFeaturedImage;
  document.querySelector('.multipost-html').textContent = html;
  document.querySelector('.multipost-css').textContent = css;
  document.querySelector('.multipost-javascript').textContent = js;
  document.querySelector('.multipost-ruby').textContent = ruby;

  multipostModalContainer.classList.add('show');
});

closeMultipostModal.addEventListener('click', () => {
  multipostModalContainer.classList.remove('show');
});

// Facebook Modal Details
const openFacebookModal = document.querySelector('#open-facebook-modal');
const facebookModalContainer = document.querySelector('.facebook-modal-container');
const closeFacebookModal = document.querySelector('#facebook-modal-close');

openFacebookModal.addEventListener('click', (e) => {
  const fbook = projects.find((project) => project.id === parseInt(e.currentTarget.dataset.id, 10));
  const {
    name: projectName,
    description: projectDescription,
    featuredImage: projectFeaturedImage,
    technologies: projectTechnologies,
    stacks: projectStacks,
  } = fbook;
  const [canopy, backend, year] = projectStacks;
  const [html, css, js, ruby] = projectTechnologies;
  document.querySelector('.facebook-title').textContent = projectName;
  document.querySelector('.facebook-stack1').textContent = canopy.toUpperCase();
  document.querySelector('.facebook-stack2').textContent = backend;
  document.querySelector('.facebook-stack3').textContent = year;
  document.querySelector('.facebook-description').textContent = projectDescription;
  document.querySelector('.facebook-image').src = projectFeaturedImage;
  document.querySelector('.facebook-html').textContent = html;
  document.querySelector('.facebook-css').textContent = css;
  document.querySelector('.facebook-javascript').textContent = js;
  document.querySelector('.facebook-ruby').textContent = ruby;

  facebookModalContainer.classList.add('show');
});

closeFacebookModal.addEventListener('click', () => {
  facebookModalContainer.classList.remove('show');
});

// Uber Modal Details
const openUberModal = document.querySelector('#open-uber-modal');
const uberModalContainer = document.querySelector('.uber-modal-container');
const closeUberModal = document.querySelector('#uber-modal-close');

openUberModal.addEventListener('click', (e) => {
  const uber = projects.find((project) => project.id === parseInt(e.currentTarget.dataset.id, 10));
  const {
    name: projectName,
    description: projectDescription,
    featuredImage: projectFeaturedImage,
    technologies: projectTechnologies,
    stacks: projectStacks,
  } = uber;
  const [canopy, backend, year] = projectStacks;
  const [html, css, js, ruby] = projectTechnologies;
  document.querySelector('.uber-title').textContent = projectName;
  document.querySelector('.uber-stack1').textContent = canopy.toUpperCase();
  document.querySelector('.uber-stack2').textContent = backend;
  document.querySelector('.uber-stack3').textContent = year;
  document.querySelector('.uber-description').textContent = projectDescription;
  document.querySelector('.uber-image').src = projectFeaturedImage;
  document.querySelector('.uber-html').textContent = html;
  document.querySelector('.uber-css').textContent = css;
  document.querySelector('.uber-javascript').textContent = js;
  document.querySelector('.uber-ruby').textContent = ruby;

  uberModalContainer.classList.add('show');
});

closeUberModal.addEventListener('click', () => {
  uberModalContainer.classList.remove('show');
});
