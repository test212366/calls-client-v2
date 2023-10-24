import { useAction } from "../hooks/useAction"
import { useTypeSelector } from "../hooks/useTypeSelector"

const Login = () => {
	const {showLogin} = useTypeSelector(state => state.utils),
		{setShowLogin} = useAction()


	return (
		<section className={["registraiton__wrapper", showLogin ? 'active' : ""].join(' ')}>
		<div className="overlay"></div> 
			<button className="close" onClick={setShowLogin}>×</button>
		  <p>Войти в аккаунт</p>
		  <input type="email" placeholder="Введите ваш email" />
		  <input type="password" placeholder="Введите ваш пароль"/>
		  <button>Продолжить</button>
	  </section>
	)
}
export default Login