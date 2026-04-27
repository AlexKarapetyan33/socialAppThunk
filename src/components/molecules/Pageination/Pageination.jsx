import { useDispatch, useSelector } from "react-redux"
import { changePageAC } from "../../../reducers/getAllReducer"


export const Pageination = () => {

    const dispatch = useDispatch()
    const { totalCount } = useSelector((state) => state.usersData)
    const pagesCount = Math.ceil(totalCount/100)

    let pages = []

    for(let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    const changePage = (page) => {
        console.log(page)
        dispatch(changePageAC(page))
    }
    

    return (
        <div>
            {
                pages?.map((page) => {
                    return <button key={page} onClick={() => changePage(page)}>{page}</button>
                })
            }
        </div>
    )
}
