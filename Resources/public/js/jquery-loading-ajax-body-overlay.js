"use strict";

if ($.fn.Loading === undefined) {
  console.error('This script requires the jquery loading plugin [https://github.com/CarlosBonetti/jquery-loading]');
}

//set the overlay as default
jQuery.Loading.defaults.overlay = $('#overlay-full');

//override the zindex to avoid modal to be in front of the overlay
jQuery.Loading.prototype.resize =  function() {
  var self = this;

  var element = self.element,
      totalWidth = element.outerWidth(),
      totalHeight = element.outerHeight();

  if (this.settings.fullPage) {
    totalHeight = '100%';
    totalWidth = '100%';
  }

  this.overlay.css({
    position: self.settings.fullPage ? 'fixed' : 'absolute',
    top: element.offset().top,
    left: element.offset().left,
    width: totalWidth,
    height: totalHeight
  });
};

//bind the overlay to the ajax events
$(document).bind("ajaxSend", function () {
    $('body').loading('start');
}).bind("ajaxComplete", function () {
    $('body').loading('stop');
});