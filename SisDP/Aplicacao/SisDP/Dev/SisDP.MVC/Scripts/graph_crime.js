var baseUriCrime = '/crime/';

// Faz um post na aplicacao 
$("#btn_search_crime").click(function () {
    var uf = $("#sltUf_crime option:selected").val();
    var cidade = $("#sltCidade_crime option:selected").val();
    var unidade = $("#sltUnidade_crime option:selected").val();
    if (uf == "UF") {
        alert("Por favor, selecione a UF");
    }
    else
        $.post(baseUriCrime + "GetCrimes", { skUf: uf, nkCidade: cidade, nkUnidade: unidade }, function (data) {
            GrafHomicidios(data);
            GrafLesao(data);
            GrafFurtoRoubo(data);
            GrafArmaFogo(data);
            GrafTipificacaoCriminal(data);
            GrafCorrupcao(data);
            GrafAtestadoPena(data);
            GrafTraficoDrogas(data);
            GrafTempoPena(data);
            GrafTempoPenaRemanescente(data);
            GrafCrimeSexual(data);
            RemoverCredites();
        });
});

// Cria gráfico de pizza: "Quantidade de Detentos por Tipo de Homicídio"
function GrafHomicidios(data) {

    var arrTemp = [];

    function montarData(data) {
        // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
        if (data.Homicidios.length < 1) {
            var vTemp = { TipoCrime: "NA", Quantidade: 0 };
            arrTemp.push(vTemp);
        }
        else {
            for (var i in data.Homicidios) {
                var o = {};
                o.name = data.Homicidios[i].TipoCrime;
                o.y = data.Homicidios[i].Quantidade;
                arrTemp.push(o);
            }
        }
        return arrTemp;
    }

    var chart = Highcharts.chart('gp_crime_homicidio', {

        title: {
            text: 'Homicídios'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Tipo de Homicídio'
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
            name: 'Quantidade',
            colorByPoint: true,
            data: montarData(data)
        }]
    });
};

