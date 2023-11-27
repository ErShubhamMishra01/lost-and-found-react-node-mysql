export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export const validName = new RegExp('^[a-zA-Z0-9 ]{4,50}$');
export const validSubject = new RegExp('^.{5,50}$');
export const validMessage = new RegExp('^.{10,250}$');
export const validComment = new RegExp('^.{5,500}$');
export const validAddress = new RegExp('^.{10,350}$');
export const validMobno = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
export const validLanguage = new RegExp('^.{3,18}$');
