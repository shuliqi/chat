$(function(){
	$("#msg").ajaxStart(function(){
	   	$(this).show().html("正在发送请求....");
	})
	$("#msg").ajaxStop(function(){
	  	$(this).show().html("请求处理已经完成...");
	})
    $("#botton").click(function(){
    	var name = $("#name");
    	var pass = $("#pass");
    	if (name.val() != "" && pass.val() != "") {
    		Login(name.val(),pass.val);
    	}else{
    		if (name.val == "") {
    			alert("用户名不能为空");
    			name.focus();
    			return false;   //阻止默认   
    		}else{
    			alert("密码不能为空");
    			pass.focus();
    			return false;   //阻止默认   
    		}
    	}
    })
});
function Login(name,pass){
	$.ajax({
		type:"GET",
		url:"index.php",
		data:"action=Login&d=" + new Date() "&name=" + name "&pass=" + pass ,
		success:function(data){
			if (data == "1") {
				window.location = "yes";
			}else{
				alert("错误");
				return false;
			}
		}
	});
}