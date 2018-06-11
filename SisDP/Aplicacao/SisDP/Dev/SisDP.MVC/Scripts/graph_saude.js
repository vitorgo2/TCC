var baseUriSaude = '/saude/';

// Faz um post na aplicacao 
$("#btn_search_saude").click(function () {
    var uf = $("#sltUf_saude option:selected").val();
    var cidade = $("#sltCidade_saude option:selected").val();
    var unidade = $("#sltUnidade_saude option:selected").val();
    if (uf == "UF"){
        alert("Por favor, selecione a UF");
    }
    else
    $.post(baseUriSaude + "GetSaude", { skUf: uf, nkCidade: cidade, nkUnidade: unidade }, function (data) {
        GrafConsultorioMedico(data);
        GrafConsultorioOdonto(data);
        GrafFarmacia(data);
        GrafSinteticoSaude(data);
        GrafDoencas(data);
        GrafMortes(data);
        GrafConsultasEmGeral(data);
        RemoverCredites();
    });
});

// Cria gráfico de barras: "Consultórios Médicos"
function GrafConsultorioMedico(data) {

    var vConsultorioMedico = { UF: "NA", St_ConsultorioMedico: "NA", QtdUnidades: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.ConsultorioMedico.length < 1) {
        data.ConsultorioMedico.push(vConsultorioMedico);
    }

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.ConsultorioMedico) {
            var name = data.ConsultorioMedico[i].St_ConsultorioMedico;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    function montarDataY(data) {
        for (var i in data.ConsultorioMedico) {
            var y = data.ConsultorioMedico[i].QtdUnidades;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_saude_consultoriomed', {

        title: {
            text: 'Consultório Médico'
        },

        subtitle: {
            text: 'Unidades que possuem consultórios médicos'
        },

        xAxis: {
            categories: montarDataX(data)
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            data: montarDataY(data),
            showInLegend: false
        }]
    });
};

// Cria gráfico de pie: "Consultórios Odontológicos"
function GrafConsultorioOdonto(data) {

    var vConsultorioOdonto = { UF: "NA", St_ConsultorioOdonto: "NA", QtdUnidades: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.ConsultorioOdonto.length < 1) {
        data.ConsultorioOdonto.push(vConsultorioOdonto);
    }

    var arrTemp = [];

    function montarData(data) {
        for (var i in data.ConsultorioOdonto) {
            var o = {};
            o.name = data.ConsultorioOdonto[i].St_ConsultorioOdonto;
            o.y = data.ConsultorioOdonto[i].QtdUnidades;
            arrTemp.push(o);
        }
        return arrTemp;
    }

    var chart = Highcharts.chart('gp_saude_consultorioodonto', {

        title: {
            text: 'Consultório Odontológico',
            align: 'center',
            verticalAlign: 'middle'
        },
        subtitle: {
            text: 'Unidades que possuem consultórios odontológicos'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -40,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '40%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Consultórios Odontológicos',
            innerSize: '50%',
            data: montarData(data),
            showInLegend: true
        }]
    });
};

