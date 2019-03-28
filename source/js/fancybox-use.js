// 集成fancybox, 只为文章中所有img元素添加父元素
$(".article-entry").find("img").each(function () {
    var element = document.createElement("a");
    $(element).attr("data-fancybox", "gallery");
    $(element).attr("href", $(this).attr("src"));
    /* 图片采用懒加载处理时, 
     * 一般图片标签内会有个属性名来存放图片的真实地址，比如 data-original,
     * 那么此处将原本的属性名src替换为对应属性名data-original,
     * 修改如下
     */
    // $(element).attr("href", $(this).attr("data-original"));  
    $(this).wrap(element);
});