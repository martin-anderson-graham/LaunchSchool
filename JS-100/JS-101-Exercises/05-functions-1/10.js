//Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

let extractRegion = (locale) => {
  console.log(locale.slice(3,5));
};

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'