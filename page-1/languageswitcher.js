//------------------Language Switcher-----------------------------

var english = document.getElementById("en"),
spanish = document.getElementById("es"),
german = document.getElementById("ger"),

// Navbar and Welcome Page 

change_text = document.getElementById("translatehow");
change_text1 = document.getElementById("translateabout");
change_text2 = document.getElementById("tralstateinstructions");
change_text3 = document.getElementById("translatereviews");
change_text4 = document.getElementById("translatequestions");
change_text5 = document.getElementById("translatecontact");
change_text6 = document.getElementById("translatesignin");
change_text7 = document.getElementById("translatetrade");
change_text8 = document.getElementById("translatetradetext");
change_text9 = document.getElementById("translatestarttrade");

// Getting Started Page

change_text10 = document.getElementById("translategettingstart");
change_text11 = document.getElementById("translateregister");
change_text12 = document.getElementById("translateregistertext");
change_text13 = document.getElementById("translateverification");
change_text14 = document.getElementById("translateverificationtext");
change_text15 = document.getElementById("translatedeposit");
change_text16 = document.getElementById("translatedeposittext");
change_text17 = document.getElementById("translatetradingstart");
change_text18 = document.getElementById("translatetradingstarttext");

// People love Big Invest Page

change_text19 = document.getElementById("translatebiginvest");
change_text20 = document.getElementById("translatedirector");
change_text21 = document.getElementById("translateinvesttext");

// Questions Page

change_text22 = document.getElementById("translatequestionsasked");
change_text23 = document.getElementById("translatechangedetails");
change_text24 = document.getElementById("translateplatformquestion");
change_text25 = document.getElementById("translatechangedetails1");
change_text26 = document.getElementById("translatechangedetails2");
change_text27 = document.getElementById("translatechangedetails3");
change_text28 = document.getElementById("translatechangedetails4");
change_text29 = document.getElementById("translatechangedetails5");
change_text30 = document.getElementById("translateplatformquestiontext");

// Contact Us Page

change_text31 = document.getElementById("translatecontactus");
change_text32 = document.getElementById("translatecontactussupport");
change_text33 = document.getElementById("translatecontactusKTS");
change_text34 = document.getElementById("translatecontactusphone");
change_text35 = document.getElementById("translatecontactusemail");
change_text36 = document.getElementById("translatecontactusadress");
change_text37 = document.getElementById("translatecontactusinfoadress");
change_text38 = document.getElementById("translatecontactusname");
change_text39 = document.getElementById("translatecontactusemailmsj");
change_text40 = document.getElementById("translatecontactusmessage");
change_text41 = document.getElementById("translatecontactussend");

// Bottom Page

change_text42 = document.getElementById("translateinfo");
change_text43 = document.getElementById("translateinfotext");
change_text44 = document.getElementById("translatelegal");
change_text45 = document.getElementById("translatelegaltext");
change_text46 = document.getElementById("translatecopyright");
change_text47 = document.getElementById("translateterms");
change_text48 = document.getElementById("translateprivacy");
change_text49 = document.getElementById("translaterisk");
change_text50 = document.getElementById("translatelaundering");
change_text51 = document.getElementById("translatecontactussend");





english.addEventListener("click", function() {
  change(english, spanish, german,);
}, false
);
// add an event listener to listen to when the user clicks on one of the language span tags
// this triggers our custom "change" function, which we will define later

spanish.addEventListener("click", function() {
  change(spanish, english, german,);
}, false
);

german.addEventListener("click", function() {
  change(german, english, spanish,);
}, false
);

