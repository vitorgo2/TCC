using SisDP.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SisDP.Service
{
   public class FiltroUnidadeService
    {
        /// <summary>
        /// Recupera os dados da Unidade, Cidade e UF
        /// </summary>
        /// <returns></returns>
        public IEnumerable<vwUnidade> RecuperarDadosUnidade()
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.vwUnidade.ToList();
            }
        }
    }

}
