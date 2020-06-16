import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePageBox = styled.div`
  margin: auto;
  margin-top: 6rem;
  box-sizing:border-box;
  padding: 0;
`;

const HeaderImageBox = styled.div`
  width: 100%;
	height: calc(100vh - 6rem);
	background-image: linear-gradient(
      to right bottom,
      rgba(22, 22, 22, 0.75),
      rgba(22, 22, 22, 0.75)
    ), url('https://vuhuycto.github.io/shecodesdemo/assets/hackathon-team-2018.jpg');
	background-position: center;
	background-size: cover;
	position: relative;
`;

const HeaderTextBox = styled.div`
  width: 100%;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 75em) {
    top: 40%;
  }
`;

const HeaderText = styled.h1`
  font-size: 7rem;
  line-height: 1.7;
  color: #fbfeff;
  line-height: 10rem;
  display: block;
  margin: 0;
  padding: 0;
  font-family: 'Courier New', Courier, monospace;
  text-align: center !important;
  box-sizing: border-box;
  @media only screen and (max-width: 75em) {
      font-size: 6rem; }
  @media only screen and (max-width: 56.25em) {
      line-height: 7rem;
      margin-bottom: 1rem; }
  @media only screen and (max-width: 37.5em) {
      font-size: 5rem;
      line-height: 6rem; }
  @media only screen and (max-width: 25em) {
      font-size: 4rem;
      line-height: 6rem; }
`;

const CountDownHeader = styled(HeaderText)`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  font-weight:400;
  @media only screen and (max-width: 75em) {
      font-size: 5rem; }
  @media only screen and (max-width: 56.25em) {
      font-size: 4rem; }
  @media only screen and (max-width: 37.5em) {
      font-size: 3rem; }
  @media only screen and (max-width: 25em) {
      font-size: 2rem; }
`;

const calculateTimeLeft = () => {
  const difference = new Date("2020-07-18T00:00:00") - new Date();
  let timeLeft = "";
  if (difference > 0) {
    timeLeft += Math.floor(difference / (1000 * 60 * 60 * 24)) + "d : ";
    timeLeft += Math.floor((difference / (1000 * 60 * 60)) % 24) + "h : ";
    timeLeft += Math.floor((difference / 1000 / 60) % 60) + "m : ";
    timeLeft += Math.floor((difference / 1000) % 60) + "s ";
  }
  else {
    timeLeft = "EXPIRED";
  }
  return timeLeft;
};

const RegistrationBox = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 56.25em) {
    top: 75%; }
`;

// TODO(vnvo2409): Add animation for button
const RegistrationButton = styled.a`
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.6rem;
  padding: 1.5rem 4rem;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;
  border: none;
  cursor: pointer;
  color: #3f3f3f;
  background-color: #fbfeff;
  text-align: center !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  @media only screen and (max-width: 37.5em) {
    font-size: 1.2rem;
    padding: 1rem 2rem; }
  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(10rem); 
    }
    100% {
      opacity: 1;
      transform: translate(0); 
    }
  }
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
`;

const AboutBox = styled.article`
  background-color: #000;
  margin: 0;
  padding: 0;
  padding-top: 10rem;
  padding-bottom: 25rem;
  box-sizing: border-box;
  display: block;
