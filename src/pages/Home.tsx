import Header from "../components/Header"

const Home = () => {
	return (
		<section className="container">
			<Header />
			<main className="home__content">
				<section className="home__messages">
					<p className="home__filter-chat">ВСЕ ЧАТЫ <svg  width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.8625 0.35L4 3.22409L1.13125 0.35L0.25 1.23482L4 5L7.75 1.23482L6.8625 0.35Z" fill="#949792" />
					</svg></p>
					<h3>Сообщения <span>(1)</span></h3>
					<input className="home__search" type="text" placeholder="Найти пользователя" />
					<p className="home__messages-title">Закрепленные</p>
					<div className="home__messages-item">
						<img  src="https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg" alt="photoUser" />
						<div>
							<p className="home__messages-item-name">Name Name</p>
							<p className="home__messages-item-last-message">last message</p>
						</div>
						<small className="home__messages-item-time">10:34</small>
					</div>
					<p className="home__messages-title">Все сообщения</p>
				</section>
				<section className="home__chat">
		 
						<input className="home__chat-input" placeholder="Напишите что-нибудь.." type="text" />
		
		 
 				</section>
			</main>
			 
		</section>
	)
}
export default Home