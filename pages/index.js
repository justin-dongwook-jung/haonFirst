import Intro from '../components/Intro';
import ImageSlider from '../components/ImageSlider';
import Location from '../components/Location';
import Share from '../components/Share';

class Index extends React.Component {
  componentDidMount() {
    Kakao.init('cd88b238750f20e9f5b1ff70d7a78675');
  }

  render() {
    const prefix = process.env.NODE_ENV === 'production' ? 'https://boramyy.github.io/invitation' : '';

    return (
      <div>
        <h1 className="hide">하온이의 첫 생일</h1>
        <Intro prefix={prefix} />
        <ImageSlider prefix={prefix} />
        <Location prefix={prefix} />
        <Share prefix={prefix} />
      </div>
    );
  }
}

export default Index;
