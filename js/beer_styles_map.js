/*******************************************************/
/************************** Map ************************/
/*******************************************************/

var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 0,
    zoomControl: false
});

var bounds = [[0,0], [750,1000]];
var image = L.imageOverlay('img/mapbeer.png', bounds).addTo(map);

map.fitBounds(bounds);
map.invalidateSize() ;


var colorRed = {color: 'rgba(0, 0, 0, 0.15)', fillColor: 'rgba(0, 255, 255, 0.65)', fillOpacity: 0, className:'circle'}
var colorGreen = {color: 'rgba(0, 0, 0, 0.15)', fillColor: 'rgba(255, 0, 255, 0.65)', fillOpacity: 0, className:'circle'}
var colorBlue = {color: 'rgba(0, 0, 0, 0.15)', fillColor: 'rgba(255, 255, 0, 0.65)', fillOpacity: 0, className:'circle'}
var colorNone= {color: 'rgba(0, 0, 0, 0)', fillColor: 'rgba(0, 0, 0, 0)', fillOpacity: 0, className:'circle'}


var ale = L.circle(L.latLng([368.5, 254]), 45, colorRed).addTo(map);
var paleAle = L.circle(L.latLng([278,215.5]), 31.6, colorGreen).addTo(map);
var englishPaleAle = L.circle(L.latLng([194, 262]), 27, colorBlue).addTo(map);
var burtonPaleAle = L.circle(L.latLng([152, 323]), 18, colorBlue).addTo(map);
var premiumBitter = L.circle(L.latLng([63, 337]), 22, colorBlue).addTo(map);
var lightAle = L.circle(L.latLng([69, 277]), 22, colorBlue).addTo(map);
var indianPaleAle = L.circle(L.latLng([148.5, 221]), 27.5, colorBlue).addTo(map);
var doubleIpa = L.circle(L.latLng([66, 227]), 22, colorBlue).addTo(map);
var strongPaleAle = L.circle(L.latLng([181.5, 139]), 27.5, colorBlue).addTo(map);
var scotchAle = L.circle(L.latLng([98, 149]), 22, colorBlue).addTo(map);
var barleyWine = L.circle(L.latLng([65, 99]), 22.5, colorBlue).addTo(map);
var americanStrongAle = L.circle(L.latLng([110, 61]), 22, colorBlue).addTo(map);
var oldAle = L.circle(L.latLng([169, 84]), 20, colorBlue).addTo(map);
var englishStrongAle = L.circle(L.latLng([237, 53]), 22, colorBlue).addTo(map);
var americanPaleAle = L.circle(L.latLng([290, 120]), 27.5, colorBlue).addTo(map);
var blondeAle = L.circle(L.latLng([419, 100]), 21, colorBlue).addTo(map);
var americanWheatAle = L.circle(L.latLng([436, 32]), 22, colorBlue).addTo(map);
var amberAle = L.circle(L.latLng([323, 34]), 22, colorBlue).addTo(map);
var stoutPorter = L.circle(L.latLng([141, 446]), 31.6, colorGreen).addTo(map);
var americanStout = L.circle(L.latLng([204, 473]), 22, colorBlue).addTo(map);
var sweetStout = L.circle(L.latLng([169, 540]), 22, colorBlue).addTo(map);
var oatmealStout = L.circle(L.latLng([72, 718]), 22, colorBlue).addTo(map);
var flavoredStout = L.circle(L.latLng([67, 627]), 22, colorBlue).addTo(map);
var imperialStout = L.circle(L.latLng([77, 532]), 22, colorBlue).addTo(map);
var irishStout = L.circle(L.latLng([63.5, 422]), 22, colorBlue).addTo(map);
var foreignStout = L.circle(L.latLng([72, 470]), 21, colorBlue).addTo(map);
var englishPorter = L.circle(L.latLng([138.5, 378]), 22, colorBlue).addTo(map);
var americanPorter = L.circle(L.latLng([194.5, 361]), 22, colorBlue).addTo(map);
var germanAle = L.circle(L.latLng([612, 451]), 31.6, colorGreen).addTo(map);
var roggenbier = L.circle(L.latLng([546, 450]), 22, colorBlue).addTo(map);
var weissbier = L.circle(L.latLng([622, 535]), 27, colorBlue).addTo(map);
var weizenbock = L.circle(L.latLng([546, 509]), 23, colorBlue).addTo(map);
var dunkelweizen = L.circle(L.latLng([601,593]), 23, colorBlue).addTo(map);
var kristallweizen = L.circle(L.latLng([657, 656]), 23, colorBlue).addTo(map);
var berlinerWeisse = L.circle(L.latLng([672, 601]), 23, colorBlue).addTo(map);
var gose = L.circle(L.latLng([708.5, 526]), 22, colorBlue).addTo(map);
var hefeweizen = L.circle(L.latLng([668, 484]), 23, colorBlue).addTo(map);
var belgianFrenchAle = L.circle(L.latLng([599, 247]), 31.6, colorGreen).addTo(map);
var saison = L.circle(L.latLng([672, 168]), 23, colorBlue).addTo(map);
var oudBruin = L.circle(L.latLng([601, 175]), 23, colorBlue).addTo(map);
var witbier = L.circle(L.latLng([550, 209]), 20, colorBlue).addTo(map);
var bierDeChampagne = L.circle(L.latLng([502, 275]), 20, colorBlue).addTo(map);
var belgianDarkAle = L.circle(L.latLng([590, 309]), 23, colorBlue).addTo(map);
var belgianStrongDarkAle = L.circle(L.latLng([607, 364.5]), 20, colorBlue).addTo(map);
var quadrupel = L.circle(L.latLng([560.5, 361]), 18, colorBlue).addTo(map);
var dubble = L.circle(L.latLng([546, 323]), 18, colorBlue).addTo(map);
var belgianPaleAle = L.circle(L.latLng([668, 318]), 22, colorBlue).addTo(map);
var belgianStrongPaleAle = L.circle(L.latLng([681, 370]), 22, colorBlue).addTo(map);
var tripel = L.circle(L.latLng([669, 428]), 18, colorBlue).addTo(map);
var flandersRedAle = L.circle(L.latLng([668, 269]), 22, colorBlue).addTo(map);
var bierDeGarde = L.circle(L.latLng([669, 220]), 22, colorBlue).addTo(map);
var lambic = L.circle(L.latLng([606.5, 89.5]), 27, colorGreen).addTo(map);
var faro = L.circle(L.latLng([611, 32.5]), 17, colorBlue).addTo(map);
var gueuze = L.circle(L.latLng([654, 37]), 17, colorBlue).addTo(map);
var fruit = L.circle(L.latLng([671, 75]), 17, colorBlue).addTo(map);
var unblended = L.circle(L.latLng([669, 122]), 17, colorBlue).addTo(map);
var americanWildAle = L.circle(L.latLng([533.5, 101]), 23, colorGreen).addTo(map);
var mildAle = L.circle(L.latLng([399, 152]), 23, colorGreen).addTo(map);
var brownAle = L.circle(L.latLng([352, 168]), 23, colorGreen).addTo(map);
var irishAle = L.circle(L.latLng([282,282]), 21, colorGreen).addTo(map);
var creamAle = L.circle(L.latLng([213, 638]), 23, colorGreen).addTo(map);
var californiaCommon = L.circle(L.latLng([157, 667]), 23.5, colorGreen).addTo(map);
var lager = L.circle(L.latLng([370.5, 794]), 45, colorRed).addTo(map);
var germanLager = L.circle(L.latLng([477, 786]), 32, colorGreen).addTo(map);
var dortmunder = L.circle(L.latLng([557, 749]), 22, colorBlue).addTo(map);
var bock = L.circle(L.latLng([615, 764]), 25, colorBlue).addTo(map);
var maibock = L.circle(L.latLng([619, 704]), 22, colorBlue).addTo(map);
var doppelbock = L.circle(L.latLng([717, 738]), 22, colorBlue).addTo(map);
var eisbock = L.circle(L.latLng([676, 779]), 22, colorBlue).addTo(map);
var dunklerBock = L.circle(L.latLng([663, 829]), 22, colorBlue).addTo(map);
var kellerBier = L.circle(L.latLng([564, 798]), 20, colorBlue).addTo(map);
var marzen = L.circle(L.latLng([616, 846.5]), 20, colorBlue).addTo(map);
var schwarzBier = L.circle(L.latLng([669, 913]), 20, colorBlue).addTo(map);
var munichLager = L.circle(L.latLng([616, 913]), 22, colorBlue).addTo(map);
var munichHelles = L.circle(L.latLng([661, 960]), 17, colorBlue).addTo(map);
var munichDunkel = L.circle(L.latLng([612, 964]), 17, colorBlue).addTo(map);
var viennaLager = L.circle(L.latLng([550, 890]), 23, colorBlue).addTo(map);
var rauchbier = L.circle(L.latLng([487, 852]), 22, colorBlue).addTo(map);
var europeanLager = L.circle(L.latLng([436, 879]), 27, colorGreen).addTo(map);
var europeanPaleLager = L.circle(L.latLng([497, 964]), 23, colorBlue).addTo(map);
var europeanDarkLager = L.circle(L.latLng([404, 961]), 23, colorBlue).addTo(map);
var europeanStrongLager = L.circle(L.latLng([377, 903]), 23, colorBlue).addTo(map);
var pilsner = L.circle(L.latLng([285, 858]), 32, colorGreen).addTo(map);
var bohemianPilsner = L.circle(L.latLng([320, 943]), 23, colorBlue).addTo(map);
var germanPilsner = L.circle(L.latLng([247, 945]), 23, colorBlue).addTo(map);
var americanPilsner	 = L.circle(L.latLng([172, 970]), 22, colorBlue).addTo(map);
var americanImperialPilsner = L.circle(L.latLng([224, 872]), 22, colorBlue).addTo(map);
var americanLager = L.circle(L.latLng([179, 832]), 32, colorGreen).addTo(map);
var americanPaleLager = L.circle(L.latLng([229, 759]), 23, colorBlue).addTo(map);
var americanDarkLager = L.circle(L.latLng([202, 713]), 23, colorBlue).addTo(map);
var americanAdjunctLager = L.circle(L.latLng([86, 842]), 27, colorBlue).addTo(map);
var lightBeer = L.circle(L.latLng([104, 916]), 18, colorBlue).addTo(map);
var dryBeer = L.circle(L.latLng([42, 963]), 18, colorBlue).addTo(map);
var iceBeer = L.circle(L.latLng([33, 922]), 17, colorBlue).addTo(map);
var maltLiquor = L.circle(L.latLng([38, 869]), 17, colorBlue).addTo(map);
var kolsch = L.circle(L.latLng([522, 641]), 23, colorGreen).addTo(map);
var altbier = L.circle(L.latLng([542, 686]), 23, colorGreen).addTo(map);
var balticPorter = L.circle(L.latLng([97, 778]), 22, colorGreen).addTo(map);
var z = L.circle(L.latLng([0, 0]), 0, colorGreen).addTo(map);

