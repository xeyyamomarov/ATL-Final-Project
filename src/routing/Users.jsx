import { UsersPage } from "pages/UsersPage"
import { Route } from "react-router-dom"

export const Users = () => {
  return <>
    <Route path="/users" element={<UsersPage />} />
  </>
}