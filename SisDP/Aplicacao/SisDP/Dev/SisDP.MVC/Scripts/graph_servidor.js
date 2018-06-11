var baseUriServidor = '/servidor/';

// Faz um post na aplicacao 
$("#btn_search_servidor").click(function () {
    var uf = $("#sltUf_servidor option:selected").val();
    var cidade = $("#sltCidade_servidor option:selected").val();
    var unidade = $("#sltUnidade_servidor option:selected").val();
    if (uf == "UF") {
        alert("Por favor, selecione a UF");
    }
    else
        $.post(baseUriServidor + "GetServidor", { skUf: uf, nkCidade: cidade, nkUnidade: unidade }, function (data) {
            GrafServidoresSaude(data);
            GrafServidoresEducacao(data);
            GrafServidoresSeguranca(data);
            GrafServidoresAdministrativo(data);
            RemoverCredites();
        });
});

// Cria gráfico de column: "Servidores de Saúde"
function GrafServidoresSaude(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];
    var arrTemp3 = [];
    var arrTemp4 = [];
    var arrTemp5 = [];

    //Recupera a função do servidor de saúde
    function montarDataX(data) {
        for (var i in data.ServidoresSaude) {
            var name = data.ServidoresSaude[i].FuncaoServidor;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade e o tipo de servidor "efetivo"
    function montarDataEfetivo(data) {
        for (var i in data.ServidoresSaude) {
            var y = data.ServidoresSaude[i].Efetivo;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    //Recupera a quantidade e o tipo de servidor "comissionado"
    function montarDataComissionado(data) {
        for (var i in data.ServidoresSaude) {
            var y = data.ServidoresSaude[i].Comissionado;
            arrTemp3.push(y);
        }
        return arrTemp3;
    }

    //Recupera a quantidade e o tipo de servidor "terceirizado"
    function montarDataTerceirizado(data) {
        for (var i in data.ServidoresSaude) {
            var y = data.ServidoresSaude[i].Terceirizado;
            arrTemp4.push(y);
        }
        return arrTemp4;
    }

    //Recupera a quantidade e o tipo de servidor "temporário"
    function montarDataTemporario(data) {
        for (var i in data.ServidoresSaude) {
            var y = data.ServidoresSaude[i].Temporario;
            arrTemp5.push(y);
        }
        return arrTemp5;
    }

    var chart = Highcharts.chart('gp_servidor_saude', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Saúde'
        },
        subtitle: {
            text: 'Quantidade de Servidores'
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
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Efetivos',
            data: montarDataEfetivo(data)
        }, {
            name: 'Comissionados',
            data: montarDataComissionado(data)
        }, {
            name: 'Terceirizados',
            data: montarDataTerceirizado(data)
        }, {
            name: 'Temporários',
            data: montarDataTemporario(data)
        }]
    });
};

// Cria gráfico de column: "Servidores de Educação"
function GrafServidoresEducacao(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];
    var arrTemp3 = [];
    var arrTemp4 = [];
    var arrTemp5 = [];

    //Recupera a função do servidor de saúde
    function montarDataX(data) {
        for (var i in data.ServidoresEducacao) {
            var name = data.ServidoresEducacao[i].FuncaoServidor;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade e o tipo de servidor "efetivo"
    function montarDataEfetivo(data) {
        for (var i in data.ServidoresEducacao) {
            var y = data.ServidoresEducacao[i].Efetivo;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    //Recupera a quantidade e o tipo de servidor "comissionado"
    function montarDataComissionado(data) {
        for (var i in data.ServidoresEducacao) {
            var y = data.ServidoresEducacao[i].Comissionado;
            arrTemp3.push(y);
        }
        return arrTemp3;
    }

    //Recupera a quantidade e o tipo de servidor "terceirizado"
    function montarDataTerceirizado(data) {
        for (var i in data.ServidoresEducacao) {
            var y = data.ServidoresEducacao[i].Terceirizado;
            arrTemp4.push(y);
        }
        return arrTemp4;
    }

    //Recupera a quantidade e o tipo de servidor "temporário"
    function montarDataTemporario(data) {
        for (var i in data.ServidoresEducacao) {
            var y = data.ServidoresEducacao[i].Temporario;
            arrTemp5.push(y);
        }
        return arrTemp5;
    }

    var chart = Highcharts.chart('gp_servidor_educacao', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Educação'
        },
        subtitle: {
            text: 'Quantidade de Servidores'
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
            name: 'Efetivos',
            data: montarDataEfetivo(data)
        }, {
            name: 'Comissionados',
            data: montarDataComissionado(data)
        }, {
            name: 'Terceirizados',
            data: montarDataTerceirizado(data)
        }, {
            name: 'Temporários',
            data: montarDataTemporario(data)
        }]
    });
};

