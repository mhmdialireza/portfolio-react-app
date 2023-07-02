import {SectionHeader,AboutUsBox} from "..";

import "./about-us.css";

const AboutUs = () => {
  return (
    <div class="about-us">
      <div class="container">
        <SectionHeader
          title="ما چه کمکی بهتون میکنیم؟"
          desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
          btnHref="/courses"
        />

        <div class="container">
          <div class="row">
            <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
            <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
            <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
            <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs