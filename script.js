// Time Update Function
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Date Update Function
function updateDate() {
  const dateElement = document.getElementById("date");
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = now.toLocaleDateString(undefined, options);
  dateElement.textContent = dateString;
}

// Random Quote Function
function getRandomQuote() {
  const quotes = [
    `"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि॥"<br><br>आपको अपने निर्धारित कर्तव्यों को निभाने का अधिकार है, लेकिन कभी भी कार्य के फलों का नहीं। कभी भी अपने कार्यों के परिणामों का कारण मत समझें, न ही निष्क्रियता से जुड़े रहें.<br><br>You have a right to perform your prescribed duties, but never to the fruits of the action. Never consider yourself the cause of the results of your activities, nor be attached to inaction.`,

    `"वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि। तथा शरीराणि विहाय जीर्णान्यन्यानि संन्यति नवानि देही॥"<br><br>जैसे व्यक्ति पुराने कपड़ों को त्यागकर नए पहनता है, आत्मा पुराने शरीर को छोड़कर नए शरीर को धारण करती है.<br><br>Just as a person discards worn-out clothes and wears new ones, the soul discards old bodies and takes on new ones.`,

    `"न जातु कामये राज्यं न स्वर्गं न पुनर्भवम्। कामये दुःखतप्तानां प्राणिनामार्तिनाशनम्॥"<br><br>मैं न तो राज्य चाहता हूँ, न स्वर्ग और न पुनर्जन्म। मैं केवल पीड़ित आत्माओं की पीड़ा को दूर करना चाहता हूँ.<br><br>I desire neither kingdom nor heaven, nor do I wish to be reborn. I only wish to relieve the pain of the suffering souls.`,

    `"अहं आत्मा गुडाकेश सर्वभूताशयस्थितः। अहं आदिश्च मध्यं च भूतानामन्त एव च॥"<br><br>मैं आत्मा हूँ, ओ गुडाकेश, सभी जीवों के हृदय में स्थित। मैं सभी जीवों का प्रारंभ, मध्य और अंत हूँ.<br><br>I am the Self, O Gudakesha, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings.`,

    `"न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥"<br><br>इस संसार में, ज्ञान से शुद्ध करने वाला कुछ नहीं है। समय के साथ, जो योग में सिद्ध होता है, वह इसे आत्मा में अनुभव करता है.<br><br>In this world, there is nothing as purifying as divine knowledge. In due course of time, one who is perfected in yoga realizes it within the self.`,

    `"न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः। न चैव न भविष्यामः सर्वे वयमतः परम्॥"<br><br>कभी भी ऐसा नहीं था कि मैं नहीं था, न ही तुम थे, न ही ये सभी राजा; भविष्य में भी हम में से कोई भी नहीं होगा.<br><br>Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be.`,

    `"श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥"<br><br>अपनी स्वाभाविक निर्धारित कर्तव्य को निभाना, भले ही वह अपूर्ण हो, दूसरों के कर्तव्य को पूर्णता से निभाने से बेहतर है. अपनी कर्तव्य में मरना बेहतर है; किसी और के कर्तव्य में भयावह है.<br><br>It is far better to perform one’s natural prescribed duty, even imperfectly, than to perform another’s duty perfectly. Better to die in one's own duty; perilous is the duty of another.`,

    `"यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ। समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते॥"<br><br>हे पुरुषों के श्रेष्ठ, वह व्यक्ति जो सुख और दुःख से व्यथित नहीं होता और दोनों में स्थिर रहता है, वह मोक्ष के योग्य हो जाता है.<br><br>O best among men, the person who is not disturbed by happiness and distress and is steady in both becomes eligible for liberation.`,

    `"उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥"<br><br>व्यक्ति को अपने मन द्वारा आत्मा को उठाना चाहिए, न कि अवसादित करना चाहिए। मन ही आत्मा का मित्र है और शत्रु भी.<br><br>One must elevate oneself by one’s own mind, not degrade oneself. The mind is the friend of the conditioned soul, and the enemy as well.`,

    `"ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः। तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम्॥"<br><br>जिनके अज्ञान को ज्ञान द्वारा नष्ट किया गया है, उनके ज्ञान का प्रकाश, सूर्य के समान, सर्वोच्च को प्रकट करता है.<br><br>For those whose ignorance is destroyed by knowledge, their wisdom, like the shining sun, reveals the Supreme.`,

    `"तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च। मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयः॥"<br><br>इसलिए, अर्जुन, सभी समय में मुझमें सोचो और युद्ध करो। अपने मन और बुद्धि को मुझे समर्पित करो, तुम निश्चित रूप से मुझ तक पहुँचोगे.<br><br>Therefore, Arjuna, at all times think of Me and engage in the fight. With your mind and intellect surrendered to Me, you will surely attain Me.`,

    `"न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्। कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः॥"<br><br>कोई भी एक क्षण के लिए भी बिना क्रिया के नहीं रह सकता। सभी व्यक्ति प्रकृति के गुणों द्वारा अनिवार्य रूप से कार्य करने के लिए प्रेरित होते हैं.<br><br>No one can remain without action even for a moment. Everyone is helplessly driven to act by the gunas (qualities) born of material nature.`,

    `"मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥"<br><br>हमेशा मुझमें सोचो, मुझसे प्रेम करो, मेरी पूजा करो, और मुझे प्रणाम करो। इस प्रकार तुम निस्संदेह मुझ तक पहुँचोगे, मैं तुम्हें यह वचन देता हूँ क्योंकि तुम मेरे प्रिय हो.<br><br>Always think of Me, be devoted to Me, worship Me, and offer obeisance to Me. Thus you will come to Me without fail, I promise you this because you are very dear to Me.`,

    `"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥"<br><br>जब भी धर्म में कमी आती है और अधर्म बढ़ता है, ओ अर्जुन, उस समय मैं धरती पर प्रकट होता हूँ.<br><br>Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest myself on earth.`,

    `"परित्राणाय साधूनां विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥"<br><br>साधुओं के उद्धार के लिए, दुष्टों के विनाश के लिए, और धर्म की स्थापन के लिए, मैं युग-युग में प्रकट होता हूँ.<br><br>To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of religion, I appear millennium after millennium.`,
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = quotes[randomIndex]; // Updated to use innerHTML for HTML rendering
}

// Initialize Functions
updateTime();
updateDate();
getRandomQuote();

// Update Time and Date every second
setInterval(updateTime, 1000);
setInterval(updateDate, 1000);
