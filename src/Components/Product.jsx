// import React, { useState ,useEffect } from 'react';
// import axios from 'axios';
// // import {Link } from 'react-router-dom'

// function Product() {
// 	const [list, setList] = useState([]);
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [errorMessage, setErrorMessage] = useState("")


// 	useEffect(() => {
// 		setIsLoading(true);
// 		const res = async () => {
// 			try {
// 				const { data } = await axios.get('https://6376811b81a568fc25008972.mockapi.io/MyShoes/my-store');
// 				setList(data);
// 				setIsLoading(false);
// 			} catch (e) {
//                 setErrorMessage(e.message);
//                 setTimeout(() => {
//                     setErrorMessage(null);
//                 }, 1500);
//             }

// 		}
// 		res();
// 	},[])



// 	return (
// 		<div>

// 		</div>
// 	);
// }

// export default Product;
