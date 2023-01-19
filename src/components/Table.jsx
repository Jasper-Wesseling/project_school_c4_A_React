import React from 'react'
import '../css/table.scss'

const Table = ({message}) => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Voornaam</th>
						<th>Achternaam</th>
						<th>Adres</th>
						<th>Huisnummer</th>
						<th>Postcode</th>
						<th>Woonplaats</th>
						<th>Emailadres</th>
					</tr>
					<tr>
						<td className={` ${ message.naam !== '' && 'true' }  `}>{message.naam}</td>
						<td className={` ${ message.achternaam !== '' && 'true' }  `}>{message.achternaam}</td>
						<td className={` ${ message.adres !== '' && 'true' }  `}>{message.adres}</td>
						<td className={` ${ message.huisnummer !== '' && 'true' }  `}>{message.huisnummer}</td>
						<td className={` ${ message.postcode !== '' && 'true' }  `}>{message.postcode}</td>
						<td className={` ${ message.woonplaats !== '' && 'true' }  `}>{message.woonplaats}</td>
						<td className={` ${ message.emailadres !== '' && 'true' }  `}>{message.emailadres}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Table
