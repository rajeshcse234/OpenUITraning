if (typeof(SiebelAppFacade.OpenUIExamplePM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.OpenUIExamplePM");
 define("siebel/custom/OpenUIExamplePM", ["siebel/listpmodel"],
  function () {
   SiebelAppFacade.OpenUIExamplePM = (function () {

    function OpenUIExamplePM(pm) {
     SiebelAppFacade.OpenUIExamplePM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(OpenUIExamplePM, SiebelAppFacade.ListPresentationModel);

    OpenUIExamplePM.prototype.Init = function () {
     SiebelAppFacade.OpenUIExamplePM.superclass.Init.apply(this, arguments);
    }

    OpenUIExamplePM.prototype.Setup = function (propSet) {
     SiebelAppFacade.OpenUIExamplePM.superclass.Setup.apply(this, arguments);
    }

    return OpenUIExamplePM;
   }()
  );
  return "SiebelAppFacade.OpenUIExamplePM";
 })
}
