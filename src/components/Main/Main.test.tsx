import React, { ReactElement } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, MountRendererProps } from 'enzyme';

import Main from './Main';
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

describe("Main", () => {
  let mounted: any;

  const wrapper = () => {
    if (!mounted) {
      mounted = mountWithContext(<Main />);
    }
    console.log(mounted.debug())
    return mounted;
  }

  beforeEach(() => {
    mounted = undefined;
  });

  it("always renders", () => {
    const elts = wrapper().find('Main');
    expect(elts.length).toBe(1);
  });
});