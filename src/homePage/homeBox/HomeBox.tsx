import React from "react";
import { getpaintingByIdService } from "../../services/ApiServices";
import { Painting } from "../../type";

interface HomeBoxProps {
  id: string;
}
interface HomeBoxState {
  painting?: Painting;
}

class HomeBox extends React.Component<HomeBoxProps, HomeBoxState>  {
  constructor(props: HomeBoxProps) {
    super(props);
    this.state = {
      painting: undefined
    };
  }

  componentDidMount() {
    getpaintingByIdService(this.props.id).then(painting => this.setState({painting}));
  }

  render(): React.ReactNode {
    return <div>
      {/* <img src={this.state.painting?.url} /> */}
    </div>;
  }
}

export default HomeBox;