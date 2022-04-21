import { useLocation } from 'react-router-dom'

export default function PageNotFound() {

    const location = useLocation()

  return (
    <div>PageNotFound | The Page {location.pathname} Not Found</div>
  )
}