// Cria gráfico de column: "Servidores de Segurança"
function GrafServidoresSeguranca(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];
    var arrTemp3 = [];
    var arrTemp4 = [];
    var arrTemp5 = [];

    //Recupera a função do servidor de saúde
    function montarDataX(data) {
        for (var i in data.ServidoresSeguranca) {
            var name = data.ServidoresSeguranca[i].FuncaoServidor;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade e o tipo de servidor "efetivo"
    function montarDataEfetivo(data) {
        for (var i in data.ServidoresSeguranca) {
            var y = data.ServidoresSeguranca[i].Efetivo;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    //Recupera a quantidade e o tipo de servidor "comissionado"
    function montarDataComissionado(data) {
        for (var i in data.ServidoresSeguranca) {
            var y = data.ServidoresSeguranca[i].Comissionado;
            arrTemp3.push(y);
        }
        return arrTemp3;
    }

    //Recupera a quantidade e o tipo de servidor "terceirizado"
    function montarDataTerceirizado(data) {
        for (var i in data.ServidoresSeguranca) {
            var y = data.ServidoresSeguranca[i].Terceirizado;
            arrTemp4.push(y);
        }
        return arrTemp4;
    }

    //Recupera a quantidade e o tipo de servidor "temporário"
    function montarDataTemporario(data) {
        for (var i in data.ServidoresSeguranca) {
            var y = data.ServidoresSeguranca[i].Temporario;
            arrTemp5.push(y);
        }
        return arrTemp5;
    }

    var chart = Highcharts.chart('gp_servidor_seguranca', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Segurança'
        },
        subtitle: {
            text: 'Quantidade de Servidores'
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
            name: 'Efetivos',
            data: montarDataEfetivo(data)
        }, {
            name: 'Comissionados',
            data: montarDataComissionado(data)
        }, {
            name: 'Terceirizados',
            data: montarDataTerceirizado(data)
        }, {
            name: 'Temporários',
            data: montarDataTemporario(data)
        }]
    });
};

// Cria gráfico de column: "Servidores Administrativo"
function GrafServidoresAdministrativo(data) {

    var arrTemp1 = [];
    var arrTemp2 = [];
    var arrTemp3 = [];
    var arrTemp4 = [];
    var arrTemp5 = [];

    //Recupera a função do servidor de saúde
    function montarDataX(data) {
        for (var i in data.ServidoresAdministrativo) {
            var name = data.ServidoresAdministrativo[i].FuncaoServidor;
            arrTemp1.push(name);
        }
        return arrTemp1;
    }

    //Recupera a quantidade e o tipo de servidor "efetivo"
    function montarDataEfetivo(data) {
        for (var i in data.ServidoresAdministrativo) {
            var y = data.ServidoresAdministrativo[i].Efetivo;
            arrTemp2.push(y);
        }
        return arrTemp2;
    }

    //Recupera a quantidade e o tipo de servidor "comissionado"
    function montarDataComissionado(data) {
        for (var i in data.ServidoresAdministrativo) {
            var y = data.ServidoresAdministrativo[i].Comissionado;
            arrTemp3.push(y);
        }
        return arrTemp3;
    }

    //Recupera a quantidade e o tipo de servidor "terceirizado"
    function montarDataTerceirizado(data) {
        for (var i in data.ServidoresAdministrativo) {
            var y = data.ServidoresAdministrativo[i].Terceirizado;
            arrTemp4.push(y);
        }
        return arrTemp4;
    }

    //Recupera a quantidade e o tipo de servidor "temporário"
    function montarDataTemporario(data) {
        for (var i in data.ServidoresAdministrativo) {
            var y = data.ServidoresAdministrativo[i].Temporario;
            arrTemp5.push(y);
        }
        return arrTemp5;
    }

    var chart = Highcharts.chart('gp_servidor_adm', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Administrativo, social e jurídico'
        },
        subtitle: {
            text: 'Quantidade de Servidores'
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
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Efetivos',
            data: montarDataEfetivo(data)
        }, {
            name: 'Comissionados',
            data: montarDataComissionado(data)
        }, {
            name: 'Terceirizados',
            data: montarDataTerceirizado(data)
        }, {
            name: 'Temporários',
            data: montarDataTemporario(data)
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
