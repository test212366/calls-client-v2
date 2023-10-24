import { useAction } from "../hooks/useAction"
import { useTypeSelector } from "../hooks/useTypeSelector"

 

const Registration = () => {
	const {showRegistration} = useTypeSelector(state => state.utils),
		{setShowRegistration} = useAction()

	return ( 
		<section className={["registraiton__wrapper", showRegistration ? 'active' : ""].join(' ')}>
		 <div className="overlay"></div> 
		 	<button className="close" onClick={setShowRegistration}>×</button>
			<p>Register</p>
			<input type="email" placeholder="Enter your email.." />
			<input type="text" placeholder="Enter your name.." />
			<input type="password" placeholder="Enter your password.."/>
			<button>Confirm</button>
		</section>
 
		 
	)
}
export default Registration