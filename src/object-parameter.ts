const buildCredential = (dto: {email:string, password: number}) => {
  console.log(dto);
  console.log(dto.email);
  console.log(dto.password);
}

buildCredential({
  email: 'fpuma@vscode-dev.com',
  password: 34578333454
});

/**
 * OUTPUT:
 *
 * { email: 'fpuma@vscode-dev.com', password: 34578333454 }
 * fpuma@vscode-dev.com
 * 34578333454
 */
