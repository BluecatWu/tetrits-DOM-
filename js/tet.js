/**
 * Created by Administrator on 2016/7/21.
 */
//定义尺寸,当前主角,下一个主角,时间,时间间隔,墙数组,状态,游戏结束,运行中,暂停,等级,每多少行升一级,每升一级减多少interval,
//最小时间间隔(最快下落速度),消除行数,当前得分,分数数组,

var tetris=
{
    SIZE:Shape.prototype.size,
    currentShape:null,
    nextShape:null,
    timer:null,
    interval:null,
    wall:[],
    state:null,
    isGameOver:0,
    Running:1,
    PAUSE:2,
    level:null,
    LN:50,
    INTERAL:100,
    min-interval:100,
    lines:null,
    score:null,
    SCORES:[10,30,60,100]
//游戏开始
//如果有gameover界面,就清除gameover界面
//当前游戏状态为运行中,当前时间间隔为500,当前等级是1,当前消除行是0,当前得分为0(同时反映在页面上),
//清空游戏区域,清空下一个区域//将墙数组初始化为20行10列的数组
//在displayArea new一个新主角对象保存为currentShape
//在nextArea new一个新主角对象保存为nextShape
//将预览区的对象居中
//调用定时器回调函数
//保留this
//绑定键盘事件
//如果当前状态为运行中 且canMove("*") 当前shape 左移
//如果当前状态为运行中 且rotate("*")
//32键(空格键)为直接下落到最下方
//如果当前状态运行中,反复执行如果canMove(d) move(d)
//80如果当前状态为运行中,执行pause()方法
//67如果当前状态为pause,执行myContinue方法
//81(q) 如果运行中,执行quit方法
//83(s) 如果游戏结束 执行start方法

    gamestart:function
    {
        if(playground.lastElementChild.nodeName=="img")
        {
            playground.removeChild(playground.lastElementChild);
        }
        this.state=this.running;
        this.interval=500;
        this.level=1
        this.lines=0;
        this.score=0;
        lines.innerHTML="0";
        scores.innerHTML="0";
        level.innerHTML="1";
        displayArea.innerHTML="";
        nextArea.innerHTML="";
        for(r=0;r<20;r++)
        {
            this.wall[r]=new Array(10);
        }
        this.currentShape=new Shape(displayArea);
        this.nextShape=new shape(nextArea);
        this.nextShape.center();//center方法
        this.timerFun();
        var me=this;

        window.onkeydown= function ()
        {
            switch(e.keyCode)
            {
                case 37:me.state==me.RUNNING&&me.currentShape.canMove("l")&&me.currentShape.move("l");break;
                case 39:me.state==me.RUNNING&&me.currentShape.canMove("r")&&me.currentShape.move("r");break;
                case 40:me.state==me.RUNNING&&me.currentShape.canMove("d")&&me.currentShape.move("d");break;
                case 38:me.state==me.RUNNING&&me.currentShape.rotate("r");break;
                case 90:me.state==me.RUNNING&&me.currentShape.rotate("l");break;

                case 32:if(me.state==me.RUNNING){while(me.currentShape.canMove("d")){me.currentShape.move("d")}};break;
                case 80:me.state==me.RUNNING&&me.pause();break;
                case 67:me.state==me.PAUSE&&me.myContinue();break;
                case 81:me.state==me.RUNNING&&me.quit();break;
                case 83:me.state==me.GAMEOVER&&me.start();break;
            }
        }
    }
}

//游戏引擎都是定时器
//定义Tetris定时器回调函数,可实现shape下落动画

//如果当前状态是RUNNING
//如果当前主角canMove('d')
//move('d') ,设置定时器绑定回调函数
//否则
//调用落入墙中函数
//如果游戏结束,quit
//否则
//用nextShape的type和state来创建新的currentShape
//将预览区清空
//创建新的预览对象 居中  删除所有行
    timerFun:function ()
    {
        if(this.state==this.Running)
        {
            if(this.currentShape.canMove("d"))
            {
                this.currentShape.move("d")
                this.timer=setTimeout(this.timerFun.bind(this),this.interval)
            }
            else
            {
                this.landIntoWall();
                if(this.state==this.isGameOver)
                {
                    this.quit();
                }
                else
                {
                    this.deleteRows();
                    this.currentShape= new Shape(displayArea,nextShape.type,nextShape.state);
                    nextArea.innerHTML="";
                    this.nextShape=new Shape(nextArea)
                    this.nextShape.center()
                }
            }
        }

    }




//定义落入墙中函数
//遍历imgs,同时声明img,r,c
//将imgs保存如img中,
//取得行下标
//列下标
//如果r>=0 ,将img保存强中同样rc位置处


landIntoWall:function ()
{
    for(var i= 0,img= 0,r= 0,c=0;i<4;i++)
    {
        img=this.currentShape.imgs[i];
        r=parseFloat(img.style.top)/this.SIZE
        C=parseFloat(img.style.left)/this.SIZE
        r>=0&&(this.wall[r][c]=img)
    }
}


//判断游戏是否结束
//将下一个主角当前形状当前状态保存如state中
//遍历 同时声明r c R
//将当前主角的下标保存到R
//如果R<0 返回ture  游戏结束
//将下一个对象当前状态的left top值+top和left分别保存如rc中
//如果r>=0且下一个对象人一个方块在墙中不为空,则游戏结束
//否则返回false

    //判断空白墙方法
    //遍历墙中最后一个空白墙
    //如果有空白墙返回r否则返回-1


    //删除一行方法
    //遍历c删除满足row的一整行
    //将改行以上的所有行下移
    //




    //删除行方法
    //初始化r=19 i位0  endR为判断空白墙的返回值
    //定义deleteRows定时器回调函数,可实现逐一消行的动画
    //当r>endR时,遍历每一行的c
    //如果c==0 ,删除当前行 i++(统计当前消灭的行数)
    //lines++,lines.html=lines
    //如果消灭的行数和ln取余后==0
    //level++ level.innerhtml=level
    //this.interval-=this.LINTERVAL
    //this.interval<this.MIN 就将MIN赋值给interval
    //退出循环
    //r--
    //如果r==endr
    //记录分数,回调函数
    //否则
    //调用回调函数

//调用deleteRows定时器回调函数



    //暂停方法
    //将当前状态改为pause
    //new一个img
//img的src为img/pause.png
    //为playground添加img


    //继续方法
    //将当前状态改为running
    //移除最后一个子元素
    //启用定时器


    //退出方法
    //将定时器改为null
    //将当前状态改为游戏结束
    //new一个img
//img.src=img/gameove
    //将img添加到playground中
