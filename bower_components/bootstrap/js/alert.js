/* ========================================================================
<<<<<<< HEAD
 * Bootstrap: alert.js v3.3.1
=======
 * Bootstrap: alert.js v3.1.1
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

<<<<<<< HEAD
  Alert.VERSION = '3.3.1'

  Alert.TRANSITION_DURATION = 150

=======
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
<<<<<<< HEAD
      $parent = $this.closest('.alert')
=======
      $parent = $this.hasClass('alert') ? $this : $this.parent()
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
<<<<<<< HEAD
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
=======
      $parent.trigger('closed.bs.alert').remove()
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
<<<<<<< HEAD
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
=======
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

<<<<<<< HEAD
  function Plugin(option) {
=======
  var old = $.fn.alert

  $.fn.alert = function (option) {
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

<<<<<<< HEAD
  var old = $.fn.alert

  $.fn.alert             = Plugin
=======
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
