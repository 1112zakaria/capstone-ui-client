import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ConfigurePage from "./ConfigurePage";
import MonitorPage from "./MonitorPage";
import StatisticsPage from "./StatisticsPage";


type RouteDefinition = {
    name: string;
    url: string;
    Element: any;   // FIXME: what is this type?
};

const routes: RouteDefinition[] = [
    {
        name: "home",
        url: "/",
        Element: HomePage
    },
    {
        name: "Configure",
        url: "/configure",
        Element: ConfigurePage
    },
    {
        name: "Monitor",
        url: "/monitor",
        Element: MonitorPage
    },
    {
        name: "Statistics",
        url:"/statistics",
        Element: StatisticsPage
    },
    {
        name: "login",
        url: "/login",
        Element: LoginPage
    },
    {
        name: "register",
        url: "/register",
        Element: RegisterPage
    }
];

export default routes;