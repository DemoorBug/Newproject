/**
 * [BoyWalk description]
 */
function BoyWalk() {
    var container = $("#content");
    // 页面可视区域
    var visualWidth = container.width();
    var visualHeight = container.height();


    var swipe = Swipe($('#content'));
    //获取数据
    var getValue = function (className){
        var $elem = $(''+ className + '');
        return {
            height: $elem.height(),
            top: $elem.position().top
        };
    }

    //路的Y轴
    var pathY = function (){
        var data = getValue('.a_background_middle');
        return data.top + data.height/2;
    };

    var $boy = $('#boy');
    var boyHeight = $boy.height();
    $boy.css({
        top: pathY() - boyHeight+30
    })

    //////////
    // 动画处理 //
    //////////

    //恢复走路
    function restoreWalk(){
        $boy.removeClass('pauseWalk');
    }
    //css3的动作变化
    function slowWalk(){
        $boy.addClass('slowWalk');
    }
    //计算移动距离
    function calculateDist(direction, proportion) {
        return (direction == 'x' ? visualWidth : visualHeight) * proportion;
    }

    //用transition做运动
    function stratRun(options,runTime) {
        var dfdPlay = $.Deferred();
        //恢复走路
        restoreWalk();
        //运动的属性
        $boy.transition(
            options,
            runTime,
            'linear',
            function(){
                dfdPlay.resolve();
            }
        )
        return dfdPlay;
    }

    //开始走路
    function walkRun(time,dist,disY) {
        time = time || 3000;
        //脚动作
        slowWalk();
        //开始走路
        var di = stratRun({
            'left':dist +'px',
            'top':disY ? disY : undefined
        },time);
        return di;
    }

    return {
        //开始走路
        walkTo: function(time,proportionX,proportionY) {
            var distX = calculateDist('x',proportionX);
            var distY = calculateDist('y',proportionY); 
            return walkRun(time,distX,distY);
        },
        //停止走路
        stopWalk: function(){
            pauseWalk();
        },
        setColoer: function(value){
            $boy.css('background-color',value)
        }
    }
}

