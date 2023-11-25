import HomePage from "./home/HomePage";
import RegisterPage from "./register/RegisterPage";
import LoginPage from "./login/LoginPage";
import ConfigurePage from "./configure/ConfigurePage";
import MonitorPage from "./monitor/MonitorPage";
import StatisticsPage from "./statistics/StatisticsPage";
import RouteDefinition from "./RouteDefinition";

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