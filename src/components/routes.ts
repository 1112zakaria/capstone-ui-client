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
    requireAuth: boolean;
    requireLoggedOut: boolean;
};

const routes: RouteDefinition[] = [
    {
        name: "home",
        url: "/",
        Element: HomePage,
        requireAuth: false,
        requireLoggedOut: false,
    },
    {
        name: "Configure",
        url: "/configure",
        Element: ConfigurePage,
        requireAuth: true,
        requireLoggedOut: false,
    },
    {
        name: "Monitor",
        url: "/monitor",
        Element: MonitorPage,
        requireAuth: true,
        requireLoggedOut: false,
    },
    {
        name: "Statistics",
        url:"/statistics",
        Element: StatisticsPage,
        requireAuth: true,
        requireLoggedOut: false,
    },
    {
        name: "login",
        url: "/login",
        Element: LoginPage,
        requireAuth: false,
        requireLoggedOut: true,
    },
    {
        name: "register",
        url: "/register",
        Element: RegisterPage,
        requireAuth: false,
        requireLoggedOut: true,
    }
];

export default routes;