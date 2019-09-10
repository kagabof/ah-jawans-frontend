import React from 'react';
import { Provider } from 'react-redux';
import "../../components/Header/Header";
import { mount } from '../../../config/enzymeConfig';
import SearchPage, {SearchPage as View} from '../../containers/searchPage';
import configureStore from '../../redux/store/index';
import { MemoryRouter } from 'react-router-dom';
import SearchCard from '../../components/article/searchArticlecard';
import fetchImage from '../../components/article/fetchImage';

document.body.innerHTML =
'<div class="btn-pagination"></div> ' +
'<input class="btn-pagination-prev1" value="h"/>' +
'<h5 class="btn-pagination-next1">khd</h5>' +
'<div class="cards"></div> ';

const store = configureStore();

jest.mock('../../components/Header/Header', () => () => (
    <div id="mocked">hello</div>
))

describe('<SearchPage />', () => {
  it('Should render', () => {
    const wrapper = mount(
    <MemoryRouter>
        <Provider store={store}><SearchPage /></Provider>
    </MemoryRouter>);
    expect(wrapper).toHaveLength(1);
  });

  it('Should render handleOnClick', () => {
    const props = {
      articles: []
    }
    const wrapper = mount(
    <View {...props}/>);
    const event = {
        preventDefault: jest.fn(),
      };
    wrapper.find("#searchFormbtn").simulate('submit', {  });
    expect(wrapper).toHaveLength(1);
  });

  it('Should render handleOnClick', () => {
    const props = {
      articles: []
    }
    const wrapper = mount(
    <View {...props}/>);
    const event = {
        preventDefault: jest.fn(),
      };
      wrapper.setState({
        search: {
            authorName: 'kagabo',
            keyword: 'kagabo',
            tag: 'kagabo',
            title: 'kagabo',
            offset: 0,
            limit: 10,
          },
      })
    wrapper.instance().handleOnSubmit(undefined);
    wrapper.find("#searchFormbtn").simulate('submit', {  });
    expect(wrapper).toHaveLength(1);
  });

  it('Should render handleOnClick', () => {
    const props = {
        errors: 'defhrkjne',
        getDataThunk: jest.fn(),
        articles: []
    };

    const wrapper = mount(
    <View {...props}/>);
    const event = {
        preventDefault: jest.fn(),
      };
      wrapper.setState({
        search: {
            authorName: 'kagabo',
            keyword: 'kagabo',
            tag: 'kagabo',
            title: 'kagabo',
            offset: 0,
            limit: 10,
          },
      })
      wrapper.setProps({
        errors: 'ejwfkjhk'     
      })
    wrapper.instance().handleOnSubmit(undefined);
    wrapper.find("#searchFormbtn").simulate('submit', {  });
    wrapper.find("#mainSearch").simulate('keypress', { keyCode:{value: 13}});
    expect(wrapper).toHaveLength(1);
  });

  it('Should render handleOnClick', () => {
    const props = {
        errors: 'defhrkjne',
        getDataThunk: jest.fn(),
        articles: []
    }
    const wrapper = mount(
    <View {...props}/>);
      wrapper.setState({
        search: {
            authorName: 'kagabo',
            keyword: 'kagabo',
            tag: 'kagabo',
            title: 'kagabo',
            offset: 0,
            limit: 10,
          },
      });
    wrapper.instance().handleOnSubmit(undefined);
    wrapper.find("#searchFormbtn").simulate('submit', {  });
    wrapper.find("#mainSearch").simulate('keypress', { which:{value: 13}});
    wrapper.find("#mainSearch").simulate('change', {  });
    expect(wrapper).toHaveLength(1);
  });

  it('Should render handleOnClick', () => {
    const props = {
        errors: 'defhrkjne',
        getDataThunk: jest.fn(),

    }
    const wrapper = mount(
    <View {...props}/>);
      wrapper.setState({
        search: {
            authorName: 'kagabo',
            keyword: 'kagabo',
            tag: 'kagabo',
            offset: 2,
            limit: 10,
          },
      });
    wrapper.instance().handleOnSubmit(undefined);
    wrapper.find("#searchFormbtn").simulate('submit', {  });
    expect(wrapper).toHaveLength(1);
  });

  it('Should render handleOnClick', () => {
    const props = {
        articles: [],
        errors: 'defhrkjne',
        getDataThunk: jest.fn()
    }
    const wrapper = mount(
    <View {...props}/>);
      wrapper.setState({
        search: {
            keyword: 'kagabo',
            tag: 'kagabo',
            offset: 0,
            limit: 10,
          },
      });
    wrapper.instance().handleOnSubmit(undefined);
    wrapper.find("#searchFormbtn").simulate('submit', {  });
    expect(wrapper).toHaveLength(1);
  });

  it('Should render handleOnClick', () => {
    const props = {
        errors: 'defhrkjne',
        getDataThunk: jest.fn()
    }
    const wrapper = mount(
    <View {...props}/>);
      wrapper.setState({
        search: {
            tag: 'kagabo',
            offset: 0,
            limit: 10,
          },
      });
    wrapper.instance().handleOnSubmit(undefined);
    wrapper.find("#searchFormbtn").simulate('submit', {  });
    expect(wrapper).toHaveLength(1);
  });

  it('Should render search article cards', () => {
    const props = {
        articles: [
            {createdAt:'2012-12-20T03:00:00.000Z',description: 'webnwde jhgejwrv', 
            readtime: 'ewhujhef',
            body:'<p>Redux is a JavaScript library developed for maintaining application states. When you are building a complex application, it will add overhead to manage states across components. Redux helps you store all your states in a single source. And of course, React plays well with Redux</p><figure class=\"image\"><img src=\"http://res.cloudinary.com/djxhcwowp/image/upload/v1567753354/x29bkjblgkpd1sepxros.jpg\"><figcaption>image caption</figcaption></figure>'},
            {createdAt:'2012-12-20T03:00:00.000Z',description: 'webnwde jhgejwrv', readtime: 'ewhujhef'}
        ],
        fetchImage: jest.fn(),
        handleView: jest.fn(),
        handleOnSubmit: jest.fn(),
    }
    const wrapper = mount(
    <SearchCard {...props}/>);
    fetchImage(props.articles[0].body);
    expect(wrapper).toHaveLength(1);
  });

  it('Should render search article cards with no data', () => {
    const props = {
        articles: [],
        fetchImage: jest.fn(),
        handleView: jest.fn(),
        handleOnSubmit: jest.fn(),
    }
    const wrapper = mount(
    <SearchCard {...props}/>);
    expect(wrapper).toHaveLength(1);
    
  });

  it('Should render search article cards', () => {
    const props = {
        articles: [
            {createdAt:'2012-12-20T03:00:00.000Z',description: 'webnwde jhgejwrv', 
            readtime: 'ewhujhef',
            body:'<p>Redux is a JavaScript library developed for maintaining application states. When you are building a complex application, it will add overhead to manage states across components. Redux helps you store all your states in a single source. And of course, React plays well with Redux</p><figure class=\"image\"><img src=\"http://res.cloudinary.com/djxhcwowp/image/upload/v1567753354/x29bkjblgkpd1sepxros.jpg\"><figcaption>image caption</figcaption></figure>'},
            {createdAt:'2012-12-20T03:00:00.000Z',description: 'webnwde jhgejwrv', readtime: 'ewhujhef'}
        ],
        fetchImage: jest.fn(),
        handleView: jest.fn(),
        handleOnSubmit: jest.fn(),
        counts: 2,
    }
    const wrapper = mount(
    <View {...props}/>);

    
    fetchImage(props.articles[0].body);
    wrapper.instance().handelDispaly();
    expect(wrapper).toHaveLength(1);
  });

  it('Should render search article cards', () => {
    const props = {
        articles: [
            {createdAt:'2012-12-20T03:00:00.000Z',description: 'webnwde jhgejwrv', 
            readtime: 'ewhujhef',
            body:'<p>Redux is a JavaScript library developed for maintaining application states. When you are building a complex application, it will add overhead to manage states across components. Redux helps you store all your states in a single source. And of course, React plays well with Redux</p><figure class=\"image\"><img src=\"http://res.cloudinary.com/djxhcwowp/image/upload/v1567753354/x29bkjblgkpd1sepxros.jpg\"><figcaption>image caption</figcaption></figure>'},
            {createdAt:'2012-12-20T03:00:00.000Z',description: 'webnwde jhgejwrv', readtime: 'ewhujhef'}
        ],
        fetchImage: jest.fn(),
        handleView: jest.fn(),
        handleOnSubmit: jest.fn(),
        counts: 2,
        history: {push: jest.fn()},
    }
    const wrapper = mount(
    <View {...props}/>);

    wrapper.setState({
      search: {
        authorName: '',
        keyword: '',
        tag: '',
        title: 'a',
        offset: 0,
        limit: 10,
      },
      searchData: [
        {createdAt:'2012-12-20T03:00:00.000Z',description: 'webnwde jhgejwrv', 
        readtime: 'ewhujhef',
        body:'<p>Redux is a JavaScript library developed for maintaining application states. When you are building a complex application, it will add overhead to manage states across components. Redux helps you store all your states in a single source. And of course, React plays well with Redux</p><figure class=\"image\"><img src=\"http://res.cloudinary.com/djxhcwowp/image/upload/v1567753354/x29bkjblgkpd1sepxros.jpg\"><figcaption>image caption</figcaption></figure>'},
        {createdAt:'2012-12-20T03:00:00.000Z',description: 'webnwde jhgejwrv', readtime: 'ewhujhef'}
    ],
    });
    fetchImage(props.articles[0].body);
    wrapper.instance().handelDispaly(3,4);
    wrapper.instance().handleView(20);
    wrapper.find("#view1").simulate('click', {  });
    expect(wrapper).toHaveLength(1);
  });
}); 
