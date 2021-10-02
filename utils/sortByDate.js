const sortByDate = (data) => [...data].sort((a, b) => {
  if (
    new Date(a.data.date).getFullYear() < new Date(b.data.date).getFullYear()
  ) {
    return 1;
  }

  return -1;
});

export default sortByDate;
