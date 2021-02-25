
import axios from 'axios';
import { useState } from 'react';
import { CardLink, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import { TASK_URL } from './Header/CONSTS.json'
const EditTask = ({ item, trigger}) => {
    //Data from DB
    const { name, description } = item;
    const [updateName, setUpdateName] = useState(name);
    const [updateDescription, setUDescription] = useState(description);


    //Modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const updateDatabase = (e) => {
        e.preventDefault();
        axios.patch(`${TASK_URL}/update/${item._id}`,{name:updateName,description:updateDescription })
            .then((res) => {
                trigger(res.data);
                toggle();
            })
            .catch((err) => {
                trigger(err.data)
            })
    }

    return (
        <>
            <CardLink className="btn btn-outline-warning" onClick={toggle}>EDIT</CardLink>
            <Modal isOpen={modal}>
                <ModalHeader>{item.name}</ModalHeader>
                <form >
                    <ModalBody>

                        <input type="text" className="form-control"  value={updateName} onChange={({ target }) => setUpdateName(target.value)} />
                        <input type="text" className="form-control"  value={updateDescription} onChange={({ target }) => setUDescription(target.value)} />


                    </ModalBody>
                </form>
                <ModalFooter>
                    <button type="submit"onClick={updateDatabase} className="btn btn-outline-success">Update</button>
                    <button onClick={toggle} className="btn btn-outline-danger">Cancel</button>
                </ModalFooter>
            </Modal>
        </>
    )

}
export default EditTask;