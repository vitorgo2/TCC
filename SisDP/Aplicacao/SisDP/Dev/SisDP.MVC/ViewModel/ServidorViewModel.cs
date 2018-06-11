using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SisDP.Data;

namespace SisDP.MVC.ViewModel
{
    public class ServidorViewModel
    {
        public IEnumerable<ServidoresSaude_Result> ServidoresSaude { get; set; }
        public IEnumerable<ServidoresEducacao_Result> ServidoresEducacao { get; set; }
        public IEnumerable<ServidoresSeguranca_Result> ServidoresSeguranca { get; set; }
        public IEnumerable<ServidoresAdministrativo_Result> ServidoresAdministrativo { get; set; }

        public ServidorViewModel(IEnumerable<ServidoresSaude_Result> servidoresSaude, IEnumerable<ServidoresEducacao_Result> servidoresEducacao, IEnumerable<ServidoresSeguranca_Result> servidoresSeguranca,
            IEnumerable<ServidoresAdministrativo_Result> servidoresAdministrativo)
        {
            ServidoresSaude = servidoresSaude;
            ServidoresEducacao = servidoresEducacao;
            ServidoresSeguranca = servidoresSeguranca;
            ServidoresAdministrativo = servidoresAdministrativo;
        }
    }
}