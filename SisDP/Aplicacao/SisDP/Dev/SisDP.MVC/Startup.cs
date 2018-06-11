using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SisDP.MVC.Startup))]
namespace SisDP.MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
