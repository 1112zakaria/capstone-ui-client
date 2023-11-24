import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";


type RouteDefinition = {
    name: string;
    url: string;
    element: any;
};

const routes: RouteDefinition[] = [
    {
        name: "home",
        url: "/",
        element: HomePage
    },
    {
        name: "login",
        url: "/login",
        element: LoginPage
    },
    {
        name: "register",
        url: "/register",
        element: RegisterPage
    }
];

export default routes;