// Cria gráfico de column: "Quantidade de Detentos por Tipo de Lesão/Agressão"
function GrafLesao(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];

    //Recupera o tipo de Lesão/Agressão
    function montarDataX(data) {
        for (var i in data.Lesao) {
            var name = data.Lesao[i].TipoCrime;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade de detentos
    function montarDataY(data) {
        for (var i in data.Lesao) {
            var y = data.Lesao[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_crime_lesao', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Lesão/Agressão'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Tipo de Lesão/Agressão'
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

// Cria gráfico de barra: "Quantidade de Detentos por Furto/Roubo"
function GrafFurtoRoubo(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.FurtoRoubo) {
            var name = data.FurtoRoubo[i].TipoCrime;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade de detentos
    function montarDataY(data) {
        for (var i in data.FurtoRoubo) {
            var y = data.FurtoRoubo[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_crime_furto', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Furto/Roubo'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Tipo de Furto/Roubo'
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

// Cria gráfico de pizza: "Quantidade de Detentos por Porte e Tráfico de Arma"
function GrafArmaFogo(data) {

    var arrTemp = [];

    function montarData(data) {
        // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
        if (data.ArmaFogo.length < 1) {
            var vTemp = { TipoCrime: "NA", Quantidade: 0 };
            arrTemp.push(vTemp);
        }
        else {
            for (var i in data.ArmaFogo) {
                var o = {};
                o.name = data.ArmaFogo[i].TipoCrime;
                o.y = data.ArmaFogo[i].Quantidade;
                arrTemp.push(o);
            }
        }
        return arrTemp;
    }

    var chart = Highcharts.chart('gp_saude_arma', {

        title: {
            text: 'Arma de Fogo'
        },
        subtitle: {
            text: 'Quantidade de Detentos | Arma de Fogo'
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

// Cria gráfico de pizza: "Quantidade de Detentos quem possuem/não possuem Tipificacao Criminal"
function GrafTipificacaoCriminal(data) {

    var arrTemp = [];

    function montarData(data) {
        // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
        if (data.TipificacaoCriminal.length < 1) {
            var vTemp = { TipificacaoCriminal: "NA", Quantidade: 0 };
            arrTemp.push(vTemp);
        }
        else {
            for (var i in data.TipificacaoCriminal) {
                var o = {};
                o.name = data.TipificacaoCriminal[i].TipificacaoCriminal;
                o.y = data.TipificacaoCriminal[i].Quantidade;
                arrTemp.push(o);
            }
        }
        return arrTemp;
    }

    var chart = Highcharts.chart('gp_crime_tipificacao', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Tipificação Criminial',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        subtitle: {
            text: 'Quantidade de Detentos | Tipificação Criminal'
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
            name: 'Quantidade',
            innerSize: '50%',
            data: montarData(data),
            showInLegend: true
        }]
    });
};

// Cria gráfico de column: "Quantidade de Detentos por Corrupção"
function GrafCorrupcao(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.Corrupcao) {
            var name = data.Corrupcao[i].TipoCrime;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade de detentos
    function montarDataY(data) {
        for (var i in data.Corrupcao) {
            var y = data.Corrupcao[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_crime_corrupcao', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Corrupção e Falsificação'
        },
        subtitle: {
            text: 'Quantidade de Detentos | Corrupção'
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

// Cria gráfico de area: "Atestado de Pena"
function GrafAtestadoPena(data) {

    var vAtestadoPena = { UF: "NA", AtestadoPena: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.AtestadoPena.length < 1) {
        data.AtestadoPena.push(vAtestadoPena);
    }

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.AtestadoPena) {
            var name = data.AtestadoPena[i].AtestadoPena;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    function montarDataY(data) {
        for (var i in data.AtestadoPena) {
            var y = data.AtestadoPena[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_crime_atestado', {

        title: {
            text: 'Atestado de Pena a Cumprir'
        },

        subtitle: {
            text: 'Unidades que Recebem Atestado de Pena'
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

// Cria gráfico de column: "Quantidade de Detentos por Tráfico de Drogas"
function GrafTraficoDrogas(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.TraficoDrogas) {
            var name = data.TraficoDrogas[i].TipoCrime;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade de detentos
    function montarDataY(data) {
        for (var i in data.TraficoDrogas) {
            var y = data.TraficoDrogas[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_crime_trafico', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Tráfico de Drogas'
        },
        subtitle: {
            text: 'Quantidade de Detentos | Drogas'
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

// Cria gráfico de barra: "Quantidade de Detentos por Tempo de Pena"
function GrafTempoPena(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.TempoPena) {
            var name = data.TempoPena[i].TempoPena;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade de detentos
    function montarDataY(data) {
        for (var i in data.TempoPena) {
            var y = data.TempoPena[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_crime_tempopena', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Tempo de Pena'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Tempo de Pena'
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

// Cria gráfico de area: "Quantidade de Detentos por Tempo de Pena Remanescente"
function GrafTempoPenaRemanescente(data) {

    var vTempoPenaRemanescente = { UF: "NA", AtestadoPena: "NA", Quantidade: 0 };

    // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
    if (data.TempoPenaRemanescente.length < 1) {
        data.TempoPenaRemanescente.push(TempoPenaRemanescente);
    }

    var arrTemp1 = [];
    var arrTemp2 = [];

    function montarDataX(data) {
        for (var i in data.TempoPenaRemanescente) {
            var name = data.TempoPenaRemanescente[i].TempoRemanescente;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    function montarDataY(data) {
        for (var i in data.TempoPenaRemanescente) {
            var y = data.TempoPenaRemanescente[i].Quantidade;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    var chart = Highcharts.chart('gp_crime_temporemanescente', {

        title: {
            text: 'Tempo de Pena Remanescente'
        },

        subtitle: {
            text: 'Quantidade de Detentos por Tempo de Pena Restante'
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

// Cria gráfico de pizza: "Quantidade de Detentos por Tipo de Crime Sexual"
function GrafCrimeSexual(data) {

    var arrTemp = [];

    function montarData(data) {
        // Cria um objeto fake, caso a quantidade de objetos seja menor que 1  
        if (data.CrimeSexual.length < 1) {
            var vTemp = { TipoCrime: "NA", Quantidade: 0 };
            arrTemp.push(vTemp);
        }
        else {
            for (var i in data.CrimeSexual) {
                var o = {};
                o.name = data.CrimeSexual[i].TipoCrime;
                o.y = data.CrimeSexual[i].Quantidade;
                arrTemp.push(o);
            }
        }
        return arrTemp;
    }

    var chart = Highcharts.chart('gp_crime_sexual', {

        title: {
            text: 'Crimes Sexuais'
        },
        subtitle: {
            text: 'Quantidade de Detentos por Tipo de Crime Sexual'
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
            name: 'Quantidade',
            colorByPoint: true,
            data: montarData(data)
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
