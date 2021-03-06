import React from 'react';
import { Layout } from 'antd';
class Footer extends React.Component {
    render() {
    	const {Footer} = Layout;
        const  lang  = this.props.info.lang;
        return (
                <Footer style={{"marginTop":"200px",
                				"background":"#333333",
                				"height":"100px",
                			}}>
                			<p style={{"textAlign":"center"}}>
                				<a href="http://www.elastos.org" style={{"color":"#fff","fontSize":"16px"}}>{lang.elastos_org}</a>
                			</p>
                			<p style={{"color":"#666666","fontSize":"12px","textAlign":"center"}}>
                				Copyright © 2017 Elastos Foundation. All Rights Reserved.
                			</p>

                </Footer>
        );
    }
}

export default Footer;