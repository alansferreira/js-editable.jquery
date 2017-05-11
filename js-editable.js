(function($) {
  var defaultOptions = {
    updateContentsOnChange: true, 
    updateMetricsOnChange: true, 
    infiniteNavigation: true,
    onchange: null, 
    onkeydown:null,
    onblur: null
  };
  
  $.fn.editable = function(options) {
    var _options = $.fn.extend(defaultOptions, options);
    var $input = $("<input type='text' class='editable-input-text'>");
    var $select = $("<select class='editable-select'>");
    
    $(document.body).append($input);
    $input.on('keydown', input_keydown);
    $input.on('blur', input_blur);
    $input.on('change', input_change);
    $input.on('focus', input_focus);
    
    return this.each(function() {
      var _this = $(this);
      
      _this.data('editableOptions', _options)
      _this.addClass( "editable" );
      _this.on("click", editable_click);
      this.startEdit = function(){ return startEdit(_this); };
      this.endEdit = function(){ return endEdit(_this); };
      this.cancelEdit = function(){ return cancelEdit(_this); };
      //console.log(this.element);
      //this._refresh();
    });
    
    function input_change(e){
      var opt = $input.data('editableOptions');
      if(opt && opt.updateContentsOnChange) updateEditableSource();
      if(opt && opt.onchange) return opt.onchange(e);
      return true;
    };
    
    function startEdit(editable){
      var $target = $(editable);
      $input.data('editableInitialValue', $target.text());
      $input.data('editableOptions', _options);
      $input.data('editableSource', $target);
      updateInputPosition();
      $input.val($target.text());
      $input.show();
      $input.select();
    };
    function endEdit(){
      updateEditableSource(); 
      $input.hide();
    };
    function cancelEdit(){
      var initialValue = $input.data('editableInitialValue');
      $input.hide();

      $input.val(initialValue);
      updateEditableSource();
    };

    function input_focus(e){};
    function input_keydown(e){
      console.log('input_keydown(e)');
      
      var next = null;
      var opt = $input.data('editableOptions');
      if(opt && opt.updateContentsOnChange) updateEditableSource();
      if(opt && opt.updateMetricsOnChange) updateInputPosition();
      
      switch(e.keyCode){
        case 27: //ESCAPE
          return cancelEdit();
      }
      
      if(e.keyCode==9){
        e.stopPropagation();
        e.cancelBubble=true;
        var $editable = $input.data('editableSource');
        var group = $editable.data('editableGroup') || "";
        var groupFilter = "";
        if(group){
          next = $(".editable[data-editable-group='"+ group +"']:gt("+$editable.index()+"):first");
          //if(!next.length && opt.infiniteNavigation) next = $(".editable[data-editable-group='"+ group +"']:first");
        }else{
          next = $(".editable:gt("+$editable.index()+"):first");
          //if(!next.length && opt.infiniteNavigation) next = $(".editable:first");
        }
        if(next.length){
          next.get(0).startEdit();
          return false;
        }
        
      }
    }; 
    function updateInputPosition(){
      var $target = $input.data('editableSource');
      $input.css({
        position: 'absolute',
        top: $target.offset().top + 'px',
        left: $target.offset().left + 'px', 
        "font-family": $target.css("font-family"), 
        "font-size": $target.css("font-size"), 
        "margin": $target.css("margin"), 
      });
      $input.width($target.width());
      $input.height($target.height());
    }
    function updateEditableSource(){
      var $source = $input.data('editableSource');
      $source.html($input.val());
    };
    
    function input_blur(e){
      console.log('input_blur(e)');

      endEdit();
    };
    
    function editable_click(e){
      var $target = $(e.target);
      
      startEdit($target);
      
    }
    
  }; 
  
  $(".editable").editable();
  
}(jQuery));  
