using SisDP.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SisDP.Service
{
    public class SaudeService
    {
        /// <summary>
        ///Traz a informação de consultórios médicos das unidades
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ConsultorioMedico_Result> GetConsultorioMedico(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.ConsultorioMedico(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz a informação de consultórios odontológicos das unidades
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ConsultorioOdonto_Result> GetConsultorioOdonto(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.ConsultorioOdonto(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz a informação de farmácias das unidades
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Farmacia_Result> GetFarmacia(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Farmacia(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Relatório sintético de dados sobre saúde
        /// </summary>
        /// <returns></returns>
        public IEnumerable<RelatorioSinteticoSaude_Result> GetSinteticoSaude(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.RelatorioSinteticoSaude(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz a informação de doenças dos dententos
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Doencas_Result> GetDoencas(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Doencas(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz a informação de mortes dos dententos
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Mortes_Result> GetMortes(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Mortes(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz a informação de tipos de consultas médicas dos dententos
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ConsultasEmGeral_Result> GetConsultasEmGeral(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.ConsultasEmGeral(skUf, nkCidade, nkUnidade).ToList();
            }
        }
    }
}
