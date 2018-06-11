using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SisDP.Data;

namespace SisDP.MVC.ViewModel
{
    public class SaudeViewModel
    {

        public IEnumerable<ConsultorioMedico_Result> ConsultorioMedico { get; set; }
        public IEnumerable<ConsultorioOdonto_Result> ConsultorioOdonto { get; set; }
        public IEnumerable<Farmacia_Result> Farmacia { get; set; }
        public IEnumerable<RelatorioSinteticoSaude_Result> SinteticoSaude { get; set; }
        public IEnumerable<Mortes_Result> Morte { get; set; }
        public IEnumerable<Doencas_Result> TipoDoenca { get; set; }
        public IEnumerable<ConsultasEmGeral_Result> ConsultaEmGeral { get; set; }

        public SaudeViewModel(IEnumerable<ConsultorioMedico_Result> consultorioMedico, IEnumerable<ConsultorioOdonto_Result> consultorioOdonto, IEnumerable<Farmacia_Result> farmacia,
            IEnumerable<RelatorioSinteticoSaude_Result> sinteticoSaude, IEnumerable<Mortes_Result> morte, IEnumerable<Doencas_Result> doenca, IEnumerable<ConsultasEmGeral_Result> consultaEmGeral)
        {
            ConsultorioMedico = consultorioMedico;
            ConsultorioOdonto = consultorioOdonto;
            Farmacia = farmacia;
            SinteticoSaude = sinteticoSaude;
            Morte = morte;
            TipoDoenca = doenca;
            ConsultaEmGeral = consultaEmGeral;
        }

    }
    
}