/*************************************************************************************************************************/
/******************************************************* Grupos **********************************************************/
/*************************************************************************************************************************/

var groupAllStyles = new L.featureGroup([ale, irishAle, 
stoutPorter, americanStout, sweetStout, oatmealStout, flavoredStout, imperialStout, irishStout, foreignStout, balticPorter, americanPorter, englishPorter,
paleAle, englishPaleAle, burtonPaleAle, premiumBitter, lightAle, indianPaleAle, doubleIpa, strongPaleAle, doubleIpa, scotchAle, barleyWine, americanStrongAle, oldAle, englishStrongAle,
americanPaleAle, amberAle, americanWheatAle, blondeAle, lambic, faro, gueuze, fruit, unblended, belgianFrenchAle, witbier, oudBruin, saison, bierDeGarde, flandersRedAle, belgianPaleAle, belgianStrongPaleAle, tripel, belgianDarkAle, belgianStrongDarkAle, quadrupel, dubble, bierDeChampagne,
germanAle, weissbier, roggenbier, hefeweizen, gose, berlinerWeisse, kristallweizen, dunkelweizen, weizenbock, kolsch, altbier,
americanWildAle, mildAle, brownAle, creamAle, californiaCommon, lager, kolsch, altbier,germanLager, dortmunder, bock, maibock, doppelbock, eisbock, dunklerBock, kellerBier, marzen, schwarzBier, munichLager, munichHelles, munichDunkel, viennaLager, rauchbier,
europeanLager, europeanPaleLager, europeanDarkLager, europeanStrongLager, pilsner, bohemianPilsner, germanPilsner, americanPilsner, americanImperialPilsner, americanLager, americanPaleLager, americanDarkLager, californiaCommon,
americanAdjunctLager, lightBeer, dryBeer, iceBeer, maltLiquor, balticPorter, creamAle])

var groupALES = new L.featureGroup([ale, irishAle, 
stoutPorter, americanStout, sweetStout, oatmealStout, flavoredStout, imperialStout, irishStout, foreignStout, balticPorter, americanPorter, englishPorter,
paleAle, englishPaleAle, burtonPaleAle, premiumBitter, lightAle, indianPaleAle, doubleIpa, strongPaleAle, doubleIpa, scotchAle, barleyWine, americanStrongAle, oldAle, englishStrongAle,
americanPaleAle, amberAle, americanWheatAle, blondeAle,
lambic, faro, gueuze, fruit, unblended, belgianFrenchAle, witbier, oudBruin, saison, bierDeGarde, flandersRedAle, belgianPaleAle, belgianStrongPaleAle, tripel, belgianDarkAle, belgianStrongDarkAle, quadrupel, dubble, bierDeChampagne,
germanAle, weissbier, roggenbier, hefeweizen, gose, berlinerWeisse, kristallweizen, dunkelweizen, weizenbock, kolsch, altbier,
americanWildAle, mildAle, brownAle, creamAle, californiaCommon])

var groupStoutPorter = new L.featureGroup([stoutPorter, americanStout, sweetStout, oatmealStout, flavoredStout, imperialStout, irishStout, foreignStout, balticPorter, americanPorter, englishPorter])

