/**
 * [Swipe description]
 * @param {[type]} container [页面容器节点]
 */
function Swipe(container){
    //滑动对象
    var swipes = {};
    // 获得第一个子节点
    var element =  container.find(':first');
    // li页面数量
    var slides = element.find('li');
    // 获取容器尺寸
    var width = container.width();
    var height = container.height();
    // 设置li页面总宽度
    element.css({
        width: (slides.length * width) + 'px',
        height: height + 'px'
    })
    // 设置每一个页面li的宽度
    // $.each(slides, function (index){
    //     var slide = slides.eq(index); //获取到每一个li元素
    //     slide.css({
    //         width: width+'px',
    //         height: height+'px'
    //     })
    // })
    slides.css({
        width: width+'px',
        height: height+'px'
    })
    swipes.scrollTo = function(x, speed){
        element.css({
            'transition-timing-function':'linear',
            'transition-duration':'5000ms',
            'transform':'translate3d(-'+(width) * 2 +'px,0px,0px)'
        })
        // return this 
    }
    return swipes;
}