export function validarCPF(CPF: string) {
  //Removendo tudo que não é numéro.
  const newCPF = CPF.replace(/[^0-9]/g, "");

  if (newCPF.length !== 11) {
    return false;
  }

  //Verificando se os numéros não são iguais.
  if (/^(\d)\1{10}$/.test(newCPF)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(newCPF.charAt(i)) * (10 - i);
  }
  let digit1 = sum % 11;
  digit1 = digit1 < 2 ? 0 : 11 - digit1;
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(newCPF.charAt(i)) * (11 - i);
  }
  let digit2 = sum % 11;
  digit2 = digit2 < 2 ? 0 : 11 - digit2;

  if (
    parseInt(newCPF.charAt(9)) !== digit1 ||
    parseInt(newCPF.charAt(10)) !== digit2
  ) {
    return false;
  }
  return true;
}
