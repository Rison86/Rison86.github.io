/**

 * 分页函数

 * pno--页数

 * psize--每页显示记录数

 * 分页部分是从真实数据行开始，因而存在加减某个常数，以确定真正的记录数

 * 纯js分页实质是数据行全部加载，通过是否显示属性完成分页功能

 **/

goPage = function(pno, psize, pageObj, pageChi, pageMenu) {

    var itable = $(pageObj);

    var num = itable.find(pageChi).length; //表格行数
    var totalPage = 0; //总页数
    var pageSize = psize; //每页显示行数
    if (num / pageSize > parseInt(num / pageSize)) {

        totalPage = parseInt(num / pageSize) + 1;

    } else {

        totalPage = parseInt(num / pageSize);

    }

    var currentPage = pno; //当前页数
    var startRow = (currentPage - 1) * pageSize; //开始显示的行   
    var endRow = currentPage * pageSize; //结束显示的行   
    endRow = (endRow > num) ? num: endRow;

    for (var i = 0; i < num; i++) {

        var irow = itable.find(pageChi).eq(i);

        if (i >= startRow && i < endRow) {

            irow.css('display', 'block');

        } else {

            irow.css('display', 'none');

        }

    }


    //var tempStr = "共"+(num-1)+"条记录 分"+totalPage+"页 当前第"+currentPage+"页";

    var tempStr = "";

    if (currentPage > 1) {

        tempStr += '<a href="javascript:;" class="prevPage" onClick="goPage(' + (currentPage - 1) + ',' + psize+ ',' + '\''+ pageObj +'\','+ '\''+ pageChi + '\',\''+ pageMenu +'\')"><img src="images/news/arrowl.png"></a>'

    } else {

        tempStr += '<a href="javascript:;" class="prevPage"><img src="images/news/arrowl.png"></a>';

    }
				//中间页码
				/*if(currentPage != 1 && currentPage >= 4 && totalPage != 4){
					tempStr += '<a href="javascript:;" onClick="goPage(' + 1 + ',' + psize+ ',' + '\''+ pageObj +'\','+ '\''+ pageChi + '\',\''+ pageMenu +'\')">'+1+'</a>';
				}
				if(currentPage-2 > 2 && currentPage <= totalPage && totalPage > 5){
					tempStr += '<span>...</span>';
				}*/
                if(currentPage != 1 && currentPage >= 4 && totalPage != 4){
                    tempStr += '<a href="javascript:;" onClick="goPage(' + 1 + ',' + psize+ ',' + '\''+ pageObj +'\','+ '\''+ pageChi + '\',\''+ pageMenu +'\')">首页</a>';
                }
				var start = currentPage -2,end = currentPage+2;
				if(currentPage==1){end = currentPage+3;}
				if((start > 1 && currentPage < 4)){
					end++;
				}
				if(currentPage < 3){end++;}
				
				if(currentPage > totalPage-4 && currentPage >= totalPage){
					start--;
				}
				if(currentPage>= totalPage-1){start--;}
				
				for (;start <= end; start++) {
					if(start <= totalPage && start >= 1){
						if(start != currentPage){
							tempStr += '<a href="javascript:;" onClick="goPage(' + (start) + ',' + psize+ ',' + '\''+ pageObj +'\','+ '\''+ pageChi + '\',\''+ pageMenu +'\')">'+ start +'</a>';
						}else{
							tempStr += '<a class="cur">'+ start +'</a>';
						}
					}
				}
                if(currentPage != totalPage && currentPage < totalPage -2  && totalPage != 4){
                    tempStr += '<a href="javascript:;"  onClick="goPage(' + totalPage + ',' + psize+ ',' + '\''+ pageObj +'\','+ '\''+ pageChi + '\',\''+ pageMenu +'\')">尾页</a>';
                }
				/*if(currentPage + 2 < totalPage - 1 && currentPage >= 1 && totalPage > 5){
					tempStr += '<span>...</span>';
				}
				if(currentPage != totalPage && currentPage < totalPage -2  && totalPage != 4){
					tempStr += '<a href="javascript:;"  onClick="goPage(' + totalPage + ',' + psize+ ',' + '\''+ pageObj +'\','+ '\''+ pageChi + '\',\''+ pageMenu +'\')">'+totalPage+'</a>';
				}*/


    /*for (var j = 1; j <= totalPage; j++) {
        if (j == currentPage) {
            tempStr += '<a class="cur" href="javascript:;">' + j +'</a>';
        } else {
            tempStr += '<a href="javascript:;" onClick="goPage(' + (j) + ',' + psize + ')">' + j + '</a>';
        }

    }*/

    if (currentPage < totalPage) {

        tempStr += '<a href="javascript:;" class="nextPage" onClick="goPage(' + (currentPage + 1) + ',' + psize+ ',' + '\''+ pageObj +'\','+ '\''+ pageChi + '\',\''+ pageMenu +'\')"><img src="images/news/arrowr.png"></a>';

    } else {

        tempStr += '<a href="javascript:;" class="nextPage"><img src="images/news/arrowr.png"></a>';

    }

    /*if(currentPage>1){

tempStr += "<a href='javascript:;'" + " onClick='goPage("+(1)+","+psize+")'>首页</a>";

}else{

tempStr += "首页";

}

if(currentPage<totalPage){

tempStr += "<a href='javascript:;'" + " onClick='goPage("+(totalPage)+","+psize+")'>尾页</a>";

}else{

tempStr += "尾页";

}*/
    //20170427
    /**/$(pageObj).find(pageMenu).html( tempStr );

}