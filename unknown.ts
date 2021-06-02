declare const maybe: unknown;

// unknown은 number에 바로 할당할 수 없는 형태임을 알 수 있다.
// const aNumber: number = maybe;

// 이를 해결하려면 밑의 방법을 사용하면 된다.
// 또는 unknown 대신 any를 사용하면 해결된다.
// declare const maybe: any;


if(maybe === true){
  // if문에서 maybe가 true와 일치하므로 boolean형이 된다.
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;
}

if(typeof maybe === 'string'){
  // if문에서 maybe가 'string'과 일치하므로 string type이 된다.
  const aString: string = maybe;
  // const aBoolean: boolean = maybe;
}

// any대신 unknown을 사용하면 runtime error를 줄일수 있다.