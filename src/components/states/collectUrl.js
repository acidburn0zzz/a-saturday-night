AFRAME.registerComponent('collect-url', {
  init: function () {
    var avatarSelectionEl = this.el.querySelector('#avatarSelection');
    avatarSelectionEl.setAttribute('visible', true);
  },

  remove: function () {
    var avatarSelectionEl = this.el.querySelector('#avatarSelection');
    avatarSelectionEl.setAttribute('visible', false);
  }
});