const getNews = (req, res) => {
  res.json([
    {
      title: "Truck-bus-car crash claims jawan, 2 others",
      description:
        "India News: BHOPAL: Three persons, including an armyman, died while 14 were injured in collisions between a military truck, a passenger bus and an SUV in Madhya P.",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      url: "https://timesofindia.indiatimes.com/india/truck-bus-car-crash-claims-jawan-2-others/articleshow/110094531.cms",
      author: "TNN",
    },
    {
      title: "iOS 17.5 includes these 15 security patches for iPhone users",
      description:
        "iOS 17.5 has landed for everyone with several new user-facing features. And there are also 15 important security fixes that come with the update. Here are the full details on everything",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/how-to-get-imessage-quantum-security-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      url: "https://9to5mac.com/2024/05/13/ios-17-5-includes-these-15-security-patches-for-iphone-users/",
      author: "Michael Potuck",
    },
    {
      title:
        "",
      description:
        "Bhopal Salkanpur Accident News: भोपाल का एक परिवार सलकनपुर से बच्चे का मुंडन करवाकर लौट रहा था। इस दौरान सड़क हादसे का शिकार हो गया। इसमें छह महीने के व्योम की मौत हो गई है। इसके साथ ही परिवार के दूसरी",
      urlToImage:
        "https://static.langimg.com/photo/imgsize-93920,msid-110077981/navbharat-times.jpg",
      url: "https://9to5mac.com/2024/05/13/ios-17-5-includes-these-15-security-patches-for-iphone-users/",
      author: "मुनेश्वर कुमार",
    },
    {
      title: "iOS 17.5 includes these 15 security patches for iPhone users",
      description:
        "14 फरवरी, 2021 को अर्चना शुक्ला का निधन हो गया था, जिससे पूरे परिवार में अचानक एक गहरा दुख छा गया। 58 साल की उम्र में उनकी मृत्यु कार्डियक अरेस्ट के कारण हुई थी। परिवार ने अर्चना शुक्ला की यादों को संजोने के लिए उनके जैसी एक सिलिकॉन मूर्ति बनवाई है।",
      urlToImage:
        "https://static.langimg.com/photo/imgsize-55940,msid-110049330/navbharat-times.jpg",
      url: "https://navbharattimes.indiatimes.com/state/madhya-pradesh/bhopal/bhopal-news-mothers-day-special-unique-love-of-son-exact-statue-made-after-losing-mother/articleshow/110049050.cms",
      author: "P Naveen",
    },
  ]);
};

module.exports = { getNews };
