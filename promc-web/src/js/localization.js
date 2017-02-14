// --- [ l10n.js ]
// $('#lang-hr').click(function() {
// 	console.log($(this).text());
// 	String.locale = ($(this).text().toLowerCase());
// 	document.documentElement.lang = String.locale;
// });
// $('#lang-en').click(function() {
// 	String.locale = ($(this).text().toLowerCase());
// });
// $('#lang-de').click(function() {
// 	String.locale = ($(this).text().toLowerCase());
// });
String.locale = "en";

var l = function (string, fallback) {
	var localized = string.toLocaleString();
	if (localized !== string) {
		return localized;
	} else {
		return fallback;
	}
};

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
document.getElementById('textSelidbeInternationalp4').innerText = l('page')['services']['international']['p4'];
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
// Contact
document.getElementById('pageTitleKontakt').innerText = l('page')['contact']['title'];
document.getElementById('pageLeadKontakt').innerText = l('page')['contact']['lead'];
document.getElementById('kontaktDrzava').innerText = l('page')['contact']['addressCountry'];
document.getElementById('kontaktOIB').innerText = l('page')['contact']['detailsOIB'];
document.getElementById('kontaktBanka').innerText = l('page')['contact']['detailsBank'];
document.getElementById('kontaktIBAN').innerText = l('page')['contact']['detailsIBAN'];
document.getElementById('kontaktSWIFT').innerText = l('page')['contact']['detailsSWIFT'];
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

document.documentElement.lang = String.locale || document.documentElement.lang;










