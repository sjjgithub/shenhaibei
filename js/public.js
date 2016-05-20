$(function(){
	$(".inner_footer a").width( 636/3/640*100+"%" );
	$(".inner_footer a").last().addClass("last");
	//下拉框
	$(".selected_box input").click(function(e){
		var thisinput=$(this);
		var thisul=$(this).parent().find("ul");
		if(thisul.css("display")=="none"){
			thisul.show();
			e.stopPropagation();
			$('body').click(function(){
				thisul.fadeOut("fast");
			}) 
			$(window.document).scroll(function () {
				thisul.fadeOut("fast");
			})
			thisul.find("li").click(function(){
				thisinput.val($(this).text());
				thisul.fadeOut("fast");
			});
		}
		else{
			thisul.fadeOut("fast");				
		}
	});
	radio_checkbox($('.check input:checkbox'));
	//数量加减
	$(".plus").click(function() {
		$obj = $(this).prev(".number");
		var num = parseInt($obj.text());
		if (isNaN(num)) {
			$obj.text(1);
		} else {
			$obj.text(num+1);
			$(this).parent().find(".subtract").removeClass("disabled");
		}
	});
	$(".subtract").click(function() {
		$obj = $(this).next(".number");
		var num = parseInt($obj.text());
		if (num <=1)
		{
			$(this).addClass("disabled");
			return false;	
		}
		if (isNaN(num)) {
			$obj.text(1);		
		} else {
			$obj.text(num-1);				
		}
	}); 
});
//模拟单选框、复选框
function radio_checkbox(obj){
	obj.each(function(){
		if(this.checked){
			$(this).parent().addClass(this.type+'_check');
		}	
	});
	obj.live('click',function(){
		var cur_span = $(this).parent();
		var type = this.type;
		if(this.checked){
			cur_span.addClass(type+'_check');
			if(type=='radio'){
				cur_span.parents('.'+type+'_box').find('span').not(cur_span).removeClass(type+'_check');	
			}
		}else{
			cur_span.removeClass(type+'_check');
		}
	});
}