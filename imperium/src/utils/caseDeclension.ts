export const addCaseDeclension = (name: string) => {
  return name.split(' ').map((x: string) => x + 'а').join(' ');
};
