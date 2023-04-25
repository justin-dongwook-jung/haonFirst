import styled from "styled-components";

const MapBox = styled.div`
  height: 300px;
  margin-right: -30px;
  margin-left: -30px;
  & .custom-overlay {
    position: relative;
    display: block;
    width: 80px;
    margin-bottom: 50px;
    font-weight: bold;
    text-align: center;
    border: 1px solid #111;
    background-color: #fff;
    &:after {
      content: "";
      position: absolute;
      bottom:-6px;
      left:34px;
      display: block;
      width: 10px;
      height: 10px;
      border-right: 1px solid #111;
      border-bottom: 1px solid #111;
      background-color: #fff;
      transform: rotate(45deg);
    }
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  right: 30px;
  margin-top: -25px;
  z-index: 10;
`

const NaviLink = props => (
  <a className={props.className} href={props.href} onClick={props.onClick}>
    <img src={props.src}/>
  </a>
);
const StyledNaviLink = styled(NaviLink)`
  float: left;
  width: 45px;
  height: 45px;
  margin-left: 15px;
  background-color: none;
  border-radius: 50%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  & img {
    width: 100%;
    border-radius: 50%;
  }
`;

const WayBox = styled.div`
  margin-top:50px;
  & > p {margin-top:-5px; line-height:1.6;}
  & > p > b {font-weight: normal;}
`
const Address = styled.p`
  margin-top: 25px;
`
const ColorSpan = styled.span`
  font-weight: 400;
  color: ${props => props.color};
  word-break: keep-all;
`;

class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  getMap = () => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.492436, 127.007921),
      level: 4
    };
    const map = new kakao.maps.Map(container, options);
    const positionMark = new kakao.maps.LatLng(37.492436, 127.007921);
    const marker = new kakao.maps.Marker({
      position: positionMark
    })

    marker.setMap(map);
  }

  openKakaoNavi = (e) => {
    e.preventDefault();
    //<![CDATA[
      Kakao.Navi.start({
        name: "더블유페스타 서초",
        x: 37.492436,
        y: 127.007921,
        coordType: "wgs84"
      });
    //]]>
  }

  componentDidMount() { 
    this.getMap();
  }

  render() {
    return <article className="wrap-content">
        <h2>서초 W페스타(더블유페스타)</h2>
        <MapBox id="map" />
        <ButtonBox>
          <StyledNaviLink src={`${this.props.prefix}/static/images/kakaonavi_btn.jpg`} href="#!" onClick={e => this.openKakaoNavi(e)} onClickCapture={e => this.openKakaoNavi(e)} />
          <StyledNaviLink src={`${this.props.prefix}/static/images/tmap_btn.jpg`} href="https://api2.sktelecom.com/tmap/app/routes?appKey=Vkbugqw22G1b1WAKvCUlY4tN0MwXiaWJ7BcxydoS&name=W페스타&lon=127.007921&lat=37.492436" />
        </ButtonBox>
        <Address>
          서울특별시 서초구
          <br /> 반포대로 138(양진빌딩) 지하 1층
        </Address>
        <WayBox>
          <h3>자가용</h3>
          <p>
            내비게이션에 <b>더블유페스타 서초점</b> 검색<br/>
            주차 2시간 무료
          </p>
        </WayBox>
        <WayBox>
          <h3>지하철로 오시는 방법</h3>
          <p>
            <b>
              서초역 8번출구(<ColorSpan color={"#61b057"}>2호선</ColorSpan>)
            </b>바로 앞 양진빌딩 
          </p>
        </WayBox>
      </article>;
  }
}

export default Location;