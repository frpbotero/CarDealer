export function validField(body: any) {
  const formattEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    body.CPF.trim() === "" ||
    typeof body.CPF == undefined ||
    body.question.trim() === "" ||
    typeof body.question == undefined ||
    body.name.trim() === "" ||
    typeof body.name == undefined ||
    body.password.trim() === "" ||
    typeof body.password == undefined ||
    body.email.trim() === "" ||
    typeof body.email == undefined ||
    !formattEmail.test(body.email) ||
    body.answer.trim() === "" ||
    typeof body.answer == undefined
  ) {
    return false;
  }
  return true;
}
