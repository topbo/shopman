$(document).ready(function(){

// 首页商品分类导航
	var one = $(".shopClass_show");
	var two = $(".shopClass_list");

	$(".shopClass>h3").on("mouseover",function(){
		one.removeClass('hide');
		one.on("mouseover",function(){
			one.removeClass('hide');
		});
		one.on("mouseout",function(){
			one.addClass('hide');
		});
		$("#nice").on("mouseover",function(){
			two.removeClass('hide');
		});
		$("#nice").on("mouseout",function(){
			two.addClass('hide');
		});
		$(".shopClass_list").on("mouseover",function(){
			one.removeClass('hide');
			$(this).removeClass('hide');
		});
		$(".shopClass_list").on("mouseout",function(){
			one.addClass('hide');
			$(this).addClass('hide');
		});
	});
	
	$(document).on("mouseover",".shopClass_item",function(){
		$(this).addClass('shopClass_active');
	});
	$(document).on("mouseout",".shopClass_item",function(){
		$(this).removeClass('shopClass_active');
	});





	// 首页轮播图
	function animate(){
		var box = $(".imgBox");
		box.attr('style', 'value');
	}
	function play(){

	}

});