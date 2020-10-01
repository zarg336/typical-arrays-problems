  exports.min = function min(array) {
      if (array === undefined || array.length === 0) return 0;
      let minimal = array[0];
      array.forEach((i) => {
          if (i < minimal) return minimal = i;
      });
      return minimal;
  }

  exports.max = function max(array) {
      if (array === undefined || array.length === 0) return 0;
      let maximum = 0;
      array.forEach((i) => {
          if (i > maximum) return maximum = i;
      });
      return maximum;
  }

  exports.avg = function avg(array) {
      if (array === undefined || array.length === 0) return 0;
      const i = (accumulator, value) => accumulator + value;
      return (array.reduce(i) / array.length);
  }
