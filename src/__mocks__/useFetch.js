// __mocks__/useFetch.js
const useFetchMock = () => {
    const data = [
        { id:1, title: 'Testing Blog', author:'Testing Author', body: 'Testing body' }
    ];
    return {
      data,
      loading: false,
      error: null,
    };
  };
  
  export default useFetchMock;
  