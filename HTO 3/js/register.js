$(window).load(function(){
	var height = window.innerHeight,
  x= 0, y= height/2,
	curveX = 10,
	curveY = 0,
	targetX = 0,
	xitteration = 0,
	yitteration = 0,
	menuExpanded = false;
	
	blob = $('#blob'),
	blobPath = $('#blob-path'),

	hamburger = $('.hamburger');

	$(this).on('mousemove', function(e){
		x = e.pageX;
		
		y = e.pageY;
	});

	$('.hamburger, .menu-inner').on('mouseenter', function(){
		$(this).parent().addClass('expanded');
		menuExpanded = true;
	});

	$('.menu-inner').on('mouseleave', function(){
		menuExpanded = false;
		$(this).parent().removeClass('expanded');
	});

	function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
		return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
	}

	var hoverZone = 150;
	var expandAmount = 20;
	
	function svgCurve() {
		if ((curveX > x-1) && (curveX < x+1)) {
			xitteration = 0;
		} else {
			if (menuExpanded) {
				targetX = 0;
			} else {
				xitteration = 0;
				if (x > hoverZone) {
					targetX = 0;
				} else {
					targetX = -(((60+expandAmount)/100)*(x-hoverZone));
				}			
			}
			xitteration++;
		}

		if ((curveY > y-1) && (curveY < y+1)) {
			yitteration = 0;
		} else {
			yitteration = 0;
			yitteration++;	
		}

		curveX = easeOutExpo(xitteration, curveX, targetX-curveX, 100);
		curveY = easeOutExpo(yitteration, curveY, y-curveY, 100);

		var anchorDistance = 200;
		var curviness = anchorDistance - 40;

		var newCurve2 = "M60,"+height+"H0V0h60v"+(curveY-anchorDistance)+"c0,"+curviness+","+curveX+","+curviness+","+curveX+","+anchorDistance+"S60,"+(curveY)+",60,"+(curveY+(anchorDistance*2))+"V"+height+"z";

		blobPath.attr('d', newCurve2);

		blob.width(curveX+60);

		hamburger.css('transform', 'translate('+curveX+'px, '+curveY+'px)');
    
    $('h2').css('transform', 'translateY('+curveY+'px)');
		window.requestAnimationFrame(svgCurve);
	}

	window.requestAnimationFrame(svgCurve);

    $('.clause').click(function () {
//        alert(123)
        $('.bby-protocol-box').show();
        $('.mask').show();
        $('.bbyhide').click(function () {
            $('.bby-protocol-box').hide();
            $('.mask').hide();
        });
        $('.mask').click(function () {
            $(this).hide();
            $('.bby-protocol-box').hide();
        })
    });

    function loanWarning(msg,_this) {
        var txt = "<p class='bby-prompt'>"+msg+"</p>";
        _this.parents('li').append(txt);
    };

    var repPhone=/^1[34578]\d{9}$/;//验证11位手机号码，1开头第二位必须为3/4/5/7/8
    function validate() {
        var phone = $.trim($('input[name="phone"]').val());
        if(phone='' || repPhone.test(phone) != true){
            loanWarning("手机号码输入错误",$('input[name="phone"]'));
            $('input[name="phone"]').focus();
            return false;
        }
    };
    //验证码生成，制作测试用，正式需后台修改
    var code;//全局定义验证码
    function createCode() {
        code='';
        var codeLength = 4;//验证码长度
        var checkCode = $('#img-code');
        var selectChar = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','d','h','i','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z'];//所有候选组成验证码的字符
        for( var i=0; i<codeLength; i++ ){
            var charIndex = Math.floor(Math.random()*59);
            code += selectChar[charIndex];
        }
        if (checkCode){
            checkCode.addClass('code');
            checkCode.text(code);
            checkCode.blur();
        }
        $('#validCode').val('')
    }
    createCode();

    $('.reg-btn').click(function () {
		validate();
    })
    // $('#checkCode').click(function () {
    //     createCode();
    // })
});