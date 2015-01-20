/* ========================================================================
<<<<<<< HEAD
 * Bootstrap: tab.js v3.3.1
=======
 * Bootstrap: tab.js v3.1.1
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

<<<<<<< HEAD
  Tab.VERSION = '3.3.1'

  Tab.TRANSITION_DURATION = 150

=======
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
<<<<<<< HEAD
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
=======
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    }

    if ($this.parent('li').hasClass('active')) return

<<<<<<< HEAD
    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
=======
    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
<<<<<<< HEAD
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)
=======
      && $active.hasClass('fade')
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
<<<<<<< HEAD
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)
=======
        .removeClass('active')

      element.addClass('active')
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
<<<<<<< HEAD
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
=======
        element.closest('li.dropdown').addClass('active')
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
      }

      callback && callback()
    }

<<<<<<< HEAD
    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
=======
    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

<<<<<<< HEAD
  function Plugin(option) {
=======
  var old = $.fn.tab

  $.fn.tab = function ( option ) {
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

<<<<<<< HEAD
  var old = $.fn.tab

  $.fn.tab             = Plugin
=======
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

<<<<<<< HEAD
  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)
=======
  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b

}(jQuery);
