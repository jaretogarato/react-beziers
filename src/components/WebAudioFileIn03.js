import React, { useState, useEffect } from 'react'
// import FourChords from '../audio/4-chords.wav'

export default function WebAudioFileIn03({ actx, soundFile }) {
	const [sound, setSound] = useState(soundFile)
	const [soundBuffer, setSoundBuffer] = useState([])
	const [fftData, setFftData] = useState([])
	const source = actx.createBufferSource()
	// const url = FourChords.url
	// console.log(FourChords)

	const fetchData = async (sound) => {
		// console.log('sound: ', sound)
		const response = await fetch(sound)
		if (!response.ok) {
			throw new Error('Data coud not be fetched!')
		} else {
			return response.arrayBuffer()
		}
	}

	useEffect(() => {
		fetchData(sound)
			.then((res) => {
				setSoundBuffer(res)
			})
			// .then(
			// 	actx.decodeAudioData(soundBuffer).then(function (decodedData) {
			// 		console.log('decodedData: ', decodedData)
			// 		setFftData(decodedData)
			// 		console.log('fftData: ', fftData)
			// 	})
			// )
			.catch((e) => {
				console.log(e.message)
			})
	}, [])

	console.log('soundsound: ', sound)
	console.log('soundbufferbuffer: ', soundBuffer)
	// console.log('fft: ', fftData)

	return (
		<div>
			<h2>React HTTP Reqeust with Async Await Example</h2>
			{/* {soundBuffer.map((item, idx) => {
				return (
					<div className='col-lg-3 col-md-4 col-sm-6 mb-3' key={idx}>
						<div className='card h-100'>
							<div className='img-block'>
								<img
									src={item.flags.svg}
									className='card-img-top'
									alt={item.name.common}
								/>
							</div>
							<div className='card-body'>
								<h5 className='card-title'>{item.name.common}</h5>
							</div>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item'>
									<strong>Capital:</strong> {item.capital}
								</li>
								<li className='list-group-item'>
									<strong>Population:</strong> {item.population}
								</li>
								<li className='list-group-item'>
									<strong>Continent:</strong> {item.continents[0]}
								</li>
							</ul>
							<div className='card-body'>
								<div className='d-grid'>
									<a
										className='btn btn-dark'
										href='{item.maps.googleMaps}'
										target='_blank'
									>
										View Map
									</a>
								</div>
							</div>
						</div>
					</div>
				)
			})} */}
		</div>
	)
}
