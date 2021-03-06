(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  jQuery(function($) {
    var EDDPreview;
    EDDPreview = (function() {
      function EDDPreview() {
        this.selectFile = __bind(this.selectFile, this);
        this.attachFile = __bind(this.attachFile, this);
        this.createFrame = __bind(this.createFrame, this);
        this.bindFrame = __bind(this.bindFrame, this);
        this.toggleActions = __bind(this.toggleActions, this);
        this.bindActions = __bind(this.bindActions, this);
        this.frame = false;
        this.action = '.edd-add-preview';
        this.createFrame();
        this.bindActions();
        this.toggleActions();
      }

      EDDPreview.prototype.bindActions = function() {
        $('#edd_variable_price_fields').on('click', this.action, (function(_this) {
          return function(e) {
            e.preventDefault();
            _this.bindFrame(e.target);
            return _this.frame.open();
          };
        })(this));
        $('#edd_price_fields').on('change', '.edd_repeatable_default_input', (function(_this) {
          return function(e) {
            return _this.toggleActions();
          };
        })(this));
        return $('body').on('click', '.submit .edd_add_repeatable', (function(_this) {
          return function(e) {
            return _this.toggleActions();
          };
        })(this));
      };

      EDDPreview.prototype.toggleActions = function() {
        var rows;
        rows = $('.edd_variable_prices_wrapper');
        return rows.each((function(_this) {
          return function(i, el) {
            var radio;
            radio = $(el).find('.edd_repeatable_default_input');
            return $(el).find(_this.action).toggle(!radio.is(':checked'));
          };
        })(this));
      };

      EDDPreview.prototype.bindFrame = function(el) {
        this.frame.on('open', (function(_this) {
          return function() {
            return _this.selectFile(el);
          };
        })(this));
        return this.frame.on('select', (function(_this) {
          return function() {
            return _this.attachFile(el);
          };
        })(this));
      };

      EDDPreview.prototype.createFrame = function() {
        return this.frame = wp.media.frames._playlist = wp.media({
          title: EDDPlaylists.i18n.title,
          button: {
            text: EDDPlaylists.i18n.button
          },
          multiple: false
        });
      };

      EDDPreview.prototype.attachFile = function(el) {
        var attachment;
        attachment = this.frame.state().get('selection').first().toJSON();
        return $(el).parent().next().val(attachment.id);
      };

      EDDPreview.prototype.selectFile = function(el) {
        var attachment, id, selection;
        selection = this.frame.state().get('selection');
        id = $(el).parent().next().val();
        attachment = wp.media.attachment(id);
        attachment.fetch();
        return selection.add(attachment ? [attachment] : []);
      };

      return EDDPreview;

    })();
    return new EDDPreview();
  });

}).call(this);

//# sourceMappingURL=app.js.map
