//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PM&object=DesktopList&name=HanadiSISAccountListApplet&userprops=&comments=No&logging=No
if (typeof(SiebelAppFacade.HanadiSISAccountListAppletPM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.HanadiSISAccountListAppletPM");
 define("siebel/custom/HanadiSISAccountListAppletPM", ["siebel/listpmodel"],
  function () {
   SiebelAppFacade.HanadiSISAccountListAppletPM = (function () {

    function HanadiSISAccountListAppletPM(pm) {
     SiebelAppFacade.HanadiSISAccountListAppletPM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(HanadiSISAccountListAppletPM, SiebelAppFacade.ListPresentationModel);

    HanadiSISAccountListAppletPM.prototype.Init = function () {
     SiebelAppFacade.HanadiSISAccountListAppletPM.superclass.Init.apply(this, arguments);
    }

    HanadiSISAccountListAppletPM.prototype.Setup = function (propSet) {
     SiebelAppFacade.HanadiSISAccountListAppletPM.superclass.Setup.apply(this, arguments);
    }

    return HanadiSISAccountListAppletPM;
   }()
  );
  return "SiebelAppFacade.HanadiSISAccountListAppletPM";
 })
}
