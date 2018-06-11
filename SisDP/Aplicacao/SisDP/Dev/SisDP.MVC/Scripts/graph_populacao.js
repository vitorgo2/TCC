var baseUriPopulacao = '/populacao/';

// Faz um post na aplicacao 
$("#btn_search_populacao").click(function () {
    var uf = $("#sltUf_populacao option:selected").val();
    var cidade = $("#sltCidade_populacao option:selected").val();
    var unidade = $("#sltUnidade_populacao option:selected").val();
    if (uf == "UF") {
        alert("Por favor, selecione a UF");
    }
    else
        $.post(baseUriPopulacao + "GetPopulacaoPrisional", { skUf: uf, nkCidade: cidade, nkUnidade: unidade }, function (data) {
            GrafAuxilioReclusao(data);
            GrafDeficiente(data);
            GrafEstadoCivil(data);
            GrafMovimentacao(data);
            GrafNaturalidade(data);
            GrafFilhos(data);
            GrafRemuneracao(data);
            GrafPresosPorIdade(data);
            GrafPresosPorRaca(data);
            GrafPresosPorRegime(data);
            RemoverCredites();
        });
});

// Cria gráfico de pizza: "Quantidade de detentos cuja família recebe auxílio reclusão"
function GrafAuxilioReclusao(data) {

    var arrTemp = [];

    function montarData(data) {
        // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
        if (data.AuxilioReclusao.length < 1) {
            var vTemp = { Auxilio: "NA", Quantidade: 0 };
            arrTemp.push(vTemp);
        }
        else {
            for (var i in data.AuxilioReclusao) {
                var o = {};
                o.name = data.AuxilioReclusao[i].Auxilio;
                o.y = data.AuxilioReclusao[i].Quantidade;
                arrTemp.push(o);
            }
        }
        return arrTemp;
    }

    var chart = Highcharts.chart('gp_populacao_auxilio', {

        title: {
            text: 'Auxílio Reclusão'
        },
        subtitle: {
            text: 'Quantidade de Detentos Cuja Família Recebe Auxílio Reclusão'
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>',
            shared: true
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
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

// Cria gráfico de column: "Quantidade de detentos por tipo de deficiência"
function GrafDeficiente(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.Deficiente) {
            var name = data.Deficiente[i].Deficiencia;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade de detentos
    function montarDataY(data) {
        for (var i in data.Deficiente) {
            var y = data.Deficiente[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_populacao_deficiente', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Deficientes'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Tipo de Deficiência'
        },
        xAxis: {
            categories: montarDataX(data)
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Quantidade'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">Quantidade</span>: <b>{point.y}<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            data: montarDataY(data),
            colorByPoint: true,
            showInLegend: false
        }]
    });
};

// Cria gráfico de barra: "Quantidade de detentos por estado civil"
function GrafEstadoCivil(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.EstadoCivil) {
            var name = data.EstadoCivil[i].EstadoCivil;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade de detentos
    function montarDataY(data) {
        for (var i in data.EstadoCivil) {
            var y = data.EstadoCivil[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_populacao_estadocivil', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Estado Civil'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Estado Civil'
        },
        xAxis: {
            categories: montarDataX(data)
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Quantidade'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">Quantidade</span>: <b>{point.y}<br/>',
            shared: true
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            data: montarDataY(data),
            colorByPoint: true,
            showInLegend: false
        }]
    });
};

// Cria gráfico de piramide: "Movimentação dos detentos entre unidades e abandonos"
function GrafMovimentacao(data) {

    var vMovimentacao = { UF: "NA", TipoMovimentacao: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.Movimentacao.length < 1) {
        data.Movimentacao.push(vMovimentacao);
    }

    var chart = Highcharts.chart('gp_populacao_movimentacao', {
        chart: {
            type: 'pyramid'
        },
        title: {
            text: 'Movimentação e Abandono'
        },

        subtitle: {
            text: 'Quantidade de Movimentações e Abandonos'
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
                 [data.Movimentacao[3].TipoMovimentacao, data.Movimentacao[3].Quantidade],
                 [data.Movimentacao[2].TipoMovimentacao, data.Movimentacao[2].Quantidade],
                 [data.Movimentacao[1].TipoMovimentacao, data.Movimentacao[1].Quantidade],
                 [data.Movimentacao[0].TipoMovimentacao, data.Movimentacao[0].Quantidade]
            ]
        }]
    });
};

