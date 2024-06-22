import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../App.css';

const Register = ({ fetchListProps, currentList }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const [available, setAvailable] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const list = {
			name,
			description,
			value,
			available,
		};

		const newList = [...currentList, list];
		fetchListProps(newList);
		navigate('/list');
	};

	return (
		<div className='App'>
			<form className='form-container'>
				<div className='input-container'>
					<label htmlFor='name'>Nome: </label>
					<input
						type='text'
						id='name'
						value={name}
						autoComplete='off'
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className='input-container'>
					<label htmlFor='description'>Descrição: </label>
					<input
						type='text'
						id='description'
						value={description}
						autoComplete='off'
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div className='input-container'>
					<label htmlFor='value'>Valor: </label>
					<input
						type='number'
						name='value'
						id='value'
						value={value}
						min={'1'}
						autoComplete='off'
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>

				<div className='input-container'>
					<span>Disponibilidade p/ venda: </span>

					<div className='radio-group'>
						<div className='radio'>
							<input
								type='radio'
								id='yes'
								name='yes'
								value='Sim'
								checked={available === 'Sim'}
								onChange={(e) =>
									setAvailable(e.target.value)
								}
							/>
							<label htmlFor='yes'>Sim</label>
						</div>

						<div className='radio'>
							<input
								type='radio'
								id='no'
								name='no'
								value='Não'
								checked={available === 'Não'}
								onChange={(e) =>
									setAvailable(e.target.value)
								}
							/>
							<label htmlFor='no'>Não</label>
						</div>
					</div>
				</div>

				<button onClick={handleSubmit}>Cadastrar</button>
			</form>
		</div>
	);
};

export default Register;
