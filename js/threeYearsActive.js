$(function () {
    var topArr = ['2.54rem','1.78rem','1.03rem','2.35rem','3.05rem','3.64rem'];
    function showBarrager(){
    //     $.ajax({
    //         url:basePath+'/activity/queryAllMessageOfThreeYear.shtml',
    //         success:function(data){
    //             if(data.code==500){
    //                 //alert('系统繁忙，请稍后再试！');
    //                 return false;
    //             }else{
    //                 $('.btn').html('送出祝福');
    //             }
                //每条弹幕发送间隔
                var looper_time = 4200;
                //弹幕信息
                var items = ['女神节快乐！','我今年18能过女神节吗？','行走的女神','翻滚吧女神经','谁会记得女神经','行走的女神','摇滚的女神','逗比的女神','女神小姐姐','流动的女神'];
                //弹幕总数
                var total = items.length;
                //是否首次执行
                var run_once = true;
                //弹幕索引
                var index = 0;
                var topIndex = 0;
                var winW=$(window).width()
                //先执行一次
                if(total!=0){
                    barrager();
                }
                function barrager() {
                    console.log(11)
                    if (run_once) {
                        console.log(222)
                        //如果是首次执行,则设置一个定时器,并且把首次执行置为false
                        looper = setInterval(barrager, looper_time);
                        run_once = false;
                    }
                    //发布一个弹幕
                    // var str = '<div class="te" style="top:'+topArr[topIndex]+'">'+items[index]+'</div>';
                    var str='<div class="te" style="top:'+topArr[topIndex]+';left:'+winW+'px">'+items[index]+'</div>';
                    $('.barrage').append(str);
                    $('.te').each(function(){
                        var _left = -1*$(this).width()-50+'px';
                        $(this).animate({left:_left},20000,'linear',function(){
                            $(this).remove();
                        });
                    });
                    //索引自增
                    index++;
                    topIndex++;
                    //所有弹幕发布完毕，重新循环。
                    if (index == total) {
                        index = 0;
                    };
                    if(topIndex>6){
                        topIndex = 0;
                    }
                }
                $(".btn").on("click",function(){
                    items.splice(index,0,'我中奖了');
                })

            }
    //     })
    // };
    showBarrager();
});
