function addTask() {
	if(task.value.trim() != ""){

		let listItem = document.createElement('li');
		listItem.appendChild(document.createTextNode(task.value));
		taskList.appendChild(listItem);

		$("li").on('swiperight', function(){
			//   listItem.className =" task-done";
			$(this).toggleClass('task-done');
		});


		$("li").on('swipeleft', function(){
			// listItem.className =" task-done";
			//Mettre le background du li en rouge en supprimant
			$(this).toggleClass('red');
			$(this).hide('slow', function(){
				$(this).remove();
			});
		});
		
		$(taskList).listview('refresh');
		task.value = "";
		$(task).focus();
	}


}

