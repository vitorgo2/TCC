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
    public class EducacaoViewModel
    {
        public IEnumerable<AtividadeEducacional_Result> AtividadesEducacionais { get; set; }
        public IEnumerable<Biblioteca_Result> Bibliotecas { get; set; }
        public IEnumerable<SalaProfessores_Result> SalaProfessor { get; set; }
        public IEnumerable<InfGrauInstrucao_Result> InfGrauInstrucao { get; set; }
        public IEnumerable<Escolaridade_Result> InfEscolaridade { get; set; }

        public EducacaoViewModel(IEnumerable<AtividadeEducacional_Result> atividadesEducacionais, IEnumerable<Biblioteca_Result> bibliotecas,
            IEnumerable<SalaProfessores_Result> salaProfessor, IEnumerable<InfGrauInstrucao_Result> infGrauInstrucao, IEnumerable<Escolaridade_Result> infEscolaridade)
        {
            Bibliotecas = bibliotecas;
            AtividadesEducacionais = atividadesEducacionais;
            SalaProfessor = salaProfessor;
            InfGrauInstrucao = infGrauInstrucao;
            InfEscolaridade = infEscolaridade;
        }
    }

    public class FiltrosViewModel
    {
        public static IEnumerable<UfVO> Ufs { get; set; }
        public static IEnumerable<CidadeVO> Cidades { get; set; }
        public static IEnumerable<UnidadeVO> Unidades { get; set; }
        public static IEnumerable<vwUnidade> vwUnidade { get; set; }

    }

    public class UfVO
    {
        public string UF { get; set; }
        public string NomeUF { get; set; }
        public int SkUF { get; set; }
    }

    public class CidadeVO
    {
        public string Cidade { get; set; }
        public int SkCidade { get; set; }
        public int SkUF { get; set; }
    }

    public class UnidadeVO
    {
        public string NomeUnidade { get; set; }
        public string NomeRegistro { get; set; }
        public int NkUnidade { get; set; }
        public int SkUnidade { get; set; }
        public int SkCidade { get; set; }

    }

}