var groupPalesAles = new L.featureGroup([paleAle, englishPaleAle, burtonPaleAle, premiumBitter, lightAle, indianPaleAle, doubleIpa, strongPaleAle, scotchAle, barleyWine, americanStrongAle, oldAle, englishStrongAle,
americanPaleAle, blondeAle, americanWheatAle, amberAle])
var groupEnglishPaleAle = new L.featureGroup([englishPaleAle, burtonPaleAle,premiumBitter,lightAle])
var groupIndianPaleAle = new L.featureGroup([indianPaleAle, doubleIpa])
var groupStrongPaleAle = new L.featureGroup([strongPaleAle, englishStrongAle, oldAle, americanStrongAle, barleyWine, scotchAle, doubleIpa])
var groupAmericanPaleAle =  new L.featureGroup([americanPaleAle, amberAle, americanWheatAle, blondeAle])


var groupLambic = new L.featureGroup([lambic, faro, gueuze, fruit, unblended])
var groupBelgianFrenchAle = new L.featureGroup([belgianFrenchAle, witbier, oudBruin, saison, bierDeGarde, flandersRedAle, belgianPaleAle, belgianStrongPaleAle, tripel, belgianDarkAle, belgianStrongDarkAle, dubble, quadrupel, bierDeChampagne])
var groupBelgianPaleAle = new L.featureGroup([belgianPaleAle, belgianStrongPaleAle, tripel])
var groupBelgianStrongPaleAle = new L.featureGroup([belgianStrongPaleAle, tripel])
var groupBelgianDarkAle = new L.featureGroup([belgianDarkAle, belgianStrongDarkAle, dubble, quadrupel])
var groupBelgianStrongDarkAle = new L.featureGroup([belgianStrongDarkAle, dubble, quadrupel])
var groupGermanAle = new L.featureGroup([germanAle, roggenbier, weissbier, hefeweizen, gose, berlinerWeisse, kristallweizen, dunkelweizen, weizenbock, altbier, kolsch])
var groupWeissbier = new L.featureGroup([weissbier, hefeweizen, gose, berlinerWeisse, kristallweizen, dunkelweizen, weizenbock])

var groupLAGERS = new L.featureGroup([lager, kolsch, altbier,germanLager, dortmunder, bock, maibock, doppelbock, eisbock, dunklerBock, kellerBier, marzen, schwarzBier, munichLager, munichHelles, munichDunkel, viennaLager, rauchbier,
europeanLager, europeanPaleLager, europeanDarkLager, europeanStrongLager, pilsner, bohemianPilsner, germanPilsner, americanPilsner, americanImperialPilsner, americanLager, americanPaleLager, americanDarkLager, californiaCommon,
americanAdjunctLager, lightBeer, dryBeer, iceBeer, maltLiquor, balticPorter, creamAle])

var groupGermanLager = new L.featureGroup([germanLager, dortmunder,kellerBier, bock, maibock,doppelbock, eisbock,dunklerBock, marzen, schwarzBier, munichLager, munichHelles, munichDunkel, viennaLager, rauchbier])
var groupBock = new L.featureGroup([bock, maibock, doppelbock, eisbock, dunklerBock])
var groupMunichLager = new L.featureGroup([munichLager, munichHelles, munichDunkel])
var groupEuropeanLager = new L.featureGroup([europeanLager, europeanPaleLager, europeanDarkLager, europeanStrongLager])
var groupPilsner = new L.featureGroup([pilsner, bohemianPilsner, germanPilsner, americanPilsner, americanImperialPilsner])
var groupAmericanLager =  new L.featureGroup([americanLager, americanAdjunctLager, americanPilsner, lightBeer, dryBeer, iceBeer, maltLiquor, americanPaleLager, americanDarkLager, californiaCommon])
var groupAmericanAdjunctLager = new L.featureGroup([americanAdjunctLager, americanPilsner, lightBeer, dryBeer, iceBeer, maltLiquor])

/**************************************************************************************************************************/
/******************************************************** Array ***********************************************************/
/**************************************************************************************************************************/

