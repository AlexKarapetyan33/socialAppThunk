import { useSelector } from "react-redux"
import { UserCard } from "../../molecules/UserCard/UserCard"
import './userscontainer.css'


export const UsersContainer = ({users}) => {
  return (
    <div className="userscontainer">
        {
          users.map((user) => {
            return <UserCard user={user} key={user.id}/>
          })
        }
    </div>
  )
}
