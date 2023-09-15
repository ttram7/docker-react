import { useState, useEffect} from 'react';
import axios from 'axios';

function App () {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    axios.get('/tasks')
      .then((result) => setTaskList(result.data))
      .catch((e) => {
        console.log(e);
        alert('Something went wrong!');
      });
  }, []);
  
  return (
    <div>
      <ul>
        {taskList.map(task => (
          <li key={task.id}>
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App
