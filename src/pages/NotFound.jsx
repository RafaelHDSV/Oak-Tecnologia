import { useNavigate } from 'react-router-dom';

export default () => {
	const navigate = useNavigate();

	return (
		<div className='not-found'>
			<h1
				onClick={() => {
					navigate('/');
				}}>
				Sua página não foi encontrada ou não existe!
			</h1>

			<span
				onClick={() => {
					navigate('/');
				}}>
				Clique no texto para voltar ao início.
			</span>
		</div>
	);
};
