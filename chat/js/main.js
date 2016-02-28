$(function(){
	$("#button1").click(function(){
		var content = $("#textCobtent");
		if (content.val() !== "") {
			sendContent(content.val());
		}else{
			alert("发送内容 不能为空")l;
			content.focus();
			return false;
		}
	});
	// 显示表情图标
	face();
	function face(){
		$("table tr td img").click(function(){
		 	var srcContent = $("#content").val() + "<:" + this.id + ":>";
			$("#content").val(srcContent);
	    })
	}
	AutoUpDate();
	var hander = setInterval("AutoUpDate()",5000);

	function AutoUpDate(){
		getMessgeList();
		getOnLine();
	}
	function getOnLine(){

	}
	function getMessgeList(){

	}
	$("#msg").ajaxStart(function(){
		$(this).show.html("正在发送");
	})
	$("#msg").ajaxStop(function(){
		$(this).show.html("已经完成");
	})
	function face(){
		var srcHtml = "";
		for (var i = 0; i <=; i++) {
			srcHtml += "<img src ='face/" + i + ".gif' id='" + i + "'/> "
		}
		$("#face").html(srcHtml);
	}


});


function sendContent(content){
	$.ajax({
		type:"GET",
		url:"index.php",
		data:"action=sendContent$d=" + new Date() + "content=" + content,
		success:function(){
			if (data == "1") {
				getMessge();
				$("#textCobtent"),val("");
			}
			else{
				alert("发送失败");
				return false;
			}
		}
	})
};