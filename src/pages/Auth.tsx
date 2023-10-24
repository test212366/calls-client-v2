import Header from "../components/Header"
import Login from "../components/Login"
import Registration from "../components/Registraiton"
import { useAction } from "../hooks/useAction"

const Auth = () => {
	const {setShowLogin, setShowRegistration} = useAction()

	const tempLines = [
		{x1: '150', x2: '226', y1: '245', y2: '343', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '294', x2: '226', y1: '295', y2: '343', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '660', x2: '286', y1: '267', y2: '300', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '158', x2: '226', y1: '420', y2: '340', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '159', x2: '346', y1: '418', y2: '547', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '346', x2: '450', y1: '548', y2: '569', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '345', x2: '345', y1: '740', y2: '547', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '346', x2: '752', y1: '548', y2: '441', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '660', x2: '752', y1: '343', y2: '441', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '660', x2: '960', y1: '342', y2: '364', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '850', x2: '960', y1: '297', y2: '364', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '850', x2: '753', y1: '297', y2: '264', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '755', x2: '713', y1: '265', y2: '247', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '660', x2: '713', y1: '267', y2: '247', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '850', x2: '821', y1: '297', y2: '225', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '755', x2: '821', y1: '267', y2: '223', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '1230', x2: '821', y1: '288', y2: '223', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '1230', x2: '1200', y1: '288', y2: '368', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '1135', x2: '1200', y1: '300', y2: '368', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '1146', x2: '1200', y1: '407', y2: '368', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '1026', x2: '1144', y1: '440', y2: '407', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '1026', x2: '964', y1: '443', y2: '367', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '1136', x2: '964', y1: '299', y2: '362', duration: Math.floor(Math.random() * 5 + 2)},
		{x1: '1146', x2: '1354', y1: '410', y2: '657', duration: Math.floor(Math.random() * 5 + 2)},
	
	]
 
	return (
		<section className="container">
			<Header />
			<div className="auth__wrapper">
				<svg width='100%' height='800px'  fill='none' xmlns='http://www.w3.orh/2000/svg'>
					<circle cx='150' cy='245' r='3' className="auth__city-item-circle" />
					<circle cx='226' cy='343' r='3' className="auth__city-item-circle" />
					<circle cx='290' cy='299' r='3' className="auth__city-item-circle" />
					<circle cx='161' cy='418' r='3' className="auth__city-item-circle" /> 
					<circle cx='345' cy='547' r='3' className="auth__city-item-circle" />
					<circle cx='452' cy='569' r='3' className="auth__city-item-circle" />
					<circle cx='345' cy='743' r='3' className="auth__city-item-circle" />
					<circle cx='658' cy='268' r='3' className="auth__city-item-circle" />
					<circle cx='712' cy='245' r='3' className="auth__city-item-circle" />
					<circle cx='756' cy='266' r='3' className="auth__city-item-circle" />
					<circle cx='821' cy='224' r='3' className="auth__city-item-circle" />
					<circle cx='853' cy='299' r='3' className="auth__city-item-circle" />
					<circle cx='960' cy='364' r='3' className="auth__city-item-circle" />
					<circle cx='1025' cy='441' r='3' className="auth__city-item-circle" />
					<circle cx='1144' cy='407' r='3' className="auth__city-item-circle" />
					<circle cx='1200' cy='365' r='3' className="auth__city-item-circle" />
					<circle cx='1232' cy='289' r='3' className="auth__city-item-circle" />
					<circle cx='1133' cy='300' r='3' className="auth__city-item-circle" />
					<circle cx='1351' cy='655' r='3' className="auth__city-item-circle" />
					<circle cx='755' cy='440' r='3' className="auth__city-item-circle" />
					<circle cx='658' cy='342' r='3' className="auth__city-item-circle" />
					{
						tempLines.map((line: any, i:number) => 
						 <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} style={{animationDuration: `${line.duration}s`}} className='auth__city-item-line'/>
						)
					}
				    
				 </svg>
				 <section className="auth__welcome">
					<h1>CallNZ - video confer</h1>
					<p>A simple video chat designed to communicate with people from all over the world for free.</p>
					 
					<p className="auth__text">To get all the features of <span>CallNZ</span> register or login to your account</p>
					<button onClick={setShowRegistration}>Register <svg className="regsvg" fill="none" height="20" viewBox="0 0 35 27" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5.60001 12.6C7.1464 12.6 8.39999 11.3464 8.39999 9.8C8.39999 8.25361 7.1464 7 5.60001 7C4.05361 7 2.8 8.25361 2.8 9.8C2.8 11.3464 4.05361 12.6 5.60001 12.6Z" strokeMiterlimit="10" strokeWidth="2" /><path d="M8.3 23.6H2.60001C1.70001 23.6 1.10001 22.9 1.10001 22V19.2C1.10001 17 2.8 15.3 5 15.3H8.5" strokeMiterlimit="10" strokeWidth="2" /><path d="M17.6 10C20.0301 10 22 8.03007 22 5.60001C22 3.16996 20.0301 1.20001 17.6 1.20001C15.17 1.20001 13.2 3.16996 13.2 5.60001C13.2 8.03007 15.17 10 17.6 10Z" strokeMiterlimit="10" strokeWidth="2" /><path d="M24.1 25.2H10.7C9.3 25.2 8.2 24.1 8.2 22.7V18.4C8.2 15 11.1 12.2 14.6 12.2H20.3C23.8 12.2 26.7 15 26.7 18.4V22.7C26.6 24.1 25.5 25.2 24.1 25.2Z" strokeMiterlimit="10" strokeWidth="2" /><path d="M29 12.6C30.5464 12.6 31.8 11.3464 31.8 9.8C31.8 8.25361 30.5464 7 29 7C27.4536 7 26.2 8.25361 26.2 9.8C26.2 11.3464 27.4536 12.6 29 12.6Z" strokeMiterlimit="10" strokeWidth="2" /><path d="M26.3 23.6H32C32.9 23.6 33.5 22.9 33.5 22V19.2C33.5 17 31.8 15.3 29.6 15.3H26.1" strokeMiterlimit="10" strokeWidth="2" /></svg></button>
					<button onClick={setShowLogin}>Sign in account     <svg className="regsvg"  fill="none" height="18" viewBox="0 0 34 27" width="27" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 25.6H5.5C3.4 25.6 1.70001 23.8929 1.70001 21.7841V5.41592C1.70001 3.30714 3.4 1.59998 5.5 1.59998H28.5C30.6 1.59998 32.3 3.30714 32.3 5.41592V21.7841C32.4 23.8929 30.6 25.6 28.5 25.6Z" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" /><path d="M17 14.9557L2.60001 3.60834" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" /><path d="M31.4 3.60834L17 14.9557" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" /></svg></button>
					<small className="or">or</small>
					<button className="auth__google">Login with <span>Google</span><svg className="regsvg"  width='20px' height='20px' enableBackground="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"  ><g id="_x31__stroke"><g id="Google"><rect clipRule="evenodd" fill="none" fillRule="evenodd" height="128" width="128" /><path clipRule="evenodd" d="M27.585,64c0-4.157,0.69-8.143,1.923-11.881L7.938,35.648    C3.734,44.183,1.366,53.801,1.366,64c0,10.191,2.366,19.802,6.563,28.332l21.558-16.503C28.266,72.108,27.585,68.137,27.585,64" fill="#FBBC05" fillRule="evenodd" /><path clipRule="evenodd" d="M65.457,26.182c9.031,0,17.188,3.2,23.597,8.436L107.698,16    C96.337,6.109,81.771,0,65.457,0C40.129,0,18.361,14.484,7.938,35.648l21.569,16.471C34.477,37.033,48.644,26.182,65.457,26.182" fill="#EA4335" fillRule="evenodd" /><path clipRule="evenodd" d="M65.457,101.818c-16.812,0-30.979-10.851-35.949-25.937    L7.938,92.349C18.361,113.516,40.129,128,65.457,128c15.632,0,30.557-5.551,41.758-15.951L86.741,96.221    C80.964,99.86,73.689,101.818,65.457,101.818" fill="#34A853" fillRule="evenodd" /><path clipRule="evenodd" d="M126.634,64c0-3.782-0.583-7.855-1.457-11.636H65.457v24.727    h34.376c-1.719,8.431-6.397,14.912-13.092,19.13l20.474,15.828C118.981,101.129,126.634,84.861,126.634,64" fill="#4285F4" fillRule="evenodd" /></g></g></svg></button>
					 
					
				 </section>

				 <Registration />
				 <Login />
			</div>
		</section>
	)
}
export default Auth