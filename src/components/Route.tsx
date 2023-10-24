import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { RouteI } from '../types/route'
import { privateRouters, publicRouters } from '../utils/routers'

const RouteC = () => {
	const userIsLogin = false
	return (
		<Router>
			<Routes>
				{userIsLogin ? privateRouters.map((route: RouteI, i:number) => <Route key={i} path={route.path} element={<route.element />} />)
				:	publicRouters.map((route: RouteI, i:number) => <Route key={i} path={route.path} element={<route.element />} />) }
			</Routes>
		</Router>
	)
}
export default RouteC