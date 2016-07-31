/**
 * Created by Administrator on 2016/7/21.
 */

//创建主角对象,每个对象都有三个参数,1父节点2对象类型type3对象状态,确定当前主角对象的父节点,轴心方块相对父节点的初始左边距,轴心方块相对父节点的初始上边距
//通过参数指定或随机指定对象的初始形态
//获取当前形状的状态数组
//通过参数指定或随机指定当前形态的初始状态
//创建对象所属的4个方块节点组成的数组imgs
//根据当前的形状和状态创建4个img节点,并将其挂到DOM树上
//设置当前4个img节点的src,left,top,最后将img放入frag,插入当前父节点中

function Shape(parent,type,state)
{
    this.parent=parent;
    this.left=4;
    this.top=1;
    this.type= type!=undefined?type:parseFloat(Math.random()*7);
    this.state=state;
    this.state= state!=undefined?state:parseFloat(Math.random*4);
    imgs=[];
    var frag=document.createDocumentFragment()
    for(var i=0;i<4;i++)
    {
        var img=this.imgs[i]=new Image();
        img.src=this.types[this.type].src;
        //初始方块的位置为当前状态的c坐标+初始化的left坐标再乘以size
        img.style.left=this.SIZE*(states[this.state[i][0]]+this.left)+"px"
        img.style.top=this.SIZE*(states[this.state[i][1]]+this.top)+"px"
        frag.appendChild(img)
    }
    this.parent.appendChild(frag);//这里就参数父节点的作用
}



//定义所有的形状和src
Shape.prototype.types=[
    {src:"img/O.png",states:[[[0,0],[1,0],[0,1],[1,1]],[[0,0],[0,1],[-1,0],[-1,1]],[[0,0],[-1,0],[0,-1],[-1,-1]],[[0,0],[0,-1],[1,0],[1,-1]]]},
    {src:"img/I.png",states:[[[-1,0],[0,0],[1,0],[2,0]],[[0,-1],[0,0],[0,1],[0,2]],[[1,0],[0,0],[-1,0],[-2,0]],[[0,1],[0,0],[0,-1],[0,-2]]]},
    {src:"img/S.png",states:[[[0,0],[1,0],[-1,1],[0,1]],[[0,0],[0,1],[-1,-1],[-1,0]],[[0,0],[-1,0],[1,-1],[0,-1]],[[0,0],[0,-1],[1,1],[1,0]]]},
    {src:"img/Z.png",states:[[[-1,-1],[0,-1],[0,0],[1,0]],[[1,-1],[1,0],[0,0],[0,1]],[[1,1],[0,1],[0,0],[-1,0]],[[-1,1],[-1,0],[0,0],[0,-1]]]},
    {src:"img/T.png",states:[[[-1,0],[0,0],[1,0],[0,1]],[[0,-1],[0,0],[0,1],[-1,0]],[[1,0],[0,0],[-1,0],[0,-1]],[[0,1],[0,0],[0,-1],[1,0]]]},
    {src:"img/J.png",states:[[[0,-1],[0,0],[0,1],[-1,1]],[[1,0],[0,0],[-1,0],[-1,-1]],[[0,1],[0,0],[0,-1],[1,-1]],[[-1,0],[0,0],[1,0],[1,1]]]},
    {src:"img/L.png",states:[[[0,-1],[0,0],[0,1],[1,1]],[[1,0],[0,0],[-1,0],[-1,1]],[[0,1],[0,0],[0,-1],[-1,-1]],[[-1,0],[0,0],[1,0],[1,-1]]]},
];

//定义每个方块的尺寸

Shape.prototype.SIZE=26;
//以方向作为参数,定义对象的移动方法
//如果direction是d就返回top否则返回left
//如果direction是l就返回 - 否则返回 +
//将待执行的代码拼接为字符串,再放入eval执行
//遍历imgs的leftortop 为 当前imgs的leftortop+plusOrMinus+size+px
//执行eval


//以方向为参数,定义对象能否移动的方法

//遍历主角的所在的当前格保存在r和c
//如果方向是d且r==19或者方向是l且c==9或者方向是l且不是c,返回false
//否则  将如果方向是d就返回1否则返回0的值加r保存在r中
//      将如果方向是l就返回-1否则返回如果方向是r就返回1否则返回-1的值+c保存在c中
//      如果r>=0且当前墙的rc有格,返回false
//返回true



//以方向为参数,定义对象的旋转方法
//获取数组的状态,计算数组的长度
//根据方向参数,确定旋转的状态
//如果方向是r,当前状态为当前状态+1在取余数组的长度
// 否则当前状态-1在取余数组的长度 当前状态如果<0就当前状态就+=数组长度


//根据确定后的状态修改对象的四个img节点的left和top属性
//将主角当前状态的r+top保存在r中 ,将主角当前状态的c+left保存在c中
//将主角的left值设为 c*格子尺寸
//将主角的top值设为 r*格子尺寸
//如果旋转后的对象越界或者与墙冲突,再以反方向返回去




//定义对象在所属的父容器中水平且垂直居中的方法,专用于nextShape
//获取当前状态
//遍历当前状态的rc,同时初始化最大最小x y值,
//minx保存r是负值 maxx保存r是正  miny同上
//获取父元素的width保存在parentwidth中
//获取父元素的height保存在parentheight中
//主角宽为maxx-minx+1在乘以格子宽度
//主角高同上
//当前主角的left值为	this.imgs[i].style.left=this.SIZE*(state[i][0]-minX)+(parentWidth-shapeWidth)/2+"px";
// top   this.imgs[i].style.top=this.SIZE*(state[i][1]-minY)+(parentHeight-shapeHeight)/2+"px";


