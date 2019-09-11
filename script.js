$(function(){
	$('.circles button').click(function(){
		var get_id =this.id;
        var get_current =$('.qts .' + get_id);
        $('#' + get_id).css({'font-size ':'15px',"opacity":"1"});
        $('.circles button').not('#' + get_id).css({"font-size ":"11px","opacity":"0.3"});
		$('.quote').not(get_current).hide(500);
		get_current.show(500);
	});
});