import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/components/property-card';

describe('<PropertyCard>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow((
      <PropertyCard
        title="mockTitle"
        type="mockType"
        bathrooms="mockBathrooms"
        bedrooms="mockBedrooms"
        price="100"
        city="mockCity"
        email="mockEmail"
      />
    ));
  });

  it('renders the passed title', () => {
    const text = wrapper.find('.title').text();
    expect(text).toEqual('mockTitle');
  });

  it('renders the passed type', () => {
    const text = wrapper.find('.type').text();
    expect(text).toEqual('mockType');
  });

  it('renders the passed number of bathrooms', () => {
    const text = wrapper.find('.bathrooms').text();
    expect(text).toEqual('mockBathrooms');
  });

  it('renders the passed number of bedrooms', () => {
    const text = wrapper.find('.bedrooms').text();
    expect(text).toEqual('mockBedrooms');
  });

  it('renders the passed price', () => {
    const text = wrapper.find('.price').text();
    expect(text).toEqual('£100');
  });

  it('renders the passed city', () => {
    const text = wrapper.find('.city').text();
    expect(text).toEqual('mockCity');
  });

  it('renders the passed email', () => {
    const text = wrapper.find('.email').text();
    expect(text).toEqual('mockEmail');
  });
});
