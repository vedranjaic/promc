// --- [ l10n.js ]
// On first load set language in cookie to 'hr'
if (!getCookie("promcLocale")) {
	setCookie("promcLocale", "hr");
}

// Change language on dropdown
$('#lang-hr').click(function() {
	setCookie("promcLocale", $(this).text().toLowerCase(), 365);
	location.reload();
});
$('#lang-en').click(function() {
	setCookie("promcLocale", $(this).text().toLowerCase(), 365);
	location.reload();
});
$('#lang-de').click(function() {
	setCookie("promcLocale", $(this).text().toLowerCase(), 365);
	location.reload();
});

// Set the locale and change language shortcode
String.locale = getCookie("promcLocale");
if (String.locale != 0) {
	$('#lang-selected').text(String.locale.toUpperCase());
}



var l = function (string, fallback) {
	var localized = string.toLocaleString();
	if (localized !== string) {
		return localized;
	} else {
		return fallback;
	}
};

// Set language to cookie
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}




// Meta tags
document.title = l('title');
// TODO - Provjeriti Google SEO za prijevod meta descriptona u Google rezultatima
// document.querySelector('meta[name="description"]').content = l('info');

// Navigation
document.getElementById('navIntro').innerText = l('nav')['intro'];
document.getElementById('navUsluge').innerText = l('nav')['services'];
document.getElementById('navKlijenti').innerText = l('nav')['clients'];
document.getElementById('navONama').innerText = l('nav')['aboutus'];
document.getElementById('navKontakt').innerText = l('nav')['contact'];

