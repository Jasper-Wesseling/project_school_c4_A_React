import { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import './css/app.scss'

function App() {
	const [message, setMessage] = useState({ 
		naam:'',
		achternaam:'',
		adres:'',
		huisnummer:'',
		postcode:'',
		woonplaats:'',
		emailadres:''
	});

	console.log(message)
	
	return (
			<div>
				<Form message={message} setMessage={setMessage}></Form>
				<Table message={message}></Table>
			</div>
		)
	}
	
export default App
				