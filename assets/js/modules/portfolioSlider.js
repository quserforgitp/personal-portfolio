// assets/js/modules/portfolioSlider.js

const POSITIONS = Object.freeze([
  'slide-from-left',
  'slide-from-right',
  'slide-from-top',
  'slide-from-bottom',
]);

const PROJECT_CLASS_NAME = '.project';
const PROJECT_IMG_CLASS_NAME = '.project__img';
const SECONDS_FACTOR = 1000;

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

function changeProjectImage(project, intervalStore) {
  const currentVisibleImg = project.querySelector('.current-visible');
  const nextImg =
    currentVisibleImg?.nextElementSibling ||
    project.querySelector(PROJECT_IMG_CLASS_NAME);

  if (!currentVisibleImg || !nextImg) return;

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

function addIntervalPerProject(projects, intervalStore) {
  projects.forEach((project) => {
    const id =
      project.dataset.id ||
      (crypto?.randomUUID?.() ?? `project-${Math.random().toString(36).slice(2)}`);
    const secsPerTransition = parseFloat(project.dataset.transition) || 3;

    if (intervalStore[id]) clearInterval(intervalStore[id]);

    intervalStore[id] = setInterval(() => {
      changeProjectImage(project, intervalStore);
    }, secsPerTransition * SECONDS_FACTOR);
  });
}

export function initPortfolioSlider() {
  const projects = document.querySelectorAll(PROJECT_CLASS_NAME);
  const intervalStore = {};
  assignStartPositionToAllProjectsImgs(projects, POSITIONS);
  addIntervalPerProject(projects, intervalStore);
}
