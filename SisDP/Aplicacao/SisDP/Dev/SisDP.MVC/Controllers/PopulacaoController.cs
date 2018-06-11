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
    public class PopulacaoController : Controller
    {
        private PopulacaoService _populacaoService;

        private FiltroUnidadeService _filtroService = new FiltroUnidadeService();

        public PopulacaoController()
        {
            _populacaoService = new PopulacaoService();
        }

        // GET: Populacao
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
        public ActionResult GetPopulacaoPrisional(int? skUf, int? nkCidade, int? nkUnidade)
        {
            var rtrAuxilioReclusao = _populacaoService.GetAuxilioReclusao(skUf, nkCidade, nkUnidade);
            var rtrDeficiente = _populacaoService.GetDeficiente(skUf, nkCidade, nkUnidade);
            var rtrEstadoCivil = _populacaoService.GetEstadoCivil(skUf, nkCidade, nkUnidade);
            var rtrFilhos = _populacaoService.GetFilhos(skUf, nkCidade, nkUnidade);
            var rtrMovimentacao = _populacaoService.GetMovimentacao(skUf, nkCidade, nkUnidade);
            var rtrNaturalidade = _populacaoService.GetNaturalidade(skUf, nkCidade, nkUnidade);
            var rtrPresosPorIdade = _populacaoService.GetPresosPorIdade(skUf, nkCidade, nkUnidade);
            var rtrPresosPorRaca = _populacaoService.GetPresosPorRaca(skUf, nkCidade, nkUnidade);
            var rtrPresosPorRegime = _populacaoService.GetPresosPorRegime(skUf, nkCidade, nkUnidade);
            var rtrRemuneracao = _populacaoService.GetRemuneracao(skUf, nkCidade, nkUnidade);

            return Json(new PopulacaoViewModel(rtrAuxilioReclusao, rtrDeficiente, rtrEstadoCivil, rtrFilhos, rtrMovimentacao, rtrNaturalidade, rtrPresosPorIdade, rtrPresosPorRaca, 
                rtrPresosPorRegime, rtrRemuneracao), JsonRequestBehavior.AllowGet);
        }
    }
}