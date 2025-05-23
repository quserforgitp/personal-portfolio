const POSITIONS = Object.freeze([
  'slide-from-left',
  'slide-from-right',
  'slide-from-top',
  'slide-from-bottom'
]);

const PROJECT_CLASS_NAME = '.project';
const PROJECT_IMG_CLASS_NAME = '.project__img';
const SECONDS_FACTOR = 1000;

const projects = document.querySelectorAll(PROJECT_CLASS_NAME);
const intervalStore = {};

function getRandomElementFromList(list) {
  const randomIdx = Math.floor(Math.random() * list.length);
  return list[randomIdx];
}

function assignStartPositionToImgs(imgs, positions) {
  imgs.forEach((img) => {
    if (!img.classList.contains('current-visible')) {
      const position = getRandomElementFromList(positions);
      img.classList.add(position);
    }
  });
}

function assignStartPositionToAllProjectsImgs(projects, positions) {
  projects.forEach((project) => {
    const projectImgs = project.querySelectorAll(PROJECT_IMG_CLASS_NAME);
    assignStartPositionToImgs(projectImgs, positions);
  });
}

function changeProjectImage(project) {
  const currentVisibleImg = project.querySelector('.current-visible');

  let nextImg = currentVisibleImg.nextElementSibling || project.querySelector(PROJECT_IMG_CLASS_NAME);

  if (!currentVisibleImg || !nextImg) return; // Por si no hay imgs

  nextImg.classList.add('current-visible');
  nextImg.classList.remove(...POSITIONS);

  currentVisibleImg.classList.remove('current-visible');

  requestAnimationFrame(() => {
    setTimeout(() => {
      const newPosition = getRandomElementFromList(POSITIONS);
      currentVisibleImg.classList.add(newPosition);
    }, 500);
  });
}

function addIntervalPerProject(projects) {
  projects.forEach((project) => {
    const id = project.dataset.id ||
                (window.crypto?.randomUUID?.() ??
                 `project-${Math.random().toString(36).slice(2)}`);// ID único por proyecto

    const secsPerTransition = parseFloat(project.dataset.transition) || 3; // Por defecto 3 segundos
    
    if (intervalStore[id]) {
      clearInterval(intervalStore[id]);
    }

    const intervalId = setInterval(() => {
      changeProjectImage(project);
    }, secsPerTransition * SECONDS_FACTOR);

    intervalStore[id] = intervalId;
  });
}


// Inicialización
assignStartPositionToAllProjectsImgs(projects, POSITIONS); // 1. Posiciones iniciales
addIntervalPerProject(projects);// 2. Timing de animaciones