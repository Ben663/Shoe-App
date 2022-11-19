
import logo from './logo.svg';
function Header() {
  return (
		<div>
			<div>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
				/>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					shoe app
				</a>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Shoe Itme
              </a>
              
			</div>
		</div>
	);
}

export default Header;
