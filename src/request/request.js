const addr = process.env.API_URL
//const addr = "http://45.76.178.92:3000"

console.log(addr)
const current_version = "v2"
export function getServerInfo(){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/serverInfo'
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getCurrentBlock(){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/current'
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}

export function getCurrentHeight(){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/current/height'
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getValuesFromTxid(txid){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/values?txid='+txid
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getHeight(){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/height'
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getBlockInfo(height){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/info?height='+height
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
export function getBlocksInfo(height){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/blocks_info?height='+height
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
export function getTransactionsCountFromHeight(height){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/transactions_count?height='+height
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}


export function getBlocksCount(){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/blocks/count'
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getBlocks(start,pageSize){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/blocks?start='+start+'&pageSize='+pageSize;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getLastBlocks(){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/blocks_last';
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getFirstBlocks(){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/blocks_first';
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}

export function getTransactionsCount(){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/transactions/count'
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getTransactions(start,pageSize){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/transactions?start='+start+'&pageSize='+pageSize;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getTransactionsInfo(txid){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/'+current_version+'/block/transactions_info?txid='+txid;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}


export function getTxidsFromHeight(height){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/transactions/txids_height?height='+height
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
export function getTransactionsFromHeight(height,start,pageSize){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/transactions/height?height='+height+'&start='+start+'&pageSize='+pageSize
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getTransactionsFromDid(did){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/transactions/did?did='+did
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getTransactionsFromTxid(txid){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/transactions/txid?txid='+txid
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}

export function getTxDetailFromTxid(txid){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/transactions/info?txid='+txid
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}


export function getPropertiesFromDid(did){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/properteis/did?did='+did
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getAddressFromTxid(txid){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/address/txid?txid='+txid
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getDidFromTxid(txid){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/did/txid?txid='+txid
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}


export function getPropertyChanges(key,did,start,pageSize){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/v1/block/properteis/history?key='+key+'&did='+did+'&start='+start+'&pageSize='+pageSize;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}

export function getPropertiesHistoryCount(key,did){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/v1/block/properteis/history/count?key='+key+'&did='+did;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}

export function getDids(start,pageSize){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/dids?start='+start+'&pageSize='+pageSize;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getDidsIndex(limit){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/dids_index?limit='+limit;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getDidsWithProperty(start,pageSize,property){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/didsWidthProperty?property='+property+'&start='+start+'&pageSize='+pageSize;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}

export function getDidCount(){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/dids/count';
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getDidCountWidthProperty(property){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/dids/countWithProperty?property='+property;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getDidInfo(did){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/did/info?did='+did;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getDidReport(type,range){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/getReport?type=' + type + '&range='+range;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getTransactionsReport(type,range){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/getReport?type=' + type + '&range='+range;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getEAppsReport(type,range){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/getReport?type=' + type + '&range='+range;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getReportTotal(type,range){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/getReportTotal?type=' + type + '&range='+range;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});
}
export function getAddressInfo(address,start,pageSize){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/getAddressInfo?address='+address+'&start='+start+'&pageSize='+pageSize;
		let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
export function getAddressInfoFromNodeApi(address,start,pageSize){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/getAddressInfoFromNodeApi?address='+address+'&start='+start+'&pageSize='+pageSize;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
export function getTransactionInfoFromNodeApi(txid){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/getTransactionInfoFromNodeApi?txid='+txid;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}

export function getAddressBalance(address,start,pageSize){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/getBalanceFromNodeApi?address='+address
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
export function getTransactionsCountFromAddress(address){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/getTransactionsCountFromAddress?address='+address;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
export function getValueFromAddressAndTxid(txid,address,type){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/getValueFromAddressAndTxid?txid='+txid+'&address='+address+'&type='+type;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
export function getEapps(start,pageSize){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/eapps?start='+start+'&pageSize='+pageSize;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
export function getEappsCount(){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/eapps/count';
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
export function getEappId(app_name){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/'+current_version+'/block/eapp/eapp_id?app_name='+app_name;
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',path );
	    xhr.onload = function() {
	      if (xhr.status === 200) {
	        resolve(JSON.parse(xhr.responseText));
	      } 
	    };
	    xhr.onerror = function() {
	      reject(new Error(xhr.statusText));
	    };
	    xhr.send();
	});

}
