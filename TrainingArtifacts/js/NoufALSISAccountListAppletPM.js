if (typeof(SiebelAppFacade.NoufALSISAccountListAppletPM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.NoufALSISAccountListAppletPM");
 define("siebel/custom/NoufALSISAccountListAppletPM", ["siebel/listpmodel"],
  function () {
   SiebelAppFacade.NoufALSISAccountListAppletPM = (function () {

    function NoufALSISAccountListAppletPM(pm) {
     SiebelAppFacade.NoufALSISAccountListAppletPM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(NoufALSISAccountListAppletPM, SiebelAppFacade.ListPresentationModel);

    NoufALSISAccountListAppletPM.prototype.Init = function () {
     SiebelAppFacade.NoufALSISAccountListAppletPM.superclass.Init.apply(this, arguments);
    }

    NoufALSISAccountListAppletPM.prototype.Setup = function (propSet) {
     SiebelAppFacade.NoufALSISAccountListAppletPM.superclass.Setup.apply(this, arguments);
    }

    return NoufALSISAccountListAppletPM;
   }()
  );
  return "SiebelAppFacade.NoufALSISAccountListAppletPM";
 })
}
