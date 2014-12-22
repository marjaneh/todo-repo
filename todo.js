(function(){
	
	var inputTask = document.getElementById('InputTask');
	var btnAdd = document.getElementById('btnAdd');
	var lists = {
		pending: document.getElementById('pending-task'),
		complete: document.getElementById('complete-task'),
		remove: document.getElementById('remove-task'),
	};
	
	var createPendingList = function() {
		var li = document.createElement('li');
		
		var chkPendingList = document.createElement('input');
		chkPendingList.type = 'checkbox';
		
		var txtPending = document.createElement('input');
		var txtValue = document.createTextNode(inputTask.value.trim()); 
		txtPending.appendChild(txtValue); 
		txtPending.type = "text";
		txtPending.value = inputTask.value.trim();
		txtPending.className = "form-control";
		
		var btnPending = document.createElement('button');        
		var btnValue = document.createTextNode('Remove');       
		btnPending.appendChild(btnValue); 
		btnPending.className = "btn";
		
		 
		li.appendChild(chkPendingList);
		li.appendChild(txtPending);
		li.appendChild(btnPending);
		
		chkPendingList.addEventListener('click', onCheckClick);
		btnPending.addEventListener('click', onRemoveClick);
			
		return li;
	};
				
	var createCompleteList = function(str) {
		var li = document.createElement('li');
		
		var spanComplete = document.createElement('span');
		var spanValue = document.createTextNode(str);
		spanComplete.appendChild(spanValue);   
		spanComplete.style.color ="green";
		li.appendChild(spanComplete); 
			
		return li;
	};
	
	var createRemoveList = function(str) {
		var li = document.createElement('li');
		
		var spanRemove = document.createElement('span');
		var spanValue = document.createTextNode(str);
		spanRemove.appendChild(spanValue);   
		spanRemove.style.color ="red";
		li.appendChild(spanRemove); 
			
		return li;
	};
	
	var addPendingTask = function(task){
		lists.pending.appendChild(task);
	}
	
	var addCompleteTask = function(task){
		lists.complete.appendChild(task);
	}
	
	var addRemoveTask = function(task){
		lists.remove.appendChild(task);
	}
	
	var onCheckClick = function(event){
		var parentNode = event.target.parentElement;
		
		for (i = 0; i < parentNode.childNodes.length; i++) {
			
			if (parentNode.childNodes[i].tagName == 'INPUT') {
				if (parentNode.childNodes[i].type == 'text') {
					var txtValue = parentNode.childNodes[i].value;
				}		
			}
		}
		
		addCompleteTask(createCompleteList(txtValue));
		parentNode.parentNode.removeChild(parentNode);
		
	};
	
	var onRemoveClick = function(event){
		var parentNode = event.target.parentElement;
		
		for (i = 0; i < parentNode.childNodes.length; i++) {
			
			if (parentNode.childNodes[i].tagName == 'INPUT') {
				if (parentNode.childNodes[i].type == 'text') {
					var txtValue = parentNode.childNodes[i].value;
				}		
			}
		}
		addRemoveTask(createRemoveList(txtValue));
		parentNode.parentNode.removeChild(parentNode);
				
	};
	
	var onAddClick = function(){
		if(inputTask.value.trim().length > 0){
			addPendingTask(createPendingList());
			inputTask.value = "";
			inputTask.focus();
		}
	};
	
	btnAdd.addEventListener('click', onAddClick);
	inputTask.addEventListener('keyup', function(event){
		var code = event.keyCode;
		
		if(code == 13){
			onAddClick();
		}
	});
	inputTask.focus();
	
}());

