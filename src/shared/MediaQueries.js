const sizes = {
  desktopL: '1270px',
  desktopM: '1000px',
  desktopS: '940px',
  tablet: '811px',
  tabletM: '710px',
  tabletS: '625px',
  phone: '525px',
  mobileL: '425px',
  mobileM: '375px',
  mobileS: '320px'
};

export const device = {
  desktopL: `(max-width: ${sizes.desktopL})`,
  desktopM: `(max-width: ${sizes.desktopM})`,
  desktopS: `(max-width: ${sizes.desktopS})`,
  tablet: `(max-width: ${sizes.tablet})`,
  tabletM: `(max-width: ${sizes.tabletM})`,
  tabletS: `(max-width: ${sizes.tabletS})`,
  phone: `(max-width: ${sizes.phone})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileS: `(max-width: ${sizes.mobileS})`
};
