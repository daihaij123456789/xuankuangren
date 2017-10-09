import React from 'react';
import {Row, Col,Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from '../../../components/PcNewBlock/pc_news_block';
import PCNewsImageBlock from '../../../components/PcNewsImageBlock/pc_news_image_block';
import PCProduct from '../../../components/PcProducts/pc_products';
import './pc_style.less'
 class PCNewsContainer extends React.Component {
 	constructor(props, context) {
        super(props, context);
        this.state={
            key:'top'
        }
    }
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};
		return (
			<div>
				<Row>
					<Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 1 }}></Col>
					<Col xs={{ span: 24 }}  sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 22 }} className="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel {...settings} autoplay>
									<div><img src={require('../../../images/carousel_1.jpg')}/></div>
									<div><img src={require('../../../images/carousel_2.jpg')}/></div>
									<div><img src={require('../../../images/carousel_3.jpg')}/></div>
									<div><img src={require('../../../images/carousel_4.jpg')}/></div>
								</Carousel>
							</div>
							<PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
						</div>
						<Tabs className="tabs_news">
							<TabPane tab="选矿头条" key="1">
								<PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="国际矿业" key="2">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="国内矿业" key="3">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="矿业合作" key="4">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>
						<Tabs className="tabs_product">
							<TabPane tab="选矿产品" key="1">
								<PCProduct/>
							</TabPane>
						</Tabs>
						<div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
							<PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
						</div>
					</Col>
					<Col xs={{ span: 0 }}  sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 1 }}></Col>
				</Row>
			</div>
		);
	};
}
export default PCNewsContainer