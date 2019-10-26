import React, { ReactElement } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, MountRendererProps } from 'enzyme';

import LocateUser from './LocateUser';
import { UserContext } from '../../Context';
import { GeolocatedProps } from 'react-geolocated';

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

describe("LocateUser", () => {
  let mounted: any;

  const wrapper = () => {
    if (!mounted) {
      mounted = mountWithContext(<LocateUser />);
    }
    console.log(mounted.debug())
    return mounted;
  }

  beforeEach(() => {
    mounted = undefined;
  });

  it("always renders", () => {
    const elts = wrapper().find('LocateUser');
    expect(elts.length).toBe(1);
  });
});