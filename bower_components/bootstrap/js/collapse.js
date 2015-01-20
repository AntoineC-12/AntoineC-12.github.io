/* ========================================================================
<<<<<<< HEAD
 * Bootstrap: collapse.js v3.3.1
=======
 * Bootstrap: collapse.js v3.1.1
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
<<<<<<< HEAD
    this.$trigger      = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.1'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true,
    trigger: '[data-toggle="collapse"]'
=======
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

<<<<<<< HEAD
    var activesData
    var actives = this.$parent && this.$parent.find('> .panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

=======
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

<<<<<<< HEAD
    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
=======
    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
<<<<<<< HEAD
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)
=======
      .addClass('collapsing')
      [dimension](0)
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
<<<<<<< HEAD
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
=======
        .addClass('collapse in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
<<<<<<< HEAD
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
=======
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

<<<<<<< HEAD
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)
=======
    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
<<<<<<< HEAD
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
=======
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
<<<<<<< HEAD
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
=======
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

<<<<<<< HEAD
  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }

=======
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b

  // COLLAPSE PLUGIN DEFINITION
  // ==========================

<<<<<<< HEAD
  function Plugin(option) {
=======
  var old = $.fn.collapse

  $.fn.collapse = function (option) {
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

<<<<<<< HEAD
      if (!data && options.toggle && option == 'show') options.toggle = false
=======
      if (!data && options.toggle && option == 'show') option = !option
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

<<<<<<< HEAD
  var old = $.fn.collapse

  $.fn.collapse             = Plugin
=======
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

<<<<<<< HEAD
  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this })

    Plugin.call($target, option)
=======
  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
  })

}(jQuery);
