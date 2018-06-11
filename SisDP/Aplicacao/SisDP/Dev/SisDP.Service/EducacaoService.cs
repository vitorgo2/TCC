using SisDP.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SisDP.Service
{
    public class EducacaoService
    {
        /// <summary>
        ///  Traz as atividades educacionais das unidades prisionais
        /// </summary>
        /// <returns></returns>
        public IEnumerable<AtividadeEducacional_Result> GetAtividadeEducacional(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.AtividadeEducacional(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de unidades prisionais por uf
        /// </summary>
        /// <returns></returns>
        public IEnumerable<UnidadesPorUF_Result> GetUnidadesPorUF()
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.UnidadesPorUF().OrderBy(u => u.UF).ToList();
            }
           
        }

        /// <summary>
        /// Traz a quantidade de sala de professores da unidade
        /// </summary>
        /// <returns></returns>
        public IEnumerable<SalaProfessores_Result> GetSalaProfessores(int? skUf, int? nkCidade, int? nkUnidade)
        {
           
            using (var context = new DW_SISDPEntities())
            {
                return context.SalaProfessores(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        /// Traz as quantidade de bibliotecas da unidade
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Biblioteca_Result> GetBiblioteca(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Biblioteca(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        /// Traz a quantidade de unidades que possuem a informação do grau de instrução dos detentos
        /// </summary>
        /// <returns></returns>
        public IEnumerable<InfGrauInstrucao_Result> GetInfGrauInstrucao(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.InfGrauInstrucao(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz a quantidade de salas de informática da unidade
        /// </summary>
        /// <returns></returns>
        public IEnumerable<SalaInformatica_Result> GetSalaInformatica(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.SalaInformatica(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz a quantidade de salas de aula da unidade
        /// </summary>
        /// <returns></returns>
        public IEnumerable<SalaAula_Result> GetSalaAula(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.SalaAula(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///Traz quantidade de detentos por grau de escolaridade das unidades que possuem essa informação
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Escolaridade_Result> GetEscolaridade(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Escolaridade(skUf, nkCidade, nkUnidade).ToList();
            }
        }

    }
}