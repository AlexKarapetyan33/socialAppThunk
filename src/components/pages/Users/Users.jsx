import { useDispatch, useSelector } from "react-redux"
import { UsersContainer } from "../../organisms/UsersContainer/UsersContainer"
import { useEffect } from "react"
import { socialApi } from "../../../api/api"
import { getAllTC } from "../../../reducers/getAllReducer"



export const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector((state) => state.usersData.users)

    useEffect(() => {
        dispatch(getAllTC())
    }, [])


  return (
    <div>
        <UsersContainer users={users}/>
    </div>
  )
}
