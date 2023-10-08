export const checkFill = ( fields ) => {
    let isFill = true;
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        if (!element.trim()) {
          return isFill = false;
        }
      }
    }
    return isFill;
  }