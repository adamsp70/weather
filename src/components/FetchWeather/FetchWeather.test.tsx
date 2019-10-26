import React, { ReactElement } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, MountRendererProps } from 'enzyme';

import FetchWeather, { IProps } from './FetchWeather';
import { UserContext } from '../../Context';

const mountWithContext = (tree: ReactElement<any>) => {
  const user = {}
  const dispatch = jest.fn()

  const WrappingContextProvider: React.FC<{children: React.ReactChild}> =
      (props) => (
        <UserContext.Provider value={{user, dispatch}}>
              {props.children}
        </UserContext.Provider>
      );

  return mount(
      tree,
      {wrappingComponent: WrappingContextProvider} as MountRendererProps //Override typing because @types/enzyme doesn't have wrappingComponent yet https://github.com/DefinitelyTyped/DefinitelyTyped/pull/36667
  );
};

describe("FetchWeather", () => {
  let props: IProps;
  let mounted: any;

  const wrapper = () => {
    if (!mounted) {
      mounted = mountWithContext(<FetchWeather {...props} />);
    }
    return mounted;
  }

  beforeEach(() => {
    props = { lat: 0, lon: 0 };
    mounted = undefined;
  });

  it("always renders", () => {
    const elts = wrapper().find('FetchWeather');
    expect(elts.length).toBe(1);
  });
});