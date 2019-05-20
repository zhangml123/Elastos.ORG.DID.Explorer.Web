import React from 'react';
import './eappDetail.css';
import Search from './elements/Search'
import iconCopy from '../public/images/icon-copy.svg'
import iconLeft from '../public/images/icon-left.svg'
import mark_l from '../public/images/mark_l.png'
import privacy from '../public/images/icon-privacy.svg'
import notice from '../public/images/icon-notice.svg'
class Header extends React.Component {
	
    render() {
        const lang = this.props.lang
    	return (
    		 <div className="container">
            	<div className = "list_top" >
                    <div className = "list_title"><img src={iconLeft} alt="back" style={{"marginBottom":"2px","marginRight":"10px"}}/><span style={{"fontSize":"14px"}}>{lang.back}</span></div>
                    <div className = "list_search"><Search button="false" name="list" lang={lang}/></div>
                </div>
                <div className="eapp_content">
                	<div className="eapp_profile">
                		<div><img src={mark_l} alt="profile"/></div>
                		<div>
                			<p className="eapp_name">ENBank</p>
                			<p className="eapp_did"><span>elaappdid:sdasfjnklsadfnsjkalfnsdklfsnjkldfkslkdsf</span><img src={iconCopy} alt="copy"/></p>
                			<ul className="eapp_nav">
                				<li className = "status"><img src={privacy} alt="privacy"/> <span>Privacy</span></li>
                				<li className = "notice"><img src={notice} alt = "notice"/> <span>Notification</span></li>
                				<li><span>More...</span></li>
                			</ul>
                		</div>
                		<div>
                			<span>{lang.website}</span>
                		</div>

                	</div>

                </div>
                <div className="ant-table ant-table-default ant-table-scroll-position-left" style={{"marginTop":"40px"}}>
                    <div className="ant-table-content">
                        <div className="ant-table-body">
                            <table className="transaction_list_table">
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th className="">
                                            <div>Attribute</div>
                                        </th>
                                        <th className="">
                                            <div>Value</div>
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="ant-table-tbody">
                                     <tr className="ant-table-row ant-table-row-level-0 table_tr1" data-row-key="1">
                                        <td>Size</td>
                                        <td>20 MB</td>
                                     </tr>
                                     <tr className="ant-table-row ant-table-row-level-0 table_tr1" data-row-key="1">
                                        <td>Url</td>
                                        <td>https://eladapp.com/app</td>
                                     </tr>
                                     <tr className="ant-table-row ant-table-row-level-0 table_tr1" data-row-key="1">
                                        <td>Signature</td>
                                        <td>akksdnjujsadfujkgnak;awiere;awlka;sdlkfsa;ldkfasjl;f</td>
                                     </tr>
                                </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div> 
				
            </div>
    	)
    }
}

export default Header;