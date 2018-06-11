using SisDP.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.Common;

namespace SisDP.MVC.ViewModel
{
    public class PopulacaoViewModel
    {
        public IEnumerable<AuxilioReclusao_Result> AuxilioReclusao { get; set; }
        public IEnumerable<Deficiente_Result> Deficiente { get; set; }
        public IEnumerable<EstadoCivil_Result> EstadoCivil { get; set; }
        public IEnumerable<Filhos_Result> Filhos { get; set; }
        public IEnumerable<InclusoesRemocoes_Result> Movimentacao { get; set; }
        public IEnumerable<Naturalidade_Result> Naturalidade { get; set; }
        public IEnumerable<PresosPorIdade_Result> PresosPorIdade { get; set; }
        public IEnumerable<PresosPorRaca_Result> PresosPorRaca { get; set; }
        public IEnumerable<PresosPorRegime_Result> PresosPorRegime { get; set; }
        public IEnumerable<Remuneracao_Result> Remuneracao { get; set; }

        public PopulacaoViewModel(IEnumerable<AuxilioReclusao_Result> auxilioReclusao, IEnumerable<Deficiente_Result> deficiente, IEnumerable<EstadoCivil_Result> estadoCivil,
            IEnumerable<Filhos_Result> filhos, IEnumerable<InclusoesRemocoes_Result> movimentacao, IEnumerable<Naturalidade_Result> naturalidade, IEnumerable<PresosPorIdade_Result> presosPorIdade,
            IEnumerable<PresosPorRaca_Result> presosPorRaca, IEnumerable<PresosPorRegime_Result> presosPorRegime, IEnumerable<Remuneracao_Result> remuneracao)
        {
            AuxilioReclusao = auxilioReclusao;
            Deficiente = deficiente;
            EstadoCivil = estadoCivil;
            Filhos = filhos;
            Movimentacao = movimentacao;
            Naturalidade = naturalidade;
            PresosPorIdade = presosPorIdade;
            PresosPorRaca = presosPorRaca;
            PresosPorRegime = presosPorRegime;
            Remuneracao = remuneracao;
        }
    }
}