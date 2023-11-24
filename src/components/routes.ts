import {type} from "os";
import HomePage from "./HomePage";


type RouteDefinition = {
    name: string;
    url: string;
    element: any;
};

const routes: RouteDefinition[] = [
    {
        name: "login",
        url: "/login",
        element: HomePage
    },
];

export default routes;