import { useParams } from 'react-router-dom'

const EventDetailsPage = () => {
    const { id } = useParams()

    return (
        <div>EventDetails</div>
    )
}

export default EventDetails