// Cria gráfico de pizza: "Quantidade de detentos por naturalidade"
function GrafNaturalidade(data) {

    var arrTemp = [];

    function montarData(data) {
        // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
        if (data.Naturalidade.length < 1) {
            var vTemp = { Nacionalidade: "NA", Quantidade: 0 };
            arrTemp.push(vTemp);
        }
        else {
            for (var i in data.Naturalidade) {
                var o = {};
                o.name = data.Naturalidade[i].Nacionalidade;
                o.y = data.Naturalidade[i].Quantidade;
                arrTemp.push(o);
            }
        }
        return arrTemp;
    }

    var chart = Highcharts.chart('gp_populacao_naturalidade', {

        title: {
            text: 'Nacionalidade'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Nacionalidade'
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>',
            shared: true
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

// Cria gráfico de column: "Quantidade de detentos por quantidade de filhos"
function GrafFilhos(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.Filhos) {
            var name = data.Filhos[i].Filhos;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade de detentos
    function montarDataY(data) {
        for (var i in data.Filhos) {
            var y = data.Filhos[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_populacao_filhos', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Filhos'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Número de Filhos'
        },
        xAxis: {
            categories: montarDataX(data)
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Quantidade'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">Quantidade</span>: <b>{point.y}<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            data: montarDataY(data),
            colorByPoint: true,
            showInLegend: false
        }]
    });
};

// Cria gráfico de barra: "Quantidade de detentos por valor da remuneração para os que trabalham"
function GrafRemuneracao(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.Remuneracao) {
            var name = data.Remuneracao[i].Remuneracao;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade de detentos
    function montarDataY(data) {
        for (var i in data.Remuneracao) {
            var y = data.Remuneracao[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_populacao_remuneracao', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Remuneração dos Detentos que Trabalham'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Número de Salários Míninos'
        },
        xAxis: {
            categories: montarDataX(data)
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Quantidade'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">Quantidade</span>: <b>{point.y}<br/>',
            shared: true
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            data: montarDataY(data),
            colorByPoint: true,
            showInLegend: false
        }]
    });
};

// Cria gráfico de pizza: "Quantidade de detentos por idade"
function GrafPresosPorIdade(data) {

    var arrTemp = [];

    function montarData(data) {
        // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
        if (data.PresosPorIdade.length < 1) {
            var vTemp = { Idade: "NA", Quantidade: 0 };
            arrTemp.push(vTemp);
        }
        else {
            for (var i in data.PresosPorIdade) {
                var o = {};
                o.name = data.PresosPorIdade[i].Idade;
                o.y = data.PresosPorIdade[i].Quantidade;
                arrTemp.push(o);
            }
        }
        return arrTemp;
    }

    var chart = Highcharts.chart('gp_populacao_idade', {

        title: {
            text: 'Idade'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Idade'
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>',
            shared: true
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
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

// Cria gráfico de area: "Quantidade de detentos por raça"
function GrafPresosPorRaca(data) {

    var vPresosPorRaca = { UF: "NA", TipoRaca: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.PresosPorRaca.length < 1) {
        data.PresosPorRaca.push(vPresosPorRaca);
    }

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.PresosPorRaca) {
            var name = data.PresosPorRaca[i].TipoRaca;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    function montarDataY(data) {
        for (var i in data.PresosPorRaca) {
            var y = data.PresosPorRaca[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_populacao_raca', {

        title: {
            text: 'Raça'
        },

        subtitle: {
            text: 'Quantidade de Detentos por Raça'
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
                text: 'Quantidade'
            },
        },

        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        series: [{
            type: 'area',
            spacingBottom: 30,
            name: 'Quantidade',
            data: montarDataY(data),
            showInLegend: false
        }]
    });
};

// Cria gráfico de column avançado: "Quantidade de detentos por time de regime e condenação"
function GrafPresosPorRegime(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];
    var arrTemp3 = [];
    var arrTemp4 = [];

    //Recupera o tipo de regime
    function montarDataX(data) {
        for (var i in data.PresosPorRegime) {
            var name = data.PresosPorRegime[i].TipoRegime;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade e o tipo de condenação "justiça estadual"
    function montarDataEstadual(data) {
        for (var i in data.PresosPorRegime) {
            var y = data.PresosPorRegime[i].Estadual;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    //Recupera a quantidade e o tipo de condenação "justiça federal"
    function montarDataFederal(data) {
        for (var i in data.PresosPorRegime) {
            var y = data.PresosPorRegime[i].Federal;
            arrTemp3.push(y);
        }
        return arrTemp3;
    }

    //Recupera a quantidade e o tipo de condenação "outros"
    function montarDataOutros(data) {
        for (var i in data.PresosPorRegime) {
            var y = data.PresosPorRegime[i].Outros;
            arrTemp4.push(y);
        }
        return arrTemp4;
    }

    var chart = Highcharts.chart('gp_populacao_regime', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Regime e Condenação'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Tipo de Regime e Condenação'
        },
        xAxis: {
            categories: montarDataX(data),
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Quantidade'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Justiça Estadual',
            data: montarDataEstadual(data)
        }, {
            name: 'Justiça Federal',
            data: montarDataFederal(data)
        }, {
            name: 'Outros',
            data: montarDataOutros(data)
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
