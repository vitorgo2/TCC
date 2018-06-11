using SisDP.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SisDP.Service
{
    public class CrimeService
    {
        /// <summary>
        ///  Traz a quantidade de presos por tipo de crime: "Homicídios"
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Homicidios_Result> GetHomicidios(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Homicidios(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por tipo de crime: "Lesão e Agressão"
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Lesao_Result> GetLesao(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Lesao(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por tipo de crime: "Arma de Fogo"
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ArmaFogo_Result> GetArmaFogo(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.ArmaFogo(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por tipo de crime: "Corrupção"
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Corrupcao_Result> GetCorrupcao(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.Corrupcao(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por tipo de crime: "Crime Sexual"
        /// </summary>
        /// <returns></returns>
        public IEnumerable<CrimeSexual_Result> GetCrimeSexual(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.CrimeSexual(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por tipo de crime: "Furto e Roubo"
        /// </summary>
        /// <returns></returns>
        public IEnumerable<FurtoRoubo_Result> GetFurtoRoubo(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.FurtoRoubo(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de unidades por tipo de informação: "Recebe atestado de pena a cumprir"
        /// </summary>
        /// <returns></returns>
        public IEnumerable<AtestadoPena_Result> GetAtestadoPena(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.AtestadoPena(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos que possuem/não possuem tipificação criminal
        /// </summary>
        /// <returns></returns>
        public IEnumerable<TipificacaoCriminal_Result> GetTipificacaoCriminal(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.TipificacaoCriminal(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por tipo de crime: "Tráfico de Drogas"
        /// </summary>
        /// <returns></returns>
        public IEnumerable<TraficoDrogas_Result> GetTraficoDrogas(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.TraficoDrogas(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por tempo de pena a cumprir
        /// </summary>
        /// <returns></returns>
        public IEnumerable<TempoPena_Result> GetTempoPena(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.TempoPena(skUf, nkCidade, nkUnidade).ToList();
            }
        }

        /// <summary>
        ///  Traz a quantidade de presos por tempo de pena restante
        /// </summary>
        /// <returns></returns>
        public IEnumerable<TempoPenaRemanescente_Result> GetTempoRemanescente(int? skUf, int? nkCidade, int? nkUnidade)
        {
            using (var context = new DW_SISDPEntities())
            {
                return context.TempoPenaRemanescente(skUf, nkCidade, nkUnidade).ToList();
            }
        }
    }
}