using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SisDP.Service;
using SisDP.MVC.ViewModel;

namespace SisDP.MVC.Controllers
{
    public class ServidorController : Controller
    {
        private ServidorService _servidorService;

        private FiltroUnidadeService _filtroService = new FiltroUnidadeService();

        public ServidorController()
        {
            _servidorService = new ServidorService();
        }

        // GET: Servidor
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

        public ActionResult GetServidor(int? skUf, int? nkCidade, int? nkUnidade)
        {
            var rtrServidoresSaude = _servidorService.GetServidoresSaude(skUf, nkCidade, nkUnidade);
            var rtrServidoresEducacao = _servidorService.GetServidoresEducacao(skUf, nkCidade, nkUnidade);
            var rtrServidoresSeguranca = _servidorService.GetServidoresSeguranca(skUf, nkCidade, nkUnidade);
            var rtrServidoresAdministrativo = _servidorService.GetServidoresAdministrativo(skUf, nkCidade, nkUnidade);
            return Json(new ServidorViewModel(rtrServidoresSaude, rtrServidoresEducacao, rtrServidoresSeguranca, rtrServidoresAdministrativo), JsonRequestBehavior.AllowGet);
        }
    }
}