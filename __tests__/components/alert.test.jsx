import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/alert';

describe('<Alert>', () => {
  const wrapper = shallow((
    <Alert message="Error!" />
  ));
  it('renders an error message', () => {
    expect(wrapper.find('.Alert').text()).toBe('Error!');
  });
});
