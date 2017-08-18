
	let $dataChangeFundsStock = $('[data-change-funds-stock]')
	let $dataChangeFundsFlow = $('[data-change-funds-flow]')
	let $dataChangeFundsStockTotal = $('[data-change-funds-stock-total]')
	let $dataChangeFundsFlowTotal = $('[data-change-funds-flow-total]')
	let $dataChangeFundsFlowTotalData = $('[data-change-funds-flow-total]').data('change-funds-flow-total')
	let $dataEditFieldsSubmit = $('[data-edit-fields-submit]')


	$dataChangeFundsStock.on('change', (e) => {
		let totalEditFunds = 0

		$dataChangeFundsStock.each( (index, el) => {
			const dataFunds = $(el).data('edit-fields')

			let dataFundsValue = parseInt($(el).val())

			if(isNaN(dataFundsValue)) {
				$(el).val(0)
				dataFundsValue = parseInt($(el).val())
				$(el).val('')
			}

			totalEditFunds += dataFundsValue

		})

		if(totalEditFunds > 100) {
			$dataChangeFundsStockTotal.addClass('red')
		} else {
			$dataChangeFundsStockTotal.removeClass('red')
		}

		let $dataChangeFundsFlowTotalData = parseInt($('[data-change-funds-flow-total]').text())

		if(totalEditFunds > 100 || $dataChangeFundsFlowTotalData > 100) {
			$dataEditFieldsSubmit.addClass('button-disabled')
		} else {
			$dataEditFieldsSubmit.removeClass('button-disabled')
		}

		$dataChangeFundsStockTotal.html(totalEditFunds)


	})


	$dataChangeFundsFlow.on('change', (e) => {

		let totalEditFundsFlow = 0

		$dataChangeFundsFlow.each( (index, el) => {
			const dataFunds = $(el).data('edit-fields')

			let dataFundsFlowValue = parseInt($(el).val())

			if(isNaN(dataFundsFlowValue)) {
				$(el).val(0)
				dataFundsFlowValue = parseInt($(el).val())
				$(el).val('')
			}

			totalEditFundsFlow += dataFundsFlowValue

		})

		if(totalEditFundsFlow > 100) {
			$dataChangeFundsFlowTotal.addClass('red')
		} else {
			$dataChangeFundsFlowTotal.removeClass('red')
		}

		let $dataChangeFundsStockTotalData = parseInt($('[data-change-funds-stock-total]').text())

		if(totalEditFundsFlow > 100 || $dataChangeFundsStockTotalData > 100) {
			$dataEditFieldsSubmit.addClass('button-disabled')
		} else {
			$dataEditFieldsSubmit.removeClass('button-disabled')
		}

		$dataChangeFundsFlowTotal.html(totalEditFundsFlow)

	})