// --- [ PAGES ]
// Intro
document.getElementById('pageTitleUvod').innerText = l('page')['intro']['title'];
document.getElementById('pageLeadUvod').innerText = l('page')['intro']['lead'];
document.getElementById('pageIntroOffice').innerText = l('page')['intro']['office'];
document.getElementById('pageIntroHome').innerText = l('page')['intro']['home'];
document.getElementById('pageIntroInternational').innerText = l('page')['intro']['international'];
document.getElementById('pageIntroArchive').innerText = l('page')['intro']['archive'];
// Services
// Office
document.getElementById('pageDetailsSelidbe').innerText = l('page')['services']['details'];
document.getElementById('pageTitleSelidbeUred').innerText = l('page')['services']['office']['title'];
document.getElementById('pageLeadSelidbeUred').innerText = l('page')['services']['office']['lead'];
document.getElementById('textSelidbeUredp1').innerText = l('page')['services']['office']['p1'];
document.getElementById('textSelidbeUredp2').innerText = l('page')['services']['office']['p2'];
document.getElementById('textSelidbeUredp3').innerText = l('page')['services']['office']['p3'];
// Home
document.getElementById('pageTitleSelidbeStana').innerText = l('page')['services']['home']['title'];
document.getElementById('pageLeadSelidbeStana').innerText = l('page')['services']['home']['lead'];
document.getElementById('textSelidbeStanp1').innerText = l('page')['services']['home']['p1'];
document.getElementById('textSelidbeStanp2').innerText = l('page')['services']['home']['p2'];
document.getElementById('textSelidbeStanp3').innerText = l('page')['services']['home']['p3'];
document.getElementById('textSelidbeStanp4').innerText = l('page')['services']['home']['p4'];
// International
document.getElementById('pageTitleSelidbeInternational').innerText = l('page')['services']['international']['title'];
document.getElementById('pageLeadSelidbeInternational').innerText = l('page')['services']['international']['lead'];
document.getElementById('textSelidbeInternationalp1').innerText = l('page')['services']['international']['p1'];
document.getElementById('textSelidbeInternationalp2').innerText = l('page')['services']['international']['p2'];
document.getElementById('textSelidbeInternationalp3').innerText = l('page')['services']['international']['p3'];
// document.getElementById('textSelidbeInternationalp4').innerText = l('page')['services']['international']['p4'];
// Arhiva
document.getElementById('pageTitleSelidbeArhiva').innerText = l('page')['services']['archive']['title'];
document.getElementById('pageLeadSelidbeArhiva').innerText = l('page')['services']['archive']['lead'];
document.getElementById('textSelidbeArhivap1').innerText = l('page')['services']['archive']['p1'];
document.getElementById('textSelidbeArhivap2').innerText = l('page')['services']['archive']['p2'];
document.getElementById('textSelidbeArhivap3').innerText = l('page')['services']['archive']['p3'];
// Clients
document.getElementById('pageTitleKlijenti').innerText = l('page')['clients']['title'];
document.getElementById('pageLeadKlijenti').innerText = l('page')['clients']['lead'];document.getElementById('pageTitleKlijenti').innerText = l('page')['clients']['title'];
// About us
document.getElementById('pageTitleONama').innerText = l('page')['aboutus']['title'];
document.getElementById('pageLeadONama').innerText = l('page')['aboutus']['lead'];
document.getElementById('textONamap1').innerText = l('page')['aboutus']['p1'];
document.getElementById('textONamap2').innerText = l('page')['aboutus']['p2'];
document.getElementById('textONamap3').innerText = l('page')['aboutus']['p3'];
document.getElementById('textONamap4').innerText = l('page')['aboutus']['p4'];
document.getElementById('textONamap5').innerText = l('page')['aboutus']['p5'];
document.getElementById('textONamaStat1').innerText = l('page')['aboutus']['stats']['numberClosets'];
document.getElementById('textONamaStat2').innerText = l('page')['aboutus']['stats']['numberBoxes'];
document.getElementById('textONamaStat3').innerText = l('page')['aboutus']['stats']['numberChairs'];
document.getElementById('textONamaStat4').innerText = l('page')['aboutus']['stats']['numberFlowers'];
// Contact
document.getElementById('pageTitleKontakt').innerText = l('page')['contact']['title'];
document.getElementById('pageLeadKontakt').innerText = l('page')['contact']['lead'];
document.getElementById('kontaktDrzava').innerText = l('page')['contact']['addressCountry'];
document.getElementById('kontaktOIB').innerText = l('page')['contact']['detailsOIB'];
document.getElementById('kontaktBanka').innerText = l('page')['contact']['detailsBank'];
document.getElementById('kontaktIBAN').innerText = l('page')['contact']['detailsIBAN'];
document.getElementById('kontaktSWIFT').innerText = l('page')['contact']['detailsSWIFT'];
document.getElementById('link-privacy-modal').innerText = l('page')['contact']['privacyModal'];
document.getElementById('kontaktSocialFacebook').innerText = l('page')['contact']['social']['facebook'];
// Questionnaire
// Tabs
document.getElementById('qTabUred').innerText = l('questionnaire')['tab1'];
document.getElementById('qTabStan').innerText = l('questionnaire')['tab2'];
document.getElementById('qTabInternational').innerText = l('questionnaire')['tab3'];
document.getElementById('qTabArhiva').innerText = l('questionnaire')['tab4'];
// Defaults
document.getElementById('qDetailsMove').innerText = l('questionnaire')['tabs']['details'];
document.getElementById('qDetailsDodatne').innerText = l('questionnaire')['tabs']['additionalDetails'];
document.getElementById('qSubmitLoader').innerText = l('questionnaire')['tabs']['loading'];
document.getElementById('qSubmitBtn').innerText = l('questionnaire')['tabs']['submit'];
document.getElementById('qSubmitSuccessMessage').innerText = l('questionnaire')['tabs']['successAlert'];
document.getElementById('qSubmitThankyouTitle').innerText = l('questionnaire')['tabs']['successTitle'];
document.getElementById('qSubmitThankyouMessage').innerText = l('questionnaire')['tabs']['successMessage'];
document.getElementById('qSubmitBtnAgain').innerText = l('questionnaire')['tabs']['successButton'];
// Office
document.getElementById('qOfficeAlertTitle').innerText = l('questionnaire')['tabs']['office']['formAlertTitle'];
document.getElementById('qOfficeAlertMessage').innerText = l('questionnaire')['tabs']['office']['formAlertMessage'];
document.getElementById('qOfficeLabelContactName').innerText = l('questionnaire')['tabs']['office']['formLabelName'];
document.getElementById('qOfficeLabelContactEmail').innerText = l('questionnaire')['tabs']['office']['formLabelEmail'];
document.getElementById('qOfficeLabelContactNumber').innerText = l('questionnaire')['tabs']['office']['formLabelNumber'];
document.getElementById('qOfficeAddressStart').innerText = l('questionnaire')['tabs']['office']['formAddressStart'];
document.getElementById('qOfficeDateStart').innerText = l('questionnaire')['tabs']['office']['formDateStart'];
document.getElementById('qOfficeAddressFinish').innerText = l('questionnaire')['tabs']['office']['formAddressFinish'];
document.getElementById('qOfficeQuantity').innerText = l('questionnaire')['tabs']['office']['formEmployees'];
// Home
document.getElementById('qHomeAlertTitle').innerText = l('questionnaire')['tabs']['home']['formAlertTitle'];
document.getElementById('qHomeAlertMessage').innerText = l('questionnaire')['tabs']['home']['formAlertMessage'];
document.getElementById('qHomeLabelContactName').innerText = l('questionnaire')['tabs']['home']['formLabelName'];
document.getElementById('qHomeLabelContactEmail').innerText = l('questionnaire')['tabs']['home']['formLabelEmail'];
document.getElementById('qHomeLabelContactNumber').innerText = l('questionnaire')['tabs']['home']['formLabelNumber'];
document.getElementById('qHomeAddressStart').innerText = l('questionnaire')['tabs']['home']['formAddressStart'];
document.getElementById('qHomeDateStart').innerText = l('questionnaire')['tabs']['home']['formDateStart'];
document.getElementById('qHomeAddressFinish').innerText = l('questionnaire')['tabs']['home']['formAddressFinish'];
document.getElementById('qHomeQuantity').innerText = l('questionnaire')['tabs']['home']['formEmployees'];
// International
document.getElementById('qInternationalAlertTitle').innerText = l('questionnaire')['tabs']['international']['formAlertTitle'];
document.getElementById('qInternationalAlertMessage').innerText = l('questionnaire')['tabs']['international']['formAlertMessage'];
document.getElementById('qInternationalLabelContactName').innerText = l('questionnaire')['tabs']['international']['formLabelName'];
document.getElementById('qInternationalLabelContactEmail').innerText = l('questionnaire')['tabs']['international']['formLabelEmail'];
document.getElementById('qInternationalLabelContactNumber').innerText = l('questionnaire')['tabs']['international']['formLabelNumber'];
document.getElementById('qInternationalAddressStart').innerText = l('questionnaire')['tabs']['international']['formAddressStart'];
document.getElementById('qInternationalDateStart').innerText = l('questionnaire')['tabs']['international']['formDateStart'];
document.getElementById('qInternationalAddressFinish').innerText = l('questionnaire')['tabs']['international']['formAddressFinish'];
document.getElementById('qInternationalQuantity').innerText = l('questionnaire')['tabs']['international']['formEmployees'];
// Archive
document.getElementById('qArchiveAlertTitle').innerText = l('questionnaire')['tabs']['archive']['formAlertTitle'];
document.getElementById('qArchiveAlertMessage').innerText = l('questionnaire')['tabs']['archive']['formAlertMessage'];
document.getElementById('qArchiveLabelContactName').innerText = l('questionnaire')['tabs']['archive']['formLabelName'];
document.getElementById('qArchiveLabelContactEmail').innerText = l('questionnaire')['tabs']['archive']['formLabelEmail'];
document.getElementById('qArchiveLabelContactNumber').innerText = l('questionnaire')['tabs']['archive']['formLabelNumber'];
document.getElementById('qDetailsType').innerText = l('questionnaire')['tabs']['archive']['formItemType'];
// Cookie message
document.getElementById('cmIntroTextp1').innerText = l('cookiemessage')['cmIntroText'];
document.getElementById('cmIntroTexta1').innerText = l('cookiemessage')['cmIntroLink'];
document.getElementById('cmCookie1Title').innerText = l('cookiemessage')['cmcookies']['cmCookieBasicTitle'];
document.getElementById('cmCookie1Desc').innerText = l('cookiemessage')['cmcookies']['cmCookieBasicDesc'];
document.getElementById('cmCookie2Title').innerText = l('cookiemessage')['cmcookies']['cmCookieGATitle'];
document.getElementById('cmCookie2Desc').innerText = l('cookiemessage')['cmcookies']['cmCookieGADesc'];
document.getElementById('cookie-settings--btn').innerText = l('cookiemessage')['cmBtnSettings'];
document.getElementById('cookie-accept').innerText = l('cookiemessage')['cmBtnAccept'];
// Privacy policy
document.getElementById('ppModalTitle').innerText = l('privacypolicy')['ppModalTitle'];
document.getElementById('ppIntroTextp1').innerText = l('privacypolicy')['ppIntro']['ppIntroTextp1'];
document.getElementById('ppIntroTextp2').innerText = l('privacypolicy')['ppIntro']['ppIntroTextp2'];
document.getElementById('ppPolicy01Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy01Titleh1'];
document.getElementById('ppPolicy01Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy01Textp1'];
document.getElementById('ppPolicy02Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy02Titleh1'];
document.getElementById('ppPolicy02Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy02Textp1'];
document.getElementById('ppPolicy02Textp2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy02Textp2'];
document.getElementById('ppPolicy02Textp3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy02Textp3'];
document.getElementById('ppPolicy03Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy03Titleh1'];
document.getElementById('ppPolicy03Titleh2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy03Titleh2'];
document.getElementById('ppPolicy03Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy03Textp1'];
document.getElementById('ppPolicy03Titleh3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy03Titleh3'];
document.getElementById('ppPolicy03Textp2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy03Textp2'];
document.getElementById('ppPolicy03Titleh4').innerText = l('privacypolicy')['ppPolicies']['ppPolicy03Titleh4'];
document.getElementById('ppPolicy03Textp3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy03Textp3'];
document.getElementById('ppPolicy03Textp3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy03Textp3'];
document.getElementById('ppPolicy03Textp4').innerText = l('privacypolicy')['ppPolicies']['ppPolicy03Textp4'];
document.getElementById('ppPolicy04Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy04Titleh1'];
document.getElementById('ppPolicy04Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy04Textp1'];
document.getElementById('ppPolicy05Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy05Titleh1'];
document.getElementById('ppPolicy05Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy05Textp1'];
document.getElementById('ppPolicy06Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Titleh1'];
document.getElementById('ppPolicy06Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Textp1'];
document.getElementById('ppPolicy06Textli1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Textli1'];
document.getElementById('ppPolicy06Textli2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Textli2'];
document.getElementById('ppPolicy06Textli3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Textli3'];
document.getElementById('ppPolicy06Textli4').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Textli4'];
document.getElementById('ppPolicy06Textli5').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Textli5'];
document.getElementById('ppPolicy06Textli6').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Textli6'];
document.getElementById('ppPolicy06Textli7').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Textli7'];
document.getElementById('ppPolicy06Textli8').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Textli8'];
document.getElementById('ppPolicy06Textli9').innerText = l('privacypolicy')['ppPolicies']['ppPolicy06Textli9'];
document.getElementById('ppPolicy07Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy07Titleh1'];
document.getElementById('ppPolicy07Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy07Textp1'];
document.getElementById('ppPolicy07Titleh2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy07Titleh2'];
document.getElementById('ppPolicy07Textp2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy07Textp2'];
document.getElementById('ppPolicy07Titleh3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy07Titleh3'];
document.getElementById('ppPolicy07Textp3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy07Textp3'];
document.getElementById('ppPolicy07Titleh4').innerText = l('privacypolicy')['ppPolicies']['ppPolicy07Titleh4'];
document.getElementById('ppPolicy07Textp4').innerText = l('privacypolicy')['ppPolicies']['ppPolicy07Textp4'];
document.getElementById('ppPolicy07Titleh5').innerText = l('privacypolicy')['ppPolicies']['ppPolicy07Titleh5'];
document.getElementById('ppPolicy07Textp5').innerText = l('privacypolicy')['ppPolicies']['ppPolicy07Textp5'];
document.getElementById('ppPolicy08Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy08Titleh1'];
document.getElementById('ppPolicy08Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy08Textp1'];
document.getElementById('ppPolicy09Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy09Titleh1'];
document.getElementById('ppPolicy09Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy09Textp1'];
document.getElementById('ppPolicy09Textli1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy09Textli1'];
document.getElementById('ppPolicy10Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy10Titleh1'];
document.getElementById('ppPolicy10Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy10Textp1'];
document.getElementById('ppPolicy10Textp2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy10Textp2'];
document.getElementById('ppPolicy10Textli1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy10Textli1'];
document.getElementById('ppPolicy10Textli2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy10Textli2'];
document.getElementById('ppPolicy10Textli3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy10Textli3'];
document.getElementById('ppPolicy10Textp3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy10Textp3'];
document.getElementById('ppPolicy10Textp4').innerText = l('privacypolicy')['ppPolicies']['ppPolicy10Textp4'];
document.getElementById('ppPolicy11Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy11Titleh1'];
document.getElementById('ppPolicy11Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy11Textp1'];
document.getElementById('ppPolicy12Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy12Titleh1'];
document.getElementById('ppPolicy12Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy12Textp1'];
document.getElementById('ppPolicy13Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy13Titleh1'];
document.getElementById('ppPolicy13Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy13Textp1'];
document.getElementById('ppPolicy14Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Titleh1'];
document.getElementById('ppPolicy14Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textp1'];
document.getElementById('ppPolicy14Titleh2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Titleh2'];
document.getElementById('ppPolicy14Textp2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textp2'];
document.getElementById('ppPolicy14Textli1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textli1'];
document.getElementById('ppPolicy14Textli2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textli2'];
document.getElementById('ppPolicy14Textli3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textli3'];
document.getElementById('ppPolicy14Textli4').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textli4'];
document.getElementById('ppPolicy14Textp3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textp3'];
document.getElementById('ppPolicy14Titleh3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Titleh3'];
document.getElementById('ppPolicy14Textp4').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textp4'];
document.getElementById('ppPolicy14Titleh4').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Titleh4'];
document.getElementById('ppPolicy14Textp5').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textp5'];
document.getElementById('ppPolicy14Titleh5').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Titleh5'];
document.getElementById('ppPolicy14Textp6').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textp6'];
document.getElementById('ppPolicy14Titleh6').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Titleh6'];
document.getElementById('ppPolicy14Textp7').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textp7'];
document.getElementById('ppPolicy14Titleh7').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Titleh7'];
document.getElementById('ppPolicy14Textp8').innerText = l('privacypolicy')['ppPolicies']['ppPolicy14Textp8'];
document.getElementById('ppPolicy15Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy15Titleh1'];
document.getElementById('ppPolicy15Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy15Textp1'];
document.getElementById('ppPolicy16Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy16Titleh1'];
document.getElementById('ppPolicy16Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy16Textp1'];
document.getElementById('ppPolicy16Textli1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy16Textli1'];
document.getElementById('ppPolicy16Textli2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy16Textli2'];
document.getElementById('ppPolicy16Textli3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy16Textli3'];
document.getElementById('ppPolicy17Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy17Titleh1'];
document.getElementById('ppPolicy17Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy17Textp1'];
document.getElementById('ppPolicy18Titleh1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Titleh1'];
document.getElementById('ppPolicy18Textp1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textp1'];
document.getElementById('ppPolicy18Textli1').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textli1'];
document.getElementById('ppPolicy18Textli2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textli2'];
document.getElementById('ppPolicy18Textli3').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textli3'];
document.getElementById('ppPolicy18Textli4').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textli4'];
document.getElementById('ppPolicy18Textli5').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textli5'];
document.getElementById('ppPolicy18Textp2').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textp2'];
document.getElementById('ppPolicy18Textli6').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textli6'];
document.getElementById('ppPolicy18Textli7').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textli7'];
document.getElementById('ppPolicy18Textli8').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textli8'];
document.getElementById('ppPolicy18Textli9').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textli9'];
document.getElementById('ppPolicy18Textli10').innerText = l('privacypolicy')['ppPolicies']['ppPolicy18Textli10'];

document.documentElement.lang = String.locale || document.documentElement.lang;










