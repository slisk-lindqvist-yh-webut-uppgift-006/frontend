import { useParams } from 'react-router-dom'

const EventDetailPage = () => {
    const { id } = useParams()

    return (
        <div>EventDetails</div>
    )
}

export default EventDetails