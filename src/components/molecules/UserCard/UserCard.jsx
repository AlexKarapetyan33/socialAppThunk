import { NavLink } from 'react-router-dom'
import image from '../../../shared/images/image.png'
import './UserCard.css'

export const UserCard = ({user}) => {
  return (
    <div className='usercard'>
        <h3>{user.name}</h3>
        <NavLink to={`/users/${user.id}`}>
          <img src={user.photos.large ? user.photos.large : image} className='image' alt="" />
          </NavLink>
    </div>
  )
}
