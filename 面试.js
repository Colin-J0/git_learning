面试：

布局问题

1.	2栏布局
	<div class="wrap">
		<div class="left"></div>
		<div class="right"></div>
	</div>

	<style type="text/css">
		.wrap{
			height: 100px;
		}
		
		.left{
			float: left;
		    margin-right: 10px;
		    width: 200px;
		    background: #ff9900;
		    height: 100px;
		}

		.right {
			overflow: hidden;
			background: #ccc;
			height: 100px;
		}

	</style>

2.	3栏布局（中间自适应）

js 方面

1. 原生和jquery read和原生js onload方法的区别
jquery : 初始化方法
$(document).ready(function(){  
     alert("第一种方法。");   
});

$(function (){
	alert('第二种方法')
})

jQuery(function (){
	alert('第三种方法')
})

jquery: '等待页面加载完数据，以及页面部分元素（不包括图片、视频）'
js: '是页面全部加载完成才执行初始化加载。'





2. 用递归函数写整数阶乘
function f(n) {
    return n == 1 ? n : n * f(n-1);

    if (n==1) {
        return n ;

    } else {
        return n * f(n-1);
    }
}


3. 函数的变量提升

4. this的作用域问题

5. call 和 apply 的用法

6. js函数的工作流程  函数执行

7. localstorage相关知识


react相关的知识点

1. react的路由 
2. reduce相关
3. 




