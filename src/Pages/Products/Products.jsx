import React from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
	const navigate = useNavigate();

	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/posts')
			.then((res) => res.json())
			.then((data) => {
                setData([...data])
                setLoading(false)
            });
	}, []);

	return (
		<>
			<h1>Products</h1>

			<button onClick={() => navigate(-1)}>Backward'ga</button>

			<button onClick={() => navigate(1)}>Forward'ga</button>

			{loading && <h1>Loading ....</h1>}

			<ul>
				{data.length > 0 &&
					data.map((row) => (
						<li key={row.id}>
							<button onClick={() => navigate('/products/' + row.id)}>
								<strong>{row.id}</strong>
								<p>{row.title}</p>
							</button>
						</li>
					))}
			</ul>
		</>
	);
}

export default Products;