var points = [
//["All Styles", "allStyles", 137.5, colorNone, groupAllStyles, 379, 503],
["Ale", "ale", 45, colorRed, groupALES, 368.5, 254],
["Pale Ale", "paleAle", 31.6, colorGreen, groupPalesAles, 278, 215.5],
["English Pale Ale / Bitter", "englishPaleAle", 27, colorBlue, groupEnglishPaleAle, 194, 262],
["Burton Pale Ale", "burtonPaleAle", 18, colorBlue, burtonPaleAle, 152, 323],
["Premium Bitter/ESB", "premiumBitter", 22, colorBlue, premiumBitter, 63, 337],
["Light Ale", "lightAle", 22, colorBlue, lightAle, 69, 277],
["Indian Pale Ale", "indianPaleAle", 27.5, colorBlue, groupIndianPaleAle, 148.5, 221],
["Double IPA", "doubleIpa", 22, colorBlue, doubleIpa, 66, 227],
["Strong Pale Ale", "strongPaleAle", 27.5, colorBlue, groupStrongPaleAle, 181.5, 139],
["Scotch Ale", "scotchAle", 22, colorBlue, scotchAle, 98, 149],
["Barley Wine", "barleyWine", 22.5, colorBlue, barleyWine, 65, 99],
["American Strong Ale", "americanStrongAle", 22, colorBlue, americanStrongAle, 110, 61],
["Old Ale", "oldAle", 20, colorBlue, oldAle, 169, 84],
["English Strong Ale", "englishStrongAle", 22, colorBlue, englishStrongAle, 237, 53],
["American Pale Ale", "americanPaleAle", 27.5, colorBlue, groupAmericanPaleAle, 290, 120],
["Blonde Ale", "blondeAle", 21, colorBlue, blondeAle, 419, 100],
["American Wheat Ale", "americanWheatAle", 22, colorBlue, americanWheatAle, 436, 32],
["Amber Ale", "amberAle", 22, colorBlue, amberAle, 323, 34],
["Stout/Porter", "stoutPorter", 31.6, colorGreen, groupStoutPorter, 141, 446],
["American Stout", "americanStout", 22, colorBlue, americanStout, 204, 473],
["Sweet Stout", "sweetStout", 22, colorBlue, sweetStout, 169, 540],
["Oatmeal Stout", "oatmealStout", 22, colorBlue, oatmealStout, 72, 718],
["Flavored Stout", "flavoredStout", 22, colorBlue, flavoredStout, 67, 627],
["Imperial Stout", "imperialStout", 22, colorBlue, imperialStout, 77, 532],
["Irish Stout", "irishStout", 22, colorBlue, irishStout, 63.5, 422],
["Foreign Stout", "foreignStout", 21, colorBlue, foreignStout, 72, 470],
["English Porter", "englishPorter", 22, colorBlue, englishPorter, 138.5, 378],
["American Porter", "americanPorter", 22, colorBlue, americanPorter, 194.5, 361],
["German Ale", "germanAle", 31.6, colorGreen, groupGermanAle, 612, 451],
["Roggenbier", "roggenbier", 22, colorBlue, roggenbier,546, 450],
["Weissbier", "weissbier", 27, colorBlue, groupWeissbier, 622, 535],
["Weizenbock", "weizenbock", 23, colorBlue, weizenbock, 546, 509],
["Dunkelweizen", "dunkelweizen", 23, colorBlue, dunkelweizen, 601,593],
["Kristallweizen", "kristallweizen", 23, colorBlue, kristallweizen, 657, 656],
["Berliner Weisse", "berlinerWeisse", 23, colorBlue, berlinerWeisse, 672, 601],
["Gose", "gose", 22, colorBlue, gose, 708.5, 526],
["Hefeweizen", "hefeweizen", 23, colorBlue, hefeweizen, 668, 484],
["Belgian/French Ale", "belgianFrenchAle", 31.6, colorGreen, groupBelgianFrenchAle, 599, 247],
["Saison", "saison", 23, colorBlue, saison, 672, 168],
["Oud Bruin", "oudBruin", 23, colorBlue, oudBruin, 601, 175],
["Witbier", "witbier", 20, colorBlue, witbier, 550, 209],
["Biere de Champagne", "bierDeChampagne", 20, colorBlue, bierDeChampagne, 502, 275],
["Belgian Dark Ale", "belgianDarkAle", 23, colorBlue, groupBelgianDarkAle, 590, 309],
["Belgian Strong Dark Ale", "belgianStrongDarkAle", 20, colorBlue, groupBelgianStrongDarkAle, 607, 364.5],
["Quadrupel", "quadrupel", 18, colorBlue, quadrupel, 560.5, 361],
["Dubbel", "dubbel", 18, colorBlue, dubble, 546, 323],
["Belgian Pale Ale", "belgianPaleAle", 22, colorBlue, groupBelgianPaleAle, 668, 318],
["Belgian Strong Pale Ale", "belgianStrongPaleAle", 22, colorBlue, groupBelgianStrongPaleAle, 681, 370],
["Tripel", "tripel", 18, colorBlue, tripel, 669, 428],
["Flanders Red Ale", "flandersRedAle", 22, colorBlue, flandersRedAle, 668, 269],
["Biere de Garde", "bierDeGarde", 22, colorBlue, bierDeGarde, 669, 220],
["Lambic", "lambic", 27, colorGreen, groupLambic,606.5, 89.5],
["Faro", "faro", 17, colorBlue, faro, 611, 32.5],
["Gueuze", "gueuze", 17, colorBlue, gueuze, 654, 37],
["Fruit", "fruit", 17, colorBlue, fruit, 671, 75],
["Unblended", "unblended", 17, colorBlue, unblended, 669, 122],
["American Wild Ale", "americanWildAle", 23, colorGreen, americanWildAle, 533.5, 101],
["Mild Ale", "mildAle", 23, colorGreen, mildAle, 399, 152],
["Brown Ale", "brownAle", 23, colorGreen, brownAle, 352, 168],
["Irish Ale", "irishAle", 21, colorGreen, irishAle, 282, 282],
["Cream Ale", "creamAle", 23, colorGreen, creamAle, 213, 638],
["California Common", "californiaCommon", 23.5, colorGreen, californiaCommon, 157, 667],
["Lager", "lager", 45, colorRed, groupLAGERS , 370.5, 794],
["German Lager", "germanLager", 32, colorGreen, groupGermanLager, 477, 786],
["Dortmunder", "dortmunder", 22, colorBlue, dortmunder, 557, 749],
["Bock", "bock", 25, colorBlue, groupBock, 615, 764],
["Maibock / Helles", "maibock", 22, colorBlue, maibock, 619, 704],
["Doppelbock", "doppelbock", 22, colorBlue, doppelbock, 717, 738],
["Eisbock", "eisbock", 22, colorBlue, eisbock, 676, 779],
["Dunkler Bock", "dunklerBock", 22, colorBlue, dunklerBock, 663, 829],
["Keller Bier", "kellerBier", 20, colorBlue, kellerBier, 564, 798],
["Märzen", "marzen", 20, colorBlue, marzen, 616, 846.5],
["SchwarzBier", "schwarzBier", 20, colorBlue, schwarzBier, 669, 913],
["Munich Lager", "munichLager", 22, colorBlue, groupMunichLager, 616, 913],
["Munich Helles", "munichHelles", 17, colorBlue, munichHelles, 661, 960],
["Munich Dunkel", "munichDunkel", 17, colorBlue, munichDunkel, 612, 964],
["Vienna Lager", "viennaLager", 23, colorBlue, viennaLager, 550, 890],
["Rauchbier", "rauchbier", 22, colorBlue, rauchbier, 487, 852],
["European Lager", "europeanLager", 27, colorGreen, groupEuropeanLager, 436, 879],
["European Pale Lager", "europeanPaleLager", 23, colorBlue, europeanPaleLager, 497, 964],
["European Dark Lager", "europeanDarkLager", 23, colorBlue, europeanDarkLager, 404, 961],
["European Strong Lager", "europeanStrongLager", 23, colorBlue, europeanStrongLager, 377, 903],
["Pilsner", "pilsner", 32, colorGreen, groupPilsner, 285, 858],
["Bohemian Pilsner", "bohemianPilsner", 23, colorBlue, bohemianPilsner, 320, 943],
["German Pilsner", "germanPilsner", 23, colorBlue, germanPilsner, 247, 945],
["American Pilsner", "americanPilsner", 22, colorBlue, americanPilsner, 172, 970],
["American Imperial Pilsner", "americanImperialPilsner", 22, colorBlue, americanImperialPilsner, 224, 872],
["American Lager", "americanLager", 32, colorGreen, groupAmericanLager, 179, 832],
["American Pale Lager", "americanPaleLager", 23, colorBlue, americanPaleLager, 229, 759],
["American Dark/Amber Lager", "americanDarkLager", 23, colorBlue, americanDarkLager, 202, 713],
["American Adjunct Lager", "americanAdjunctLager", 27, colorBlue, americanAdjunctLager, 86, 842],
["Light Beer", "lightBeer", 18, colorBlue, lightBeer, 104, 916],
["Dry Beer", "dryBeer", 18, colorBlue, dryBeer, 42, 963],
["Ice Beer", "iceBeer", 17, colorBlue, iceBeer, 33, 922],
["Malt Liquor", "maltLiquor", 17, colorBlue, iceBeer, 38, 869],
["Kölsch", "kolsch", 23, colorGreen, kolsch, 522, 641],
["Altbier", "altbier", 23, colorGreen, altbier, 542, 686],
["Baltic Porter", "balticPorter", 22, colorGreen, balticPorter, 97, 778],
["Z", "z", 0, colorGreen, balticPorter, 0, 0],
];
points.sort();


