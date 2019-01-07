/**
 * desc: Common Footer Script
 * author: tony dream
 * date鐚�2014/12/29
 */
$(function() {
	var WebMain = {
		init: function() {
			this.injectCode();
			this.makeNav();
		},
		/**
		 * ��篁銀撮��
		 * @return {[type]} [description]
		 */
		injectCode: function() {
			// google ads
			var buf = [];
			buf.push('<script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');
			buf.push('<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-0608155192548477" data-ad-slot="8305246055"></ins>');
			buf.push('<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
			$('.footer-banner').html(buf.join(''));

			// �劽���貴
			/*buf.push('<script type="text/javascript">var cpro_id = "u2487889";</script><script src="http://cpro.baidustatic.com/cpro/ui/f.js" type="text/javascript"></script>');
			$('body').append(buf.join(''));
			$('.footer-banner').remove();*/

			/*******************************************************/

			var bds = [];
			/*�上墾膸�莅�*/
			bds.push('<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?3088a94e3b69516f6df1098fc49847c9";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script>');
			/*�上墾��篋�*/
			bds.push('<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"1","bdPos":"right","bdTop":"100"}};with(document)0[(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date()/36e5)];</script>');
			$('body').append(bds.join(''));
		},
		/**
		 * 紊顔�����
		 * @return {[type]} [description]
		 */
		makeNav: function() {
			var leftArray = [{
				title: '膕冗��12筝��九��� CSS3 ��������羣�����',
				link: 'http://www.yyyweb.com/3103.html'
			}, {
				title: 'Web 綣���筝㊤�絎�����10筝���������羣���筝�莉純��',
				link: 'http://www.yyyweb.com/350.html'
			}, {
				title: '8筝���羃睡�� HTML5 & CSS3 ��������羣���筝�莉純��',
				link: 'http://www.yyyweb.com/377.html'
			}, {
				title: '臀�腴�綣���筝㊤��� jQuery ��������羣�����',
				link: 'http://www.yyyweb.com/2818.html'
			}, {
				title: '9筝��弱�絖���� HTML5 ��������羣�����',
				link: 'http://www.yyyweb.com/3114.html'
			}];
			var rightArray = [{
				title: '10罨上�絅順���� jQuery �丞��羯����篁�',
				link: 'http://www.yyyweb.com/370.html'
			}, {
				title: '臂�鐚�茹�綏�������丞��羯���筝㊦��綺���',
				link: 'http://www.yyyweb.com/237.html'
			}, {
				title: '莇�����蕁級�√���√���紙��������羣�����',
				link: 'http://www.yyyweb.com/demo/page-transitions/'
			}, {
				title: '緇��欠��臀�蕁笈捷�颷�羝≦���祉����羣�����',
				link: 'http://www.yyyweb.com/demo/sidebar-transitions/'
			}, {
				title: '篏睡�� CSS3 絎��ｰ 3D �丞��羯�������',
				link: 'http://www.yyyweb.com/demo/slice-box/'
			}];
			var left = leftArray[1],
				right = leftArray[2];
			// var left = leftArray[parseInt(Math.random() * 5)];
			// var right = rightArray[parseInt(Math.random() * 5)];
			$('body').append('<div class="top-banner clearfix"><div class="fl"><a href="' + left.link + '" target="_blank">&lt;&lt;&nbsp;' + left.title + '</a></div><div class="fr"><a href="' + right.link + '" target="_blank">' + right.title + '&nbsp;&gt;&gt;</a></div></div>');
		}
	};
	WebMain.init();
	/*iframe����綺�*/
	/*$("#iframe-hoster").load(function() {
	  var mainheight = $(this).contents().find("body").height() + 5;
	  $(this).height(mainheight);
	});*/
});
