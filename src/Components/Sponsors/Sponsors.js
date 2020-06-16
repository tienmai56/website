import React from 'react';

import styled from 'styled-components';

const githubRawAsserts = "https://raw.githubusercontent.com/shecodesvietnam/asserts/master/2020/";

const SponsorsRow = styled.div`
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
  [class^='col-'] {
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

const SponsorsHeader = styled.h2`
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #fbfeff;
  display: inline-block;
  letter-spacing: 0.2rem;
  transition: all 0.2s; 
  padding-top: 8rem !important;
  @media only screen and (max-width: 56.25em) {
    padding-top: 5rem !important; 
  }
  margin: 0;
`;

const SponsorsBox = styled.div`
  margin: auto;
  margin-top: 6rem;
  box-sizing:border-box;
  padding: 0;
  background-color: #000;
  padding-bottom: 5rem;
`;

const SponsorsMap = {
  "Nhà Tài Trợ Kim Cương": ["https://vuhuycto.github.io/shecodesdemo/assets/CSDS%20logo_final%20with%20slogan.jpg", githubRawAsserts + "sponsors/OSAM.png"],
  "Nhà Tài Trợ Vàng": ["https://vuhuycto.github.io/shecodesdemo/assets/globalcare-logo.jpg", "https://vuhuycto.github.io/shecodesdemo/assets/openm-logo.jpg"],
  "Nhà Tài Trợ Bạc": ["https://vuhuycto.github.io/shecodesdemo/assets/sutunam-logo.jpg", "https://vuhuycto.github.io/shecodesdemo/assets/logo-ebiv-.jpg", "https://vuhuycto.github.io/shecodesdemo/assets/colorme-logo.jpg"],
  "Đối tác": [
    "https://vuhuycto.github.io/shecodesdemo/assets/Shopee-logo.jpg", 
    "https://vuhuycto.github.io/shecodesdemo/assets/cinnamon-ai-labs-logo.jpg",
    "https://vuhuycto.github.io/shecodesdemo/assets/coworking-space-logo.jpg",
    "https://vuhuycto.github.io/shecodesdemo/assets/logo-Summit-01-1024x292.jpg",
  ]
}

const SponsorsName = styled.h3`
  font-size: 2.4rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-transform: uppercase;
  color: #fbfeff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  text-align: center;
`;

const SponsorsColumn = styled.div`
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

const generateSponsorsComponentMap = (partnershipMap) => {
  let partnershipComponent = [];
  for (const key in partnershipMap) {
    if (partnershipMap.hasOwnProperty(key)) {
      const item = partnershipMap[key];
      let partnershipItem = [];
      for (let i = 0; i < item.length; i++) {
        const element = item[i];
        let stylePartnership = {width: "80%"};
        if(window.outerWidth >= 1024) {
          if(item.length === 1) {
            stylePartnership["width"] = "30%";
          }
          if(item.length === 2) {
            stylePartnership["width"] = "50%";
            if(i === 0) stylePartnership["float"] = "right";
            if(i === 1) stylePartnership["float"] = "left";
          }
          else if(item.length === 3) {
            stylePartnership["width"] = "70%";
            if(i === 0) stylePartnership["float"] = "right";
            if(i === 2) stylePartnership["float"] = "left";
          }
          else if(item.length === 4) {
            stylePartnership["width"] = "80%";
          }
        }
        partnershipItem.push(
          <SponsorsColumn className={"col-1-of-" + item.length} key={"partner_item" + i} >
            <img src={element} alt={element} style={stylePartnership}/>
          </SponsorsColumn>
        )
      }
      partnershipComponent.push(
        <SponsorsRow key={"partner_row" + key}>
          <SponsorsRow>
            <SponsorsName>{key}</SponsorsName>
          </SponsorsRow>
          {partnershipItem}
        </SponsorsRow>
      )
    }
  }
  return partnershipComponent;
}

const SponsorsThankyouBox = styled.div`
  width: 100%;
  margin-top: 6rem;
  background-color: #161616;
  border-bottom: 1px solid #3f3f3f;
  @media only screen and (max-width: 25em) {
  }
`;

const SponsorsThankYouTextBox = styled.div`
  font-family: 'Courier New', Courier, monospace;
  width: 100%;
  margin: 0 auto;
  padding-top: 6rem !important;
  padding-bottom: 7rem !important;
  @media only screen and (max-width: 75em) {
    top: 40%; 
    padding-top: 3rem !important;
  }
  max-width: 1140px;
`;

const SponsorsThankYouText = styled.h1`
  font-size: 4rem;
  width: 95%;
  margin: 0 auto;
  line-height: 10rem;
  background-image: linear-gradient(to right, #e80872, #592368);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  @media only screen and (max-width: 56.25em) {
    font-size: 2rem;
    line-height: 6rem; 
  }
  text-align: center !important;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  box-sizing: border-box;
`;

const Sponsors = (props) => {
  return(
    <SponsorsBox>
      <SponsorsThankyouBox>
        <SponsorsThankYouTextBox>
          <SponsorsThankYouText>Shecodes Việt Nam chân thành cảm ơn sâu sắc các nhà tài trợ, các doanh nghiệp, tổ chức đã, đang và sẽ đồng hành cùng chúng tôi thực hiện giấc mơ trao quyền, khuyến khích phái nữ dấn thân vào lĩnh vực công nghệ, gia tăng nguồn nhân lực chất lượng, nhiệt huyết, đóng góp tích cực vào công cuộc chuyển đổi số hoá tại Việt Nam.</SponsorsThankYouText>
        </SponsorsThankYouTextBox>
      </SponsorsThankyouBox>
      <SponsorsRow>
        <SponsorsHeader>NHÀ TÀI TRỢ</SponsorsHeader>
      </SponsorsRow>
      {generateSponsorsComponentMap(SponsorsMap)}
    </SponsorsBox>
  );
}

export default Sponsors;