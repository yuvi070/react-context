import { Component } from "react";
import "./index.css";

const myArray = {
  ENGLISH: {
    heading: "The Conversion Platform for Marketers",
    description:
      "At its most basic level, content marketing is the process of creating and sharing relevant, valuable content. Its goal is to attract, obtain, and retain your target audience. This includes videos, images, and blogs on your business website, social platforms, and other outlets to persuade consumers to take action. For example, a post on Facebook could showcase the unique benefits of a particular product and prompt a reader to click a link to a product landing page to learn more.",
  },
  TELUGU: {
    heading: `విక్రయదారుల కోసం మార్పిడి వేదిక`,
    description: `దాని ప్రాథమిక స్థాయిలో, కంటెంట్ మార్కెటింగ్ ప్రక్రియ సంబంధిత, విలువైన కంటెంట్‌ని సృష్టించడం మరియు భాగస్వామ్యం చేయడం. దీని లక్ష్యం మీ లక్ష్య ప్రేక్షకులను ఆకర్షించండి, పొందండి మరియు నిలుపుకోండి. ఇందులో ఉన్నాయి మీ వ్యాపార వెబ్‌సైట్, సోషల్‌లోని వీడియోలు, చిత్రాలు మరియు బ్లాగులు వినియోగదారులను చర్య తీసుకునేలా ఒప్పించేందుకు ప్లాట్‌ఫారమ్‌లు మరియు ఇతర అవుట్‌లెట్‌లు. ఉదాహరణకు, Facebookలో ఒక పోస్ట్ ప్రత్యేక ప్రయోజనాలను ప్రదర్శిస్తుంది ఒక నిర్దిష్ట ఉత్పత్తి యొక్క మరియు ఒక లింక్‌ను క్లిక్ చేయమని రీడర్‌ను ప్రాంప్ట్ చేయండి మరింత తెలుసుకోవడానికి ఉత్పత్తి ల్యాండింగ్ పేజీ.`,
  },
  HINDI: {
    heading: "विपणक के लिए रूपांतरण मंच",
    description:
      "अपने सबसे बुनियादी स्तर पर, सामग्री विपणन की प्रक्रिया है प्रासंगिक, मूल्यवान सामग्री बनाना और साझा करना। इसका लक्ष्य है अपने लक्षित दर्शकों को आकर्षित करें, प्राप्त करें और बनाए रखें। यह भी शामिल है आपकी व्यावसायिक वेबसाइट, सोशल पर वीडियो, चित्र और ब्लॉग उपभोक्ताओं को कार्रवाई करने के लिए प्रेरित करने के लिए प्लेटफ़ॉर्म और अन्य आउटलेट। उदाहरण के लिए, फेसबुक पर एक पोस्ट अद्वितीय लाभ प्रदर्शित कर सकती है किसी विशेष उत्पाद का और पाठक को किसी लिंक पर क्लिक करने के लिए प्रेरित करना अधिक जानने के लिए उत्पाद लैंडिंग पृष्ठ।",
  },
};

class ReactContext extends Component {
  state = {
    activeLanguage: "ENGLISH",
  };

  onChangeLanguage = (event) => {
    this.setState({ activeLanguage: event.target.value });
  };

  getProperObject = () => {
    const { activeLanguage } = this.state;
    switch (activeLanguage) {
      case "ENGLISH":
        return myArray.ENGLISH;
      case "TELUGU":
        return myArray.TELUGU;
      case "HINDI":
        return myArray.HINDI;
      default:
        return null;
    }
  };

  render() {
    const { activeLanguage } = this.state;
    const getObject = this.getProperObject();
    console.log(getObject);
    return (
      <>
        <div className="home">
          <div className="header">
            <h1>Header</h1>
          </div>
          <div className="body">
            <div className="dropDown">
              <select
                value={activeLanguage}
                onChange={this.onChangeLanguage}
                className="select-container"
              >
                <option value="ENGLISH">English</option>
                <option value="TELUGU">Telugu</option>
                <option value="HINDI">Hindi</option>
              </select>
            </div>
            <h1 className="heading1">{getObject.heading}</h1>
            <p className="heading2">{getObject.description}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ReactContext;
