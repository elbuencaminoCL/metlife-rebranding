
	if( document.getElementById("chartContingentes") ) {
		let ctx = document.getElementById("chartContingentes");
		let $table = $( '#chartTableContingentes' );
		let $tabsChartActiveBeneficiaries = $( '.tabs-chart-beneficiaries' );

		let data = {
			labels: [
				"Esperanza del Carmen Risopatrón Goycochea",
				"Maria Francisca Llanos Risopatrón",
				"Felipe Martin Llanos Risopatrón",
				"Maria Silva Lopez Llanos",
				"martin"
			],
			relation: [
				"Conyugue",
				"Hija",
				"Hijo",
				"Nieta",
				"nieta"
			],
			address: [
				"Monseñor Escribá de Balaguer",
				"Monseñor Escribá de Balaguer",
				"Monseñor Escribá de Balaguer",
				"Monseñor Escribá de Balaguer",
				"Monseñor Escribá de Balaguer"
			],
			phone: [
				"+56 966 554 644",
				"+56 966 554 644",
				"+56 966 554 644",
				"+56 966 554 644",
				"+56 966 554 644"
			],
			email: [
				"daniel.llanos58@gmail.com",
				"daniel.llanos58@gmail.com",
				"daniel.llanos58@gmail.com",
				"daniel.llanos58@gmail.com",
				"daniel.llanos58@gmail.com"
			],
	    datasets: [{
				data: [
					30,
					20,
					15,
					10,
					25
				],
				backgroundColor: [
					"#0a3c6e",
					"#1fc2a2",
					"#896eb3",
					"#efa020",
					"#348c6f"
				]
			}]
		};

		chartFn( data, ctx, $table, $tabsChartActiveBeneficiaries );

	}