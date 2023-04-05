const searchData = (searchTerm, data) => {
  return data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
};

export default searchData