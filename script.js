class ProgressCircle {
  constructor() {
    this.svg = document.querySelector('.progress-circle');
    this.progressCircle = this.svg.querySelector('.progress-ring__progress');
    this.block = document.getElementById('progress-block');
    this.radius = 80;
    this.circumference = 2 * Math.PI * this.radius;

    this.init();
    this.setupEventListeners();
  }

  init() {
    this.progressCircle.style.strokeDasharray = this.circumference;
    this.progressCircle.style.transition = 'stroke-dashoffset 0.4s ease';

    this.setValue(60);
    this.setAnimated(false);
    this.setHidden(false);
  }

  setupEventListeners() {
    const valueInput = document.getElementById('value-input');
    const animateToggle = document.getElementById('animate-toggle');
    const hideToggle = document.getElementById('hide-toggle');

    valueInput.addEventListener('input', () => this.setValue(valueInput.value));
    animateToggle.addEventListener('change', () => this.setAnimated(animateToggle.checked));
    hideToggle.addEventListener('change', () => this.setHidden(hideToggle.checked));
  }

  setValue(value) {
    const clamped = Math.max(0, Math.min(100, parseFloat(value) || 0));
    const offset = this.circumference - (clamped / 100) * this.circumference;

    this.progressCircle.style.strokeDashoffset = offset;
  }

  setAnimated(animated) {
    this.block.classList.toggle('animated', animated);
  }

  setHidden(hidden) {
    this.block.classList.toggle('hidden', hidden);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ProgressCircle();
});