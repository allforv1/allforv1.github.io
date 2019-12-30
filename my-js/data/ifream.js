 // 全局变量
 var src;

 //带参数函数
 function goToPage(param) {
     document.getElementById("myIframe").src = param;
     src = param;
     // 打印传递过来的参数
     printf();
     //$("#myIframe").attr("src",param);
 }

 //无参数函数
 function printf() {
     alert(src);
 }

 $(function () {
     var height = $(document).height();
     $("iframe").css("height", height);
     console.log(height);

     $(".span2 .breadcrumb li a").on('click', function () {
         console.log(this.className);
         if (this.className == "lookup") {
            $(".form-search").slideToggle();
         }
     })
 })