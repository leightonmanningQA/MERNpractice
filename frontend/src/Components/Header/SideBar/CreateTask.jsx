import {Card, CardBody, CardTitle} from 'reactstrap';
import {useState} from 'react'
import axios from "axios"
import {TASK_URL} from '../CONSTS.json'

const CreateTask = ({trigger}) => {

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')

    const create = (e) => {
        e.preventDefault();
        axios.post(`${TASK_URL}/create`,{name,description})
            .then((res)=>{
                clearValues();
                trigger(res.data);

            }).catch((err) =>{
                trigger(err.data);
            })
    }
    const clearValues=() =>{
        setName("");
        setDescription("");
    }

    return (
        <div className="bg-light border-right" id="sidebar">
            <Card>
                <CardBody>
                    <CardTitle>Create New Task</CardTitle>
                    <form onSubmit={create}>
                        <input type="text" className="form-control"placeholder="Name"value={name}onChange={({target})=>setName(target.value)}/>
                        <input type="text" className="form-control"placeholder="Description"value={description}onChange={({target})=>setDescription(target.value)}/>
                        {/* <input type="text" className="form-control"placeholder="Description"value={description}onChange={({target})=>setDescription(target.value)}/> */}
                        <button type="submit" className="btn btn-outline-success">Add</button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}
export default CreateTask