using SisDP.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SisDP.Service
{
    public class PopulacaoService
    {
        /// <summary>
        ///  Traz a quantidade de presos cuja família recebe auxílio reclusão
        /// </summary>
        /// <returns></returns>
        public IEnumerable<AuxilioReclusao_Result> GetAuxilioReclusao(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.AuxilioReclusao(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por tipo de deficiência
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Deficiente_Result> GetDeficiente(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Deficiente(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por estado civil
        /// </summary>
        /// <returns></returns>
        public IEnumerable<EstadoCivil_Result> GetEstadoCivil(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.EstadoCivil(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por quantidade de filhos
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Filhos_Result> GetFilhos(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Filhos(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por quantidade inclusões e remoções entre unidades (movimentação)
        /// </summary>
        /// <returns></returns>
        public IEnumerable<InclusoesRemocoes_Result> GetMovimentacao(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.InclusoesRemocoes(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por naturalidade
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Naturalidade_Result> GetNaturalidade(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Naturalidade(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por idade
        /// </summary>
        /// <returns></returns>
        public IEnumerable<PresosPorIdade_Result> GetPresosPorIdade(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.PresosPorIdade(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por raça
        /// </summary>
        /// <returns></returns>
        public IEnumerable<PresosPorRaca_Result> GetPresosPorRaca(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.PresosPorRaca(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por tipo de regime
        /// </summary>
        /// <returns></returns>
        public IEnumerable<PresosPorRegime_Result> GetPresosPorRegime(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.PresosPorRegime(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por valor da remuneração para os que trabalham
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Remuneracao_Result> GetRemuneracao(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Remuneracao(skUf, nkCidade, nkUnidade).ToList();
            }
        }
    }
}
