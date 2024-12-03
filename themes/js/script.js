function correct(text)
{
	text = text.replace(/\./g, " . ");
	text = text.replace(/،/g, " ، ");
	text = text.replace(/:/g, " : ");
	text = text.replace(/؛/g, " ؛ ");
	text = text.replace(/!/g, " ! ");
	text = text.replace(/\(/g, " ( ");
	text = text.replace(/\)/g, " ) ");
	text = text.replace(/«/g, " « ");
	text = text.replace(/»/g, " » ");
	text = text.replace(/؟/g, " ؟ ");

	text = text.replace(/ي/g, "ی");
	text = text.replace(/ى/g, "ی");
	text = text.replace(/ك/g, "ک");
	text = text.replace(/ ها /g, "‌ها ");
	text = text.replace(/ها/g, "‌ها ");
	text = text.replace(/ های /g, "‌های ");
	text = text.replace(/ هایی /g, "‌هایی ");
	text = text.replace(/ می /g, " می‌");
	text = text.replace(/ می/g, " می‌")
	text = text.replace(/ نمی /g, " نمی‌");
	text = text.replace(/ اند /g, "‌اند ");
	text = text.replace(/ اند/g, "‌اند ");
	text = text.replace(/ ای /g, "‌ای ");
	text = text.replace(/ اش /g, "‌اش");
	text = text.replace(/ ات /g, "‌ات ");
	text = text.replace(/ شان /g, "‌شان ");
	text = text.replace(/ مان /g, "‌مان ");
	text = text.replace(/ تان /g, "‌تان ");
	text = text.replace(/ ام /g, "‌ام ");
	text = text.replace(/ ایم /g, "‌ایم ");
	text = text.replace(/ اید /g, "‌اید ");
	text = text.replace(/ ی /g, "‌ی ");
	text = text.replace(/اًً/g, "اً");

	text = text.replace(/  /g, " ");

	text = text.replace(/ \./g, ".");
	text = text.replace(/\. /g, ".");
	text = text.replace(/\./g, ". ");
	text = text.replace(/\. \. \. /g, "... ");
	text = text.replace(/ ،/g, "،");
	text = text.replace(/، /g, "،");
	text = text.replace(/،/g, "، ");
	text = text.replace(/: /g, ":");
	text = text.replace(/ :/g, ":");
	text = text.replace(/:/g, ": ");
	text = text.replace(/؛ /g, "؛");
	text = text.replace(/ ؛/g, "؛");
	text = text.replace(/؛/g, "؛ ");
	text = text.replace(/ !/g, "!");
	text = text.replace(/! /g, "!");
	text = text.replace(/!/g, "! ");
	text = text.replace(/\( /g, "(");
	text = text.replace(/ \(/g, "(");
	text = text.replace(/\(/g, " (");
	text = text.replace(/ \)/g, ")");
	text = text.replace(/\) /g, ")");
	text = text.replace(/\)/g, ") ");
	text = text.replace(/« /g, "«");
	text = text.replace(/ «/g, "«");
	text = text.replace(/«/g, " «");
	text = text.replace(/» /g, "»");
	text = text.replace(/ »/g, "»");
	text = text.replace(/»/g, "» ");
	text = text.replace(/ ؟/g, "؟");
	text = text.replace(/؟ /g, "؟");
	text = text.replace(/؟/g, "؟ ");
	text = text.replace(/! !/g, "!");
	text = text.replace(/ ترین/g, "‌ترین");
	text = text.replace(/ تر /g, "‌تر ");
	text = text.replace(/ تری /g, "‌تری ");
	text = text.replace(/ انداز/g, "‌انداز");
	text = text.replace(/ افزار/g, "‌افزار");
	text = text.replace(/ بندی /g, "‌بندی ");
	text = text.replace(/ سازی /g, "‌سازی ");
	text = text.replace(/آنها/g, "آن‌ها");
	text = text.replace(/ بی /g, " بی‌");

	return text;
}

function en2fa(text) {
	text = text.replace(/0/g, `۰`);
	text = text.replace(/1/g, `۱`);
	text = text.replace(/2/g, `۲`);
	text = text.replace(/3/g, `۳`);
	text = text.replace(/4/g, `۴`);
	text = text.replace(/5/g, `۵`);
	text = text.replace(/6/g, `۶`);
	text = text.replace(/7/g, `۷`);
	text = text.replace(/8/g, `۸`);
	text = text.replace(/9/g, `۹`);
	return text;
}

const input = $(`#text`);
const result = $(`#result`);
// const hasTanvin = ['شرعاً', 'مثلاً', 'دائماً', 'کلاً', 'مخصوصاً', 'حتماً', 'معمولاً', 'اصلاً', 'ابداً', 'لطفاً', 'بعداً', 'قبلاً', 'اتّفاقاً', 'قانوناً', 'اوّلاً', 'ثانیاً', 'ثالثاً', 'اخیراً', 'کاملاً', 'اصولاً', 'غالباً', 'حدوداً', 'احتمالاً'];
// const hasNotTanvin = ['شرعا', 'مثلا', 'دائما', 'کلا', 'مخصوصا', 'حتما', 'معمولا', 'اصلا', 'ابدا', 'لطفا', 'بعدا', 'قبلا', 'اتّفاقا', 'قانونا', 'اوّلا', 'ثانیا', 'ثالثا', 'اخیرا', 'کاملا', 'اصولا', 'غالبا', 'حدودا', 'احتمالا'];

$(`#do`).click(function() {
	let text = input.val();
	textsplited = text.split(` `);
	text = text.replace(/\n/g, `<br>`);
	if($(`#en2fa`).is(`:checked`))
		text = en2fa(text);
	text = correct(text);
	$(`#result-container`).slideDown(500);
	result.html(text);
	$(`html, body`).animate({
		scrollTop: $(`#scroll`).offset().top 
	},500);
});