const sortByDate = (data) => [...data].sort((a, b) => {
  return new Date(b.data.date) - new Date(a.data.date);
});

export default sortByDate;
