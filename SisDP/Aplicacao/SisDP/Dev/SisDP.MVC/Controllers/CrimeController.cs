using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SisDP.Service;
using SisDP.Data;
using Newtonsoft.Json;
using SisDP.MVC.ViewModel;

namespace SisDP.MVC.Controllers
{
    public class CrimeController : Controller
    {
        private CrimeService _crimeService;

        private FiltroUnidadeService _filtroService = new FiltroUnidadeService();

        public CrimeController()
        {
            _crimeService = new CrimeService();
        }

        // GET: Crime
        public ActionResult Index()
        {
            FiltrosViewModel.vwUnidade = _filtroService.RecuperarDadosUnidade();

            FiltrosViewModel.Ufs = from vw in FiltrosViewModel.vwUnidade
                                   group vw by new { NomeUF = vw.NomeUF, SkUF = vw.SkUF, UF = vw.UF }
                                   into a
                                   select new UfVO() { NomeUF = a.Key.NomeUF, SkUF = a.Key.SkUF, UF = a.Key.UF };

            FiltrosViewModel.Cidades = from vw in FiltrosViewModel.vwUnidade
                                       group vw by new { Cidade = vw.Cidade, SkCidade = vw.SkCidade, SkUF = vw.SkUF }
                                       into a
                                       select new CidadeVO() { Cidade = a.Key.Cidade, SkCidade = a.Key.SkCidade, SkUF = a.Key.SkUF };

            FiltrosViewModel.Unidades = from vw in FiltrosViewModel.vwUnidade
                                        group vw by new { NkUnidade = vw.NkUnidade, NomeRegistro = vw.NomeRegistro, NomeUnidade = vw.NomeUnidade, SkUnidade = vw.SkUnidade, SkCidade = vw.SkCidade }
                                        into a
                                        select new UnidadeVO() { NkUnidade = a.Key.NkUnidade, NomeRegistro = a.Key.NomeRegistro, NomeUnidade = a.Key.NomeUnidade, SkUnidade = a.Key.SkUnidade, SkCidade = a.Key.SkCidade };

            return View();
        }
        public ActionResult GetCrimes(int? skUf, int? nkCidade, int? nkUnidade)
        {
            var rtrHomicidio = _crimeService.GetHomicidios(skUf, nkCidade, nkUnidade);
            var rtrLesao = _crimeService.GetLesao(skUf, nkCidade, nkUnidade);
            var rtrArmaFogo = _crimeService.GetArmaFogo(skUf, nkCidade, nkUnidade);
            var rtrCorrupcao = _crimeService.GetCorrupcao(skUf, nkCidade, nkUnidade);
            var rtrFurtoRoubo = _crimeService.GetFurtoRoubo(skUf, nkCidade, nkUnidade);
            var rtrTipificacaoCriminal = _crimeService.GetTipificacaoCriminal(skUf, nkCidade, nkUnidade);
            var rtrTraficoDrogas = _crimeService.GetTraficoDrogas(skUf, nkCidade, nkUnidade);
            var rtrAtestadoPena = _crimeService.GetAtestadoPena(skUf, nkCidade, nkUnidade);
            var rtrTempoPena = _crimeService.GetTempoPena(skUf, nkCidade, nkUnidade);
            var rtrTempoPenaRemanescente = _crimeService.GetTempoRemanescente(skUf, nkCidade, nkUnidade);
            var rtrCrimeSexual = _crimeService.GetCrimeSexual(skUf, nkCidade, nkUnidade);

            return Json(new CrimeViewModel(rtrHomicidio, rtrLesao, rtrArmaFogo, rtrCorrupcao, rtrFurtoRoubo, 
                rtrTipificacaoCriminal, rtrTraficoDrogas, rtrAtestadoPena,
                rtrTempoPena, rtrTempoPenaRemanescente, rtrCrimeSexual), JsonRequestBehavior.AllowGet);
        }
    }
}