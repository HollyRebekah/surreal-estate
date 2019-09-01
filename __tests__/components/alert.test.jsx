import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/alert';

describe('<Alert>', () => {
  it('renders an error message', () => {
    const wrapper = shallow((
      <Alert message="There is an error with the server. Please try again later" />
    ));
    expect(wrapper.find('.Alert').text()).toBe('There is an error with the server. Please try again later');
  });

  it('renders a successful message', () => {
    const wrapper = shallow((
      <Alert message="Success!" success />
    ));
    expect(wrapper.find('.Alert.success').text()).toBe('Success!');
  });
});
