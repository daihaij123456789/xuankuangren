import React from 'react'
import {Link} from 'react-router'
class PcSection extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <section className="page banner-wrapper">
                <div className="page" id="banner">
                    <div className="banner-text-wrapper">
                        <h2 className="pc_section_h2">
                            <p>
                                华南选矿冶金技术网
                            </p>
                        </h2>
                        <p className="pc_section_p">
                            <span>
                                一个专业的选矿冶金技术交流网站
                            </span>
                        </p>
                        <div className="start-button clearfix pc_section">
                            <Link to="/my">
                                <span>
                                    关于我们
                                </span>
                            </Link>
                            <Link to="/pattern">
                                <span>
                                    项目案例
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PcSection