var buffers = [];
var c = "";

function addMarker(code, id, radio, color, group, lat,lng){
  var p = L.marker([lat,lng]);
  p.title = code;
  p.alt = code;
  srt = code
  /*p.bindPopup(code);
  p.addTo(map);*/
  c = L.circle([lat,lng], radio, color).addTo(map)/*.bindTooltip(code, {className: 'myCSSClass'})*/
  .on('mouseover', function () {
    c.setStyle({
        fillOpacity: 0.27
    });
    group.setStyle({
        fillOpacity: 0.27
    });
    showInfo(code);
    //c[this].openTooltip();
  })
  .on('mouseout', function () {
    c.setStyle({
        fillOpacity: 0
    });
    group.setStyle({
        fillOpacity: 0
    });

    outInfo();
  });
  c.on('click', function () {
    openBlockInfo();
  });
  buffers.push(c);
}

$(document).ready(function (){

  /*var points*/
  for (var i=0; i < points.length; i++){
  addMarker(points[i][0],points[i][1],points[i][2], points[i][3], points[i][4], points[i][5], points[i][6]);
  }

  /******************************************************************/
  /**************** Buscador Autocompletable ************************/
  /******************************************************************/

  // variables
  var input = document.querySelector('input');
  /*var points*/
  var results;

  // functions
  function autocomplete(val) {
  var points_return = [];

  for (i = 0; i < points.length; i++) {
   if (val.toLowerCase() === "z") {

   } else if (val.toLowerCase() === points[i][0].slice(0, val.length).toLowerCase()) {
      points_return.push(points[i]);
    }
  }

  return points_return;
  }

  // events
  input.onkeyup = function(e) {
    input_val = this.value; // updates the variable on each ocurrence

    if (input_val.length > 0) {
      var points_to_show = [];
      document.getElementById("cross-out").style.display = "block";
      document.getElementById("choose_your_beer").style.display = "none";

      autocomplete_results = document.getElementById("autocomplete-results");
      autocomplete_results.innerHTML = '';
      points_to_show = autocomplete(input_val);

      for (i = 0; i < points_to_show.length; i++) {
        autocomplete_results.innerHTML += '<li id="' + points_to_show[i][1] + '"">' + points_to_show[i][0] + '</li>';
      }
      autocomplete_results.style.display = 'block';
    } else {
      points_to_show = [];
      document.getElementById("cross-out").style.display = "none";
      document.getElementById("choose_your_beer").style.display = "block";
      autocomplete_results.innerHTML = '';
    }

    var ul = document.getElementById("autocomplete-results");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
      items[i].onmouseover = function(){
        this.style.backgroundColor = "#cccccc";
        this.style.color = "#000000";
        showInfo (this.innerHTML);
        for (var i=0; i < points.length; i++){
          if( this.id == points[i][1]) {
            c = L.circle([points[i][5],points[i][6]], points[i][2], points[i][3]).addTo(map);
            c.setStyle({
              fillOpacity: 0.25
            });
          }
        } 
      }
      items[i].onmouseout = function(){
        this.style.backgroundColor = "white";
        this.style.color = "black";
        outInfo();
        for (var i=0; i < points.length; i++){
          if( this.id == points[i][1]) {
            map.removeLayer(c);
          }
        } 

      }
      items[i].onclick = function(){
        var mapPoint = this.id;
        for (j = 0; j < points.length; j++) {
          if (mapPoint === points[j][1].slice(0, mapPoint.length)) {   
            map.flyTo([points[j][5],points[j][6]], 0);
          }
        }
      }
    }
  } 

  document.getElementById("cross-out").onclick =function(){
      document.getElementById("autocomplete-input").value = '';
      autocomplete_results.innerHTML = '';
      document.getElementById("cross-out").style.display = "none";
      document.getElementById("choose_your_beer").style.display = "block";
      map.panTo({lat: 375, lng: 325})
  }
});


