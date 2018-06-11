using SisDP.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SisDP.Service
{
    public class ServidorService
    {
        /// <summary>
        ///Traz a informação de servidores de saúde
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ServidoresSaude_Result> GetServidoresSaude(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.ServidoresSaude(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz a informação de servidores de educação
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ServidoresEducacao_Result> GetServidoresEducacao(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.ServidoresEducacao(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz a informação de servidores de segurança
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ServidoresSeguranca_Result> GetServidoresSeguranca(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.ServidoresSeguranca (skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz a informação de servidores administrativos
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ServidoresAdministrativo_Result> GetServidoresAdministrativo(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.ServidoresAdministrativo(skUf, nkCidade, nkUnidade).ToList();
            }
        }
    }
}
