import React from 'react'
import { useForm } from 'react-hook-form'
import '../css/form.scss'

const Form = ({message, setMessage}) => {

	const {register, handleSubmit} = useForm();
	const onSubmit = (newData) => {
		console.log(document.getElementById("naam"))
		setMessage(newData)

	}
	
	return (
		<div className='form'>
			<form className='form-container' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='form-title'>Form</h1>
				
				<label className='form-label'>naam:</label>
				<input  {...register("naam")} onChange={handleSubmit(onSubmit)}/>
				{ !message.naam && <p className='form-undertekst'>naam is niet goed ingevuld</p> }
				
				<label className='form-label'>achternaam:</label>
				<input className='form-input' {...register("achternaam")}/>
				{ !message.achternaam && <p className='form-undertekst'>achternaam is niet goed ingevuld</p> }

				<label className='form-label'>adres:</label>
				<input className='form-input' {...register("adres")}/>
				{ !message.adres && <p className='form-undertekst'>adres is niet goed ingevuld</p> }

				<label className='form-label'>huisnummer:</label>
				<input className='form-input' {...register("huisnummer")}/>
				{ !message.huisnummer && <p className='form-undertekst'>huisnummer is niet goed ingevuld</p> }

				<label className='form-label'>postcode:</label>
				<input className='form-input' {...register("postcode")}/>
				{ !message.postcode && <p className='form-undertekst'>postcode is niet goed ingevuld</p> }

				<label className='form-label'>woonplaats:</label>
				<input className='form-input' {...register("woonplaats")}/>
				{ !message.woonplaats && <p className='form-undertekst'>woonplaats is niet goed ingevuld</p> }

				<label className='form-label'>emailadres:</label>
				<input className='form-input' {...register("emailadres")}/>
				{ !message.emailadres && <p className='form-undertekst'>emailadres is niet goed ingevuld</p> }

				<input type="submit" value="submit"/>
			</form>
		</div>
	)
}
	
export default Form
