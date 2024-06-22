import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/Register';
import List from './pages/List';
import NotFound from './pages/NotFound';

function App() {
	const [data, setData] = useState([]);

	const fetchList = (newList) => {
		setData(newList);
	};

	return (
		<Router>
			<Routes>
				<Route
					exact
					path='/'
					element={
						<Register
							fetchListProps={fetchList}
							currentList={data}
						/>
					}
				/>
				<Route path='/list' element={<List data={data} />} />
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
