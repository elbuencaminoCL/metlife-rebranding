
	const $SumInput = $('.SumInput')
	const $SumTotalUF = $('.SumTotalUF')
	const $SumTotalPeso = $('.SumTotalPeso')
	let UFVALUE = '26573.27'

	$.getJSON('http://mindicador.cl/api', function(data) {
		const dailyIndicators = data

		UFVALUE = dailyIndicators.uf.valor

	}).fail(function() {
		console.log('Error al consumir la API UF!');
	});

	$SumInput.on('change', (ev) => {
		const dataValue = $(ev.currentTarget).data('value-sum-uf')

		let sumTotal = 0;

		$SumInput.each( (index, data) => {
			const $data = $(data)

			if( $data.is(':checked') ) {
				sumTotal += parseFloat( $( data ).data('value-sum-uf') )
			}
		})

		$SumTotalUF.text( numeral(sumTotal).format( '0,0.00' ) )
		$SumTotalPeso.text( numeral( sumTotal * UFVALUE ).format('0,0') )

	})