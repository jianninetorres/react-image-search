import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef(); // reaching into the dom element to create a reference
  }

  state = { spans: 0 };

  componentDidMount() {
    // when the element has rendered it will emit a load event, calling setSpans
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    // get the client height of the element being referred to
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 20);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
