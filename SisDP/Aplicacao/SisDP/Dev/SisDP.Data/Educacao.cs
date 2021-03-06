//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SisDP.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Educacao
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Educacao()
        {
            this.FatoEstabelecimento = new HashSet<FatoEstabelecimento>();
            this.FatoSistemaPenitenciario = new HashSet<FatoSistemaPenitenciario>();
        }
    
        public int SkEducacao { get; set; }
        public int NkUnidade { get; set; }
        public string St_SalaAula { get; set; }
        public string St_SalaInformatica { get; set; }
        public string St_SalaReuniao { get; set; }
        public string St_Biblioteca { get; set; }
        public string St_SalaProfessores { get; set; }
        public string St_PresoAtividadeEducacional { get; set; }
        public string St_Oficina { get; set; }
        public string St_SalaVideoConferencia { get; set; }
        public string InformacaoGrauIntrucao { get; set; }
        public Nullable<System.DateTime> DataInsercao { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FatoEstabelecimento> FatoEstabelecimento { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FatoSistemaPenitenciario> FatoSistemaPenitenciario { get; set; }
    }
}
