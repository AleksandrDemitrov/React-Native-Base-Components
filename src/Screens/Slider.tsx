import React, { Component } from "react";

import Carousel, { Pagination } from "react-native-snap-carousel";
import SlideComponent from '../Components/Slide';
import Box from '../Components/Box';

interface ItemProps {
  url: string;
  description: string;
}

interface State {
  activeIndex: number;
  carouselItems: ItemProps[];
}

class Slider extends Component<any, State> {
  ref = React.createRef<any>();
  state = {
    activeIndex: 0,
    carouselItems: [
      {
        url: "slider1.jpg",
        description: "That is an placeholder text. Here could be your ad or just a long text",
      },
      {
        url: "slider1.jpg",
        description: "That is an placeholder text. Here could be your ad or just a long text",
      },
      {
        url: "slider1.jpg",
        description: "That is an placeholder text. Here could be your ad or just a long text",
      },
      {
        url: "slider1.jpg",
        description: "That is an placeholder text. Here could be your ad or just a long text",
      },
      {
        url: "slider1.jpg",
        description: "That is an placeholder text. Here could be your ad or just a long text",
      },
      {
        url: "slider1.jpg",
        description: "That is an placeholder text. Here could be your ad or just a long text",
      },
      {
        url: "slider1.jpg",
        description: "That is an placeholder text. Here could be your ad or just a long text",
      },
      {
        url: "slider1.jpg",
        description: "That is an placeholder text. Here could be your ad or just a long text",
      },
    ],
  };
  renderItem = ({ item, index }: { item: ItemProps; index: number }) => {
    return (
      <Box display="flex"
          alignItems="center"
          justifyContent="center">
        <SlideComponent width={300} height={450} url={item.url} description={item.description} />
      </Box>
    );
  };

  render() {
    return (
      <Box height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Box flexDirection="row">
          <Carousel
            ref={this.ref}
            data={this.state.carouselItems}
            sliderWidth={420}
            itemWidth={300}
            renderItem={this.renderItem}
            onSnapToItem={(index: number) => this.setState({ activeIndex: index })}
          />
        </Box>
        <Box>
          <Pagination
            dotsLength={this.state.carouselItems.length}
            activeDotIndex={this.state.activeIndex}
            dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 10,
                backgroundColor: '#808080'
            }}
            inactiveDotStyle={{
              backgroundColor: '#c0c0c0'
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
          />
        </Box>
      </Box>
    );
  }
}

export default Slider;