import styled from "styled-components";

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const BoxText = styled.div`
      margin-top: 3em;
      margin-bottom: 3.4em;
    `;

    const TextThanks = styled.p`
      font-size: 1.2em;
      text-align: center;
      &:after {
        content: "";
        display: block;
        width: 15px;
        height: 2px;
        margin: 1.8em auto;
        background-color: #eee;
      }
    `;

    const ImgWho = styled.img`
      width: 215px;
      margin: 0 auto;
    `;

    return (
      <article>
        <h2 className="hide">Intro</h2>
        <img className="content-large" src={`${this.props.prefix}/static/images/intro.jpg`} />
        <BoxText>
          <TextThanks>
            Happy 1st Birthday <br />
            하온이의 첫 생일을 축하해주세요.
          </TextThanks>
          <TextThanks>
            2023년 5월 27일 토요일 11시 30분 <br />
            더블유페스타 서초
          </TextThanks>
        </BoxText>
      </article>
    );
  }
}

export default Intro;