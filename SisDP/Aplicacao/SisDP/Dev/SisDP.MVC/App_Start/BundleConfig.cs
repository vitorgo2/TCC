using System.Web;
using System.Web.Optimization;

namespace SisDP.MVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/jqueryMin").Include(
                        "~/Scripts/jquery-2.0.3.min.js"));

            bundles.Add(new ScriptBundle("~/Scripts/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/Scripts/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/Scripts/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/styles").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/css/jquery.dataTables.css"));

            bundles.Add(new StyleBundle("~/Content/graph_css").Include("~/Content/graph_util.css"));
            bundles.Add(new ScriptBundle("~/Scripts/hightcharts").Include("~/Scripts/highcharts.js"));
            bundles.Add(new ScriptBundle("~/Scripts/highcharts-more").Include("~/Scripts/highcharts-more.js"));
            bundles.Add(new ScriptBundle("~/Scripts/funnel").Include("~/Scripts/funnel.js"));
            bundles.Add(new ScriptBundle("~/Scripts/exporting").Include("~/Scripts/exporting.js"));
            bundles.Add(new ScriptBundle("~/Scripts/export-data").Include("~/Scripts/export-data.js"));
            bundles.Add(new ScriptBundle("~/Scripts/graph_educacao").Include("~/Scripts/graph_educacao.js"));
            bundles.Add(new ScriptBundle("~/Scripts/graph_saude").Include("~/Scripts/graph_saude.js"));
            bundles.Add(new ScriptBundle("~/Scripts/graph_servidor").Include("~/Scripts/graph_servidor.js"));
            bundles.Add(new ScriptBundle("~/Scripts/graph_crime").Include("~/Scripts/graph_crime.js"));
            bundles.Add(new ScriptBundle("~/Scripts/graph_populacao").Include("~/Scripts/graph_populacao.js"));
            bundles.Add(new ScriptBundle("~/Scripts/graph_util").Include("~/Scripts/graph_util.js"));
            bundles.Add(new ScriptBundle("~/Scripts/datatable").Include("~/Scripts/jquery.dataTables.js"));
            bundles.Add(new ScriptBundle("~/Scripts/datatablemin").Include("~/Scripts/jquery.dataTables.min.js"));
        }
    }
}
