import Auth from "../pages/Auth";
import Home from "../pages/Home";
import { RouteI } from "../types/route";

export const publicRouters:RouteI[] = [
		{path: '/', element: Auth}
	],
	privateRouters:RouteI[] = [
		{path: '/', element: Home}
	]