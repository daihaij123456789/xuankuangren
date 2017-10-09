import React from 'react'
import {Row,Col,Carousel} from 'antd'
import PcCaseArtcie from './CaseArticle/pc_case_artcie'
import './pc_pattern_main.less'
import {Link} from 'react-router'
class PcPatternMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state= {          
            SubMenuArr:[]
        }
    }
  componentDidMount() {
       var myFetchOptions = {
                method: 'GET'
            };
        fetch("api/admin/casecategories/categories" , myFetchOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json.caseCategories)
            this.setState({SubMenuArr:json.caseCategories});  
        });
        
    }
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        const mainbotleft =  this.state.SubMenuArr.length>0 ? 
                   <div className="mainbotleft">
                                <div className="mainbotlefttop">
                                    <div className="mainbotlefttopleft"></div>
                                    <div className="mainbotlefttopmid">{this.state.SubMenuArr[0].name}</div>
                                    <div className="mainbotlefttopright">
                                        <div id="ysdtmore"><Link href="" target="_blank">更多</Link></div>
                                    </div>
                                </div>
                                <div className="Contentbox_blue">
                                    <div id="ys_news">
                                        <ul className="mainul" id="showYSDT">
                                        {
                                          this.state.SubMenuArr[0].cases.map((itme)=>{
                                            var meta = itme.meta.createAt.slice(0,10)
                                            return <li key={itme._id}><span className="mainleft"><Link className="mainulblue" href={`/case/${itme._id}`} title={itme.name} target="_blank">{itme.name}</Link></span><span className="mainright">[{meta}]</span></li>
                                          })  
                                        }                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>        
                :""
        const mainbotmid = this.state.SubMenuArr.length>0 ? <div className="mainbotmid">
                                <div className="mainbotlefttop">
                                    <div className="mainbotlefttopleft"></div>
                                    <div className="mainbotlefttopmid">{this.state.SubMenuArr[1].name}</div>
                                    <div className="mainbotlefttopright">
                                    <div id="ysjgmore"><a href="/news/getMoreProNews.am?productTwoID=5&amp;jspBarNewsType=allPrice" target="_blank">更多</a></div>
                                    </div>
                                </div>
                                <div className="Contentbox_blue">
                                    <div>
                                        <ul className="mainul" id="showYSJG">
                                        {
                                          this.state.SubMenuArr[1].cases.map((itme)=>{
                                            var meta = itme.meta.createAt.slice(0,10)
                                            return <li key={itme._id}><span className="mainleft"><Link className="mainulblue" href={`/case/${itme._id}`} title={itme.name} target="_blank">{itme.name}</Link></span><span className="mainright">[{meta}]</span></li>
                                          })  
                                        }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            :""
        const mainbotright = this.state.SubMenuArr.length>0 ? <div className="mainbotright">
                                <div className="mainbotlefttop">
                                    <div className="mainbotlefttopleft"></div>
                                    <div className="mainbotlefttopmid">{this.state.SubMenuArr[2].name}</div>
                                    <div className="mainbotlefttopright">
                                        <div id="ystjmore"><a href="/news/getMoreProNews.am?productTwoID=8&amp;jspBarNewsType=statData" target="_blank">更多</a></div>
                                    </div>
                                </div>
                                <div className="Contentbox_blue">
                                    <div>
                                        <ul className="mainul" id="showYSTJ">
                                        {
                                          this.state.SubMenuArr[2].cases.map((itme)=>{
                                            var meta = itme.meta.createAt.slice(0,10)
                                            return <li key={itme._id}><span className="mainleft"><Link className="mainulblue" href={`/case/${itme._id}`} title={itme.name} target="_blank">{itme.name}</Link></span><span className="mainright">[{meta}]</span></li>
                                          })  
                                        }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            :""            
        return (
            <div className="main-warpper">
                <div style={{background:'#fff',marginLeft:'50px',marginRight:'50px'}}>
                    <div>
                        <Row >
                            <Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 4 }} lg={{ span: 4 }}>
                                <div className="textcenter">
                                    <div id="steelone" className="productone">
                                    <img src={require("../../../images/leftprojb.gif")}/>
                                    </div>
                                    <div id="steelthree" className="productthree">
                                        <ul>
                                            <li><a className="productthreea" id="threeId4" href="http://www.asianmetal.cn/product/4.html">铝</a></li>
                                            <li><a className="productthreea" id="threeId5" href="http://www.asianmetal.cn/product/5.html">铜</a></li>
                                            <li><a className="productthreea" id="threeId6" href="http://www.asianmetal.cn/product/6.html">锌</a></li>
                                            <li><a className="productthreea" id="threeId7" href="http://www.asianmetal.cn/product/7.html">铅</a></li>
                                            <li><a className="productthreea" id="threeId8" href="http://www.asianmetal.cn/product/8.html">锡</a></li>
                                            <li><a className="productthreea" id="threeId9" href="http://www.asianmetal.cn/product/9.html">镍</a></li>
                                            <div className="clearfloat"></div>
                                        </ul>
                                    </div>
                                </div>
                                <div className="textcenter">
                                    <div id="steelone" className="productone">
                                    <img src={require("../../../images/leftproxjs.gif")}/>
                                    </div>
                                    <div id="steelthree" className="productthree">
                                        <ul>
                                            <li><a className="productthreea" id="threeId47" href="http://www.asianmetal.cn/product/47.html">硅</a></li>
                                            <li><a className="productthreea" id="threeId40" href="http://www.asianmetal.cn/product/40.html">镁</a></li>
                                            <li><a className="productthreea" id="threeId53" href="http://www.asianmetal.cn/product/53.html">钨</a></li>
                                            <li><a className="productthreea" id="threeId41" href="http://www.asianmetal.cn/product/41.html">钼</a></li>
                                            <li><a className="productthreea" id="threeId52" href="http://www.asianmetal.cn/product/52.html">钒</a></li>
                                            <li><a className="productthreea" id="threeId51" href="http://www.asianmetal.cn/product/51.html">钛</a></li>
                                            <li><a className="productthreea" id="threeId44" href="http://www.asianmetal.cn/product/44.html">锑</a></li>
                                            <li><a className="productthreea" id="threeId164" href="http://www.asianmetal.cn/product/164.html">锰</a></li>
                                            <li><a className="productthreea" id="threeId32" href="http://www.asianmetal.cn/product/32.html">钴</a></li>
                                            <li><a className="productthreea" id="threeId46" href="http://www.asianmetal.cn/product/46.html">硒</a></li>
                                            <li><a className="productthreea" id="threeId38" href="http://www.asianmetal.cn/product/38.html">铟</a></li>
                                            <li><a className="productthreea" id="threeId29" href="http://www.asianmetal.cn/product/29.html">铋</a></li>
                                            <li><a className="productthreea" id="threeId35" href="http://www.asianmetal.cn/product/35.html">锗</a></li>
                                            <li><a className="productthreea" id="threeId34" href="http://www.asianmetal.cn/product/34.html">镓</a></li>
                                            <li><a className="productthreea" id="threeId49" href="http://www.asianmetal.cn/product/49.html">钽</a></li>
                                            <li><a className="productthreea" id="threeId42" href="http://www.asianmetal.cn/product/42.html">铌</a></li>
                                            <li><a className="productthreea" id="threeId31" href="http://www.asianmetal.cn/product/31.html">镉</a></li>
                                            <li><a className="productthreea" id="threeId33" href="http://www.asianmetal.cn/product/33.html">铬</a></li>
                                            <li><a className="productthreea" id="threeId55" href="http://www.asianmetal.cn/product/55.html">锆</a></li>
                                            <li><a className="productthreea" id="threeId27" href="http://www.asianmetal.cn/product/27.html">砷</a></li>
                                            <li><a className="productthreea" id="threeId39" href="http://www.asianmetal.cn/product/39.html">锂</a></li>
                                            <li><a className="productthreea" id="threeId50" href="http://www.asianmetal.cn/product/50.html">碲</a></li>
                                            <li><a className="productthreea" id="threeId30" href="http://www.asianmetal.cn/product/30.html">钙</a></li>
                                            <li><a className="productthreea" id="threeId37" href="http://www.asianmetal.cn/product/37.html">汞</a></li>
                                            <li><a className="productthreea" id="threeId48" href="http://www.asianmetal.cn/product/48.html">锶</a></li>
                                            <li><a className="productthreea" id="threeId43" href="http://www.asianmetal.cn/product/43.html">铼</a></li>
                                            <li><a className="productthreea" id="threeId57" href="http://www.asianmetal.cn/product/57.html">银</a></li>
                                            <div className="clearfloat"></div>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }}  sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }}>
                                
                                <div id="midhot">
                                    <div id="hotleft">
                                        <div id="hotlefttop">
                                            <div id="hotlefttopleft" class="main_top_char">矿业新闻</div>
                                            <div id="hotlefttopright">
                                                <div id="gcdtmore"><a href="/news/getMoreProNews.am?productOneID=1&amp;jspBarNewsType=market" target="_blank">更多</a></div>
                                            </div>
                                        </div>
                                        <div id="hotleftmain">
                                            <ul class="mainul" id="showGCDT">
                                            <li><span class="mainleft"><a href="/news/data/1997424/" title="C919客机再签130架新订单" target="_blank">C919客机再签130架新订单</a></span><span class="mainright">[09-20]</span></li>
                                            <li><span class="mainleft"><a href="/news/data/1997419/" title="加拿大远方资源获得佐罗锂矿钻探许可证" target="_blank">加拿大远方资源获得佐罗锂矿钻探许可证</a></span><span class="mainright">[09-20]</span></li>
                                            <li><span class="mainleft"><a href="/news/data/1997416/" title="巴斯夫宣布16亿欧元收购索尔维尼龙业务" target="_blank">巴斯夫宣布16亿欧元收购索尔维尼龙业务</a></span><span class="mainright">[09-20]</span></li>
                                            <li><span class="mainleft"><a href="/news/data/1997288/" title="万尼迪提卡特搁置复产铬矿" target="_blank">万尼迪提卡特搁置复产铬矿</a></span><span class="mainright">[09-20]</span></li>
                                            <li><span class="mainleft"><a href="/news/data/1997282/" title="中铝山西分公司10月份氧化铝产量将增加4万吨" target="_blank">中铝山西分公司10月份氧化铝产量将增加4万吨</a></span><span class="mainright">[09-20]</span></li>
                                            <li><span class="mainleft"><a href="/news/data/1997281/" title="万宁益源丰拟于国庆节后恢复锆英砂生产" target="_blank">万宁益源丰拟于国庆节后恢复锆英砂生产</a></span><span class="mainright">[09-20]</span></li>
                                            <li><span class="mainleft"><a href="/news/data/1997279/" title="澳大利亚铝土矿公司提前发货3万吨铝土矿" target="_blank">澳大利亚铝土矿公司提前发货3万吨铝土矿</a></span><span class="mainright">[09-20]</span></li>
                                            <li><span class="mainleft"><a href="/news/data/1997278/" title="寒锐钴业：公司目前不是特斯拉正极材料供应商" target="_blank">寒锐钴业：公司目前不是特斯拉正极材料供应商</a></span><span class="mainright">[09-20]</span></li></ul>
                                        </div>
                                    </div>
                                    <div id="hotright">
                                        <div id="hotrighttop">
                                            <div id="hotrighttopleft" class="main_top_char">技术专家</div>
                                            <div id="hotrighttopmid"></div>
                                        </div>
                                        <div id="hotleftmain">
                                            <Carousel {...settings}>
                                                <div>
                                                <div className="clearblock">
                                                <img src="http://img.asianmetal.cn/img_interviews/2017/index_tou_wangpengcheng.gif" />
                                                </div>
                                                <div class="hotrightmaincon">
                                                    <ul>
                                                    <li class="hotrightmaincona"><a href="/interviews/index.shtml" target="_blank"><strong>环保将成为影响第四季度铬盐行情主要因素之一</strong></a></li>
                                                    <li class="hotrightmainconaa"><a href="/interviews/index.shtml" target="_blank"><span class="hotspan">----专访湖北振华化学股份有限公司华北区销售经理谢镇斌</span></a></li>
                                                    </ul>
                                                </div></div>
                                                <div>
                                                <div className="clearblock">
                                                <img src="http://img.asianmetal.cn/img_interviews/2017/index_tou_xiezhenbin.gif"/>
                                                </div>
                                                <div class="hotrightmaincon">
                                                    <ul>
                                                    <li class="hotrightmaincona"><a href="/interviews/index.shtml" target="_blank"><strong>环保将成为影响第四季度铬盐行情主要因素之一</strong></a></li>
                                                    <li class="hotrightmainconaa"><a href="/interviews/index.shtml" target="_blank"><span class="hotspan">----专访湖北振华化学股份有限公司华北区销售经理谢镇斌</span></a></li>
                                                    </ul>
                                                </div>
                                                </div>
                                                {/*<div><img src={require('../../../images/carousel_3.jpg')}/></div>
                                                <div><img src={require('../../../images/carousel_4.jpg')}/></div>*/}
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>




















                                <div className="mainbot">
                                    {mainbotleft}
                                    {mainbotmid}
                                    {mainbotright}
                                    <div className="clearfloat"></div>
                                </div>
                                <div className="mainbot">
                                    {mainbotleft}
                                    {mainbotmid}
                                    {mainbotright}
                                    <div className="clearfloat"></div>
                                </div>
                                <div className="mainbot">
                                    {mainbotleft}
                                    {mainbotmid}
                                    {mainbotright}
                                    <div className="clearfloat"></div>
                                </div>
                                <div className="mainbot">
                                    {mainbotleft}
                                    {mainbotmid}
                                    {mainbotright}
                                    <div className="clearfloat"></div>
                                </div>
                            </Col>
                            <Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 4 }} lg={{ span: 4 }}>
                                <div className="eventcenter">
                                    <div className="eventstop"></div>
                                    <div className="eventslist">
                                        <h4><a href="http://www.asianmetal.cn/Events_2017/2017SbF/Index_2017SbF.asp" target="_blank">第五届国际锑业论坛</a></h4>
                                        <h5>2017年6月8-9日 湖南 长沙</h5>
                                        <h4><a href="http://www.asianmetal.cn/Events_2017/2017SnF/Index_2017SnF.asp" target="_blank">2017国际锡矿产业高峰论坛</a></h4>
                                        <h5>2017年6月1-2日 湖南 张家界</h5>
                                        <h4><a href="http://www.asianmetal.cn/Events_2017/2017SiF/Index_2017SiF.asp" target="_blank">第五届国际硅业论坛</a></h4>
                                        <h5>2017年5月25-26日 云南 昆明</h5>
                                        <h4><a href="http://www.asianmetal.cn/Events_2017/2017ARMS/Index_2017ARMS.asp" target="_blank">2017国际电解铝原料峰会</a></h4>
                                        <h5>2017年5月18-20日 海南 三亚</h5>
                                        <h4><a href="http://www.asianmetal.cn/Events_2017/2017RES/Index_2017RES.asp" target="_blank">第九届国际稀土峰会</a></h4>
                                        <h5>2017年5月11-12日 中国 上海</h5>
                                        <h4><a href="http://www.asianmetal.cn/Events_2017/2017SeMnS/Index_2017SeMnS.asp" target="_blank">第五届国际硒锰论坛</a></h4>
                                        <h5>2017年4月20-21日 湖南 长沙</h5>
                                        <h4><a href="http://www.asianmetal.cn/Events_2017/2017InGeGaF/Index_2017InGeGaF.asp" target="_blank">第十届国际铟锗镓论坛</a></h4>
                                        <h5>2017年4月19-21日 福建 厦门</h5>
                                        <h4><a href="http://www.asianmetal.cn/Events_2017/2017MgF/Index_2017MgF.asp" target="_blank">第六届国际镁业论坛</a></h4>
                                        <h5>2017年4月12-14日 云南 昆明</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default PcPatternMain