import {Card, CardBody, CardTitle,CardSubtitle} from 'reactstrap';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

const IndividualTask = ({item,trigger}) => {

    return(
        <Card>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>{item.description}</CardSubtitle>
                <div className="float-right">
                <DeleteTask del={item._id}trigger={trigger}/>
                <EditTask item={item} trigger={trigger}/>
                </div>
            </CardBody>  
        </Card>
    )

}
export default IndividualTask;