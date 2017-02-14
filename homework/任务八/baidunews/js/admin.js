// 打开后台页面的时候，发送请求，刷新新闻列表
$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    refreshNews();
// 添加新闻
$('#btnsubmit').click(function(e){
	e.preventDefault();
	// 输入判断
	if($('#newstitle').val()===''||$('#newsimg').val()===''||$('#newstype').val()==''||$('#newstime').val()===''||$('#newssrc').val()===''){
		if($('#newstitle').val()===''){
			$('#newstitle').parent().addClass('has-error');
		}else{
			$('#newstitle').parent().removeClass('has-error');
		}
		if($('#newsimg').val()===''){
			$('#newsimg').parent().addClass('has-error');
		}else{
			$('#newsimg').parent().removeClass('has-error');
		}
		if($('#newstime').val()===''){
			$('#newstime').parent().addClass('has-error');
		}else{
			$('#newstime').parent().removeClass('has-error');
		}
		if($('#newssrc').val()===''){
			$('#newssrc').parent().addClass('has-error');
		}else{
			$('#newssrc').parent().removeClass('has-error');
		}

	}else{
		// 提交添加
		var jsonNews={
			newstitle:$('#newstitle').val(),
			newstype:$('#newstype').val(),
			newsimg:$('#newsimg').val(),
			newstime:$('#newstime').val(),
			newssrc:$('#newssrc').val()
		}
		$.ajax({
			url:'./server/insert.php',
			type:'get',
			data:jsonNews,
			datatype:'json',
			success:function(data){
				console.log(data);
				refreshNews();
			}
		});
	}
});
// 删除新闻的功能
var deleteId=null;
$newsTable.on('click','.btn-danger',function(e){
	$('#deleteModal').modal('show');
	deleteId=$(this).parent().prevAll().eq(5).html();
}); 
$('#deleteModal #confirmDelete').click(function(e){
	if(deleteId){
		console.log('deleteId:'+deleteId);
		$.ajax({
			url:'./server/delete.php',
			type:'get',
			data:{newsid:deleteId},
			success: function(data){
				console.log('ajax success');
				$('#deleteModal').modal('hide');
				refreshNews();
				for(var index in data){
					console.log(data[index]);
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				console.log(XMLHttpRequest.status);
 				// console.log(XMLHttpRequest.readyState);
 				// console.log(textStatus);
 				// console.log('hello hello');
			}
		});
	}
});
// 修改新闻
var updateId=null;
$newsTable.on('click','.btn-primary',function(e){
	$('#updateModal').modal('show');
	updateId=$(this).parent().prevAll().eq(5).html();
	console.log(updateId);
	$.ajax({
			url:'./server/curnews.php',
			type:'get',
			datatype:'json',
			data:{newsid:updateId},
			success: function(data){
				console.log(data);
				$('#unewstitle').val(data[0].newstitle);
				$('#unewstype').val(data[0].newstype);
				$('#unewsimg').val(data[0].newsimg);
				$('#unewssrc').val(data[0].newssrc);
				var utime=data[0].newstime.split(' ')[0];
				$('#unewstime').val(utime);
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				console.log(XMLHttpRequest.status);
 				console.log(XMLHttpRequest.readyState);
 				console.log(textStatus);
 				console.log(errorThrown);
			}
		});

}); 
$('#updateModal #confirmupdate').click(function(e){
	console.log(354353);
	$.ajax({
			url:'./server/update.php',
			type:'get',
			data:{
				newstitle:$('#unewstitle').val(),
				newstype:$('#unewstype').val(),
				newsimg:$('#unewsimg').val(),
				newstime:$('#unewstime').val(),
				newssrc:$('#unewssrc').val(),
				id:updateId
			},
                datatype:'json',
			success: function(data){
				console.log(1);
				$('#updateModal').modal('hide');
				refreshNews();
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				console.log(XMLHttpRequest.status);
 				console.log(XMLHttpRequest.readyState);
 				console.log(textStatus);
 				console.log('hello hello'+errorThrown);
			}
		});
});


    function refreshNews() {
        // empty table
        $newsTable.empty();
        $.ajax({
            type: 'get',
            url: './server/getnews.php',
            datatype: 'json',
            success: function(data) {
                console.log(data);
                data.forEach(function(item,index,array){
                	var $tdid=$('<td>').html(item.id);
                	var $tdtype=$('<td>').html(item.newstype);
                	var $tdtitle=$('<td>').html(item.newstitle);
                	var $tdsrc=$('<td>').html(item.newssrc);
                	var $tdtime=$('<td>').html(item.newstime);
                	var $tdimg=$('<td>').html(item.newsimg);
                	var $tdctrl=$('<td>');
                	var $btnupdate=$('<button>').addClass('btn btn-primary btn-xs').html('修改');
                	var $btndelete=$('<button>').addClass('btn btn-danger btn-xs').html('删除');
                	$tdctrl.append($btnupdate,$btndelete);
                	var $tRow=$('<tr>');
                	$tRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdctrl);
                	$newsTable.append($tRow);
                });
            }

        });

    }
});
