import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PcHeader from '../../components/PcHeader/pc_header'
import PcFooter from '../../components/PcFooter/pc_footer'
import PCNewsImageBlock from '../../components/PCNewsImageBlock/pc_news_image_block';
import PcCommonComments from '../../components/PcCommonComments/pc_common_comments';
import {Row, Col, BackTop} from 'antd';
class PcNewsDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            newsItem: ''
        };
    }
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({newsItem: json});
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        });
    };
    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    };
    render() {
        return (
            <div id="react-content">
                <div className="page-wrapper">
                    <PcHeader type="introduce"/>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={14} className="container">
                            <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                            <hr/>
                            <PcCommonComments uniquekey={this.props.params.uniquekey}/>
                        </Col>
                        <Col span={6}>
                            <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <PcFooter/>
                    <BackTop/>
                </div>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PcNewsDetails)