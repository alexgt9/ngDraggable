SVGElement.prototype.hasClass = function (className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(this.getAttribute('class'));
};

SVGElement.prototype.addClass = function (className) {
  if (!this.hasClass(className)) {
    this.setAttribute('class', (this.getAttribute('class') == null? this.getAttribute('class') : '') + ' ' + className);
  }
  return true;
};

SVGElement.prototype.removeClass = function (className) {
  if (this.hasClass(className)) {
    var removedClass = this.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');
    this.setAttribute('class', removedClass);
  }
};

SVGElement.prototype.toggleClass = function (className) {
  if (this.hasClass(className)) {
    this.removeClass(className);
  } else {
    this.addClass(className);
  }
};