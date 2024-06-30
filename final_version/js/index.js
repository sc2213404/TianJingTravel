$(function() {
    var num = 12;
    var id = null;

    //监听所有图片以及可能尚未添加的<img>标签，并且显示大图
    $(".card").on("click", "img", function() {
        id = $(this).attr("id");
        show(this);
    })

    //隐藏大图
    $(".big").click(function() {
        $(this).fadeOut("fast");
    })

    //显示大图
    function show(picture) {
        var src = $(picture).attr("src");

        //填充大图src
        $("#big_img").attr("src", src);

        //缩放图片。如果图片长>宽，则长边变为屏幕宽度的scale比例，如果此时高度大于屏幕高度
        //则再将高度缩放scale比例。反之同理
        var scale = 0.7;
        var windowW = $(window).width();
        var windowH = $(window).height();
        var realWidth = picture.width;
        var realHight = picture.height;
        var newHeight, newWidth;
        if (realWidth > realHight) {
            newWidth = windowW * scale;
            newHeight = newWidth * realHight / realWidth;
            if (newHeight > realHight) {
                let temp = newHeight;
                newHeight = newHeight * scale;
                newWidth = newHeight * newWidth / temp;
            }
        } else {
            newHeight = windowH * scale;
            newWidth = newHeight * realWidth / realHight;
            if (newHeight < realHight) {
                let temp = newWidth;
                newWidth = newWidth * scale;
                newHeight = newWidth * newHight / temp;
            }
        }

        var padding_top = (windowH - newHeight) / 2;
        var padding_left = (windowW - newWidth) / 2;

        $("#big_img").css("width", newWidth); //以最终的宽度对图片缩放        
        $(".inner").css("padding-top", padding_top);
        $(".inner").css("padding-left", padding_left);
        $(".big").fadeIn("fast");
    }

})

//设置固定导航栏位置
window.addEventListener('load',function(){
    let topPart=document.getElementById('topPart')//第一部分
    let topHeight=topPart.offsetHeight//第一部分的高度

    let navBar=document.getElementById('navBar')//第二部分
    let navHeight=navBar.offsetHeight//第二部分的高度

    let mainPart=document.getElementById('content')//第三部分

    window.addEventListener('scroll',function(){
        let scrollValue=document.documentElement.scrollTop
        if(scrollValue>topHeight){
            navBar.style.position='fixed'
            navBar.style.left='25%'
            navBar.style.top='0px'
            mainPart.style.marginTop=navHeight+10+'px'
        }
        else{
            navBar.style.position='static'
            mainPart.style.marginTop=10+'px'
        }
    })
})