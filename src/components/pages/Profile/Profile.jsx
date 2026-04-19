import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProfileTC } from "../../../reducers/getProfileReducer"


export const Profile = () => {
    useEffect(() => {
        dispatch(getProfileTC(id))
    }, [])
    const profile = useSelector((state) => state.profileData.profile)
    const dispatch = useDispatch()
    const { id } = useParams()

    
    return (
        <div>Profile : {id}</div>
    )
}
