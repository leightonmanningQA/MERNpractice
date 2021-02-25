import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import { TASK_URL } from './Header/CONSTS.json'
import IndividualTask from './IndividualTask';
const ReadTasks = ({ msg , trigger}) => {


  //states
  const [taskList, setTaskList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');

  //useEffect -> triggers a sideEffect
  useEffect(() => {
    axios.get(`${TASK_URL}/getAll`)
      .then((res) => {
        setIsLoaded(true);
        setTaskList(res.data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err.message);
      })
  }, [msg])

  if (error) {
    return <p>{error}</p>
  } else if (!isLoaded) {
    return <Spinner animation="border" role="status" />
  } else {
    return (
      <div className="row">
        {taskList.map((item) => (
          <div className="col-md-12">
            <IndividualTask key={item.id}item={item} trigger={trigger} />
          </div>
        ))}
      </div>

    )
  }

}
export default ReadTasks;