const sortByDate = (data) => [...data].sort((a, b) => {
  const dateOne = new Date(a.data.date);
  const dateTwo = new Date(b.data.date);

  console.log(dateOne, dateTwo);

  if (dateOne.getFullYear() > dateTwo.getFullYear()) {
    return 1;
  }

  if (dateOne.getFullYear() < dateTwo.getFullYear()) {
    return -1;
  }

  if (dateOne.getFullYear() === dateTwo.getFullYear()) {
    if (dateOne.getMonth() > dateTwo.getMonth()) {
      return -1;
    }

    if (dateOne.getMonth() < dateTwo.getMonth()) {
      return 1;
    }

    if (dateOne.getMonth() === dateTwo.getMonth()) {
      if (dateOne.getDate() > dateTwo.getDate()) {
        return -1;
      }

      return 1;
    }
  }

  return 1;
});

export default sortByDate;
