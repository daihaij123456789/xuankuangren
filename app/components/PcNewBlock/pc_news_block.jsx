import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router'
class PCNewsBlock extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {
			news: ''
		};
    }
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			this.setState({news: json})
		});
		/*fetch('api/introduce?&type=' + 'top' , myFetchOptions)
		.then(response => response.json())
		.then(json => {
			var newsArr = json.categories.news.map((elem,index)=> {
				if(index < Number(this.props.count)){
					return elem;
				}
				
			})
			console.log(newsArr);
		});*/
	};
	render() {
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index}>
					<Link to={`details/${newsItem.uniquekey}`} target="_blank">
						{newsItem.title}
					</Link>
				</li>
			))
			: '没有加载到任何新闻';
		return (
			<div className="topNewsList">
				<Card>
					<ul>
						{newsList}
					</ul>
				</Card>
			</div>
		);
	};
}

export default PCNewsBlock
