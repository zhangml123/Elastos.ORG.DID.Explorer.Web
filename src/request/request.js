const addr = process.env.API_URL
console.log(addr)
export function getCurrentBlock(){
	return new Promise(function(resolve, reject) {
	   	let path = addr + '/api/v1/block/current'
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
	   	let path = addr + '/api/v1/block/current/height'
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
	   	let path = addr + '/api/v1/block/values?txid='+txid
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
	   	let path = addr + '/api/v1/block/height'
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
	   	let path = addr + '/api/v1/block/info?height='+height
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
	   	let path = addr + '/api/v1/block/blocks_info?height='+height
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
	   	let path = addr + '/api/v1/block/transactions_count?height='+height
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
	   	let path = addr + '/api/v1/block/blocks/count'
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
	   	let path = addr + '/api/v1/block/blocks?start='+start+'&pageSize='+pageSize;
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
	   	let path = addr + '/api/v1/block/transactions/count'
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
	   	let path = addr + '/api/v1/block/transactions?start='+start+'&pageSize='+pageSize;
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
	   	let path = addr + '/api/v1/block/transactions_info?txid='+txid;
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
		let path = addr + '/api/v1/block/transactions/txids_height?height='+height
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
export function getTransactionsFromHeight(height){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/v1/block/transactions/height?height='+height
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
		let path = addr + '/api/v1/block/transactions/did?did='+did
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
		let path = addr + '/api/v1/block/transactions/txid?txid='+txid
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


export function getTxFromTxid(txid){
	return new Promise(function(resolve, reject) {
		let path = addr + '/api/v1/block/transactions/info?txid='+txid
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
		let path = addr + '/api/v1/block/transactions/info?txid='+txid
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
		let path = addr + '/api/v1/block/properteis/did?did='+did
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
