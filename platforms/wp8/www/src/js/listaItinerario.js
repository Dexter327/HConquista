// Definindo um novo módulo para nossa aplicação
var app = angular.module ("instantSearch", []);

// Crie um filtro de pesquisa instantânea

app.filter ('searchFor', function () {

	// Todos os filtros devem retornar uma função. O primeiro 
	// parâmetro é um dado que será filtrado, e o segundo é um 
	// argumento que vai ser passado com dois pontos
	// searchFor: searchString

	return function (arr, searchString) {

		if (!searchString) {
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Usando o útil método forEach para iterar através do array
		angular.forEach (arr, function (item) {

			if (item.title.toLowerCase().indexOf(searchString) !== -1) {
				result.push(item);
			}
		});

		return result;
	};

});

// O Controlador

function InstantSearchController ($scope) {

	// O modelo de dados. Estes itens normalmente são requisitados via Ajax,
	// mas aqui estão simplificados. Veja o próximo exemplo para 
	// dicas usando Ajax.

	$scope.items = [
		{
			url: '#',
			title: 'D30 - Vila Serranas x UESB',
		},
		{
			url: '#',
			title: 'D31 - B.Brasil X UESB',
		},
        
        {
			url: '#',
			title: 'D32 – N. Sra. Aparecida x UESB',
		},
        
        {
			url: '#',
			title: 'D33 – Conquista VI x UESB',
		},
        
        {
			url: '#',
			title: 'D34 – Patagônia x UESB',
		},
        
        {
			url: '#',
			title: 'D35 – Rodoviária x UESB',
		},
        
        {
			url: '#',
			title: 'D36 – M. dos Pássaros x UESB',
		},
        
        {
			url: '#',
			title: 'D37 – Vilas Serranas x UESB (via B. Brasil)',
		},
        
        {
			url: '#',
			title: 'D38 – Alto Maron x Conquista VI',
		},
        
        {
			url: '#',
			title: 'D39 – Henriqueta Prates x UESB',
		},
        
        {
			url: '#',
			title: 'D40 – Jardim Valéria x UESB',
		},
        
        {
			url: '#',
			title: 'D41 – Nova Cidade x Atacadão (Alto Maron)',
		},
        
        {
			url: '#',
			title: 'D41 – Nova Cidade x Atacadão (Urbis I)',
		},
        
        {
			url: '#',
			title: 'D42 – Lagoa das Flores x UESB',
		},
        
        {
			url: '#',
			title: 'D43 – Conveima I x Uesb',
		},
        
        {
			url: '#',
			title: 'P50 – Vilas Serranas x Conquista VI',
		},
        
        {
			url: '#',
			title: 'P51 – Cidade Maravilhosa x UESB',
		},
        
        {
			url: '#',
			title: 'P52 – Conquista VI x UESB (via Av. LEM)',
		},
        
        {
			url: '#',
			title: 'P53 – Vilas Serranas x Vila América',
		},
        
        {
			url: '#',
			title: 'P54 – Morada Real X Miro Cairo',
		},
        
        {
			url: '#',
			title: 'R01 – Vilas Serranas x Centro',
		},
        
        {
			url: '#',
			title: 'R02 – Cidade Maravilhosa x Centro',
		},
        
        {
			url: '#',
			title: 'R03 – Pradoso x Centro',
		},
        
        {
			url: '#',
			title: 'R04 - Santa Marta x Centro',
		},
        
        {
			url: '#',
			title: 'R05 – Bruno Barcelar x Centro',
		},
        
        {
			url: '#',
			title: 'R06 – Senhorinha Cairo x Centro',
		},
        
        {
			url: '#',
			title: 'R07 – Nova Cidade x Centro (via Morada da Vitória)',
		},
        
        {
			url: '#',
			title: 'R08 – Henriqueta Prates x Centro',
		},
        
        {
			url: '#',
			title: 'R09 – UESB x Centro',
		},
        
        {
			url: '#',
			title: 'R10 – Campinhos x Centro',
		},
        
        {
			url: '#',
			title: 'R11 – Conveima I x Centro',
		},
        
        {
			url: '#',
			title: 'R12 – Patagônia x Centro',
		},
        
        {
			url: '#',
			title: 'R12a – KADIJA x Feirinha',
		},
        
        {
			url: '#',
			title: 'R13 – Guarani x Centro',
		},
        
        {
			url: '#',
			title: 'R14 – Jardim Valéria x Centro',
		},
        
        {
			url: '#',
			title: 'R15 – Morada Real x Centro',
		},
        
        {
			url: '#',
			title: 'R16 – Conquista VI x Centro',
		},
        
        {
			url: '#',
			title: 'R17 – Lagoa das Flores x Centro',
		},
        
        {
			url: '#',
			title: 'R18 – Boa vista x Centro (via V. América)',
		},
        
        {
			url: '#',
			title: 'R19 – Rodoviária x CentroB',
		},
        
        {
			url: '#',
			title: 'R19a – Rodoviária x Centro (via Sta. Helena)',
		},
        
        {
			url: '#',
			title: 'R20 – Cidade Modelo x CENTRO',
		},
        
        {
			url: '#',
			title: 'R21 – Ibirapuera x Centro',
		},
        
        {
			url: '#',
			title: 'R22 – Morada dos Pássaros x Centro',
		},
        
        {
			url: '#',
			title: 'R23 – Vila América x Centro',
		},
        
        {
			url: '#',
			title: 'R24 – Cruzeiro x Centro',
		},
        
        {
			url: '#',
			title: 'R25 - Miro Cairo x Centro',
		},
        
        {
			url: '#',
			title: 'R26 – Cedro X Centro',
		},
        
        {
			url: '#',
			title: 'R27 – Campo Verde X Centro',
		},
        
        {
			url: '#',
			title: 'E01 – Campinhos x Dass',
		},
        
        {
			url: '#',
			title: 'E03 – Alto Maron X Dass',
		},
        
        {
			url: '#',
			title: 'E04 – Miro Cairo X Dass',
		},
		        
	
	];  
}