/******************************************************************/
/************************ selector anidado ************************/
/******************************************************************/

 
 var objBeer= JSON.parse(Arrbeerstyles);
 window.onload=function(){
 
     for ( var i=0 ; i< objBeer.beerStyles.length ; i++){
         document.getElementById("tipoCerveza").innerHTML += '<option value="'+(i)+'">'+objBeer.beerStyles[i].tipo+'</option>';
     }
 
     document.getElementById("tipoCerveza").onchange = myFunction;
 }
 
 function myFunction() {
 
 document.getElementById("categoriaCerveza").style.display = "inline";
 document.getElementById("categoriaCerveza").innerHTML = "";
 document.getElementById("estiloCerveza").innerHTML = "";
 document.getElementById("estiloCerveza").style.display = "none";
 
 if(document.getElementById("tipoCerveza").value == ""){
         document.getElementById("categoriaCerveza").style.display="none";
         document.getElementById("estiloCerveza").style.display="none";
     }else{
         showInfo(objBeer.beerStyles[this.value].tipo);
         for ( var j=0 ; j< objBeer.beerStyles[this.value].categories.length ; j++){
              document.getElementById("categoriaCerveza").innerHTML += '<option value="'+(j)+'">'+objBeer.beerStyles[this.value].categories[j].category+'</option>';
             } 
         document.getElementById("categoriaCerveza").onchange = myFunction2; 
     }
       
 }
 
 function myFunction2() {
 
 document.getElementById("estiloCerveza").style.display="inline";
 document.getElementById("estiloCerveza").innerHTML="";
 if(objBeer.beerStyles[0].categories[this.value].styles == undefined || objBeer.beerStyles[1].categories[this.value].styles == undefined){
  document.getElementById("estiloCerveza").style.display="none";
  }
 
 if(document.getElementById("categoriaCerveza").value == 0){
         document.getElementById("estiloCerveza").style.display="none";
     }else{    
        if(document.getElementById("tipoCerveza").value == 0){
         showInfo(objBeer.beerStyles[0].categories[this.value].category); 
         for ( var k=0 ; k< objBeer.beerStyles[0].categories[this.value].styles.length ; k++){
              document.getElementById("estiloCerveza").innerHTML += '<option value="'+(k)+'">'+objBeer.beerStyles[0].categories[this.value].styles[k].style+'</option>';
             } 
          document.getElementById("estiloCerveza").onchange = myFunction3;
         }else{
              showInfo(objBeer.beerStyles[1].categories[this.value].category); 
             for ( var k=0 ; k< objBeer.beerStyles[1].categories[this.value].styles.length ; k++){
              document.getElementById("estiloCerveza").innerHTML += '<option value="'+(k)+'">'+objBeer.beerStyles[1].categories[this.value].styles[k].style+'</option>';
              if(objBeer.beerStyles[1].categories[this.value].styles[k].style == ""){
                document.getElementById("estiloCerveza").style.display = "none";
              }
            } 
             document.getElementById("estiloCerveza").onchange = myFunction3;
         }
     }
 }
 
