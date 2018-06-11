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
    public class CrimeViewModel
    {
        public IEnumerable<Homicidios_Result> Homicidios { get; set; }
        public IEnumerable<Lesao_Result> Lesao { get; set; }
        public IEnumerable<ArmaFogo_Result> ArmaFogo { get; set; }
        public IEnumerable<Corrupcao_Result> Corrupcao { get; set; }
        public IEnumerable<FurtoRoubo_Result> FurtoRoubo { get; set; }
        public IEnumerable<TipificacaoCriminal_Result> TipificacaoCriminal { get; set; }
        public IEnumerable<TraficoDrogas_Result> TraficoDrogas { get; set; }
        public IEnumerable<AtestadoPena_Result> AtestadoPena { get; set; }
        public IEnumerable<TempoPena_Result> TempoPena { get; set; }
        public IEnumerable<TempoPenaRemanescente_Result> TempoPenaRemanescente { get; set; }
        public IEnumerable<CrimeSexual_Result> CrimeSexual { get; set; }

        public CrimeViewModel(IEnumerable<Homicidios_Result> homicidios, IEnumerable<Lesao_Result> lesao, IEnumerable<ArmaFogo_Result> armaFogo,
            IEnumerable<Corrupcao_Result> corrupcao, IEnumerable<FurtoRoubo_Result> furtoRoubo, IEnumerable<TipificacaoCriminal_Result> tipificacaoCriminal,
            IEnumerable<TraficoDrogas_Result> traficoDrogas, IEnumerable<AtestadoPena_Result> atestadoPena, IEnumerable<TempoPena_Result> tempoPena,
            IEnumerable<TempoPenaRemanescente_Result> tempoPenaRemanescente, IEnumerable<CrimeSexual_Result> crimeSexual)
        {
            Homicidios = homicidios;
            Lesao = lesao;
            ArmaFogo = armaFogo;
            Corrupcao = corrupcao;
            FurtoRoubo = furtoRoubo;
            TipificacaoCriminal = tipificacaoCriminal;
            TraficoDrogas = traficoDrogas;
            AtestadoPena = atestadoPena;
            TempoPena = tempoPena;
            TempoPenaRemanescente = tempoPenaRemanescente;
            CrimeSexual = crimeSexual;
        }
    }
}