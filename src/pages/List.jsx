import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default ({ data }) => {
	const [sortOrder, setSortOrder] = useState('asc');
	const navigate = useNavigate();

	const sortedData = [...data].sort((a, b) => {
		if (sortOrder === 'asc') {
			return parseFloat(a.value) - parseFloat(b.value);
		} else {
			return parseFloat(b.value) - parseFloat(a.value);
		}
	});

	const toggleSortOrder = () => {
		setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
	};

	return (
		<div className='list-container'>
			{data.length !== 0 ? (
				<>
					<button
						onClick={toggleSortOrder}
						className='sort-button'>
						Ordenar por Valor (
						{sortOrder === 'asc'
							? 'Ascendente'
							: 'Descendente'}
						)
					</button>

					<table className='list'>
						<tr>
							<td>Nome</td>
							<td>Descrição</td>
							<td>Valor</td>
							<td>Disponibilidade</td>
						</tr>

						{sortedData.map((item) => (
							<tr>
								<td>{item.name}</td>
								<td>{item.description}</td>
								<td>
									{item.value != ''
										? `R$ ${item.value}`
										: ''}
								</td>
								<td>{item.available}</td>
							</tr>
						))}
					</table>
				</>
			) : (
				<span className='span-list'>
					Não existem itens cadastrados!
				</span>
			)}
			<button
				onClick={() => {
					navigate('/');
				}}
				className='button-inverted'>
				Cadastrar
			</button>
		</div>
	);
};