function myFunction3() {
    var valueStyle = document.getElementById("estiloCerveza").value;
    showInfo(document.getElementById("estiloCerveza")[valueStyle].innerHTML);
    
}


/******************************************************************/
/**************************** Bloc Info ***************************/
/******************************************************************/

/************ bottons **********/

document.getElementById("botton-info").onclick = function open(){
  openBlockInfo();
};

document.getElementById("botton-exit").onclick = function closed(){
  closedBlockInfo()
};

/************************ functions Info **********************************/


 function openBlockInfo(){
  document.getElementById("bloc_more_info").style.width = "25%";
  document.getElementById("bloc_more_info").style.minWidth = "300px";
  document.getElementById("botton-info").style.visibility = "hidden";
  document.getElementById("botton-info").style.opacity = "0";
  document.getElementById("wanted_cartel").style.visibility = "visible";
  document.getElementById("wanted_cartel").style.opacity = "1";
  document.getElementById("little_block_info").style.display= "none";
  map.panTo({lat: 375, lng: 325})
  document.getElementById("tipoCerveza").value = '';
  document.getElementById("categoriaCerveza").style.display= "none";
  document.getElementById("estiloCerveza").style.display= "none";
 };

 function closedBlockInfo(){
  document.getElementById("bloc_more_info").style.width = "0%";
  document.getElementById("bloc_more_info").style.minWidth = "0px";
  document.getElementById("botton-info").style.visibility = "visible";
  document.getElementById("botton-info").style.opacity = "1";
  document.getElementById("botton-info").style.left = "0%";
  document.getElementById("wanted_cartel").style.visibility = "hidden";
  document.getElementById("wanted_cartel").style.opacity = "0";
  document.getElementById("little_block_info").style.display= "block";
  map.fitBounds(bounds);
  map.invalidateSize();
  document.getElementById("autocomplete-input").value = '';
  autocomplete_results.innerHTML = '';
  document.getElementById("cross-out").style.display = "none";
 }

 function showInfo(code){
  document.getElementById("little_block_info").innerHTML =   code;
  var objBeerInfo = JSON.parse(ArrBeerStylesInfo); 
  document.getElementById("title_style").innerHTML = "";

  for (var i=0; i < objBeerInfo.beerStylesInfo.length; i++){ console.log(code);
    if(code == objBeerInfo.beerStylesInfo[i].style){
      document.getElementById("title_style").innerHTML = objBeerInfo.beerStylesInfo[i].yest + " / " + objBeerInfo.beerStylesInfo[i].family + " / " + objBeerInfo.beerStylesInfo[i].style;
      document.getElementById("infoArray").innerHTML = objBeerInfo.beerStylesInfo[i].descriptionShort;
    
    } else if(code == objBeerInfo.beerStylesInfo[i].family && objBeerInfo.beerStylesInfo[i].style == undefined){
      document.getElementById("title_style").innerHTML = objBeerInfo.beerStylesInfo[i].yest + " / " + objBeerInfo.beerStylesInfo[i].family;
      document.getElementById("infoArray").innerHTML = objBeerInfo.beerStylesInfo[i].descriptionShort; 
      console.log(objBeerInfo.beerStylesInfo[i].descriptionShort);
    
      } else if(code == objBeerInfo.beerStylesInfo[i].yest && objBeerInfo.beerStylesInfo[i].family == undefined){
          document.getElementById("title_style").innerHTML = objBeerInfo.beerStylesInfo[i].yest;
          document.getElementById("infoArray").innerHTML = objBeerInfo.beerStylesInfo[i].descriptionShort; 
        } 
  }
 };

 function outInfo(){
  document.getElementById("title_style").innerHTML =   "";
  document.getElementById("infoArray").innerHTML = "";
         
  document.getElementById("little_block_info").innerHTML = "";
};

