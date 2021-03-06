(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };
  var elementName=document.querySelector('.review-form-field-name');
  elementName.setAttribute("required", true);
  var elementText=document.querySelector('.review-form-field-text');
  elementText.setAttribute("required",true);

  document.forms[1].onsubmit = function(evt) {
    evt.preventDefault();
    var iChecked=document.forms[1]['review-mark'].value;
    var nowDate= new Date;
    var myDate= new Date(1988, 0, 09);
    var ResultDay=new Date (nowDate.getTime()+(nowDate-myDate));
    document.cookie="checked="+iChecked + "; expires="+ResultDay.toUTCString();
    document.cookie="UserName="+document.querySelector('.review-form-field-name').value +"; expires="+ResultDay.toUTCString();
    document.forms[1].submit();
  }

})();
