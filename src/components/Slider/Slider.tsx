import * as React from 'react';
import { Slider, Rail, Handles, Tracks, SliderItem, GetHandleProps, GetTrackProps } from 'react-compound-slider';

interface IHandleProps {
  domain: number[];
  handle: SliderItem;
  getHandleProps: GetHandleProps;
}

export const Handle: React.SFC<IHandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps
}) => (
  <div
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    style={{
      left: `${percent}%`,
      position: 'absolute',
      marginLeft: '-11px',
      marginTop: '-6px',
      zIndex: 2,
      width: 24,
      height: 24,
      cursor: 'pointer',
      borderRadius: '50%',
      boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#34568f'
    }}
    {...getHandleProps(id)}
  />
);

interface ITrackProps {
  source: SliderItem;
  target: SliderItem;
  getTrackProps: GetTrackProps;
}

export const Track: React.SFC<ITrackProps> = ({
  source,
  target,
  getTrackProps
}) => (
  <div
    style={{
      position: 'absolute',
      height: 14,
      zIndex: 1,
      backgroundColor: '#7aa0c4',
      borderRadius: 7,
      cursor: 'pointer',
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`
    }}
    {...getTrackProps()}
  />
);

const sliderStyle: React.CSSProperties = {
  margin: '5%',
  position: 'relative',
  width: '90%'
};

const railStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: 14,
  borderRadius: 7,
  cursor: 'pointer',
  backgroundColor: 'rgb(155,155,155)'
};

const domain: number[] = [-20, 40];

export interface IProps {
  initVal: number,
  handleChange(v: number): void,
}

class TemperatureSlider extends React.Component<IProps> {
  public state = {
    values: [this.props.initVal]
  };

  public onChange = (values: readonly number[]) => {
    this.setState({ values });
    this.props.handleChange(values[0]);
  };

  public render() {
    const {
      state: { values }
    } = this;

    return (
      <div style={{ position: 'absolute', bottom: 0, height: 120, width: '100%' }}>
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => (
              <div style={railStyle} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
    );
  }
}

export default TemperatureSlider;