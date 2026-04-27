import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { router } from "./routers/routes"
import { store } from "../store/store"
import { Header } from "../components/organisms/Header/Header"




export const App = () => {
  return (
      <main>
        <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
    </main>

  )
}
