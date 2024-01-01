import HomePage from "./home/HomePage";
import RegisterPage from "./register/RegisterPage";
import LoginPage from "./login/LoginPage";
import ConfigurePage from "./configure/ConfigurePage";
import MonitorPage from "./monitor/MonitorPage";
import StatisticsPage from "./statistics/StatisticsPage";

export type RouteDefinition = {
    name: string;
    url: string;
    Element: any;   // FIXME: what is this type?
    requireAuth: boolean
};

const routes: RouteDefinition[] = [
    {
        name: "home",
        url: "/",
        Element: HomePage,
        requireAuth: false
    },
    {
        name: "Configure",
        url: "/configure",
        Element: ConfigurePage,
        requireAuth: true
    },
    {
        name: "Monitor",
        url: "/monitor",
        Element: MonitorPage,
        requireAuth: true
    },
    {
        name: "Statistics",
        url:"/statistics",
        Element: StatisticsPage,
        requireAuth: true
    },
    {
        name: "login",
        url: "/login",
        Element: LoginPage,
        requireAuth: false
    },
    {
        name: "register",
        url: "/register",
        Element: RegisterPage,
        requireAuth: false
    }
];

export default routes;