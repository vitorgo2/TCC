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
    public class EducacaoController : Controller
    {
        private EducacaoService _educacaoService;

        private FiltroUnidadeService _filtroService = new FiltroUnidadeService();

        public EducacaoController()
        {
             _educacaoService = new EducacaoService(); 
        }

        // GET: Educacao
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

        public ActionResult GetAtividadeEducacional(int? skUf, int? nkCidade, int? nkUnidade)
        { 
            var rtrAtv = _educacaoService.GetAtividadeEducacional(skUf, nkCidade, nkUnidade);
            var rtrBibliotecas = _educacaoService.GetBiblioteca(skUf, nkCidade, nkUnidade);
            var rtrSalaProfessor = _educacaoService.GetSalaProfessores(skUf, nkCidade, nkUnidade);
            var rtrInfGrauInstrucao = _educacaoService.GetInfGrauInstrucao(skUf, nkCidade, nkUnidade);
            var rtrInfEscolaridade = _educacaoService.GetEscolaridade(skUf, nkCidade, nkUnidade);

            return Json(new EducacaoViewModel(rtrAtv, rtrBibliotecas, rtrSalaProfessor, rtrInfGrauInstrucao, rtrInfEscolaridade), JsonRequestBehavior.AllowGet);
        }

    }
}