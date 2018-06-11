using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SisDP.Service;
using SisDP.MVC.ViewModel;

namespace SisDP.MVC.Controllers
{
    public class SaudeController : Controller
    {
        private SaudeService _saudeService;

        private FiltroUnidadeService _filtroService = new FiltroUnidadeService();

        public SaudeController()
        {
            _saudeService = new SaudeService();
        }

        // GET: Saude
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

        public ActionResult GetSaude(int? skUf, int? nkCidade, int? nkUnidade)
        {
            var rtrConsultorioMed = _saudeService.GetConsultorioMedico(skUf, nkCidade, nkUnidade);
            var rtrConsultorioOdonto = _saudeService.GetConsultorioOdonto(skUf, nkCidade, nkUnidade);
            var rtrFarmacia = _saudeService.GetFarmacia(skUf, nkCidade, nkUnidade);
            var rtrSinteticoSaude = _saudeService.GetSinteticoSaude(skUf, nkCidade, nkUnidade);
            var rtrMorte = _saudeService.GetMortes(skUf, nkCidade, nkUnidade);
            var rtrDoenca = _saudeService.GetDoencas(skUf, nkCidade, nkUnidade);
            var rtrConsultaEmGeral = _saudeService.GetConsultasEmGeral(skUf, nkCidade, nkUnidade);
            return Json(new SaudeViewModel(rtrConsultorioMed, rtrConsultorioOdonto, rtrFarmacia, rtrSinteticoSaude, rtrMorte, rtrDoenca, rtrConsultaEmGeral), JsonRequestBehavior.AllowGet);
        }
    }
}