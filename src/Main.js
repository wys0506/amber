/**
 * Created by Rychou on 2018/9/23.
 */
import React, {Component} from  'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3'


class Main extends Component{
    state={
        date:{},
    }
    componentDidMount(){
        this.print();
        setInterval(()=>{
                this.time(2018,9,23)
            },1000
        )
        var audio = document.getElementById("audio");
        setTimeout(()=>audio.play(),8500)
    }
    print = ()=>{
        $.fn.autotype = function() {
            var _this=$(this);
            var str=_this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str=str.replace(/(\s){2,}/g,"$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args=arguments;
                var current = str.slice(index, index+1);
                // html标签完整输出,如：<p>
                if (current == '<'){
                    index = str.indexOf('>', index) + 1;
                }
                else{
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length-1){ //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                }else{
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn,200)
            };
            // 延迟1s开始
            setTimeout(timer,1000);
        };
        $("#autotype").autotype();
    }
    time =(year,month,day)=>{
        var dateNow = new Date();
        var dateJNR = new Date(year,month-1,day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR)/(24*3600*1000));
        var hour = parseInt(((dateNow - dateJNR)/(3600*1000))%24);
        var minute = parseInt((dateNow - dateJNR)/(1000*60)%60);
        var second = parseInt((dateNow - dateJNR)/1000%60);
        this.setState({date:{d:d,hour:hour,minute:minute,second:second}});
    };
    render(){
        const date =()=>{
            if (this.state.date.d!==undefined){
                const {d,hour,minute,second} = this.state.date
                return (<p>我们已经在一起: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return(
            <div className="App animated bounceInLeft">
            <div className="date">{date()}</div>
            <div id="autotype">
                <h1 style={{fontWeight:900}}>你好，Amber</h1>
                <p>Jay Chou，我想为她点一首歌——告白气球</p>
              <p>我们俩在一起是在去年的秋分，是福州最美季节的开始</p>
              <p>常青的榕树在街的两旁静默着，一朵茉莉花正轻松的在榕树下摇摆。这一刻我是树，你是花</p>
              <p>给自己立下誓言，对你的爱会像榕树一样四季常青且坚韧，一直守护着你，只属于我的花</p>
              <p>转眼又是七夕，种种原因不能和你共度这最美好的情人节，对不起啦</p>
              <p>每当要给你写情书，脑海里总是会有这样一幅油画闪现</p>
              <p>你笑着转过头来，世界上最美最大的眼睛带着绵绵情意望着我，而我眯着眼以微笑回应</p>
              <p>宝贝，我好想你</p>
              <p>算算时间在一起快两年啦，这次就不煽情的说我们的故事啦</p>
              
              <p>希望以后的每一天我们都有美好的回忆，彼此的将来一起度过</p>
              <p>写到这里，对你的许久思念迸发，迫不及待下一次约会</p>
              <p>一个人走的很快，而两个人走的很远</p>
              <p>故以此网页来纪念我们两年来每一次回眸与拥抱，携手走向下一个秋分季节吧~</p>
              <p>YOU ARE THE APPLE OF MY EYE~</p>

                              <div style={{textAlign:'right'}}>
                    <p>From:吴永硕</p>
                    <p>2019年8月7日</p>
                </div>
            </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main