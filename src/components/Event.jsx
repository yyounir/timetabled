const Event = (props) => {
    return(
        <td className={props.color} >
            <h5>{props.eventName}</h5>
            <h6>{props.location}</h6>
        </td>
    )
}

export default Event