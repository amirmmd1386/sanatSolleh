
// const searchInput = document.getElementById('ostan');
// const searchResults = document.getElementById('search-results');

// // sample data for search results
// const searchData = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Doe' },
//   { id: 3, name: 'Bob Smith' },
//   { id: 4, name: 'Alice Johnson' },
//   // ...
// ];

// // function to filter search results
// function filterResults(searchQuery) {
//   const filteredResults = searchData.filter(item => {
//     return item.name.toLowerCase().includes(searchQuery.toLowerCase());
//   });
//   return filteredResults;
// }

// // event listener for search input field
// searchInput.addEventListener('input', event => {

//   const searchQuery = event.target.value;
//   const filteredResults = filterResults(searchQuery);

//   // clear previous search results
//   searchResults.innerHTML = '';

//   // render filtered search results
//   if (searchQuery.length > 0) {


//     filteredResults.forEach(item => {
//       const listItem = document.createElement('li');
//       listItem.addEventListener("click", () => {
//         searchInput.value = item.name
//         searchResults.innerHTML = '';
//       })
//       listItem.textContent = item.name;
//       searchResults.appendChild(listItem);
//     });
//   }
// });
class SearchComponent {
    constructor(searchInputId, searchResultsId, searchData) {
      this.searchInput = document.getElementById(searchInputId);
      this.searchResults = document.getElementById(searchResultsId);
      this.searchData = searchData;
      this.searchInput.addEventListener('input', this.handleInput.bind(this));
    }
  
    filterResults(searchQuery) {
      const filteredResults = this.searchData.filter(item => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      return filteredResults;
    }
  
    renderResults(filteredResults) {
      this.searchResults.innerHTML = '';
      if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
          const listItem = document.createElement('li');
          listItem.addEventListener("click", () => {
            this.searchInput.value = item.name;
            this.searchResults.innerHTML = '';
          });
          listItem.textContent = item.name;
          this.searchResults.appendChild(listItem);
        });
      }
      else{
      this.searchResults.innerHTML = '';
      }
    }
  
    handleInput(event) {
      const searchQuery = event.target.value;
      if(searchQuery){
          const filteredResults = this.filterResults(searchQuery);
          this.renderResults(filteredResults);

      }
      else{
      this.searchResults.innerHTML = '';

      }
    }
  }
  
  // نمونه داده برای نتایج جستجو
  const searchData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
    { id: 4, name: 'Alice Johnson' },
    // ...
  ];
  
  // ایجاد یک نمونه از کامپوننت جستجو
  const OstanComponent = new SearchComponent('ostan', 'ostan-results', searchData);
  const ShahrakComponent = new SearchComponent('shahrak', 'shahrak-results', searchData);
//   const searchComponent = new SearchComponent('ostan', 'search-results', searchData);
//   const searchComponent = new SearchComponent('ostan', 'search-results', searchData);
