
  function todoTask() {
    var Input = document.getElementById('Input');
    var List = document.getElementById('List');
    
    if (Input.value !== '') {
      var li = document.createElement('li');
      li.textContent = Input.value;
      
      // Add a delete button to each task
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        List.removeChild(li);
      };
      
      li.appendChild(deleteButton);
      List.appendChild(li);
      
      Input.value = '';
    } else {
      alert('Please enter a task.');
    }
  }

  
  

    