function change(lang_on, lang_off1, lang_off2) {
if (!lang_on.classList.contains("current_lang")) {
  // if the span that the user clicks on does not have the "current_lang" class
  lang_on.classList.add("current_lang");
  // add the "current_lang" class to it
  lang_off1.classList.remove("current_lang");
  lang_off2.classList.remove("current_lang");
  lang_off3.classList.remove("current_lang");
  // remove the "current_lang" class from the other span
}

//-----------------------ENGLISH DOWN-----------------------------------------------

if (lang_on.innerHTML == "EN") {
  change_text.classList.add("english");
  change_text.classList.remove("german");
  change_text.classList.remove("spanish");
  change_text.innerHTML = "How it works";
  change_text1.innerHTML = "About";
  change_text2.innerHTML = "Instructions";
  change_text3.innerHTML = "Reviews";
  change_text4.innerHTML = "Questions";
  change_text5.innerHTML = "Contact";
  change_text6.innerHTML = "SIGN IN FOR FREE";
  change_text7.innerHTML = "Trade everywhere.  Invest here!";
  change_text8.innerHTML = "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere.";
  change_text9.innerHTML = "START TRADING";

  // Getting started Page EN

  change_text10.innerHTML = "Getting Started Is Fast & Easy";
  change_text11.innerHTML = "Register";
  change_text12.innerHTML = "Complete the simple registration to get your trading credentials.";
  change_text13.innerHTML = "Verification";
  change_text14.innerHTML = "Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes.	";
  change_text15.innerHTML = "Deposit funds";
  change_text16.innerHTML = "Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps.";
  change_text17.innerHTML = "Start Trading";
  change_text18.innerHTML = "Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account.	";

  // People love Big Invest Page EN

  change_text19.innerHTML = "People love Big Invest";
  change_text20.innerHTML = "Director of Growth";
  change_text21.innerHTML = "This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.";


  // Questions Page EN

  change_text22.innerHTML = "Frequently asked questions";
  change_text23.innerHTML = "What is forex trading?";
  change_text24.innerHTML = "Forex trading, short for foreign exchange trading, is the process of buying and selling currencies in the foreign exchange market with the aim of making a profit.";
  change_text25.innerHTML = "How does forex trading work?";
  change_text26.innerHTML = "What are currency pairs?";
  change_text27.innerHTML = "What influences forex market movements?";
  change_text28.innerHTML = "What are the risks of forex trading?";
  change_text29.innerHTML = "How do I change my details?";
  change_text30.innerHTML = "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!";

 // Contact Us Page EN

 change_text31.innerHTML = "Contact us!";
 change_text32.innerHTML = "The support staff and customer service are available to help you with any questions or needs you might have. Just drop us a line.";
 change_text33.innerHTML = "This site is owned and operated by Kode Tech Solutions LTD";
 change_text34.innerHTML = "Phone:";
 change_text35.innerHTML = "Email:";
 change_text36.innerHTML = "Address:";
 change_text37.innerHTML = "Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall Islands, MH 96960";
 change_text38.innerHTML = "Name";
 change_text39.innerHTML = "Email";
 change_text40.innerHTML = "Message";
 change_text41.innerHTML = "SEND";

 // Bottom Page EN

 change_text42.innerHTML = "Information and high risk warning:";
 change_text43.innerHTML = "Trading with foreign exchange (FX), contract for differences (CFDs) and precious metals carries a high level of risk that may not be suitable for all investors. Leverage creates additional risk and loss exposure. Before you decide to trade foreign exchange or contract for differences, carefully consider your investment objectives, experience level, and risk tolerance.";
 change_text44.innerHTML = "Legal disclaimer:";
 change_text45.innerHTML = "Forex trading entails significant risks and is not appropriate for all investors. The possibility of incurring substantial losses should be taken into account. It is therefore important to understand the possible consequences of investing. Traders should weigh their earning potential against the risks involved and act accordingly. Interactive Trade Ltd operating under brand and using domenLink domain within the European Economic Area.";
 change_text46.innerHTML = "Copyright 2020, All Right Reserved";
 change_text47.innerHTML = "Terms and Conditions";
 change_text48.innerHTML = "Privacy Policy";
 change_text49.innerHTML = "Risk Warnings";
 change_text50.innerHTML = "Anti-Money Laundering";
 change_text51.innerHTML = "";


 //-----------------------SPANISH DOWN-----------------------------------------------

}
if (lang_on.innerHTML == "ES") {
  change_text.classList.remove("english");
  change_text.classList.remove("german");
  change_text.classList.add("spanish");
  change_text.innerHTML = "Cómo funciona";
  change_text1.innerHTML = "Acerca de";
  change_text2.innerHTML = "Instrucciones";
  change_text3.innerHTML = "Reseñas";
  change_text4.innerHTML = "Preguntas";
  change_text5.innerHTML = "Contacto";
  change_text6.innerHTML = "INICIA SESIÓN GRATIS";
  change_text7.innerHTML = "Comercio en todas partes.¡Invierte aquí!";
  change_text8.innerHTML = "Proporcionamos sólo el mejor software comercial. La terminal comercial MetaTrader4 es la plataforma más popular y cómoda para acceder a los intercambios globales. Puedes trabajar en cualquier lugar.";
  change_text9.innerHTML = "Comienza a negociar";

  // Getting started Page ES
  
  change_text10.innerHTML = "Comenzar es Rápido & Fácil";
  change_text11.innerHTML = "Registro";
  change_text12.innerHTML = "Complete el registro simple para obtener sus credenciales comerciales.";
  change_text13.innerHTML = "Verificación";
  change_text14.innerHTML = "Se requiere Big Invest para verificar su identidad, cargar sus documentos rápidamente y obtener la aprobación en minutos.";
  change_text15.innerHTML = "Fondos de depósito";
  change_text16.innerHTML = "Big Invest acepta tarjetas de crédito y transferencias bancarias. Simplemente use el formulario de depósito seguro y siga los pasos.";
  change_text17.innerHTML = "Comienza a negociar";
  change_text18.innerHTML = "Una vez que su depósito haya sido acreditado, podrá comenzar a operar al instante. En poco tiempo verás ganancias en tu cuenta.";

  // People love Big Invest Page ES

  change_text19.innerHTML = "Gente amar Grande Invertir";
  change_text20.innerHTML = "Director de Crecimiento";
  change_text21.innerHTML = "¡Este producto mágico realmente funciona! Ha cambiado radicalmente la forma en que construimos nuestras audiencias. Incrementar 6 veces las ventas de nuevos clientes en nuestro mercado más maduro.";

  // Questions Page ES

  change_text22.innerHTML = "Preguntas frecuentes";
  change_text23.innerHTML = "¿Cómo cambio mis datos?";
  change_text24.innerHTML = "¿Qué plataformas podré utilizar?";
  change_text25.innerHTML = "¿Cómo funciona el comercio de divisas?";
  change_text26.innerHTML = "¿Qué son los pares de divisas?";
  change_text27.innerHTML = "¿Qué influye en los movimientos del mercado de divisas?";
  change_text28.innerHTML = "¿Cuáles son los riesgos del comercio de divisas?";
  change_text29.innerHTML = "¿Cómo cambio mis datos?";
  change_text30.innerHTML = "Proporcionamos sólo el mejor software comercial. La terminal comercial MetaTrader4 es la plataforma más popular y cómoda para acceder a los intercambios globales. Puedes trabajar en cualquier lugar. Todo lo que necesita es Internet porque las herramientas comerciales necesarias ya están reunidas en un solo lugar y están disponibles con un par de clics. ¡Utilice sólo lo mejor y desarrolle con nosotros!";

  // Contact Us Page ES

  change_text31.innerHTML = "Contacta con nosotros!";
  change_text32.innerHTML = "El personal de soporte y el servicio de atención al cliente están disponibles para ayudarle con cualquier pregunta o necesidad que pueda tener. Sólo escríbanos.";
  change_text33.innerHTML = "Este sitio es propiedad y está operado por Kode Tech Solutions LTD.";
  change_text34.innerHTML = "Teléfono:";
  change_text35.innerHTML = "Correo electrónico:";
  change_text36.innerHTML = "DIRECCIÓN:";
  change_text37.innerHTML = "Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall Islands, MH 96960";
  change_text38.innerHTML = "Nombre";
  change_text39.innerHTML = "Correo electrónico";
  change_text40.innerHTML = "Mensaje";
  change_text41.innerHTML = "Enviar";

   // Bottom Page ES

  change_text42.innerHTML = "Información y advertencia de alto riesgo:";
  change_text43.innerHTML = "Operar con divisas (FX), contratos por diferencias (CFD) y metales preciosos conlleva un alto nivel de riesgo que puede no ser adecuado para todos los inversores. El apalancamiento crea un riesgo adicional y una exposición de pérdidas. Antes de decidir operar con divisas o contratar diferencias, considere cuidadosamente sus objetivos de inversión, nivel de experiencia y tolerancia al riesgo.";
  change_text44.innerHTML = "Nota legal:";
  change_text45.innerHTML = "El comercio de divisas conlleva riesgos importantes y no es apropiado para todos los inversores. Debe tenerse en cuenta la posibilidad de sufrir pérdidas sustanciales. Por tanto, es importante comprender las posibles consecuencias de la inversión. Los operadores deben sopesar su potencial de ganancias frente a los riesgos involucrados y actuar en consecuencia. Interactive Trade Ltd opera bajo marca y utiliza el dominio domenLink dentro del Espacio Económico Europeo.";
  change_text46.innerHTML = "Copyright 2020, Todos los derechos reservados";
  change_text47.innerHTML = "Términos y Condiciones";
  change_text48.innerHTML = "Política de Privacidad";
  change_text49.innerHTML = "Advertencias de riesgo";
  change_text50.innerHTML = "Anti lavado de dinero";


}

 //-----------------------GERMAN DOWN-----------------------------------------------


if (lang_on.innerHTML == "GER") {
  change_text.classList.remove("english");
  change_text.classList.add("german");
  change_text.classList.remove("spanish");
  change_text.innerHTML = "Wie es funktioniert";
  change_text1.innerHTML = "Um";
  change_text2.innerHTML = "Anweisungen";
  change_text3.innerHTML = "Rezensionen";
  change_text4.innerHTML = "Fragen";
  change_text5.innerHTML = "Kontakt";
  change_text6.innerHTML = "ANMELDEN";
  change_text7.innerHTML = "Überall handeln.  Investieren Sie hier!";
  change_text8.innerHTML = "Wir bieten nur die beste Handelssoftware. Das Handelsterminal MetaTrader4 ist die beliebteste und bequemste Plattform für den Zugang zu globalen Börsen. Sie können überall arbeiten.";
  change_text9.innerHTML = "MIT DEM HANDEL BEGINNEN";

  // Getting started Page GER

  change_text10.innerHTML = "Der Einstieg ist schnell und einfach";
  change_text11.innerHTML = "Registrieren";
  change_text12.innerHTML = "Füllen Sie die einfache Registrierung aus, um Ihre Handelszugangsdaten zu erhalten.";
  change_text13.innerHTML = "Überprüfung";
  change_text14.innerHTML = "Big Invest muss Ihre Identität überprüfen, Ihre Dokumente schnell hochladen und innerhalb von Minuten genehmigt werden.";
  change_text15.innerHTML = "Geld einzahlen";
  change_text16.innerHTML = "Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps.";
  change_text17.innerHTML = "Mit dem handel beginnen";
  change_text18.innerHTML = "Sobald Ihre Einzahlung gutgeschrieben wurde, können Sie sofort mit dem Handel beginnen. In kürzester Zeit werden Sie sehen, wie Gewinne auf Ihr Konto fließen.	";

  // People love Big Invest Page GER

  change_text19.innerHTML = "Die Leute lieben Big Invest";
  change_text20.innerHTML = "Direktor für Wachstum";
  change_text21.innerHTML = "Dieses magische Produkt funktioniert tatsächlich! Es hat die Art und Weise, wie wir unser Publikum aufbauen, radikal verändert. Steigerung des Neukundenumsatzes um das Sechsfache in unserem reifsten Markt.";


  // Questions Page GER

  change_text22.innerHTML = "Häufig gestellte Fragen";
  change_text23.innerHTML = "Wie ändere ich meine Daten?";
  change_text24.innerHTML = "Welche Plattformen kann ich nutzen?";
  change_text25.innerHTML = "Wie ändere ich meine Daten?";
  change_text26.innerHTML = "Wie ändere ich meine Daten?";
  change_text27.innerHTML = "Wie ändere ich meine Daten?";
  change_text28.innerHTML = "Wie ändere ich meine Daten?";
  change_text29.innerHTML = "Wie ändere ich meine Daten?";
  change_text30.innerHTML = "Wir bieten nur die beste Handelssoftware. Das Handelsterminal MetaTrader4 ist die beliebteste und bequemste Plattform für den Zugang zu globalen Börsen. Sie können überall arbeiten. Alles, was Sie brauchen, ist das Internet, denn die notwendigen Handelstools sind bereits an einem Ort gesammelt und mit wenigen Klicks verfügbar. Nutzen Sie nur das Beste und entwickeln Sie sich mit uns weiter!";

 // Contact Us Page GER

 change_text31.innerHTML = "Kontaktiere uns!";
 change_text32.innerHTML = "Das Support-Personal und der Kundenservice stehen Ihnen bei allen Fragen und Bedürfnissen gerne zur Verfügung.Schreiben Sie uns einfach eine Nachricht.";
 change_text33.innerHTML = "Diese Website ist Eigentum von Kode Tech Solutions LTD und wird von ihr betrieben";
 change_text34.innerHTML = "Telefon:";
 change_text35.innerHTML = "Email:";
 change_text36.innerHTML = "Ein Kleid:";
 change_text37.innerHTML = "Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall Islands, MH 96960";
 change_text38.innerHTML = "Name";
 change_text39.innerHTML = "Email";
 change_text40.innerHTML = "Nachricht";
 change_text41.innerHTML = "SCHICKEN";

 // Bottom Page GER

 change_text42.innerHTML = "Informationen und Warnung vor hohem Risiko:";
 change_text43.innerHTML = "Der Handel mit Devisen (FX), Differenzkontrakten (CFDs) und Edelmetallen birgt ein hohes Risiko und ist möglicherweise nicht für alle Anleger geeignet. Durch die Hebelwirkung entsteht ein zusätzliches Risiko- und Verlustrisiko. Bevor Sie sich für den Handel mit Devisen oder Differenzkontrakten entscheiden, sollten Sie Ihre Anlageziele, Ihr Erfahrungsniveau und Ihre Risikotoleranz sorgfältig prüfen.";
 change_text44.innerHTML = "Haftungsausschluss:";
 change_text45.innerHTML = "Der Devisenhandel birgt erhebliche Risiken und ist nicht für alle Anleger geeignet. Die Möglichkeit erheblicher Verluste sollte berücksichtigt werden. Daher ist es wichtig, die möglichen Konsequenzen einer Investition zu verstehen. Händler sollten ihre Verdienstmöglichkeiten gegen die damit verbundenen Risiken abwägen und entsprechend handeln. Interactive Trade Ltd operiert unter der Marke und nutzt die Domain domenLink im Europäischen Wirtschaftsraum.";
 change_text46.innerHTML = "Urheberrecht 2020, alle Rechte vorbehalten";
 change_text47.innerHTML = "Geschäftsbedingungen";
 change_text48.innerHTML = "Datenschutzrichtlinie";
 change_text49.innerHTML = "Risikowarnungen";
 change_text50.innerHTML = "Geldwäschebekämpfung";

}
}
