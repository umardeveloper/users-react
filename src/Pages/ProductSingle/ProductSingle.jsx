import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductSingle() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [data, setData] = React.useState({});

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/posts/' + id)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [id]);

	return (
		<>
			<h1>ProductSingle</h1>

			<button onClick={() => navigate(-1)}>Backward'ga</button>

			<p>{id}</p>



			{data && (
				<>
					<h2>{data.title}</h2>

					<p>{data.body}</p>
				</>
			)}
		</>
	);
}

export default ProductSingle;
