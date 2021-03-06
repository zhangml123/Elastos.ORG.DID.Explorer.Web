import React from 'react';
import { getTransactions , getTransactionsCount, getTransactionsInfo } from '../request/request';
import {Link} from 'react-router-dom';
import { Pagination } from 'antd';
import './TransactionList.css';
import loadingImg from '../public/images/loading.gif';
class TransactionList extends React.Component {
	 constructor(props){
        super(props);
        this.state = {
            count:0,
            size: 20,
            current:1,
            transactions:[],
            loading:false
        }
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount (){
        const { current, size }= this.state;
        this.GetInfo(current,size);
       
    }
    componentDidMount(){
        const lang = localStorage.getItem("lang");
        var div = document.getElementsByClassName("ant-pagination-options-quick-jumper");
        if (lang === "en" && typeof div[0] != "undefined") {
            div[0].childNodes[0].data = "Goto" 
        }
        if(lang === "cn" && typeof div[0] != "undefined"){
            div[0].childNodes[0].data = "跳转" 
        } 
    }
    
    GetInfo = async (current,size) => {
        try{
            
            const start = ( current - 1) * size;
            const transactions = await getTransactions(start,size);
            this.setState({
                transactions:transactions,
                loading:false
            })
            Object.keys(transactions).map((transaction,k) => {
                return this.GetTransactionsInfo(k,transactions[k].txid)                
            });
            const count = await getTransactionsCount();
             this.setState({
                count:count[0].count
            })
        }catch(err){
          console.log(err)
        }
    }
    GetTransactionsInfo = async (k,txid)=>{
        try{
            const transaction = await getTransactionsInfo(txid);
            let transactions = this.state.transactions;
            transactions[k].createTime = transaction[0].createTime;
            transactions[k].length_memo = transaction[0].length_memo;
            this.setState({transactions:transactions})
        }catch(err){
            console.log(err)
        }
    }
    onChange(pageNumber) {
        this.setState({
            loading:true,
            current : pageNumber
        })
        const { size }= this.state;
        this.GetInfo(pageNumber,size);
    }
    timestampToTime(timestamp) {
      let date = new Date(timestamp * 1000);
      let Y = date.getFullYear();
      let M = date.getMonth()+1;
      let D = date.getDate() ;
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      return Y + '-' +
      (M < 10 ? '0'+ M : M ) + '-' + 
      (D < 10 ? '0'+ D : D ) + ' ' + 
      (h < 10 ? '0'+ h : h ) + ':' + 
      (m < 10 ? '0'+ m : m ) + ':' + 
      (s < 10 ? '0'+ s : s );
    }
    render() {
    	const { transactions, count, size, current, loading } = this.state;
        const  lang  = this.props.lang;
        const txHtml = transactions.map((tx,k) => {
        	return(
        		<tr className="ant-table-row ant-table-row-level-0 table_tr" data-row-key="1" key={k}>
	        		<td width="30%"><Link to={'/properties_list/'+tx.did}><span>{tx.did}</span></Link></td>
	        		<td width="40%"><Link to={'/txinfo/'+tx.txid}><span>{tx.txid}</span></Link></td>
	        		<td width="10%"><Link to={'/height/'+tx.height}><span>{tx.height}</span></Link></td>
	        		<td width="10%"><span>{tx.length_memo}</span></td>
	        		<td width="10%"><span>{tx.createTime ? this.timestampToTime(tx.createTime) : ''}</span></td>
				</tr>
        	)
        });
        return (
                <div className="container">
                	<div style={{"marginTop":"20px","borderBottom":"1px #ccc solid","paddingBottom":"15px","textAlign":"left","paddingLeft":"10px"}}><span style={{"fontSize":"25px"}}>{lang.transactions_list}</span></div>
					<div className="ant-table ant-table-default ant-table-scroll-position-left">
						<div className="ant-table-content">
							<div className="ant-table-body">
								<table className="">
									<thead className="ant-table-thead">
										<tr>
											<th className="">
												<div>DID</div>
											</th>
											<th className="">
												<div>{lang.tx_hash}</div>
											</th>
											<th className="">
												<div>{lang.block_height}</div>
											</th>
											<th className="">
												<div>{lang.memo_size}({lang.byte})</div>
											</th>
											<th className="">
												<div>{lang.time}</div>
											</th>
										</tr>
									</thead>
									<tbody className="ant-table-tbody">
										{txHtml}
									</tbody>
								</table>
								<div style={{"marginTop":"50px"}}>
                                    
                                    <Pagination showQuickJumper defaultCurrent={current} total={count} defaultPageSize = {size} showLessItems onChange={this.onChange} 
                                        style={{"float":"right"}}
                                    />
                                    {loading && <img style={{"float":"right","marginRight":"30px","marginTop":"5px","width":"20px"}} src={loadingImg} alt="loading"/>}
                                </div>
							</div>
						</div>
					</div>
                </div>
        );
    }
}

export default TransactionList;