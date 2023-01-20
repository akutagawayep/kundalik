import AccountPage from "../pages/account"
import AdminPage from "../pages/admin"
import HomePage from "../pages/home"
import PostDetailPage from "../pages/postDetail"
import PostsPage from "../pages/posts"
import RegistartionPage from "../pages/registration"
import UsersPage from "../pages/users"
import UsersDetailPage from "../pages/usersDetail"
import { ACCOUNT_ROUTE, ADMIN_ROUTE, HOMEWORKS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, USERS_ROUTE } from "../utils/consts"

export const authRoutes = [
    {path: ACCOUNT_ROUTE, element: <AccountPage/>},
    {path: ADMIN_ROUTE, element: <AdminPage/>},
    {path: HOMEWORKS_ROUTE, element: <PostsPage/> },
    // {path: HOMEWORKS_ROUTE + "/:id", element: <PostDetailPage/>},
    {path: HOMEWORKS_ROUTE + "/3", element: <PostDetailPage/>},
    {path: USERS_ROUTE, element: <UsersPage/>},
    {path: USERS_ROUTE + "/:username", element: <UsersDetailPage/>},
]

export const publicRoutes = [
    {path: MAIN_ROUTE, element: <HomePage/>},
    {path: REGISTRATION_ROUTE, element: <RegistartionPage/>},
    {path: LOGIN_ROUTE, element: <RegistartionPage/>},
]