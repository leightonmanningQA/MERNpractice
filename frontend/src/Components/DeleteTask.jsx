import axios from 'axios'
import { CardLink } from 'reactstrap'
import { TASK_URL } from './Header/CONSTS.json'
const DeleteGoal = ({ del, trigger }) => {


    const remove = () => {
        axios.delete(`${TASK_URL}/delete/${del}`)
            .then((res) => {
                trigger('Successfully Deleted Task with id:' +del)
            })
            .catch((err) => {
                trigger("Error deleting")
            })
    }

    return (
        <>
            <CardLink className="btn btn-outline-danger" onClick={remove}>X</CardLink>
        </>
    )

}
export default DeleteGoal;