// Cria gráfico de area: "Farmácias"
function GrafFarmacia(data) {

    var vFarmacia = { UF: "NA", St_Farmacia: "NA", QtdUnidades: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.Farmacia.length < 1) {
        data.Farmacia.push(vFarmacia);
    }

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.Farmacia) {
            var name = data.Farmacia[i].St_Farmacia;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    function montarDataY(data) {
        for (var i in data.Farmacia) {
            var y = data.Farmacia[i].QtdUnidades;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_saude_farmacia', {

        title: {
            text: 'Farmácia'
        },

        subtitle: {
            text: 'Unidades que possuem farmácias'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: montarDataX(data)
        },
        yAxis: {
            title: {
                text: 'Unidades'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        series: [{
            type: 'area',
            spacingBottom: 30,
            data: montarDataY(data),
            showInLegend: false
        }]
    });
};

// Cria datable de informações sintéticas: "Saúde"
function GrafSinteticoSaude(data) {

    $(document).ready(function () {

        var table = $('#tablesaude').removeAttr('width').DataTable({
            scrollY: "300px",
            scrollX: true,
            scrollCollapse: true,
            paging: true,
            columnDefs: [
                { width: 100, targets: 0 }
            ],
            fixedColumns: false,
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json"
            },
            destroy: true, //Permite filtrar novamente por outros parâmetros após a primeira inicialização
            responsive: true,
            data: data.SinteticoSaude,
            columns: [
                { title: 'UF', data: 'UF' },
                { title: 'Unidade', data: 'NomeUnidade' },
                { title: 'Cidade', data: 'Cidade' },
                { title: 'Consult. Médico', data: 'ConsultorioMedico' },
                { title: 'Quantidade', data: 'QtdConsultorioMedico' },
                { title: 'Consult. Odontológico', data: 'ConsultorioOdonto' },
                { title: 'Quantidade', data: 'QtdConsultorioOdonto' },
                { title: 'Farmácia', data: 'Farmacia' },
                { title: 'Quantidade', data: 'QtdFarmacia' }
            ]
        });
    });
}

// Cria gráfico de pizza: "Doenças"
function GrafDoencas(data) {

    var arrTemp = [];

    function montarData(data) {
        // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
        if (data.TipoDoenca.length < 1) {
            var vTemp = { Doenca: "NA", Quantidade: 0 };
            arrTemp.push(vTemp);
        }
        else {
            for (var i in data.TipoDoenca) {
                var o = {};
                o.name = data.TipoDoenca[i].Doenca;
                o.y = data.TipoDoenca[i].Quantidade;
                arrTemp.push(o);
            }
        }
        return arrTemp;
    }

    var chart = Highcharts.chart('gp_saude_doenca', {

        title: {
            text: 'Doenças'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Tipo de Doença'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true
                },
                showInLegend: true,
                borderWidth: 0 //cria traços quando o y possui valor 0
            }
        },
        series: [{
            type: 'pie',
            name: 'Quantidade',
            colorByPoint: true,
            data: montarData(data)
        }]
    });
};

// Cria gráfico de barra stacked: "Mortes"
function GrafMortes(data) {

    var vMortes = { UF: "NA", TipoMorte: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.Morte.length < 1) {
        data.Morte.push(vDoencas);
    }

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.Morte) {
            var name = data.Morte[i].TipoMorte;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    function montarDataY(data) {
        for (var i in data.Morte) {
            var y = data.Morte[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_saude_morte', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Mortes'
        },
        subtitle: {
            text: 'Quantidade de Detentos Mortos'
        },
        legend: {
            reversed: true
        },
        xAxis: {
            categories: montarDataX(data)
        },
        yAxis: {
            title: {
                text: 'Quantidade'
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            data: montarDataY(data),
            showInLegend: false,
            colorByPoint: true
        }]
    });
};

// Cria gráfico de piramide: "Consultas em Geral"
function GrafConsultasEmGeral(data) {

    var vConsultasEmGeral = { UF: "NA", TipoConsulta: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.ConsultaEmGeral.length < 1) {
        data.ConsultaEmGeral.push(vConsultasEmGeral);
    }

    var chart = Highcharts.chart('gp_saude_consultas', {
        chart: {
            type: 'pyramid'
        },
        title: {
            text: 'Consultas'
        },

        subtitle: {
            text: 'Quantidade de Consultas Realizadas'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                },
                center: ['50%', '50%'],
                width: '80%'
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Quantidade',
            data: [
                 [data.ConsultaEmGeral[4].TipoConsulta, data.ConsultaEmGeral[4].Quantidade],
                 [data.ConsultaEmGeral[3].TipoConsulta, data.ConsultaEmGeral[3].Quantidade],
                 [data.ConsultaEmGeral[2].TipoConsulta, data.ConsultaEmGeral[2].Quantidade],
                 [data.ConsultaEmGeral[1].TipoConsulta, data.ConsultaEmGeral[1].Quantidade],
                 [data.ConsultaEmGeral[0].TipoConsulta, data.ConsultaEmGeral[0].Quantidade]
            ]
        }]
    });
};

// Remove os créditos do HighCharts (Apenas em ambiente de desenvolvimento)
function RemoverCredites() {
    var credites = document.getElementsByClassName("highcharts-credits");
    for (var i = 0; i < credites.length; i++) {
        credites[i].textContent = " ";
    }
}
