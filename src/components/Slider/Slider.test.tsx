import React, { ReactElement } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, MountRendererProps } from 'enzyme';

import Slider, { IProps } from './Slider';
import { UserContext } from '../../Context';

describe("Slider", () => {
  let props: IProps;
  let mounted: any;

  const wrapper = () => {
    if (!mounted) {
      mounted = mount(<Slider {...props} />);
    }
    console.log(mounted.debug())
    return mounted;
  }

  beforeEach(() => {
    props = { initVal: 0, handleChange: () => {} };
    mounted = undefined;
  });

  it("always renders", () => {
    const elts = wrapper().find('Slider');
    expect(elts.length).toBe(1);
  });
});