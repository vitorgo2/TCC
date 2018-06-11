var baseUri = '/educacao/';

// Faz um post na aplicacao 
$("#btn_search").click(function () {
    var uf = $("#sltUf option:selected").val();
    var cidade = $("#sltCidade option:selected").val();
    var unidade = $("#sltUnidade option:selected").val();
    if (uf == "UF"){
        alert("Por favor, selecione a UF");
    }
    else
    $.post(baseUri + "GetAtividadeEducacional", { skUf: uf, nkCidade: cidade, nkUnidade: unidade }, function (data) {
        GrafAtvEducacional(data);
        GrafBiblioteca(data);
        GrafInfGrauInstrucao(data);
        GrafSalaProfessor(data);
        GrafEscolaridade(data);
        RemoverCredites();
    });
});

// Cria gráfico de barras: "Atividades Educacionais"
function GrafAtvEducacional(data) {

    var AtividadesEducacional = { UF: "NA", PresoAtividadeEducacional: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.AtividadesEducacionais.length < 1) {
        data.AtividadesEducacionais.push(AtividadesEducacional);
    }

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.AtividadesEducacionais) {
            var name = data.AtividadesEducacionais[i].PresoAtividadeEducacional;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    function montarDataY(data) {
        for (var i in data.AtividadesEducacionais) {
            var y = data.AtividadesEducacionais[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_edu_atveducacionais', {

        title: {
            text: 'Atividades Educacionais'
        },

        subtitle: {
            text: 'Unidades que possuem algum tipo de atividade educacional'
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
            
        series: [{
            type: 'column',
            colorByPoint: true,
            data: montarDataY(data),
            showInLegend: false
        }]
    });
};

// Cria gráfico de barras: "Informação Grau de Instrução"
function GrafInfGrauInstrucao(data) {

    var vInfGrauInstrucao = { UF: "NA", InformacaoGrauIntrucao: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.InfGrauInstrucao.length < 1) {
        data.InfGrauInstrucao.push(vInfGrauInstrucao);
    }

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.InfGrauInstrucao) {
            var name = data.InfGrauInstrucao[i].InformacaoGrauIntrucao;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    function montarDataY(data) {
        for (var i in data.InfGrauInstrucao) {
            var y = data.InfGrauInstrucao[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_edu_infgrauinstrucao', {

        title: {
            text: 'Grau de Instrução'
        },

        subtitle: {
            text: 'Unidades que possuem a informação do grau de instrução dos detentos'
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

        series: [{
            type: 'column',
            colorByPoint: true,
            data: montarDataY(data),
            showInLegend: false
        }]
    });
};

// Cria gráfico de pizza: "Bibliotecas"
function GrafBiblioteca(data) {

    var Biblioteca = { UF: "NA", St_Biblioteca: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.Bibliotecas.length < 1) {
        data.Bibliotecas.push(Biblioteca);
    }

    var arrTemp = [];

    function montarData(data) {
        for (var i in data.Bibliotecas) {
            var o = {};
            o.name = data.Bibliotecas[i].St_Biblioteca;
            o.y = data.Bibliotecas[i].Quantidade;
            arrTemp.push(o);
        }
        return arrTemp;
    }

    Highcharts.chart('gp_edu_bibliotecas', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Bibliotecas'
        },
        subtitle: {
            text: 'Unidades que possuem biblioteca'
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
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
            name: 'Bibliotecas',
            data: montarData(data),
            showInLegend: true
        }]
    });
};

// Cria gráfico de pizza: "Sala dos Professores"
function GrafSalaProfessor(data) {

    var vSalaProfessor = { UF: "NA", St_SalaProfessores: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.SalaProfessor.length < 1) {
        data.SalaProfessor.push(vSalaProfessor);
    }

    var arrTemp = [];

    function montarData(data) {
        for (var i in data.SalaProfessor) {
            var o = {};
            o.name = data.SalaProfessor[i].St_SalaProfessores;
            o.y = data.SalaProfessor[i].Quantidade;
            arrTemp.push(o);
        }
        return arrTemp;
    }

    Highcharts.chart('gp_edu_salaprofessor', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Sala dos Professores'
        },
        subtitle: {
            text: 'Unidades que possuem sala dos professores'
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
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
            name: 'Sala dos Professores',
            data: montarData(data),
            showInLegend: true
        }]
    });
};

// Cria gráfico de barras: "Escolaridade"
function GrafEscolaridade(data) {

    var vEscolaridade = { UF: "NA", Escolaridade: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 3  
    if (data.InfEscolaridade.length < 5) {
        if (data.InfEscolaridade.length === 2) {
            data.InfEscolaridade.push(vEscolaridade);
        } else {
            data.InfEscolaridade.push(vEscolaridade);
            data.InfEscolaridade.push(vEscolaridade);
        }
    }

    var chart = Highcharts.chart('gp_edu_escolaridade', {

        title: {
            text: 'Grau de Escolaridade'
        },

        subtitle: {
            text: 'Quantidade de detentos por grau de escolaridade'
        },

        xAxis: {
            categories: [data.InfEscolaridade[0].Escolaridade,
                data.InfEscolaridade[1].Escolaridade,
                data.InfEscolaridade[2].Escolaridade,
                data.InfEscolaridade[3].Escolaridade,
                data.InfEscolaridade[4].Escolaridade
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Quantidade'
            }
        },

        series: [{
            type: 'column',
            colorByPoint: true,
            data: [data.InfEscolaridade[0].Quantidade,
                data.InfEscolaridade[1].Quantidade,
                data.InfEscolaridade[2].Quantidade,
                data.InfEscolaridade[3].Quantidade,
                data.InfEscolaridade[4].Quantidade],
            showInLegend: false
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


