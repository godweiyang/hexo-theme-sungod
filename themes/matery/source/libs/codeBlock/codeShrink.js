// 代码块收缩

$(function () {
  var $code_expand = $('<i class="fa fa-chevron-down code-expand" title="折叠代码" aria-hidden="true"></i>');

  $('.code-area').prepend($code_expand);
  $('.code-expand').on('click', function () {
    if ($(this).parent().hasClass('code-closed')) {
      $(this).siblings('pre').find('code').show();
      $(this).parent().removeClass('code-closed');
    } else {
      $(this).siblings('pre').find('code').hide();
      $(this).parent().addClass('code-closed');
    }
  });
});
