
// 顶部二级菜单
$(function(){
    var $jg=$('#s1').next();
    var $jg02=$('#s2').next();
    $('#s1').mouseenter(function () {
        $jg.slideDown("normal");
    });
    $jg.parent().mouseleave(function () {
        $jg.slideUp('normal');

    });
    $('#s2').mouseenter(function () {
        $jg02.slideDown("normal");
    });
    $jg02.parent().mouseleave(function () {
        $jg02.slideUp('normal');
    });
});

// 二级导航
$(function () {

        $(".navSnd01").mouseenter(function () {
            $(".navSnd01>ul").slideDown("normal");
        }).mouseleave(function () {
            $(".navSnd01>ul").slideUp("normal");});

        $(".navSnd02").mouseenter(function () {
            $(".navSnd02>ul").slideDown("normal");
            }).mouseleave(function () {
            $(".navSnd02>ul").slideUp("normal");
        });

    $(".navSnd03").mouseenter(function () {
        $(".navSnd03>ul").slideDown("normal");
    }).mouseleave(function () {
        $(".navSnd03>ul").slideUp("normal");
    });

    $(".navSnd04").mouseenter(function () {
        $(".navSnd04>ul").slideDown("normal");
    }).mouseleave(function () {
        $(".navSnd04>ul").slideUp("normal");
    });

    $(".navSnd05").mouseenter(function () {
        $(".navSnd05>ul").slideDown("normal");
    }).mouseleave(function () {
        $(".navSnd05>ul").slideUp("normal");
    });

    $(".navSnd06").mouseenter(function () {
        $(".navSnd06>ul").slideDown("normal");
    }).mouseleave(function () {
        $(".navSnd06>ul").slideUp("normal");
    });

    $(".navSnd07").mouseenter(function () {
        $(".navSnd07>ul").slideDown("normal");
    }).mouseleave(function () {
        $(".navSnd07>ul").slideUp("normal");
    });

    $(".navSnd08").mouseenter(function () {
        $(".navSnd08>ul").slideDown("normal");
    }).mouseleave(function () {
        $(".navSnd08>ul").slideUp("normal");
    });

});