`;

const AboutHeader = styled.h2`
  text-align: center !important;
  padding: 0;
  margin: 0;
  margin-bottom: 4rem !important;
	@media only screen and (max-width: 56.25em) {
		margin-bottom: 3rem !important;
  }
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: linear-gradient(to right, #e80872, #592368);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  box-sizing: border-box;
  line-height: 1.7;
`;

const AboutText = styled.p`
  max-width: 114rem;
  margin: 0 auto;
  line-height: 1.7;
  &:not(:last-child) {
		margin-bottom: 8rem;
		@media only screen and (max-width: 56.25em) {
			margin-bottom: 6rem;
		}
  }
  @media only screen and (max-width: 56.25em) {
		max-width: 50rem;
		padding: 0 3rem;
  }
  &::after {
		content: '';
		display: table;
		clear: both;
  }
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #f0f0f0;
  font-size: 2rem !important;
  text-align: justify;
`;

const QuoteBox = styled.article`
  margin-top: -10rem;
  background-color: #161616;
  padding-bottom: 10rem;
  transform: skewY(-6deg);
  > * {
    transform: skewY(6deg);
  }
`;

const QuoteRow = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0;
  line-height: 1.7;
  &:not(:last-child) {
		margin-bottom: 8rem;
		@media only screen and (max-width: 56.25em) {
			margin-bottom: 6rem;
		}
  }
  @media only screen and (max-width: 56.25em) {
		max-width: 50rem;
		padding: 0 3rem;
  }
  &::after {
		content: '';
		display: table;
		clear: both;
  }
  .col-1-of-2 {
		width: calc((100% - 6rem) / 2);
	}

	.col-1-of-3 {
		width: calc((100% - 2 * 6rem) / 3);
	}

	.col-2-of-3 {
		width: calc(
			2 * ((100% - 2 * 6rem) / 3) + 6rem
		);
	}

	.col-1-of-4 {
		width: calc((100% - 3 * 6rem) / 4);
	}

	.col-2-of-4 {
		width: calc(
			2 * ((100% - 3 * 6rem) / 4) + 6rem
		);
	}

	.col-3-of-4 {
		width: calc(
			3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem
		);
  }
`;

const QuoteColumn = styled.div`
  margin: 0;
  float: left;
  margin-bottom: 1rem;

  &:not(:last-child) {
    margin-right: 6rem;

    @media only screen and (max-width: 56.25em) {
      margin-right: 0;
      margin-bottom: 6rem;
    }
  }

  @media only screen and (max-width: 56.25em) {
    width: 100% !important;
  }
`;

const QuoteCardBox = styled.div`
  margin: 0;
  padding: 0;
  background-color: #000;
  border-radius: 3px;
  border: 1px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(to left, #e80872, #592368);
  padding: 2rem;
  box-sizing: border-box;
`;

const QuoteCardImageBox = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  overflow: hidden;
  -webkit-shape-outside: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  border-radius: none;
`;

const QuoteCardImage = styled.img`
  display: block;
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

const QuoteTextBox = styled.blockquote`
  margin: 0;
  padding: 0;
  margin-top: 2rem;
`;

const QuoteText = styled.p`
  box-sizing: border-box;
  color: #f0f0f0;
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: justify;
`;

const QuoteFooter = styled.footer`
  font-style: italic;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #f0f0f0;
  text-align: left;
`;

const FeaturesBox = styled.article`
  background-color: #000;
  padding-top: 30rem;
  margin-top: -10rem;
  padding-bottom: 20rem; }
  @media only screen and (max-width: 56.25em) {
  .article-features {
    padding-top: 20rem; 
  }
`;

const FeaturesHeader = styled(AboutHeader)`
  margin-bottom: 8rem !important;
  @media only screen and (max-width: 56.25em) {
    margin-bottom: 5rem !important; 
  }
`;

const FeaturesRow = styled(QuoteRow)``;

const FeaturesColumn = styled(QuoteColumn)`
`;

const FeaturesItemHeader = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fbfeff;
  margin-bottom: 1.5rem !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const FeaturesItemIcon = styled.i`
  display: inline-block;
  margin-right: 1rem;
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fbfeff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
`;

const FeaturesParagraph = styled.p`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #f0f0f0;
  box-sizing: border-box;
  text-align: justify;
`;

const FeaturesLink = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  background-image: linear-gradient(to right, #e80872, #592368);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: all 0.4s;
  display: inline-block;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  float: left;
  &:hover, &:active, &:focus {
    text-decoration: none;
    font-size: 1.6rem;
    background-image: linear-gradient(to right, #e80872, #592368);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    transition: all 0.4s;
    display: inline-block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    line-height: 1.7;
    float: left;
    border-bottom: 1px solid #e80872; 
  }
  &:hover::after, &:active::after, &:focus::after {
    content: ' →'; 
  }
`;

const StatisticsBox = styled.article`
  background-color: #000;
  padding-top: 15rem;
  padding-bottom: 15rem;
  background-image: linear-gradient(to right bottom, rgba(22, 22, 22, 0.75), rgba(22, 22, 22, 0.75)), url('https://vuhuycto.github.io/shecodesdemo/assets/homepage-secondary.png');
  background-position: center;
  background-size: cover;
`;

const StatisticsRow = styled(FeaturesRow)``;

const StatisticsHeader = styled.h2`
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #fbfeff;
  display: inline-block;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  text-align: center !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  margin: 0;
  padding: 0;
`;

const StatisticsColumn = styled(FeaturesColumn)`
  float: left;
  margin-bottom: 1rem;
`;

const NumberBox = styled.div`
  font-size: 2rem;
  text-align: center !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #f0f0f0;
  margin: 0;
  padding: 0;
`;

const NumberStatistics = styled.div`
  font-size: 8rem;
  font-weight: 700;
  display: block;
  text-align: center !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #f0f0f0;
  margin: 0;
  padding: 0;
`;

const TitleStatistics = styled.p`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  text-align: center !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #f0f0f0;
`;

const aboutTextStr = "SheCodes Vietnam là một tổ chức phi lợi nhuận, nhằm khuyến khích phái nữ tham gia vào lĩnh vực Công nghệ thông tin, qua đó dần dần xóa bỏ khoảng cách giới tính trong lĩnh vực này. Năm 2018, Shecodes Vietnam được triển khai lần đầu tiên tại TP Hà Nội, Việt Nam với sự kiện tiên phong mang tên Shecodes Hackathon cùng sự tham gia của hơn 200 bạn nữ CNTT. Hiện nay, Shecodes đã mở rộng các chương trình hoạt động tại cả thành phố Hà Nội và Hồ Chí Minh; thu hút hơn 6000 bạn trẻ quan tâm trên khắp cả nước";
const featuresTechMarathonText = 'Chuỗi các lớp học "crash course" trong vòng 3 ngày dành cho những người chưa có kinh nghiệp lập trình, tập trung vào hai mảng: Kỹ năng lập trình (Technical skills) & Định hướng nghề nghiệp (Career Exploration). Sau Tech Marathon HTML&CSS 04/2020, 90% học viên có phản hồi tích cực và hoàn toàn có thể tự xây được một website cho riêng mình';
const featuresHackathonText = 'Cuộc thi lập trình dành riêng cho phái nữ đầu tiên tại Việt Nam dành cho cả coder và non-coder, bao gồm không gian hack truyền thống cũng như hội thảo & thảo luận với các diễn giả. Sau 3 năm tổ chức, SheCodes Hackathon đã thu hút hơn 6000 người quan tâm, hơn 300 đội thi và hơn 40 ý tưởng khởi nghiệp được ấp ủ';
const featuresITFairText = 'Năm 2020, SheCodes Vietnam cùng VOCF đồng tổ chức chương trình Tech Online Career Fair 2020 nhằm hỗ trợ trang bị kỹ năng nghề nghiệp và tìm kiếm cơ hội việc làm trong ngành IT cho các bạn sinh viên trong mùa dịch COVID-19. Tham gia Tech Fair, người tham gia sẽ có cơ hội kết nối với những người đi trước, từ đó có thể học hỏi và phát triển bản thân trong sự nghiệp. Với 02 webinar hướng về support các bạn nữ get jobs thành công với chủ đề  “Coding Oversea - Từ Việt Nam vươn ra Thế giới” và webinar “Women Leaders In Tech" Shecodes và các diễn giả đã truyền cảm hứng, mang đến những kiến thức và trải nghiệm vô cùng bổ ích cho hơn 400 bạn trẻ đăng ký tham dự';
const featuresTechTalkText = 'Tech Talk là các talkshow dành cho các bạn trẻ có niềm yêu thích về IT, nơi các bạn có thể chia sẻ về các chủ đề mang tính thời sự trong ngành, qua đó có cơ hội được đặt câu hỏi cũng như networking với chuyên gia. Những chương trình tech talk của SheCodes như: “Breaking into Product Management”, “Phụ nữ thời đại 4.0: Thách thức hay cơ hội”, “Girls in data science” luôn thu hút số lượng lớn người tham dự trực tiếp';
const quoteInfoMap = [
  {
    image: "https://vuhuycto.github.io/shecodesdemo/assets/Tien%20Mai.jpg",
    quote: "Khi các bên đối tác hỏi SheCodes rằng liệu có đủ phái nữ thích công nghệ để mà thực hiện chương trình không thì câu trả lời sẽ luôn là có. Luôn có một nguồn nhân lực nữ đam mê tự học về IT, say sưa với từng dòng code, nhưng đơn giản là họ chưa tìm thấy đất dụng võ cho mình. SheCodes sẽ tạo ra một network để nữ giới phá bỏ các rào cản cá nhân và xã hội để can trường dấn thân vào lĩnh vực công nghệ này",
    footer: "Mai Phương Thủy Tiên (Director of SheCodes Vietnam)",
  },
  {
    image: "https://vuhuycto.github.io/shecodesdemo/assets/Tran%20Tue%20Nhi.jpg",
    quote: "Nhiều người hỏi tại sao một cô gái như mình lại học Công nghệ?  Rất dễ hiểu, vì mình muốn là người giải quyết bài toán, xây dựng sản phẩm và phát triển nó. Đó là cuộc sống của những người học công nghệ và mình muốn trở thành một trong số đó. Còn bạn thì sao?",
    footer: "Trần Tuệ Nhi (Head of Hackathon)",
  },
  {
    image: "https://vuhuycto.github.io/shecodesdemo/assets/Nguyen%20Vu%20Ngan%20Ha%20.jpg",
    quote: "Chỉ cần có định hướng và những cơ hội phù hợp, phái nữ có thể tiến xa hơn bất kì ai. Vì vậy, tôi tin Tech Marathon là một chương trình có thể đem đến cơ hội và sự định hướng đó cho những bạn nữ - nhất là những người đang phân vân giữa những ngã rẽ nghề nghiệp, giúp họ tự tin hơn để theo đuổi ngành công nghệ thông tin.",
    footer: "Nguyễn Vũ Ngân Hà (Head of Tech Marathon)",
  }
];

const HomePage = (props) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => 
    {
      let countdownTimer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return (() => {clearTimeout(countdownTimer);});
    }
  );
  return (
    <HomePageBox>
      <HeaderImageBox>
        <HeaderTextBox>
          <HeaderText>SheCodes Hackathon 2020</HeaderText>
          <CountDownHeader as="span">{timeLeft}</CountDownHeader>
        </HeaderTextBox>
        <RegistrationBox>
          <RegistrationButton href="https://docs.google.com/forms/d/e/1FAIpQLSfSLJ8l2dbgT1aM_IgFe-ja3DWZG0KKSOBRlWQslaMNkQKmAA/viewform" target="_blank">Đăng ký tham gia</RegistrationButton>
        </RegistrationBox>
      </HeaderImageBox>
      <AboutBox>
        <AboutHeader>GIỚI THIỆU</AboutHeader>
        <AboutText>{aboutTextStr}</AboutText>
      </AboutBox>
      <QuoteBox>
        <QuoteRow>
          {
            quoteInfoMap.map((value, index) => (
              <QuoteColumn className="col-1-of-3" key={index}>
                <QuoteCardBox>
                  <QuoteCardImageBox>
                    <QuoteCardImage src={value.image} alt={value.footer}/>
                  </QuoteCardImageBox>
                  <QuoteTextBox>
                    <QuoteText>{value.quote}</QuoteText>
                    <QuoteFooter>- {value.footer}</QuoteFooter>
                  </QuoteTextBox>
                </QuoteCardBox>
              </QuoteColumn>
            ))
          }
        </QuoteRow>
      </QuoteBox>
      <FeaturesBox>
        <FeaturesHeader>ĐIỂM NỔI BẬT</FeaturesHeader>
        <FeaturesRow>
          <FeaturesColumn className="col-1-of-2">
            <FeaturesItemHeader>
              <FeaturesItemIcon className="icon-basic-laptop"/>
              TECH MARATHON
            </FeaturesItemHeader>
            <FeaturesParagraph>{featuresTechMarathonText}</FeaturesParagraph>
            <FeaturesLink to="/tech-marathon">Đọc thêm</FeaturesLink>
          </FeaturesColumn>
          <FeaturesColumn className="col-1-of-2">
            <FeaturesItemHeader>
              <FeaturesItemIcon className="icon-basic-female"/>
              SHECODES HACKATHON
            </FeaturesItemHeader>
            <FeaturesParagraph>{featuresHackathonText}</FeaturesParagraph>
            <FeaturesLink to="/hackathon">Đọc thêm</FeaturesLink>
          </FeaturesColumn>
        </FeaturesRow>
        <FeaturesRow>
          <FeaturesColumn className="col-1-of-2">
            <FeaturesItemHeader>
              <FeaturesItemIcon className="icon-basic-share"/>
              IT FAIR
            </FeaturesItemHeader>
            <FeaturesParagraph>{featuresITFairText}</FeaturesParagraph>
          </FeaturesColumn>
          <FeaturesColumn className="col-1-of-2">
            <FeaturesItemHeader>
              <FeaturesItemIcon className="icon-basic-question"/>
              TECH TALK
            </FeaturesItemHeader>
            <FeaturesParagraph>{featuresTechTalkText}</FeaturesParagraph>
          </FeaturesColumn>
        </FeaturesRow>
      </FeaturesBox>
      <StatisticsBox>
        <StatisticsRow>
          <StatisticsHeader>NHỮNG CON SỐ QUA TỪNG NĂM</StatisticsHeader>
        </StatisticsRow>
        <StatisticsRow>
          <StatisticsColumn className="col-1-of-4">
            <NumberBox>
              <NumberStatistics>20+</NumberStatistics>
              <TitleStatistics>Sự kiện</TitleStatistics>
            </NumberBox>
          </StatisticsColumn>
          <StatisticsColumn className="col-1-of-4">
            <NumberBox>
              <NumberStatistics>2000+</NumberStatistics>
              <TitleStatistics>Người tham gia sự kiện</TitleStatistics>
            </NumberBox>
          </StatisticsColumn>
          <StatisticsColumn className="col-1-of-4">
            <NumberBox>
              <NumberStatistics>45+</NumberStatistics>
              <TitleStatistics>Diễn giả và các đối tác công ty công nghệ hàng đầu</TitleStatistics>
            </NumberBox>
          </StatisticsColumn>
          <StatisticsColumn className="col-1-of-4">
            <NumberBox>
              <NumberStatistics>6000+</NumberStatistics>
              <TitleStatistics>Người theo dõi các hoạt động, chương trình của Shecodes Việt Nam</TitleStatistics>
            </NumberBox>
          </StatisticsColumn>
        </StatisticsRow>
      </StatisticsBox>
    </HomePageBox>
  );
}

export default HomePage;