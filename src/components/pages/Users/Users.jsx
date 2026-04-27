import { useDispatch, useSelector } from "react-redux"
import { UsersContainer } from "../../organisms/UsersContainer/UsersContainer"
import { useEffect } from "react"
import { socialApi } from "../../../api/api"
import { getAllTC } from "../../../reducers/getAllReducer"
import { Pageination } from "../../molecules/Pageination/Pageination"



export const Users = () => {

  const dispatch = useDispatch()
  const users = useSelector((state) => state.usersData.users)
  const {page} = useSelector((state) => state.usersData)

  useEffect(() => {
    dispatch(getAllTC(page))
  }, [page])


  return (
    <div>
      <Pageination />
      <UsersContainer users={users} />
    </div>
  )
}
